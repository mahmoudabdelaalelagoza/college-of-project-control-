# Dashboard Users Edge Function

Use this when the dashboard should create Supabase Auth users and passwords from the Users page.

1. Run `docs/migration/SUPABASE_DASHBOARD_USERS.sql` in the Supabase SQL editor.
2. Deploy the Edge Function:

```bash
supabase functions deploy dashboard-users
```

3. Add the service role key as an Edge Function secret. Keep this key out of frontend `.env` files.

```bash
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

4. If your Supabase project does not provide them automatically, also set:

```bash
supabase secrets set SUPABASE_URL=your-project-url SUPABASE_ANON_KEY=your-anon-key
```

After that, the dashboard Users page can create a dashboard record and the matching Supabase Auth account in one save.