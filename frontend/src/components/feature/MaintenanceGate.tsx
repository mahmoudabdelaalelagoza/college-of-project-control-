import type { FormEvent, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMaintenanceSettings, verifyMaintenancePin, type MaintenancePublicSettings } from '@/services/maintenanceApi';

const ACCESS_KEY = 'cpcm_maintenance_access';

function normalisePath(pathname: string) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

function pathMatches(pattern: string, pathname: string) {
  const cleanPattern = normalisePath(pattern.trim());
  const cleanPath = normalisePath(pathname);
  if (cleanPattern === '*' || cleanPattern === '/*') return true;
  if (cleanPattern.endsWith('/*')) {
    const base = normalisePath(cleanPattern.slice(0, -2));
    return cleanPath === base || cleanPath.startsWith(`${base}/`);
  }
  return cleanPath === cleanPattern;
}

function isProtected(settings: MaintenancePublicSettings, pathname: string) {
  if (!settings.enabled) return false;
  if (settings.site_wide) return true;
  return settings.protected_paths.some((path) => pathMatches(path, pathname));
}

function hasStoredAccess(settings: MaintenancePublicSettings | null) {
  if (!settings?.updated_at) return false;
  try {
    const stored = JSON.parse(localStorage.getItem(ACCESS_KEY) || '{}') as { updated_at?: string };
    return stored.updated_at === settings.updated_at;
  } catch {
    return false;
  }
}

export default function MaintenanceGate({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [settings, setSettings] = useState<MaintenancePublicSettings | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [pin, setPin] = useState('');
  const [checking, setChecking] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    setStatus('loading');
    fetchMaintenanceSettings()
      .then((data) => {
        if (!active) return;
        setSettings(data);
        setAccessGranted(hasStoredAccess(data));
        setStatus('ready');
      })
      .catch(() => {
        if (!active) return;
        setStatus('error');
      });
    return () => {
      active = false;
    };
  }, []);

  const locked = Boolean(settings && isProtected(settings, pathname) && !accessGranted);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^\d{6}$/.test(pin)) {
      setError('Enter the 6-digit access code.');
      return;
    }
    setChecking(true);
    setError('');
    try {
      const valid = await verifyMaintenancePin(pin);
      if (!valid) {
        setError('That code is not valid.');
        return;
      }
      localStorage.setItem(ACCESS_KEY, JSON.stringify({ updated_at: settings?.updated_at }));
      setAccessGranted(true);
      setPin('');
    } catch {
      setError('Could not check the code. Please try again.');
    } finally {
      setChecking(false);
    }
  }

  if (status === 'loading') return <div className="page-loader" role="status"><span>Loading page</span></div>;
  if (status === 'error' || !locked) return <>{children}</>;

  const heading = settings?.heading || 'Website under maintenance';
  const message = settings?.message || 'We are making updates. Please check back soon.';
  const pinRequired = settings?.pin_required === true;

  return (
    <main id="main-content" tabIndex={-1} className="flex min-h-screen items-center justify-center bg-[#05232E] px-4 py-12 text-white">
      <section className="w-full max-w-xl rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur md:p-8" aria-labelledby="maintenance-title">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-signal-300">Maintenance mode</p>
        <h1 id="maintenance-title" className="mt-4 font-heading text-3xl font-bold leading-tight text-white md:text-5xl">{heading}</h1>
        <p className="mt-4 text-base leading-relaxed text-white/75">{message}</p>
        {pinRequired ? (
          <form onSubmit={submit} className="mt-7 space-y-4">
            <label className="block text-sm font-semibold text-white" htmlFor="maintenance-pin">Access code</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="maintenance-pin"
                value={pin}
                onChange={(event) => setPin(event.target.value.replace(/\D/g, '').slice(0, 6))}
                inputMode="numeric"
                pattern="\d{6}"
                maxLength={6}
                autoComplete="one-time-code"
                className="min-h-12 flex-1 rounded-lg border border-white/20 bg-white px-4 text-center text-lg font-bold tracking-[0.3em] text-[#05232E] outline-none focus:border-signal-300 focus:ring-4 focus:ring-signal-300/20"
                placeholder="000000"
              />
              <button type="submit" disabled={checking} className="btn-primary btn-primary--pattern min-h-12 px-6 text-sm font-bold disabled:opacity-60">
                {checking ? 'Checking...' : 'Enter'}
              </button>
            </div>
            {error && <p role="alert" className="text-sm font-semibold text-red-200">{error}</p>}
          </form>
        ) : (
          <p className="mt-6 rounded-lg border border-amber-300/40 bg-amber-200/10 p-4 text-sm text-amber-100">Preview access is not available yet.</p>
        )}
      </section>
    </main>
  );
}