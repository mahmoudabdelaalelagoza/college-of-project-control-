# College of Project Control

Frontend-first CPCM site and dashboard.

The production direction is now:

- `frontend/` - Next static export / Vite development app.
- Supabase - public content, dashboard data, auth and image storage.
- `deploy/` - latest Hostinger upload archives only.

Old backend implementations have been removed from the active project. Current deployment is frontend + Supabase.

## Run The Frontend

```powershell
cd frontend
npm.cmd install
npm.cmd run dev
```

## Build For Hostinger

```powershell
cd frontend
npm.cmd run build
```

The Hostinger-ready output is copied to `frontend/dist/`. The source upload archives in `deploy/` include only public Supabase environment values.

## Environment

Use `frontend/.env.local` for local work. Required public values:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Never put a Supabase service-role key in the frontend.

## Page Sections

Open `frontend/src/pages/<page>/components/` and choose the file named after the section's visible label. Start with the [page index](frontend/src/pages/README.md).