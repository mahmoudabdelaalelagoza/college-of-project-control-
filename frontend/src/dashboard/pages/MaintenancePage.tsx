import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { cmsApi } from '../api/client';
import { DashboardAlert, DashboardPageHeader, StatusBadge } from '../components/DashboardPrimitives';

interface MaintenanceSettings {
  enabled: boolean;
  site_wide: boolean;
  protected_paths: string[];
  heading: string;
  message: string;
  pinSet: boolean;
  updated_at?: string;
}

const pagePresets = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programmes', path: '/programmes' },
  { label: 'Level 6', path: '/project-controls-professional-level-6' },
  { label: 'Short courses', path: '/short-courses' },
  { label: 'Events', path: '/events' },
  { label: 'Articles', path: '/articles' },
  { label: 'Case studies', path: '/case-studies' },
  { label: 'Contact', path: '/contact' },
  { label: 'All knowledge hub', path: '/knowledge-hub/*' },
  { label: 'All campaigns', path: '/campaign/*' },
];

const input = 'mt-2 w-full rounded-lg border border-background-300 bg-white px-3 py-3 text-sm focus:border-[#05232E]/40 focus:outline-none';

function normalisePath(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (trimmed === '*') return '/*';
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
}

function uniquePaths(paths: string[]) {
  return Array.from(new Set(paths.map(normalisePath).filter(Boolean)));
}

