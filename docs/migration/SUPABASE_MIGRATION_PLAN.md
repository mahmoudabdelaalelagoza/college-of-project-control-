# Supabase Migration Plan

This project now runs as a static Next.js frontend backed by Supabase for public content, dashboard data, auth and image storage.

## Current State

- Public content services read from Supabase tables.
- Dashboard authentication uses Supabase Auth.
- Dashboard writes use Supabase tables and Storage policies.
- Hostinger receives a static export from the frontend build.

## Required Tables

Core public tables:

- `ipc_images`
- `partners`
- `sectors`
- `professional_credentials`
- `coaches`
- `mentors`
- `short_courses`
- `articles`
- `case_studies`
- `testimonials`
- `event_categories`
- `events`
- `event_classifications`
- `enquiries`

Dashboard support:

- `dashboard_admin_users`
- public `images` storage bucket

## Files

Run these SQL files in order when provisioning a new Supabase project:

1. `SUPABASE_PUBLIC_CONTENT_SCHEMA.sql`
2. `SUPABASE_PUBLIC_CONTENT_SEED.sql`
3. `SUPABASE_PUBLIC_CONTENT_SEED_EXTRA.sql`
4. `SUPABASE_DASHBOARD_ADMIN.sql`

Update the admin email placeholder before running the admin policy file.

## Frontend Environment

Use public keys only:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Never expose a Supabase service-role key in the frontend or Hostinger static deployment.