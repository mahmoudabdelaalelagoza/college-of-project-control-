import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.117.2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const permissionKeys = ['dashboard.read', 'content.manage', 'people.manage', 'enquiries.manage', 'maintenance.manage', 'users.manage'];
const rolePermissions: Record<string, string[]> = {
  owner: permissionKeys,
  admin: permissionKeys,
  editor: ['dashboard.read', 'content.manage', 'people.manage', 'enquiries.manage'],
  viewer: ['dashboard.read'],
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function normaliseEmail(value: unknown) {
  return String(value ?? '').trim().toLowerCase();
}

function cleanPermissions(value: unknown, role: string) {
  const raw = Array.isArray(value) ? value.map(String) : rolePermissions[role] ?? rolePermissions.viewer;
  const cleaned = Array.from(new Set(raw.filter((permission) => permissionKeys.includes(permission))));
  return cleaned.length ? cleaned : ['dashboard.read'];
}
function jwtEmail(authorization: string) {
  const token = authorization.replace(/^Bearer\s+/i, '');
  const payload = token.split('.')[1];
  if (!payload) return '';
  try {
    const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
    const jsonText = atob(normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '='));
    const data = JSON.parse(jsonText) as { email?: unknown; sub?: unknown };
    return String(data.email ?? '').trim().toLowerCase();
  } catch {
    return '';
  }
}

async function findAuthUserByEmail(adminClient: any, email: string) {
  for (let page = 1; page <= 10; page += 1) {
    const { data, error } = await adminClient.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    const users = data.users ?? [];
    const found = users.find((user: any) => String(user.email ?? '').toLowerCase() === email);
    if (found) return found;
    if (users.length < 1000) return null;
  }
  return null;
}

async function requireUsersManager(adminClient: any, email: string) {
  const { data, error } = await adminClient
    .from('dashboard_admin_users')
    .select('email, role, permissions, is_active')
    .ilike('email', email)
    .eq('is_active', true)
    .maybeSingle();

  if (error) throw error;
  if (!data) return false;
  const permissions = new Set([...(rolePermissions[data.role] ?? []), ...((data.permissions ?? []) as string[])]);
  return data.role === 'owner' || permissions.has('users.manage');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY');
    const serviceRoleKey = Deno.env.get('DASHBOARD_SERVICE_ROLE_KEY') ?? Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!supabaseUrl || !anonKey || !serviceRoleKey) return json({ error: 'Dashboard user function is not configured.' }, 500);

    const authorization = req.headers.get('Authorization') ?? '';
    if (!authorization.startsWith('Bearer ')) return json({ error: 'Missing dashboard session.' }, 401);

    const userClient = createClient(supabaseUrl, anonKey, { global: { headers: { Authorization: authorization } } });
    const adminClient = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } });

    const { data: sessionUser, error: userError } = await userClient.auth.getUser();
    const requesterEmail = sessionUser.user?.email?.toLowerCase() || jwtEmail(authorization);
    if (userError && !requesterEmail) return json({ error: 'Dashboard session expired. Please sign in again.' }, 401);
    if (!requesterEmail) return json({ error: 'Dashboard session expired. Please sign in again.' }, 401);

    const allowed = await requireUsersManager(adminClient, requesterEmail);
    if (!allowed) return json({ error: 'Your dashboard role does not include Users permission.' }, 403);

    const body = await req.json();
    const action = String(body.action ?? 'save');

    if (action === 'delete') {
      const id = Number(body.id);
      if (!Number.isFinite(id)) return json({ error: 'Missing dashboard user id.' }, 400);

      const { data: row, error: rowError } = await adminClient
        .from('dashboard_admin_users')
        .select('id, email, auth_user_id')
        .eq('id', id)
        .maybeSingle();
      if (rowError) throw rowError;
      if (!row) return json({ ok: true });
      if (String(row.email).toLowerCase() === requesterEmail) return json({ error: 'You cannot delete your own dashboard user.' }, 400);

      const { error: deleteRowError } = await adminClient.from('dashboard_admin_users').delete().eq('id', id);
      if (deleteRowError) throw deleteRowError;
      if (row.auth_user_id) {
        const { error: deleteAuthError } = await adminClient.auth.admin.deleteUser(row.auth_user_id);
        if (deleteAuthError) throw deleteAuthError;
      }
      return json({ ok: true });
    }

    const id = body.id === null || body.id === undefined || body.id === '' ? null : Number(body.id);
    const email = normaliseEmail(body.email);
    const password = String(body.password ?? '');
    const fullName = String(body.full_name ?? '').trim();
    const role = String(body.role ?? 'viewer').trim().toLowerCase();
    const permissions = cleanPermissions(body.permissions, role);
    const isActive = body.is_active !== false;
    const notes = String(body.notes ?? '').trim();

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json({ error: 'Enter a valid email address.' }, 400);
    if (!['owner', 'admin', 'editor', 'viewer'].includes(role)) return json({ error: 'Invalid dashboard role.' }, 400);
    if (!id && password.length < 8) return json({ error: 'Set a password with at least 8 characters.' }, 400);
    if (id && password && password.length < 8) return json({ error: 'New password must be at least 8 characters.' }, 400);

    const { data: existingRow, error: existingError } = id
      ? await adminClient.from('dashboard_admin_users').select('id, auth_user_id').eq('id', id).maybeSingle()
      : await adminClient.from('dashboard_admin_users').select('id, auth_user_id').eq('email', email).maybeSingle();
    if (existingError) throw existingError;

    let authUserId = existingRow?.auth_user_id ?? null;
    let authUser = authUserId ? null : await findAuthUserByEmail(adminClient, email);

    if (!authUserId && authUser) authUserId = authUser.id;

    if (!authUserId) {
      if (!password) return json({ error: 'Enter a password to create the missing Supabase Auth account.' }, 400);
      const { data: created, error: createError } = await adminClient.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name: fullName, dashboard_role: role },
      });
      if (createError) throw createError;
      authUserId = created.user?.id ?? null;
    } else if (password || fullName || role || email) {
      const updatePayload: Record<string, unknown> = {
        email,
        email_confirm: true,
        user_metadata: { full_name: fullName, dashboard_role: role },
      };
      if (password) updatePayload.password = password;
      const { error: updateAuthError } = await adminClient.auth.admin.updateUserById(authUserId, updatePayload);
      if (updateAuthError) throw updateAuthError;
    }

    const payload = {
      email,
      full_name: fullName,
      role,
      permissions,
      is_active: isActive,
      notes,
      auth_user_id: authUserId,
      updated_at: new Date().toISOString(),
    };

    const write = id
      ? adminClient.from('dashboard_admin_users').update(payload).eq('id', id).select('*').single()
      : adminClient.from('dashboard_admin_users').upsert(payload, { onConflict: 'email' }).select('*').single();

    const { data: saved, error: saveError } = await write;
    if (saveError) throw saveError;

    return json({ user: { ...saved, auth_linked: Boolean(saved.auth_user_id) } });
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Could not save dashboard user.' }, 500);
  }
});
