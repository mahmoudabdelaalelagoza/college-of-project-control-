import { supabase, isSupabaseConfigured } from '@/lib/supabase';

const TOKEN_KEY = 'cms_token';

type Body = string | FormData | Record<string, unknown> | undefined;
type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

interface RequestOptions { method?: string; body?: string | FormData; headers?: Record<string, string> }
interface RouteConfig { table: string; order?: string[]; toDb?: (payload: Record<string, unknown>) => Record<string, unknown>; fromDb?: (row: Record<string, unknown>) => Record<string, unknown> }

// Mirrors the "Public read active events" row-level policy so the dashboard shows what visitors can see.
function isEventPublic(r: Record<string, unknown>) {
  const status = String(r.remote_status ?? '');
  if (r.is_active !== true || ['deleted', 'private', 'unpublished', 'missing'].includes(status)) return false;
  if (status !== 'draft') return r.source_is_public === true;
  const end = r.ends_at ?? r.starts_at;
  return r.source === 'eventbrite' && !!end && new Date(String(end)).getTime() > Date.now();
}

const routes: Record<string, RouteConfig> = {
  'ipc-images': { table: 'ipc_images', order: ['order', 'id'] },
  partners: { table: 'partners', order: ['order', 'id'], toDb: ({ logo_url, ...p }) => ({ ...p, image_url: logo_url ?? p.image_url }), fromDb: (r) => ({ ...r, logo: r.logo ?? r.image_url ?? '', logo_url: r.image_url ?? '' }) },
  sectors: { table: 'sectors', order: ['order', 'id'], fromDb: (r) => ({ ...r, image: r.image ?? r.image_url ?? '' }) },
  'professional-credentials': { table: 'professional_credentials', order: ['order', 'id'] },
  coaches: { table: 'coaches', order: ['order', 'id'], toDb: (p) => ({ ...p, image_url: p.image_url ?? p.image }), fromDb: (r) => ({ ...r, image: r.image_url ?? '' }) },
  mentors: { table: 'mentors', order: ['order', 'id'], toDb: (p) => ({ ...p, specialties: typeof p.specialties === 'string' ? String(p.specialties).split(',').map((item) => item.trim()).filter(Boolean) : p.specialties }), fromDb: (r) => ({ ...r, image: r.image_url ?? '', specialties: Array.isArray(r.specialties) ? r.specialties.join(', ') : r.specialties ?? '' }) },
  'short-courses': { table: 'short_courses', order: ['order', 'title'] },
  articles: { table: 'articles', order: ['order', 'id'] },
  'case-studies': { table: 'case_studies', order: ['order', 'id'] },
  testimonials: { table: 'testimonials', order: ['order', 'id'], toDb: ({ image_url, ...p }) => ({ ...p, photo_url: p.photo_url ?? image_url }), fromDb: (r) => ({ ...r, moderation_notes: r.moderation_notes ?? '', reviewed_at: r.reviewed_at ?? null }) },
  'testimonial-programmes': { table: 'testimonial_programmes', order: ['order', 'name'] },
  'event-categories': { table: 'event_categories', order: ['order', 'name'] },
  events: { table: 'events', order: ['order', 'starts_at', 'id'], toDb: ({ classifications: _classifications, public_visible: _publicVisible, sync_error: _syncError, ...p }) => p, fromDb: (r) => ({ ...r, classifications: [], sync_error: '', public_visible: isEventPublic(r) }) },
  enquiries: { table: 'enquiries', order: ['created_at'], toDb: (p) => ({ ...p, follow_up_at: p.follow_up_at || null }), fromDb: (r) => ({ ...r, roleTitle: r.role_title ?? '', enquiryType: r.enquiry_type ?? '', sourcePath: r.source_path ?? '', read_at: r.read_at ?? null, internal_notes: r.internal_notes ?? '', assigned_to: r.assigned_to ?? null, assigned_name: null, follow_up_at: r.follow_up_at ?? null }) },
};

