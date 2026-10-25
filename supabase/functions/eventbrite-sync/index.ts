// One-way Eventbrite import into public.events. Replaces the retired Django sync worker.
// The private token is saved from the dashboard (AES-GCM encrypted with EVENTBRITE_TOKEN_SECRET)
// and the organisation is picked by name from the token's account, so no ID has to be typed.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.117.2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const API_BASE = 'https://www.eventbriteapi.com/v3';
const EXPAND = 'venue,organizer,category,logo,ticket_availability';
const contentRoles = ['owner', 'admin', 'editor'];
const encoder = new TextEncoder();
const decoder = new TextDecoder();

type Json = Record<string, any>;
type Organization = { id: string; name: string };

class SyncError extends Error {}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
}

function requireEnv(name: string) {
  const value = Deno.env.get(name);
  if (!value) throw new SyncError(`${name} is not configured for the eventbrite-sync function.`);
  return value;
}

// ---------- Token encryption ----------

async function encryptionKey() {
  const digest = await crypto.subtle.digest('SHA-256', encoder.encode(requireEnv('EVENTBRITE_TOKEN_SECRET')));
  return crypto.subtle.importKey('raw', digest, 'AES-GCM', false, ['encrypt', 'decrypt']);
}
const toBase64 = (bytes: Uint8Array) => btoa(String.fromCharCode(...bytes));
const fromBase64 = (value: string) => Uint8Array.from(atob(value), (char) => char.charCodeAt(0));

async function encryptText(value: string) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const cipher = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, await encryptionKey(), encoder.encode(value));
  return `${toBase64(iv)}.${toBase64(new Uint8Array(cipher))}`;
}

async function decryptText(value: string) {
  const [iv, cipher] = value.split('.');
  if (!iv || !cipher) throw new SyncError('The saved Eventbrite token cannot be read. Save the token again.');
  try {
    return decoder.decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: fromBase64(iv) }, await encryptionKey(), fromBase64(cipher)));
  } catch {
    throw new SyncError('The saved Eventbrite token cannot be read. Save the token again.');
  }
}

// ---------- Eventbrite API ----------

