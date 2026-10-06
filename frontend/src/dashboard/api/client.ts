import { supabase, isSupabaseConfigured } from '@/lib/supabase';

const TOKEN_KEY = 'cms_token';

type Body = string | FormData | Record<string, unknown> | undefined;
type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

interface RequestOptions { method?: string; body?: string | FormData; headers?: Record<string, string> }
interface RouteConfig { table: string; order?: string[]; toDb?: (payload: Record<string, unknown>) => Record<string, unknown>; fromDb?: (row: Record<string, unknown>) => Record<string, unknown> }

const routes: Record<string, RouteConfig> = {
  'ipc-images': { table: 'ipc_images', order: ['order', 'id'] },
  partners: { table: 'partners', order: ['order', 'id'], toDb: (p) => ({ ...p, image_url: p.logo_url ?? p.image_url }), fromDb: (r) => ({ ...r, logo: r.logo ?? r.image_url ?? '', logo_url: r.image_url ?? '' }) },
  sectors: { table: 'sectors', order: ['order', 'id'], fromDb: (r) => ({ ...r, image: r.image ?? r.image_url ?? '' }) },
  'professional-credentials': { table: 'professional_credentials', order: ['order', 'id'] },
  coaches: { table: 'coaches', order: ['order', 'id'], toDb: (p) => ({ ...p, image_url: p.image_url ?? p.image }), fromDb: (r) => ({ ...r, image: r.image_url ?? '' }) },
  mentors: { table: 'mentors', order: ['order', 'id'], toDb: (p) => ({ ...p, specialties: typeof p.specialties === 'string' ? String(p.specialties).split(',').map((item) => item.trim()).filter(Boolean) : p.specialties }), fromDb: (r) => ({ ...r, image: r.image_url ?? '', specialties: Array.isArray(r.specialties) ? r.specialties.join(', ') : r.specialties ?? '' }) },
  'short-courses': { table: 'short_courses', order: ['order', 'title'] },
  articles: { table: 'articles', order: ['order', 'id'] },
  'case-studies': { table: 'case_studies', order: ['order', 'id'] },
  testimonials: { table: 'testimonials', order: ['order', 'id'] },
  'event-categories': { table: 'event_categories', order: ['order', 'name'] },
  events: { table: 'events', order: ['order', 'starts_at', 'id'] },
  enquiries: { table: 'enquiries', order: ['created_at'] },
};

export function getToken(): string | null { return localStorage.getItem(TOKEN_KEY); }
export function setToken(token: string) { localStorage.setItem(TOKEN_KEY, token); }
export function clearToken() { localStorage.removeItem(TOKEN_KEY); }

function cleanPath(path: string) { return path.replace(/^\//, '').replace(/\/$/, ''); }
function parsePath(path: string) { const [pathOnly, query = ''] = path.split('?'); const parts = cleanPath(pathOnly).split('/').filter(Boolean); return { resource: parts[0] ?? '', id: parts[1] ? Number(parts[1]) : null, action: parts[2] ?? '', search: new URLSearchParams(query) }; }
function mapRow(config: RouteConfig, row: Record<string, unknown>) { return config.fromDb ? config.fromDb(row) : row; }
function normalisePayload(body: Body): Record<string, unknown> { if (!body) return {}; if (body instanceof FormData) return Object.fromEntries(body.entries()); if (typeof body === 'string') return JSON.parse(body || '{}') as Record<string, unknown>; return body; }
function coerce(value: unknown): unknown { if (value instanceof File) return undefined; if (value === 'true') return true; if (value === 'false') return false; return value; }
async function uploadImageIfPresent(resource: string, payload: Record<string, unknown>) { if (!supabase) return payload; const fileEntry = Object.entries(payload).find(([, value]) => value instanceof File && value.size > 0); if (!fileEntry) return payload; const [field, file] = fileEntry as [string, File]; const safeName = file.name.replace(/[^a-z0-9._-]+/gi, '-').toLowerCase(); const target = `dashboard/${resource}/${Date.now()}-${safeName}`; const { error } = await supabase.storage.from('images').upload(target, file, { upsert: false, contentType: file.type || undefined }); if (error) throw error; const { data } = supabase.storage.from('images').getPublicUrl(target); const next = { ...payload }; delete next[field]; next.image_url = data.publicUrl; if (field === 'logo') next.logo_url = data.publicUrl; if (field === 'photo') next.photo_url = data.publicUrl; return next; }
function stripUndefined(payload: Record<string, unknown>) { return Object.fromEntries(Object.entries(payload).map(([key, value]) => [key, coerce(value)]).filter(([, value]) => value !== undefined)); }

async function ensureAdmin() { if (!supabase) throw new Error('Supabase is not configured.'); const { data: sessionData, error: sessionError } = await supabase.auth.getSession(); if (sessionError) throw sessionError; if (!sessionData.session) throw new Error('Dashboard session expired. Please sign in again.'); return sessionData.session; }

async function supabaseRequest<T>(path: string, method: Method, body?: Body): Promise<T> {
  if (!isSupabaseConfigured || !supabase) throw new Error('Supabase dashboard is not configured.');
  await ensureAdmin();
  const { resource, id, action, search } = parsePath(path);
  const config = routes[resource];
  if (!config) throw new Error(`Unsupported Supabase dashboard route: ${resource}`);

  if (resource === 'enquiries' && action === 'read' && id) {
    const { data, error } = await supabase.from(config.table).update({ read_at: new Date().toISOString(), status: 'read' }).eq('id', id).select('*').single();
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
    const rows = ((data ?? []) as Array<Record<string, unknown>>).map((row) => mapRow(config, row));
    if (resource === 'testimonials' && search.has('page')) return { count: rows.length, next: null, previous: null, results: rows } as T;
    return rows as T;
  }

  if (method === 'POST') {
    const raw = await uploadImageIfPresent(resource, normalisePayload(body));
    const payload = stripUndefined(config.toDb ? config.toDb(raw) : raw);
    const { data, error } = await supabase.from(config.table).insert(payload).select('*').single();
    if (error) throw error; return mapRow(config, data as Record<string, unknown>) as T;
  }

  if (method === 'PATCH') {
    if (!id) throw new Error('Missing record id.');
    const raw = await uploadImageIfPresent(resource, normalisePayload(body));
    const payload = stripUndefined(config.toDb ? config.toDb(raw) : raw);
    const { data, error } = await supabase.from(config.table).update(payload).eq('id', id).select('*').single();
    if (error) throw error; return mapRow(config, data as Record<string, unknown>) as T;
  }

  if (method === 'DELETE') {
    if (!id) throw new Error('Missing record id.');
    const { error } = await supabase.from(config.table).delete().eq('id', id);
    if (error) throw error; return undefined as T;
  }

  throw new Error(`Unsupported method: ${method}`);
}

async function request<T>(path: string, method: Method, body?: Body, _options: RequestOptions = {}): Promise<T> {
  const { resource } = parsePath(path);
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
export async function confirmPasswordReset(_uid: string, _token: string, password: string): Promise<void> { if (supabase && isSupabaseConfigured) { const { error } = await supabase.auth.updateUser({ password }); if (error) throw error; return; } throw new Error('Password reset is not available.'); }