const MISSING_COLUMN_CODES = ['42703', 'PGRST204'];

export function getToken(): string | null { return localStorage.getItem(TOKEN_KEY); }
export function setToken(token: string) { localStorage.setItem(TOKEN_KEY, token); }
export function clearToken() { localStorage.removeItem(TOKEN_KEY); }

function cleanPath(path: string) { return path.replace(/^\//, '').replace(/\/$/, ''); }
function parsePath(path: string) { const [pathOnly, query = ''] = path.split('?'); const parts = cleanPath(pathOnly).split('/').filter(Boolean); const hasId = /^\d+$/.test(parts[1] ?? ''); return { resource: parts[0] ?? '', id: hasId ? Number(parts[1]) : null, action: (hasId ? parts[2] : parts[1]) ?? '', search: new URLSearchParams(query) }; }
function mapRow(config: RouteConfig, row: Record<string, unknown>) { return config.fromDb ? config.fromDb(row) : row; }
function normalisePayload(body: Body): Record<string, unknown> { if (!body) return {}; if (body instanceof FormData) return Object.fromEntries(body.entries()); if (typeof body === 'string') return JSON.parse(body || '{}') as Record<string, unknown>; return body; }
function coerce(value: unknown): unknown { if (value instanceof File) return undefined; if (value === 'true') return true; if (value === 'false') return false; return value; }
async function uploadImageIfPresent(resource: string, payload: Record<string, unknown>) { if (!supabase) return payload; const fileEntry = Object.entries(payload).find(([, value]) => value instanceof File && value.size > 0); if (!fileEntry) return payload; const [field, file] = fileEntry as [string, File]; const safeName = file.name.replace(/[^a-z0-9._-]+/gi, '-').toLowerCase(); const target = `dashboard/${resource}/${Date.now()}-${safeName}`; const { error } = await supabase.storage.from('images').upload(target, file, { upsert: false, contentType: file.type || undefined }); if (error) throw error; const { data } = supabase.storage.from('images').getPublicUrl(target); const next = { ...payload }; delete next[field]; next.image_url = data.publicUrl; if (field === 'logo') next.logo_url = data.publicUrl; if (field === 'photo') next.photo_url = data.publicUrl; return next; }
// Shapes form values the way Postgres expects: cleared dates become null, the "remove image" tick clears the URL,
// and JSON sent as text (case study metrics) is parsed back into JSON.
function prepareRow(config: RouteConfig, raw: Record<string, unknown>) {
  const { remove_image: removeImage, ...row } = stripUndefined(config.toDb ? config.toDb(raw) : raw) as Record<string, unknown>;
  if (removeImage === true) row.image_url = '';
  for (const [key, value] of Object.entries(row)) if (key.endsWith('_at') && value === '') row[key] = null;
  // "Leave blank to publish now": the public site only shows published rows that have a publish date.
  if (row.is_published === true && 'published_at' in row && !row.published_at) row.published_at = new Date().toISOString();
  if (typeof row.metrics === 'string') row.metrics = JSON.parse(row.metrics || '[]');
  return row;
}

type WriteResult = { data: Record<string, unknown> | null; error: { code: string; message: string } | null };

// Some dashboard forms still send fields that are not table columns; drop the one PostgREST names and retry.
async function writeRow(row: Record<string, unknown>, run: (row: Record<string, unknown>) => PromiseLike<WriteResult>): Promise<WriteResult> {
  let current = row;
  for (let attempt = 0; attempt < 12; attempt++) {
    const result = await run(current);
    const column = result.error?.code === 'PGRST204' ? /'([^']+)' column/.exec(result.error.message)?.[1] : undefined;
    if (!column || !(column in current)) return result;
    current = Object.fromEntries(Object.entries(current).filter(([key]) => key !== column));
  }
  return run(current);
}

function stripUndefined(payload: Record<string, unknown>) { return Object.fromEntries(Object.entries(payload).map(([key, value]) => [key, coerce(value)]).filter(([, value]) => value !== undefined)); }