async function eventbrite(token: string, path: string, params: Record<string, string> = {}): Promise<Json> {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${API_BASE}${path}${query ? `?${query}` : ''}`, { headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' } });
  if (!response.ok) {
    const messages: Record<number, string> = { 401: 'Eventbrite rejected the saved token.', 403: 'The Eventbrite token cannot access this resource.', 429: 'Eventbrite rate limit reached. Try again in a few minutes.' };
    throw new SyncError(messages[response.status] ?? `Eventbrite request failed (HTTP ${response.status}).`);
  }
  return await response.json();
}

async function paged(token: string, path: string, key: string, params: Record<string, string> = {}) {
  const items: Json[] = [];
  let continuation = '';
  for (let page = 0; page < 200; page += 1) {
    const data = await eventbrite(token, path, { ...params, ...(continuation ? { continuation } : {}) });
    if (!Array.isArray(data[key])) throw new SyncError('Eventbrite returned an invalid list.');
    items.push(...data[key]);
    const next = String(data.pagination?.continuation ?? '');
    if (!data.pagination?.has_more_items || !next || next === continuation) return items;
    continuation = next;
  }
  throw new SyncError('Eventbrite page limit reached.');
}

async function listOrganizations(token: string): Promise<Organization[]> {
  const rows = await paged(token, '/users/me/organizations/', 'organizations');
  const organizations = rows.filter((row) => row?.id).map((row) => ({ id: String(row.id), name: String(row.name || 'Unnamed organisation') }));
  if (!organizations.length) throw new SyncError('This Eventbrite token is not linked to any organisation.');
  return organizations;
}

// A single organisation is selected automatically; with several, the dashboard asks for one by name.
function resolveOrganization(organizations: Organization[], requestedId: string | null) {
  return organizations.find((item) => item.id === requestedId) ?? (organizations.length === 1 ? organizations[0] : null);
}

// ---------- Settings ----------

async function loadSettings(admin: any): Promise<Json> {
  const { data, error } = await admin.from('eventbrite_settings').select('*').eq('id', 1).maybeSingle();
  if (error) throw new SyncError(error.code === '42P01' ? 'Run supabase/migrations/20261022_eventbrite_sync.sql in Supabase first.' : error.message);
  if (data) return data;
  const { data: inserted, error: insertError } = await admin.from('eventbrite_settings').insert({ id: 1 }).select('*').single();
  if (insertError) throw insertError;
  return inserted;
}

async function updateSettings(admin: any, patch: Json) {
  const { data, error } = await admin.from('eventbrite_settings').update({ ...patch, updated_at: new Date().toISOString() }).eq('id', 1).select('*').single();
  if (error) throw error;
  return data;
}

function safeSettings(settings: Json) {
  const { private_token_encrypted: token, ...safe } = settings;
  return { ...safe, has_token: Boolean(token) };
}

async function storedToken(settings: Json) {
  if (!settings.private_token_encrypted) throw new SyncError('Save an Eventbrite private API token first.');
  return decryptText(settings.private_token_encrypted);
}

async function saveSettings(admin: any, payload: Json) {
  const existing = await loadSettings(admin);
  const newToken = String(payload.private_token ?? '').trim();
  const remove = payload.remove_token === true;
  const token = remove ? null : newToken || (existing.private_token_encrypted ? await storedToken(existing) : null);
  const organizations = token ? await listOrganizations(token) : [];
  const requested = typeof payload.organization_id === 'string' ? payload.organization_id.trim() : existing.organization_id;
  const organization = token ? resolveOrganization(organizations, requested) : null;
  const patch: Json = {
    organization_id: organization?.id ?? null,
    organization_name: organization?.name ?? null,
    public_backend_url: String(payload.public_backend_url ?? '').trim() || null,
    sync_interval_minutes: Math.min(1440, Math.max(5, Number.parseInt(String(payload.sync_interval_minutes ?? 15), 10) || 15)),
    auto_sync_enabled: payload.auto_sync_enabled !== false,
    show_uncategorized: payload.show_uncategorized !== false,
    connection_status: !token ? 'unverified' : organization ? 'configured' : 'selection-required',
  };
  if (remove) patch.private_token_encrypted = null;
  else if (newToken) patch.private_token_encrypted = await encryptText(newToken);
  return { settings: safeSettings(await updateSettings(admin, patch)), organizations };
}

// ---------- Import ----------

function descriptionText(html: unknown) {
  return String(html ?? '')
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?(p|div|li|h[1-6]|tr)[^>]*>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\n[ \t]*\n(?:[ \t]*\n)+/g, '\n\n')
    .trim();
}

function slugify(value: string) {
  return value.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/[\s-]+/g, '-').slice(0, 210);
}

// Imported slugs end in "-<eventbrite id>", which is how existing rows are matched without an extra column.
function remoteId(slug: unknown) {
  return /-(\d{6,})$/.exec(String(slug ?? ''))?.[1] ?? '';
}

function eventValues(data: Json, description: string) {
  const status = String(data.status ?? 'draft');
  let isPublic = data.listed === true && !data.is_series_parent && !data.is_protected_event;
  if (status === 'draft' || status === 'deleted') isPublic = false;
  const venue = data.venue ?? {};
  const availability = data.ticket_availability ?? {};
  const url = String(data.url ?? '').slice(0, 2000);
  return {
    title: String(data.name?.text || 'Untitled event').slice(0, 240),
    source: 'eventbrite',
    remote_status: status,
    source_is_public: isPublic,
    last_synced_at: new Date().toISOString(),
    source_url: url,
    cta_href: url,
    cta_label: 'Register on Eventbrite',
    format: data.online_event ? 'online' : 'in_person',
    organizer: String(data.organizer?.name ?? '').slice(0, 240),
    starts_at: data.start?.utc ?? null,
    ends_at: data.end?.utc ?? null,
    timezone: String(data.start?.timezone || 'UTC'),
    location: data.online_event ? 'Online' : [venue.name, venue.address?.localized_address_display].filter(Boolean).join(', ').slice(0, 500),
    image_url: String(data.logo?.original?.url || data.logo?.url || '').slice(0, 2000),
    sales_status: availability.is_sold_out === true ? 'sold_out' : availability.has_available_tickets === true ? 'available' : availability.has_available_tickets === false ? 'unavailable' : 'unknown',
    price_label: String(availability.minimum_ticket_price?.display || (data.is_free === true ? 'Free' : '')).slice(0, 100),
    description,
  };
}

async function mapLimited<T, R>(items: T[], limit: number, run: (item: T) => Promise<R>) {
  const results: R[] = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) { const index = next++; results[index] = await run(items[index]); }
  }));
  return results;
}

async function importEvents(admin: any, token: string, remote: Json[], replace: boolean) {
  const descriptions = await mapLimited(remote, 6, async (data) => {
    try { return descriptionText((await eventbrite(token, `/events/${data.id}/description/`)).description); }
    catch { return descriptionText(data.description?.html ?? data.description?.text); }
  });

  let removed = 0;
  if (replace) {
    const { count, error } = await admin.from('events').delete({ count: 'exact' }).gte('id', 0);
    if (error) throw error;
    removed = count ?? 0;
  }

  const { data: existingRows, error: existingError } = await admin.from('events').select('id, slug').eq('source', 'eventbrite');
  if (existingError) throw existingError;
  const existing = new Map<string, number>((existingRows ?? []).map((row: Json) => [remoteId(row.slug), Number(row.id)]));

  const { data: categoryRows, error: categoryError } = await admin.from('event_categories').select('id, name, remote_id').eq('kind', 'eventbrite');
  if (categoryError) throw categoryError;
  const categories = new Map<string, Json>((categoryRows ?? []).map((row: Json) => [String(row.remote_id), row]));

  const result = { fetched: remote.length, created: 0, updated: 0, removed };
  for (const [index, data] of remote.entries()) {
    const id = String(data.id ?? '');
    if (!/^\d+$/.test(id)) continue;
    const values: Json = eventValues(data, descriptions[index]);
    const categoryId = String(data.category_id ?? data.category?.id ?? '');
    values.source_category_id = null;
    values.category = '';
    if (categoryId) {
      let term = categories.get(categoryId);
      const name = String(data.category?.name || `Eventbrite ${categoryId}`).slice(0, 160);
      if (!term) {
        const { data: created, error } = await admin.from('event_categories').insert({ kind: 'eventbrite', remote_id: categoryId, name, slug: `eventbrite-${categoryId}` }).select('id, name, remote_id').single();
        if (error) throw error;
        term = created; categories.set(categoryId, created);
      } else if (data.category?.name && term.name !== name) {
        await admin.from('event_categories').update({ name }).eq('id', term.id);
        term.name = name;
      }
      values.source_category_id = term!.id;
      values.category = String(term!.name).slice(0, 80);
    }
    const rowId = existing.get(id);
    if (rowId) {
      // Site-owned fields (summary, visibility, order, featured, classifications, highlights) are left untouched.
      const { error } = await admin.from('events').update({ ...values, updated_at: new Date().toISOString() }).eq('id', rowId);
      if (error) throw error;
      result.updated += 1;
    } else {
      const { error } = await admin.from('events').insert({ ...values, slug: `${slugify(values.title) || 'event'}-${id}` });
      if (error) throw error;
      result.created += 1;
    }
  }
  return result;
}

async function syncEvents(admin: any, replace: boolean) {
  const settings = await loadSettings(admin);
  const token = await storedToken(settings);
  const organization = resolveOrganization(await listOrganizations(token), settings.organization_id);
  if (!organization) throw new SyncError('Select an Eventbrite organisation in the connection settings before syncing.');

  const { data: job, error: jobError } = await admin.from('eventbrite_sync_jobs').insert({ sync_type: replace ? 'replace' : 'manual', status: 'running' }).select('*').single();
  if (jobError) throw jobError;
  try {
    // Fetch everything first so a failed Eventbrite call never leaves the site without events.
    const remote = await paged(token, `/organizations/${organization.id}/events/`, 'events', { page_size: '50', expand: EXPAND, show_series_parent: 'false' });
    const result = await importEvents(admin, token, remote, replace);
    const finishedAt = new Date().toISOString();
    const message = `Synced ${result.fetched} Eventbrite events: ${result.created} added, ${result.updated} updated${replace ? `, ${result.removed} removed first` : ''}.`;
    const { data: finished } = await admin.from('eventbrite_sync_jobs').update({ status: 'completed', fetched_count: result.fetched, created_count: result.created, updated_count: result.updated, removed_count: result.removed, message, finished_at: finishedAt }).eq('id', job.id).select('*').single();
    const saved = await updateSettings(admin, { organization_id: organization.id, organization_name: organization.name, connection_status: 'verified', last_full_sync_at: finishedAt, last_sync_status: message });
    return { settings: safeSettings(saved), job: finished, result };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Eventbrite sync failed.';
    await admin.from('eventbrite_sync_jobs').update({ status: 'failed', message, finished_at: new Date().toISOString() }).eq('id', job.id);
    await updateSettings(admin, { connection_status: 'failed', last_sync_status: message });
    throw error;
  }
}

// ---------- Request handling ----------

async function canManageContent(admin: any, email: string) {
  const { data, error } = await admin.from('dashboard_admin_users').select('role, permissions, is_active').ilike('email', email).eq('is_active', true).maybeSingle();
  if (error) throw error;
  if (!data) return false;
  return contentRoles.includes(data.role) || (data.permissions ?? []).includes('content.manage');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  try {
    const supabaseUrl = requireEnv('SUPABASE_URL');
    const anonKey = requireEnv('SUPABASE_ANON_KEY');
    const serviceRoleKey = Deno.env.get('DASHBOARD_SERVICE_ROLE_KEY') ?? requireEnv('SUPABASE_SERVICE_ROLE_KEY');

    const authorization = req.headers.get('Authorization') ?? '';
    if (!authorization.startsWith('Bearer ')) return json({ error: 'Missing dashboard session.' }, 401);
    const userClient = createClient(supabaseUrl, anonKey, { global: { headers: { Authorization: authorization } } });
    const admin = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } });
    const { data: session } = await userClient.auth.getUser();
    const email = session.user?.email?.toLowerCase();
    if (!email) return json({ error: 'Dashboard session expired. Please sign in again.' }, 401);
    if (!(await canManageContent(admin, email))) return json({ error: 'Your dashboard role does not include Content permission.' }, 403);

    const body = await req.json().catch(() => ({}));
    const action = String(body.action ?? '');

    if (action === 'settings') return json({ settings: safeSettings(await loadSettings(admin)) });

    if (action === 'jobs') {
      const { data, error } = await admin.from('eventbrite_sync_jobs').select('*').order('created_at', { ascending: false }).limit(50);
      if (error) throw error;
      return json({ jobs: data ?? [] });
    }

    if (action === 'save-settings') return json(await saveSettings(admin, body.settings ?? {}));

    if (action === 'organizations' || action === 'test') {
      const settings = await loadSettings(admin);
      const token = await storedToken(settings);
      const organizations = await listOrganizations(token);
      const organization = resolveOrganization(organizations, settings.organization_id);
      if (!organization) {
        const saved = await updateSettings(admin, { organization_id: null, organization_name: null, connection_status: 'selection-required' });
        return json({ settings: safeSettings(saved), organizations, result: { ok: false, needs_selection: true } });
      }
      if (action === 'organizations') return json({ settings: safeSettings(settings), organizations });
      await eventbrite(token, `/organizations/${organization.id}/events/`, { page_size: '1' });
      const saved = await updateSettings(admin, { organization_id: organization.id, organization_name: organization.name, connection_status: 'verified', last_test_at: new Date().toISOString(), last_sync_status: 'Connection verified' });
      return json({ settings: safeSettings(saved), organizations, result: { ok: true } });
    }

    if (action === 'sync') return json(await syncEvents(admin, body.replace === true));

    return json({ error: 'Unknown action.' }, 400);
  } catch (error) {
    const message = error instanceof Error ? error.message : (error as { message?: string })?.message ?? 'Eventbrite sync failed.';
    return json({ error: message }, error instanceof SyncError ? 400 : 500);
  }
});
