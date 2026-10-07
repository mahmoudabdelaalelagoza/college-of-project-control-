-- Moderation columns used by the dashboard testimonials page.
-- Optional: without them testimonials can still be approved or rejected, but moderation notes are not stored.
-- Safe to run more than once.

alter table public.testimonials add column if not exists moderation_notes text not null default '';
alter table public.testimonials add column if not exists reviewed_at timestamptz;

notify pgrst, 'reload schema';
