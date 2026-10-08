-- Dashboard-managed maintenance mode.
-- Run once in Supabase SQL editor after SUPABASE_DASHBOARD_ADMIN.sql.
-- Creates a public-safe maintenance settings API and dashboard admin controls.

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.maintenance_settings (
  id integer primary key default 1 check (id = 1),
  enabled boolean not null default false,
  site_wide boolean not null default true,
  protected_paths text[] not null default '{}'::text[],
  heading text not null default 'Website under maintenance',
  message text not null default 'We are making updates. Please check back soon.',
  pin_hash text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

insert into public.maintenance_settings (id)
values (1)
on conflict (id) do nothing;

alter table public.maintenance_settings enable row level security;

drop policy if exists "Dashboard admins read maintenance settings" on public.maintenance_settings;
create policy "Dashboard admins read maintenance settings"
  on public.maintenance_settings
  for select
  to authenticated
  using (public.is_dashboard_admin());

drop policy if exists "Dashboard admins update maintenance settings" on public.maintenance_settings;
create policy "Dashboard admins update maintenance settings"
  on public.maintenance_settings
  for update
  to authenticated
  using (public.is_dashboard_admin())
  with check (public.is_dashboard_admin());

create or replace function public.get_maintenance_settings()
returns jsonb
language sql
stable
security definer
set search_path = public, extensions
as $$
  select jsonb_build_object(
    'enabled', enabled,
    'site_wide', site_wide,
    'protected_paths', protected_paths,
    'heading', heading,
    'message', message,
    'pin_required', pin_hash is not null,
    'updated_at', updated_at
  )
  from public.maintenance_settings
  where id = 1;
$$;

create or replace function public.verify_maintenance_pin(input_pin text)
returns boolean
language sql
stable
security definer
set search_path = public, extensions
as $$
  select coalesce((
    select pin_hash is not null
       and input_pin ~ '^\d{6}$'
       and pin_hash = crypt(input_pin, pin_hash)
    from public.maintenance_settings
    where id = 1
  ), false);
$$;

create or replace function public.set_maintenance_settings(
  p_enabled boolean,
  p_site_wide boolean,
  p_protected_paths text[],
  p_heading text,
  p_message text,
  p_pin text default null,
  p_clear_pin boolean default false
)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  cleaned_paths text[];
begin
  if not public.is_dashboard_admin() then
    raise exception 'Not allowed';
  end if;

  if p_pin is not null and p_pin <> '' and p_pin !~ '^\d{6}$' then
    raise exception 'Maintenance PIN must be exactly 6 digits.';
  end if;

  select coalesce(array_agg(distinct path), '{}'::text[])
    into cleaned_paths
  from (
    select case
      when trim(path) = '' then null
      when left(trim(path), 1) = '/' then trim(path)
      else '/' || trim(path)
    end as path
    from unnest(coalesce(p_protected_paths, '{}'::text[])) as path
  ) paths
  where path is not null;

  update public.maintenance_settings
     set enabled = coalesce(p_enabled, false),
         site_wide = coalesce(p_site_wide, true),
         protected_paths = cleaned_paths,
         heading = nullif(trim(coalesce(p_heading, '')), ''),
         message = nullif(trim(coalesce(p_message, '')), ''),
         pin_hash = case
           when p_clear_pin then null
           when p_pin is not null and p_pin <> '' then crypt(p_pin, gen_salt('bf'))
           else pin_hash
         end,
         updated_at = now()
   where id = 1;

  return public.get_maintenance_settings();
end;
$$;

grant execute on function public.get_maintenance_settings() to anon, authenticated;
grant execute on function public.verify_maintenance_pin(text) to anon, authenticated;
grant execute on function public.set_maintenance_settings(boolean, boolean, text[], text, text, text, boolean) to authenticated;

notify pgrst, 'reload schema';