async function ensureAdmin() { if (!supabase) throw new Error('Supabase is not configured.'); const { data: sessionData, error: sessionError } = await supabase.auth.getSession(); if (sessionError) throw sessionError; if (!sessionData.session) throw new Error('Dashboard session expired. Please sign in again.'); return sessionData.session; }

// Event categories live in the event_classifications join table, not on the events row.
async function saveEventClassifications(eventId: number, categoryIds: unknown) {
  if (!supabase || !Array.isArray(categoryIds)) return;
  const { error: clearError } = await supabase.from('event_classifications').delete().eq('event_id', eventId);
  if (clearError) throw clearError;
  if (!categoryIds.length) return;
  const { error } = await supabase.from('event_classifications').insert(categoryIds.map((categoryId) => ({ event_id: eventId, eventcategory_id: Number(categoryId) })));
  if (error) throw error;
}

async function supabaseRequest<T>(path: string, method: Method, body?: Body): Promise<T> {
  if (!isSupabaseConfigured || !supabase) throw new Error('Supabase dashboard is not configured.');
  await ensureAdmin();
  const { resource, id, action, search } = parsePath(path);
  const config = routes[resource];
  if (!config) throw new Error(`Unsupported Supabase dashboard route: ${resource}`);

  if (resource === 'enquiries' && action === 'read' && id) {
    const marked = await supabase.from(config.table).update({ read_at: new Date().toISOString() }).eq('id', id).select('*').single();
    // Until SUPABASE_ENQUIRIES_FOLLOW_UP.sql has been run there is no read_at column; still open the enquiry.
    const { data, error } = marked.error && MISSING_COLUMN_CODES.includes(marked.error.code) ? await supabase.from(config.table).select('*').eq('id', id).single() : marked;
    if (error) throw error; return mapRow(config, data as Record<string, unknown>) as T;
  }
  if (resource === 'enquiries' && action === 'notifications') {
    const { data, error } = await supabase.from(config.table).select('*').order('created_at', { ascending: false }).limit(10);
    if (error) throw error;
    const rows = (data ?? []) as Array<Record<string, unknown>>;
    return { unread_count: rows.filter((row) => !row.read_at).length, latest: rows.map((row) => mapRow(config, row)) } as T;
  }
  if (resource === 'enquiries' && action === 'team') return [] as T;

  if (method === 'GET') {
    if (id) { const { data, error } = await supabase.from(config.table).select('*').eq('id', id).single(); if (error) throw error; return mapRow(config, data as Record<string, unknown>) as T; }
    let query = supabase.from(config.table).select('*');
    if (resource === 'testimonials' && search.get('status')) query = query.eq('status', search.get('status'));
    if (resource === 'enquiries' && search.get('status')) query = query.eq('status', search.get('status'));
    for (const [index, column] of (config.order ?? ['id']).entries()) query = query.order(column, { ascending: column !== 'created_at' || index > 0 });
    const { data, error } = await query;
    if (error) throw error;
    let rows = ((data ?? []) as Array<Record<string, unknown>>).map((row) => mapRow(config, row));
    if (resource === 'enquiries') {
      const term = (search.get('search') ?? '').trim().toLowerCase();
      if (term) rows = rows.filter((row) => ['name', 'email', 'organisation', 'message'].some((key) => String(row[key] ?? '').toLowerCase().includes(term)));
      if (search.get('unread') === 'true') rows = rows.filter((row) => !row.read_at);
      if (search.get('due') === 'true') rows = rows.filter((row) => row.follow_up_at && new Date(String(row.follow_up_at)).getTime() <= Date.now());
    }
    if (resource === 'events') {
      const { data: links, error: linksError } = await supabase.from('event_classifications').select('event_id, eventcategory_id');
      if (linksError) throw linksError;
      rows = rows.map((row) => ({ ...row, classifications: (links ?? []).filter((link) => link.event_id === row.id).map((link) => link.eventcategory_id) }));
    }
    if (resource === 'testimonials' && search.has('page')) return { count: rows.length, next: null, previous: null, results: rows } as T;
    return rows as T;
  }

  if (method === 'POST') {
    const raw = await uploadImageIfPresent(resource, normalisePayload(body));
    const { data, error } = await writeRow(prepareRow(config, raw), (row) => supabase!.from(config.table).insert(row).select('*').single());
    if (error || !data) throw error ?? new Error('The record was not saved.');
    if (resource === 'events') await saveEventClassifications(Number(data.id), raw.classifications);
    return mapRow(config, data as Record<string, unknown>) as T;
  }

  if (method === 'PATCH') {
    if (!id) throw new Error('Missing record id.');
    const raw = await uploadImageIfPresent(resource, normalisePayload(body));
    const { data, error } = await writeRow(prepareRow(config, raw), (row) => supabase!.from(config.table).update(row).eq('id', id).select('*').single());
    if (error || !data) throw error ?? new Error('The record was not saved.');
    if (resource === 'events') await saveEventClassifications(id, raw.classifications);
    return mapRow(config, data as Record<string, unknown>) as T;
  }

  if (method === 'DELETE') {
    if (!id) throw new Error('Missing record id.');
    const { error } = await supabase.from(config.table).delete().eq('id', id);
    if (error) throw error; return undefined as T;
  }

  throw new Error(`Unsupported method: ${method}`);
}

