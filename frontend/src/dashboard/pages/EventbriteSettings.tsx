import { useEffect, useState } from 'react';
import { cmsApi } from '../api/client';

interface Settings { has_token: boolean; organization_id: string | null; organization_name: string | null; public_backend_url: string | null; auto_sync_enabled: boolean; sync_interval_minutes: number; show_uncategorized: boolean; connection_status: string; last_test_at: string | null; last_full_sync_at: string | null; last_sync_status: string | null }
interface Organization { id: string; name: string }
interface Job { id: number; sync_type: string; status: string; trigger_source: string; fetched_count: number; created_count: number; updated_count: number; removed_count: number; message: string | null; started_at: string; finished_at: string | null }
interface SettingsResponse { settings: Settings; organizations?: Organization[] }

const input = 'mt-2 w-full rounded-lg border border-background-300 bg-white px-3 py-3 text-sm';
const date = (v: string | null) => v ? new Date(v).toLocaleString('en-GB') : 'Not yet';
const statusLabels: Record<string, string> = { verified: 'Verified', configured: 'Saved — not tested', 'selection-required': 'Choose an organisation', failed: 'Failed', unverified: 'Not verified' };

export default function EventbriteSettings({ history = false, onSynced }: { history?: boolean; onSynced?: () => void }) {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [form, setForm] = useState({ organization_id: '', public_backend_url: '', auto_sync_enabled: true, sync_interval_minutes: 15, show_uncategorized: true });
  const [token, setToken] = useState('');
  const [removeToken, setRemoveToken] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const apply = (data: SettingsResponse, fill = false) => {
    setSettings(data.settings);
    if (data.organizations) setOrganizations(data.organizations);
    if (fill) setForm({ organization_id: data.settings.organization_id ?? '', public_backend_url: data.settings.public_backend_url ?? '', auto_sync_enabled: data.settings.auto_sync_enabled, sync_interval_minutes: data.settings.sync_interval_minutes, show_uncategorized: data.settings.show_uncategorized });
  };
  const reload = async (fill = false) => {
    const [data, queue] = await Promise.all([cmsApi.get<SettingsResponse>('/eventbrite/settings/'), cmsApi.get<{ jobs: Job[] }>('/eventbrite/jobs/')]);
    apply(data, fill);
    setJobs(queue.jobs);
    // Organisation names come from Eventbrite, so they are only listed once a token is saved.
    if (fill && data.settings.has_token && !history) cmsApi.post<SettingsResponse>('/eventbrite/organizations/', {}).then((result) => apply(result, true)).catch(() => {});
  };
  useEffect(() => {
    reload(true).catch((e) => setError(e instanceof Error ? e.message : String(e)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  const act = async (action: () => Promise<unknown>, success: string) => {
    setBusy(true); setError(''); setMessage('');
    try { await action(); setMessage(success); await reload(); }
    catch (e) { setError(e instanceof Error ? e.message : 'Eventbrite request failed. Check the saved details and try again.'); }
    finally { setBusy(false); }
  };
  const save = () => act(async () => {
    const result = await cmsApi.patch<SettingsResponse>('/eventbrite/settings/', { ...form, private_token: token, remove_token: removeToken });
    apply(result, true); setToken(''); setRemoveToken(false);
  }, 'Settings saved. Test the connection after changing account details.');
  const sync = (replace: boolean) => {
    if (replace && !window.confirm('Delete every event on the website and re-import all events from Eventbrite? Local summaries, featured flags, order and categories will be lost. This cannot be undone.')) return;
    let summary = '';
    act(async () => {
      const result = await cmsApi.post<{ job?: Job }>('/eventbrite/sync/', { replace });
      summary = result.job?.message ?? '';
      onSynced?.();
    }, 'Sync complete.').then(() => { if (summary) setMessage(summary); });
  };

  return <div className="space-y-6">
    {error && <p role="alert" className="rounded-lg bg-red-50 p-4 text-sm text-red-800">{error}</p>}{message && <p role="status" className="rounded-lg bg-green-50 p-4 text-sm text-green-800">{message}</p>}
    {!settings ? <p role="status">Loading Eventbrite settings…</p> : <>
      <div className="flex flex-wrap gap-6 rounded-xl border bg-white p-5 text-sm"><span>Connection: <strong>{statusLabels[settings.connection_status] ?? settings.connection_status}</strong></span><span>Worker: <strong>Supabase Edge Function</strong></span><span>Last full sync: <strong>{date(settings.last_full_sync_at)}</strong></span>{settings.organization_name && <span>Organisation: <strong>{settings.organization_name}</strong></span>}</div>
      {!history && <>
        <p className="rounded-lg bg-amber-50 p-4 text-sm text-amber-900">Eventbrite sync runs through the Supabase Edge Function. If Test or Sync fails, deploy eventbrite-sync and set its secrets first.</p>
        <form onSubmit={(e) => { e.preventDefault(); save(); }} className="rounded-xl border bg-white p-6"><h2 className="text-xl font-bold">Eventbrite connection</h2><p className="mt-2 text-sm text-foreground-600">Save your private token to connect your Eventbrite account. Eventbrite remains the source for event details and registration.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold">Private API token<input type="password" autoComplete="new-password" value={token} onChange={(e) => setToken(e.target.value)} placeholder={settings.has_token ? 'Token saved — leave blank to keep it' : 'Enter your Eventbrite private token'} className={input} /><span className="mt-2 block text-xs font-normal text-foreground-500">Stored encrypted. The saved token is never returned to the dashboard.</span></label>
            <label className="text-sm font-semibold">Eventbrite organisation
              {organizations.length > 1
                ? <select value={form.organization_id} onChange={(e) => setForm({ ...form, organization_id: e.target.value })} className={input}><option value="">Choose an organisation</option>{organizations.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select>
                : <input readOnly value={organizations[0]?.name ?? settings.organization_name ?? ''} placeholder="Selected automatically after saving a token" className={`${input} bg-background-50`} />}
            </label>
            <label className="text-sm font-semibold md:col-span-2">Public backend URL (HTTPS)<input type="url" value={form.public_backend_url} onChange={(e) => setForm({ ...form, public_backend_url: e.target.value })} placeholder="https://api.example.com" className={input} /><span className="mt-2 block text-xs font-normal text-foreground-500">Needed for webhooks. Scheduled and manual sync can work without this URL.</span></label>
            <label className="text-sm font-semibold">Sync interval (minutes)<input type="number" min="5" max="1440" value={form.sync_interval_minutes} onChange={(e) => setForm({ ...form, sync_interval_minutes: Number(e.target.value) })} className={input} /></label>
            <div className="space-y-4 pt-3"><label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.auto_sync_enabled} onChange={(e) => setForm({ ...form, auto_sync_enabled: e.target.checked })} />Enable automatic sync and webhook processing</label><label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.show_uncategorized} onChange={(e) => setForm({ ...form, show_uncategorized: e.target.checked })} />Show events without a category or classification</label>{settings.has_token && <label className="flex items-center gap-2 text-sm text-red-700"><input type="checkbox" checked={removeToken} onChange={(e) => setRemoveToken(e.target.checked)} />Remove saved token when saving</label>}</div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button disabled={busy} className="btn-primary px-5 py-3 disabled:opacity-40">Save settings</button>
            <button type="button" disabled={busy || !settings.has_token} onClick={() => act(() => cmsApi.post('/eventbrite/test/', {}), 'Connection verified.')} className="rounded-lg border px-5 py-3 disabled:opacity-40">Test saved connection</button>
            <button type="button" disabled={busy || !settings.has_token} onClick={() => sync(false)} className="rounded-lg border px-5 py-3 disabled:opacity-40">{busy ? 'Working…' : 'Sync now'}</button>
            <button type="button" disabled={busy || !settings.has_token} onClick={() => sync(true)} className="rounded-lg border border-red-300 px-5 py-3 font-semibold text-red-700 disabled:opacity-40">Clear all &amp; re-import</button>
          </div>
        </form>
      </>}
      {history && <div className="rounded-xl border bg-white p-6"><div className="flex items-center justify-between gap-4"><h2 className="text-xl font-bold">Sync history</h2><button disabled={busy} onClick={() => act(() => reload(), 'History refreshed.')} className="text-sm font-semibold underline">Refresh</button></div><p className="mt-2 text-sm text-foreground-500">Latest 50 runs.</p><div className="mt-5 space-y-4">{jobs.length === 0 ? <p>No sync jobs yet.</p> : jobs.map((job) => <div key={job.id} className="rounded-lg border p-4"><div className="flex flex-wrap justify-between gap-3"><strong>#{job.id} · {job.sync_type} · {job.status}</strong><span className="text-xs text-foreground-500">{date(job.started_at)}</span></div>{job.message && <p className={`mt-2 text-sm ${job.status === 'failed' ? 'text-red-700' : ''}`}>{job.message}</p>}</div>)}</div></div>}
    </>}
  </div>;
}
