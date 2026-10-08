-- Dashboard user management with roles and permissions.
-- Run once in Supabase SQL editor after SUPABASE_DASHBOARD_ADMIN.sql.
-- This manages dashboard access records. A matching Supabase Auth user must still exist for login.

alter table public.dashboard_admin_users
  add column if not exists full_name text not null default '',
  add column if not exists role text not null default 'admin',
  add column if not exists permissions text[] not null default array['dashboard.read','content.manage','people.manage','enquiries.manage','maintenance.manage','users.manage']::text[],
  add column if not exists notes text not null default '',
  add column if not exists updated_at timestamptz not null default now();

alter table public.dashboard_admin_users
  drop constraint if exists dashboard_admin_users_role_check;

alter table public.dashboard_admin_users
  add constraint dashboard_admin_users_role_check
  check (role in ('owner', 'admin', 'editor', 'viewer'));

update public.dashboard_admin_users
   set role = coalesce(nullif(role, ''), 'admin'),
       permissions = case
         when permissions is null or cardinality(permissions) = 0 then array['dashboard.read','content.manage','people.manage','enquiries.manage','maintenance.manage','users.manage']::text[]
         else permissions
       end,
       updated_at = now();

create or replace function public.dashboard_role_permissions(p_role text)
returns text[]
language sql
immutable
as $$
  select case p_role
    when 'owner' then array['dashboard.read','content.manage','people.manage','enquiries.manage','maintenance.manage','users.manage']::text[]
    when 'admin' then array['dashboard.read','content.manage','people.manage','enquiries.manage','maintenance.manage','users.manage']::text[]
    when 'editor' then array['dashboard.read','content.manage','people.manage','enquiries.manage']::text[]
    when 'viewer' then array['dashboard.read']::text[]
    else array['dashboard.read']::text[]
  end;
$$;