async function uploadMedia<T>(body?: Body): Promise<T> {
  if (!isSupabaseConfigured || !supabase) throw new Error('Supabase dashboard is not configured.');
  await ensureAdmin();
  const uploaded = await uploadImageIfPresent('media', normalisePayload(body));
  if (typeof uploaded.image_url !== 'string') throw new Error('Choose an image file to upload.');
  return { url: uploaded.image_url } as T;
}

async function request<T>(path: string, method: Method, body?: Body, _options: RequestOptions = {}): Promise<T> {
  const { resource } = parsePath(path);
  if (resource === 'media' && method === 'POST') return uploadMedia<T>(body);
  if (!routes[resource]) throw new Error(`Unsupported Supabase dashboard route: ${resource}`);
  return supabaseRequest<T>(path, method, body);
}

export const cmsApi = {
  get: <T,>(path: string) => request<T>(path, 'GET'),
  post: <T,>(path: string, body: unknown) => request<T>(path, 'POST', body as Body),
  patch: <T,>(path: string, body: unknown) => request<T>(path, 'PATCH', body as Body),
  del: (path: string) => request<void>(path, 'DELETE'),
};

export async function login(username: string, password: string): Promise<string> {
  if (!isSupabaseConfigured || !supabase) throw new Error('Supabase dashboard is not configured.');
  const { data, error } = await supabase.auth.signInWithPassword({ email: username, password });
  if (error || !data.session) throw new Error('Invalid email or password.');
  const { data: admin, error: adminError } = await supabase.from('dashboard_admin_users').select('email').eq('email', username).eq('is_active', true).maybeSingle();
  if (adminError || !admin) { await supabase.auth.signOut(); throw new Error('This email is not enabled for the dashboard.'); }
  return data.session.access_token;
}

export async function logout(): Promise<void> { if (supabase) await supabase.auth.signOut(); clearToken(); }
export async function requestPasswordReset(email: string): Promise<{ resetLink?: string }> { if (!supabase || !isSupabaseConfigured) throw new Error('Supabase dashboard is not configured.'); const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/dashboard/reset-password` }); if (error) throw error; return {}; }
// The emailed recovery link signs the user in on arrival, so the new password is saved against that session.
export async function confirmPasswordReset(password: string): Promise<void> { if (!supabase || !isSupabaseConfigured) throw new Error('Password reset is not available.'); const { data } = await supabase.auth.getSession(); if (!data.session) throw new Error('This password-reset link is invalid or has expired. Request a new one from the sign-in page.'); const { error } = await supabase.auth.updateUser({ password }); if (error) throw error; await supabase.auth.signOut(); }
