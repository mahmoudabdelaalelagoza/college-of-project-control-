import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { cmsApi } from '../api/client';
import { DashboardAlert, DashboardEmptyState, DashboardPageHeader, StatusBadge } from '../components/DashboardPrimitives';

interface Enquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  organisation: string;
  roleTitle: string;
  enquiryType: string;
  message: string;
  sourcePath: string;
  status: string;
  created_at: string;
  read_at: string | null;
  internal_notes: string;
  assigned_to: number | null;
  assigned_name: string | null;
  follow_up_at: string | null;
}

const states = ['new', 'contacted', 'qualified', 'closed'];
const fieldClass = 'dashboard-field mt-2';
const announce = () => window.dispatchEvent(new Event('enquiries-updated'));

function statusTone(status: string) {
  if (status === 'new') return 'info';
  if (status === 'qualified') return 'success';
  if (status === 'closed') return 'neutral';
  return 'warning';
}

function Detail({ id, onSaved }: { id: string; onSaved: () => void }) {
  const [item, setItem] = useState<Enquiry | null>(null);
  const [team, setTeam] = useState<{ id: number; username: string }[]>([]);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    setItem(null);
    setError('');
    setSaved('');
    Promise.all([cmsApi.post<Enquiry>(`/enquiries/${id}/read/`, {}), cmsApi.get<{ id: number; username: string }[]>('/enquiries/team/')])
      .then(([value, users]) => {
        if (active) {
          setItem(value);
          setTeam(users);
          announce();
          onSaved();
        }
      })
      .catch(() => {
        if (active) setError('Could not open this enquiry. Select another enquiry or retry loading the page.');
      });
    return () => {
      active = false;
    };
    // onSaved refreshes the list; opening an enquiry is keyed to its ID.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function save() {
    if (!item) return;
    setBusy(true);
    setError('');
    setSaved('');
    try {
      const value = await cmsApi.patch<Enquiry>(`/enquiries/${id}/`, {
        status: item.status,
        internal_notes: item.internal_notes,
        assigned_to: item.assigned_to,
        follow_up_at: item.follow_up_at,
      });
      setItem(value);
      setSaved('Follow-up saved.');
      announce();
      onSaved();
    } catch {
      setError('Could not save this enquiry. Your changes are still here; check the connection and try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="dashboard-disclosure-body" aria-label="Enquiry details">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="dashboard-label">Selected enquiry</p>
          <h2 className="mt-1 text-lg font-bold text-slate-950">Enquiry #{id}</h2>
        </div>
        {item && <StatusBadge tone={statusTone(item.status)}>{item.status}</StatusBadge>}
      </div>

      {error && <div className="mt-4"><DashboardAlert tone="error">{error}</DashboardAlert></div>}
      {saved && <div className="mt-4"><DashboardAlert tone="success">{saved}</DashboardAlert></div>}

      {!item ? (
        <p className="mt-5 text-sm text-foreground-600">{error ? 'Open another enquiry or reload the list to retry.' : 'Loading enquiry...'}</p>
      ) : (
        <>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Name', item.name],
              ['Email', item.email],
              ['Phone', item.phone],
              ['Organisation', item.organisation],
              ['Role', item.roleTitle],
              ['Enquiry type', item.enquiryType],
              ['Source page', item.sourcePath],
              ['Received', new Date(item.created_at).toLocaleString('en-GB')],
            ].map(([label, value]) => (
              <div key={label} className="min-w-0 rounded-lg border border-slate-200 bg-white p-3">
                <dt className="dashboard-label">{label}</dt>
                <dd className="mt-1 break-words text-sm text-slate-900">{value || '-'}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6">
            <h3 className="font-bold">Message</h3>
            <p className="mt-2 whitespace-pre-wrap break-words rounded-lg border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700">
              {item.message || 'No message provided.'}
            </p>
          </div>

          <form className="mt-6" onSubmit={(event) => { event.preventDefault(); void save(); }}>
            <div className="grid gap-4 md:grid-cols-3">
              <label className="text-sm font-semibold">
                Status
                <select className={fieldClass} value={item.status} onChange={(event) => setItem({ ...item, status: event.target.value })}>
                  {states.map((state) => <option key={state} value={state}>{state}</option>)}
                </select>
              </label>
              <label className="text-sm font-semibold">
                Assigned to
                <select className={fieldClass} value={item.assigned_to ?? ''} onChange={(event) => setItem({ ...item, assigned_to: event.target.value ? Number(event.target.value) : null })}>
                  <option value="">Unassigned</option>
                  {team.map((user) => <option key={user.id} value={user.id}>{user.username}</option>)}
                </select>
              </label>
              <label className="text-sm font-semibold">
                Follow-up time
                <input
                  type="datetime-local"
                  className={fieldClass}
                  value={item.follow_up_at ? new Date(new Date(item.follow_up_at).getTime() - new Date(item.follow_up_at).getTimezoneOffset() * 60000).toISOString().slice(0, 16) : ''}
                  onChange={(event) => setItem({ ...item, follow_up_at: event.target.value ? new Date(event.target.value).toISOString() : null })}
                />
              </label>
            </div>
            <label className="mt-4 block text-sm font-semibold">
              Internal notes
              <textarea rows={5} maxLength={20000} className={fieldClass} value={item.internal_notes} onChange={(event) => setItem({ ...item, internal_notes: event.target.value })} />
            </label>
            <button disabled={busy} className="btn-primary mt-4">{busy ? 'Saving...' : 'Save follow-up'}</button>
          </form>
        </>
      )}
    </div>
  );
}

export default function EnquiriesPage() {
  const [params, setParams] = useSearchParams();
  const [rows, setRows] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [revision, setRevision] = useState(0);
  const [search, setSearch] = useState(params.get('search') || '');
  const query = new URLSearchParams(params);
  query.delete('enquiry');
  const filter = query.toString();

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    cmsApi.get<Enquiry[]>(`/enquiries/?${filter}`)
      .then((data) => {
        if (active) setRows(data);
      })
      .catch(() => {
        if (active) setError('Could not load enquiries. Check the connection and retry.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [filter, revision]);

  function setFilter(name: string, value: string) {
    const next = new URLSearchParams(params);
    next.delete('enquiry');
    if (value) next.set(name, value);
    else next.delete(name);
    setParams(next);
  }

  const selected = params.get('enquiry');
  const unreadCount = rows.filter((row) => !row.read_at).length;

  return (
    <div>
      <DashboardPageHeader
        eyebrow="Workspace"
        title="Enquiries"
        description="Read requests, assign follow-up and keep track of the next step without losing the enquiry context."
        meta={
          <div className="flex flex-wrap gap-2">
            <StatusBadge tone="info">{rows.length} loaded</StatusBadge>
            <StatusBadge tone={unreadCount ? 'warning' : 'neutral'}>{unreadCount} unread</StatusBadge>
          </div>
        }
      />

      <form onSubmit={(event) => { event.preventDefault(); setFilter('search', search); }} className="dashboard-panel p-4">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[minmax(260px,1fr)_220px_auto_auto_auto] xl:items-end">
          <label className="min-w-0 text-sm font-semibold">
            Search enquiries
            <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} className={fieldClass} placeholder="Name, email, organisation or message" />
          </label>
          <label className="text-sm font-semibold">
            Status
            <select className={fieldClass} value={params.get('status') || ''} onChange={(event) => setFilter('status', event.target.value)}>
              <option value="">All statuses</option>
              {states.map((state) => <option key={state}>{state}</option>)}
            </select>
          </label>
          <label className="flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700">
            <input type="checkbox" checked={params.get('unread') === 'true'} onChange={(event) => setFilter('unread', event.target.checked ? 'true' : '')} />
            Unread only
          </label>
          <label className="flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700">
            <input type="checkbox" checked={params.get('due') === 'true'} onChange={(event) => setFilter('due', event.target.checked ? 'true' : '')} />
            Follow-up due
          </label>
          <div className="flex gap-2">
            <button className="btn-secondary px-4 py-3">Search</button>
            <button type="button" className="dashboard-action-secondary" onClick={() => setRevision((value) => value + 1)}>Refresh</button>
          </div>
        </div>
      </form>

      {error && <div className="mt-4"><DashboardAlert tone="error">{error}</DashboardAlert></div>}

      <div className="mt-6 grid gap-3 xl:grid-cols-2 2xl:grid-cols-3">
        {loading ? (
          <p role="status" className="dashboard-panel p-6 text-sm text-slate-600">Loading enquiries...</p>
        ) : rows.length === 0 ? (
          <div className="xl:col-span-2 2xl:col-span-3">
            <DashboardEmptyState title="No enquiries match these filters" description="Try a broader search, clear one of the status filters, or refresh the list." />
          </div>
        ) : rows.map((enquiry) => {
          const id = String(enquiry.id);
          const isOpen = selected === id;
          return (
            <details
              key={enquiry.id}
              open={isOpen}
              className={`dashboard-disclosure ${!enquiry.read_at ? 'border-[#05232E]/20 bg-[#05232E]/5' : ''}`}
              onToggle={(event) => {
                const next = new URLSearchParams(params);
                if (event.currentTarget.open) next.set('enquiry', id);
                else if (selected === id) next.delete('enquiry');
                setParams(next);
              }}
            >
              <summary className="dashboard-disclosure-summary">
                <span className="dashboard-icon-chip">
                  <i className="ri-mail-open-line" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="truncate text-sm font-bold text-slate-950">{enquiry.name || 'Unnamed enquiry'}</span>
                    {!enquiry.read_at && <StatusBadge tone="warning">Unread</StatusBadge>}
                  </span>
                  <span className="mt-1 block truncate text-xs font-semibold text-[#05232E]">{enquiry.email || 'No email supplied'}</span>
                  <span className="mt-1 block truncate text-xs text-slate-500">{enquiry.enquiryType || 'General'} - {new Date(enquiry.created_at).toLocaleDateString('en-GB')}</span>
                </span>
                <span className="hidden shrink-0 sm:inline-flex"><StatusBadge tone={statusTone(enquiry.status)}>{enquiry.status}</StatusBadge></span>
                <span className="hidden rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600 lg:inline-flex">{enquiry.assigned_name || 'Unassigned'}</span>
                <i className="dashboard-disclosure-icon ri-arrow-down-s-line" aria-hidden="true" />
              </summary>
              {isOpen && <Detail id={id} onSaved={() => setRevision((value) => value + 1)} />}
            </details>
          );
        })}
      </div>
    </div>
  );
}