create or replace function public.current_dashboard_user_role()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((
    select admin.role
      from public.dashboard_admin_users admin
     where lower(admin.email) = lower(coalesce(auth.jwt() #>> '{email}', ''))
       and admin.is_active = true
     limit 1
  ), '');
$$;

create or replace function public.dashboard_has_permission(required_permission text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
      from public.dashboard_admin_users admin
     where lower(admin.email) = lower(coalesce(auth.jwt() #>> '{email}', ''))
       and admin.is_active = true
       and (
         admin.role = 'owner'
         or required_permission = any(admin.permissions)
         or required_permission = any(public.dashboard_role_permissions(admin.role))
       )
  );
$$;

create or replace function public.is_dashboard_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
      from public.dashboard_admin_users admin
     where lower(admin.email) = lower(coalesce(auth.jwt() #>> '{email}', ''))
       and admin.is_active = true
  );
$$;

alter table public.dashboard_admin_users enable row level security;

drop policy if exists "Dashboard admins read own admin status" on public.dashboard_admin_users;
drop policy if exists "Dashboard users read own profile" on public.dashboard_admin_users;
create policy "Dashboard users read own profile"
  on public.dashboard_admin_users
  for select
  to authenticated
  using (lower(email) = lower(coalesce(auth.jwt() #>> '{email}', '')) and is_active = true);


drop policy if exists "Dashboard admins read maintenance settings" on public.maintenance_settings;
drop policy if exists "Dashboard admins update maintenance settings" on public.maintenance_settings;

do $$
declare
  item record;
begin
  for item in
    select * from (values
      ('articles', 'content.manage'),
      ('case_studies', 'content.manage'),
      ('event_categories', 'content.manage'),
      ('events', 'content.manage'),
      ('event_classifications', 'content.manage'),
      ('ipc_images', 'content.manage'),
      ('sectors', 'content.manage'),
      ('short_courses', 'content.manage'),
      ('testimonial_programmes', 'content.manage'),
      ('coaches', 'people.manage'),
      ('mentors', 'people.manage'),
      ('partners', 'people.manage'),
      ('professional_credentials', 'people.manage'),
      ('testimonials', 'people.manage'),
      ('enquiries', 'enquiries.manage'),
      ('maintenance_settings', 'maintenance.manage')
    ) as permissions(table_name, permission_key)
  loop
    if to_regclass('public.' || item.table_name) is null then
      continue;
    end if;

    execute format('drop policy if exists "Dashboard admins manage %1$s" on public.%1$I', item.table_name);
    execute format('drop policy if exists "Dashboard users read %1$s" on public.%1$I', item.table_name);
    execute format('drop policy if exists "Dashboard users insert %1$s" on public.%1$I', item.table_name);
    execute format('drop policy if exists "Dashboard users update %1$s" on public.%1$I', item.table_name);
    execute format('drop policy if exists "Dashboard users delete %1$s" on public.%1$I', item.table_name);

    execute format(
      'create policy "Dashboard users read %1$s" on public.%1$I for select to authenticated using (public.dashboard_has_permission(%2$L))',
      item.table_name,
      item.permission_key
    );
    execute format(
      'create policy "Dashboard users insert %1$s" on public.%1$I for insert to authenticated with check (public.dashboard_has_permission(%2$L))',
      item.table_name,
      item.permission_key
    );
    execute format(
      'create policy "Dashboard users update %1$s" on public.%1$I for update to authenticated using (public.dashboard_has_permission(%2$L)) with check (public.dashboard_has_permission(%2$L))',
      item.table_name,
      item.permission_key
    );
    execute format(
      'create policy "Dashboard users delete %1$s" on public.%1$I for delete to authenticated using (public.dashboard_has_permission(%2$L))',
      item.table_name,
      item.permission_key
    );
  end loop;
end $$;

drop policy if exists "Dashboard admins upload images" on storage.objects;
drop policy if exists "Dashboard users upload images" on storage.objects;
create policy "Dashboard users upload images"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'images' and (public.dashboard_has_permission('content.manage') or public.dashboard_has_permission('people.manage')));

drop policy if exists "Dashboard admins update images" on storage.objects;
drop policy if exists "Dashboard users update images" on storage.objects;
create policy "Dashboard users update images"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'images' and (public.dashboard_has_permission('content.manage') or public.dashboard_has_permission('people.manage')))
  with check (bucket_id = 'images' and (public.dashboard_has_permission('content.manage') or public.dashboard_has_permission('people.manage')));

drop policy if exists "Dashboard admins delete images" on storage.objects;
drop policy if exists "Dashboard users delete images" on storage.objects;
create policy "Dashboard users delete images"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'images' and (public.dashboard_has_permission('content.manage') or public.dashboard_has_permission('people.manage')));
create or replace function public.get_dashboard_users()
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select case
    when not public.dashboard_has_permission('users.manage') then
      jsonb_build_object('error', 'Not allowed')
    else coalesce(jsonb_agg(jsonb_build_object(
      'id', id,
      'email', email,
      'full_name', full_name,
      'role', role,
      'permissions', permissions,
      'is_active', is_active,
      'notes', notes,
      'created_at', created_at,
      'updated_at', updated_at
    ) order by is_active desc, role, email), '[]'::jsonb)
  end
  from public.dashboard_admin_users;
$$;

create or replace function public.set_dashboard_user(
  p_id bigint default null,
  p_email text default '',
  p_full_name text default '',
  p_role text default 'viewer',
  p_permissions text[] default null,
  p_is_active boolean default true,
  p_notes text default ''
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  cleaned_email text := lower(trim(coalesce(p_email, '')));
  cleaned_role text := lower(trim(coalesce(p_role, 'viewer')));
  cleaned_permissions text[];
  saved public.dashboard_admin_users%rowtype;
begin
  if not public.dashboard_has_permission('users.manage') then
    raise exception 'Not allowed';
  end if;

  if cleaned_email = '' or cleaned_email !~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' then
    raise exception 'Enter a valid email address.';
  end if;

  if cleaned_role not in ('owner', 'admin', 'editor', 'viewer') then
    raise exception 'Invalid dashboard role.';
  end if;

  select coalesce(array_agg(distinct permission), public.dashboard_role_permissions(cleaned_role))
    into cleaned_permissions
  from unnest(coalesce(p_permissions, public.dashboard_role_permissions(cleaned_role))) as permission
  where permission = any(array['dashboard.read','content.manage','people.manage','enquiries.manage','maintenance.manage','users.manage']::text[]);

  if p_id is null then
    insert into public.dashboard_admin_users (email, full_name, role, permissions, is_active, notes, updated_at)
    values (cleaned_email, trim(coalesce(p_full_name, '')), cleaned_role, cleaned_permissions, coalesce(p_is_active, true), trim(coalesce(p_notes, '')), now())
    on conflict (email) do update
       set full_name = excluded.full_name,
           role = excluded.role,
           permissions = excluded.permissions,
           is_active = excluded.is_active,
           notes = excluded.notes,
           updated_at = now()
    returning * into saved;
  else
    update public.dashboard_admin_users
       set email = cleaned_email,
           full_name = trim(coalesce(p_full_name, '')),
           role = cleaned_role,
           permissions = cleaned_permissions,
           is_active = coalesce(p_is_active, true),
           notes = trim(coalesce(p_notes, '')),
           updated_at = now()
     where id = p_id
     returning * into saved;
  end if;

  if saved.id is null then
    raise exception 'Dashboard user was not found.';
  end if;

  return jsonb_build_object(
    'id', saved.id,
    'email', saved.email,
    'full_name', saved.full_name,
    'role', saved.role,
    'permissions', saved.permissions,
    'is_active', saved.is_active,
    'notes', saved.notes,
    'created_at', saved.created_at,
    'updated_at', saved.updated_at
  );
end;
$$;

create or replace function public.delete_dashboard_user(p_id bigint)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  target_email text;
begin
  if not public.dashboard_has_permission('users.manage') then
    raise exception 'Not allowed';
  end if;

  select email into target_email from public.dashboard_admin_users where id = p_id;
  if target_email is null then
    return false;
  end if;

  if lower(target_email) = lower(coalesce(auth.jwt() #>> '{email}', '')) then
    raise exception 'You cannot delete your own dashboard user.';
  end if;

  delete from public.dashboard_admin_users where id = p_id;
  return true;
end;
$$;

grant execute on function public.dashboard_role_permissions(text) to authenticated;
grant execute on function public.current_dashboard_user_role() to authenticated;
grant execute on function public.dashboard_has_permission(text) to authenticated;
grant execute on function public.get_dashboard_users() to authenticated;
grant execute on function public.set_dashboard_user(bigint, text, text, text, text[], boolean, text) to authenticated;
grant execute on function public.delete_dashboard_user(bigint) to authenticated;

notify pgrst, 'reload schema';
