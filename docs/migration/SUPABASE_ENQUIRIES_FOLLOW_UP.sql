-- Enquiry follow-up columns used by the dashboard enquiries page.
-- Run after SUPABASE_PUBLIC_CONTENT_SCHEMA.sql and SUPABASE_DASHBOARD_ADMIN.sql.
-- Safe to run more than once.

alter table public.enquiries add column if not exists read_at timestamptz;
alter table public.enquiries add column if not exists internal_notes text not null default '';
alter table public.enquiries add column if not exists assigned_to bigint;
alter table public.enquiries add column if not exists follow_up_at timestamptz;

create index if not exists enquiries_unread_idx on public.enquiries (created_at desc) where read_at is null;

-- Ask PostgREST to pick up the new columns immediately.
notify pgrst, 'reload schema';