export default function MaintenancePage() {
  const [settings, setSettings] = useState<MaintenanceSettings | null>(null);
  const [form, setForm] = useState({
    enabled: false,
    site_wide: true,
    protected_paths: [] as string[],
    heading: 'Website under maintenance',
    message: 'We are making updates. Please check back soon.',
    pin: '',
    clearPin: false,
  });
  const [customPath, setCustomPath] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    cmsApi.get<MaintenanceSettings>('/maintenance/')
      .then((data) => {
        setSettings(data);
        setForm({
          enabled: data.enabled,
          site_wide: data.site_wide,
          protected_paths: data.protected_paths ?? [],
          heading: data.heading,
          message: data.message,
          pin: '',
          clearPin: false,
        });
      })
      .catch((event) => setError(event instanceof Error ? event.message : 'Could not load maintenance settings.'));
  }, []);

  const needsPin = form.enabled && (!settings?.pinSet || form.clearPin) && form.pin.length !== 6;
  const selectedPresetPaths = useMemo(() => new Set(form.protected_paths), [form.protected_paths]);

  function togglePath(path: string) {
    const exists = form.protected_paths.includes(path);
    setForm({
      ...form,
      protected_paths: exists ? form.protected_paths.filter((item) => item !== path) : uniquePaths([...form.protected_paths, path]),
    });
  }

  function addCustomPath() {
    const path = normalisePath(customPath);
    if (!path) return;
    setForm({ ...form, protected_paths: uniquePaths([...form.protected_paths, path]) });
    setCustomPath('');
  }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const pin = form.pin.trim();
    if (pin && !/^\d{6}$/.test(pin)) {
      setError('The preview code must be exactly 6 digits.');
      return;
    }
    if (form.enabled && !form.site_wide && form.protected_paths.length === 0) {
      setError('Choose at least one page, or switch to whole-site maintenance.');
      return;
    }
    if (needsPin) {
      setError('Set a 6-digit preview code before enabling maintenance.');
      return;
    }
    setBusy(true);
    setError('');
    setNotice('');
    try {
      const data = await cmsApi.patch<MaintenanceSettings>('/maintenance/', {
        enabled: form.enabled,
        site_wide: form.site_wide,
        protected_paths: uniquePaths(form.protected_paths),
        heading: form.heading,
        message: form.message,
        pin,
        clear_pin: form.clearPin && !pin,
      });
      setSettings(data);
      setForm({
        enabled: data.enabled,
        site_wide: data.site_wide,
        protected_paths: data.protected_paths ?? [],
        heading: data.heading,
        message: data.message,
        pin: '',
        clearPin: false,
      });
      setNotice('Maintenance settings saved. The public gate updates immediately.');
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : 'Could not save maintenance settings.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        eyebrow="Website access"
        title="Maintenance mode"
        description="Control whole-site or page-level maintenance while you work. Share a 6-digit access code with anyone who needs to preview the public site. The dashboard stays available."
        meta={<StatusBadge tone={settings?.enabled ? 'warning' : 'success'}>{settings?.enabled ? 'Maintenance enabled' : 'Website public'}</StatusBadge>}
      />

      {error && <DashboardAlert tone="error" title="Could not save" onDismiss={() => setError('')}><p>{error}</p></DashboardAlert>}
      {notice && <DashboardAlert tone="success" title="Saved" onDismiss={() => setNotice('')}><p>{notice}</p></DashboardAlert>}

      {!settings ? <p role="status">Loading maintenance settings...</p> : (
        <form onSubmit={save} className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-6">
            <section className="rounded-xl border border-background-200 bg-white p-6 shadow-sm">
              <label className="flex items-start gap-3 rounded-xl border border-background-200 bg-background-50 p-4">
                <input
                  type="checkbox"
                  checked={form.enabled}
                  onChange={(event) => setForm({ ...form, enabled: event.target.checked })}
                  className="mt-1"
                />
                <span>
                  <span className="block text-sm font-bold text-foreground-950">Enable maintenance mode</span>
                  <span className="mt-1 block text-sm text-foreground-600">Visitors see the maintenance screen unless they enter the correct 6-digit code.</span>
                </span>
              </label>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <label className="text-sm font-semibold md:col-span-2">Maintenance heading
                  <input required maxLength={120} className={input} value={form.heading} onChange={(event) => setForm({ ...form, heading: event.target.value })} />
                </label>
                <label className="text-sm font-semibold md:col-span-2">Maintenance message
                  <textarea required maxLength={1000} rows={4} className={input} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
                </label>
              </div>
            </section>

            <section className="rounded-xl border border-background-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground-950">Pages under maintenance</h2>
                  <p className="mt-1 text-sm text-foreground-600">Use whole-site mode, or pick exact pages. Wildcards like <code>/articles/*</code> protect every page below that path.</p>
                </div>
                <label className="inline-flex items-center gap-2 rounded-lg border border-background-200 px-3 py-2 text-sm font-semibold">
                  <input type="checkbox" checked={form.site_wide} onChange={(event) => setForm({ ...form, site_wide: event.target.checked })} />
                  Whole website
                </label>
              </div>

              {!form.site_wide && (
                <>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {pagePresets.map((page) => (
                      <label key={page.path} className="flex items-center gap-2 rounded-lg border border-background-200 bg-background-50 px-3 py-2 text-sm font-semibold text-foreground-700">
                        <input type="checkbox" checked={selectedPresetPaths.has(page.path)} onChange={() => togglePath(page.path)} />
                        <span>{page.label}</span>
                        <span className="ml-auto truncate text-xs font-normal text-foreground-500">{page.path}</span>
                      </label>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <input
                      value={customPath}
                      onChange={(event) => setCustomPath(event.target.value)}
                      placeholder="/custom-page or /articles/*"
                      className="min-h-11 flex-1 rounded-lg border border-background-300 px-3 text-sm focus:border-[#05232E]/40 focus:outline-none"
                    />
                    <button type="button" onClick={addCustomPath} className="dashboard-action-secondary">Add path</button>
                  </div>

                  {form.protected_paths.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {form.protected_paths.map((path) => (
                        <button key={path} type="button" onClick={() => togglePath(path)} className="rounded-full border border-[#05232E]/20 bg-[#05232E]/5 px-3 py-1.5 text-xs font-bold text-[#05232E]">
                          {path} <i className="ri-close-line" aria-hidden="true" />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-xl border border-background-200 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-foreground-950">Preview code</h2>
              <p className="mt-2 text-sm text-foreground-600">The code is saved as a hash and never shown again. Set a new code anytime.</p>
              <label className="mt-4 block text-sm font-semibold">6-digit code
                <input
                  value={form.pin}
                  onChange={(event) => setForm({ ...form, pin: event.target.value.replace(/\D/g, '').slice(0, 6), clearPin: false })}
                  inputMode="numeric"
                  pattern="\d{6}"
                  maxLength={6}
                  autoComplete="new-password"
                  placeholder={settings.pinSet ? 'Code saved - leave blank to keep it' : 'Set a 6-digit code'}
                  className={input}
                />
              </label>
              {settings.pinSet && (
                <label className="mt-4 flex items-start gap-2 rounded-lg border border-red-100 bg-red-50 p-3 text-sm font-semibold text-red-800">
                  <input type="checkbox" checked={form.clearPin} onChange={(event) => setForm({ ...form, clearPin: event.target.checked, pin: '' })} />
                  Delete saved code
                </label>
              )}
            </section>

            <div className="rounded-xl border border-background-200 bg-white p-6 shadow-sm">
              <button type="submit" disabled={busy || needsPin} className="btn-primary w-full disabled:opacity-50">
                {busy ? 'Saving...' : 'Save maintenance settings'}
              </button>
              <a href="/" target="_blank" rel="noreferrer" className="dashboard-action-secondary mt-3 w-full">
                <i className="ri-external-link-line" aria-hidden="true" />
                Preview public site
              </a>
            </div>
          </aside>
        </form>
      )}
    </div>
  );
}