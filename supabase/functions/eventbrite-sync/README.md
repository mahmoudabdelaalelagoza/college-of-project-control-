# Eventbrite sync Edge Function

Imports Eventbrite events into `public.events`. Dashboard > Events > **Eventbrite connection** saves the private token (encrypted) and picks the organisation by name; **Sync history** lists past runs.

## One-time setup

1. Run [`supabase/migrations/20261022_eventbrite_sync.sql`](../../migrations/20261022_eventbrite_sync.sql) in the Supabase SQL editor (creates `eventbrite_settings` and `eventbrite_sync_jobs`).
2. Set the encryption secret. Keep it unchanged afterwards, or saved tokens become unreadable:
   ```bash
   supabase secrets set EVENTBRITE_TOKEN_SECRET=<long random value> --project-ref daavxwezcjsdabiosbfu
   ```
3. Deploy:
   ```bash
   supabase functions deploy eventbrite-sync --project-ref daavxwezcjsdabiosbfu
   ```
4. In the dashboard: paste the token, save, choose the organisation if there are several, test, then **Sync now**.

Existing events are matched by the Eventbrite ID at the end of their slug. Sync keeps dashboard-owned fields (summary, featured, order, classifications, highlights). **Clear all & re-import** deletes every event first, but only after Eventbrite has returned the full list.
