import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { cmsApi } from '../api/client';
import { DashboardAlert, DashboardEmptyState, DashboardPageHeader, DashboardSkeletonList, StatusBadge } from '../components/DashboardPrimitives';

interface DashboardUser {
  id: number;
  email: string;
  full_name: string;
  role: DashboardRole;
  permissions: string[];
  is_active: boolean;
  notes: string;
  created_at?: string;
  updated_at?: string;
}

type DashboardRole = 'owner' | 'admin' | 'editor' | 'viewer';

const permissionOptions = [
  { key: 'dashboard.read', label: 'Dashboard access', description: 'Can sign in and open the dashboard.' },
  { key: 'content.manage', label: 'Content', description: 'Articles, case studies, events, sectors and courses.' },
  { key: 'people.manage', label: 'People & recognition', description: 'Mentors, coaches, testimonials, logos and credentials.' },
  { key: 'enquiries.manage', label: 'Enquiries', description: 'Read and manage enquiries.' },
  { key: 'maintenance.manage', label: 'Maintenance mode', description: 'Control public maintenance access.' },
  { key: 'users.manage', label: 'Users', description: 'Manage dashboard users and permissions.' },
];

const roleDefaults: Record<DashboardRole, string[]> = {
  owner: permissionOptions.map((permission) => permission.key),
  admin: ['dashboard.read', 'content.manage', 'people.manage', 'enquiries.manage', 'maintenance.manage', 'users.manage'],
  editor: ['dashboard.read', 'content.manage', 'people.manage', 'enquiries.manage'],
  viewer: ['dashboard.read'],
};

const emptyForm: Omit<DashboardUser, 'id'> = {
  email: '',
  full_name: '',
  role: 'viewer',
  permissions: roleDefaults.viewer,
  is_active: true,
  notes: '',
};

const inputClass = 'mt-2 w-full rounded-lg border border-background-300 bg-white px-3 py-3 text-sm focus:border-[#05232E]/40 focus:outline-none';

function roleTone(role: DashboardRole): 'info' | 'success' | 'warning' | 'neutral' {
  if (role === 'owner') return 'warning';
  if (role === 'admin') return 'success';
  if (role === 'editor') return 'info';
  return 'neutral';
}

function formatDate(value?: string) {
  if (!value) return 'Not saved yet';
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value));
}

function usersErrorMessage(event: unknown) {
  const message = event instanceof Error ? event.message : 'Could not load dashboard users.';
  if (message.toLowerCase().includes('get_dashboard_users')) {
    return 'Dashboard users are not installed in Supabase yet. Run docs/migration/SUPABASE_DASHBOARD_USERS.sql in the Supabase SQL editor, then refresh this page.';
  }
  if (message === 'Not allowed') return 'Your dashboard role does not include Users permission.';
  return message;
}

export default function UsersPage() {
  const [users, setUsers] = useState<DashboardUser[] | null>(null);
  const [selectedId, setSelectedId] = useState<number | 'new'>('new');
  const [form, setForm] = useState(emptyForm);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const selectedUser = useMemo(() => users?.find((user) => user.id === selectedId) ?? null, [selectedId, users]);

  const load = () => cmsApi.get<DashboardUser[]>('/users/')
    .then((data) => {
      setUsers(data);
      if (selectedId !== 'new' && !data.some((user) => user.id === selectedId)) setSelectedId('new');
    })
    .catch((event) => {
      setUsers([]);
      setError(usersErrorMessage(event));
    });

  useEffect(() => { load(); }, []);

  useEffect(() => {
    if (selectedUser) {
      setForm({
        email: selectedUser.email,
        full_name: selectedUser.full_name ?? '',
        role: selectedUser.role,
        permissions: selectedUser.permissions?.length ? selectedUser.permissions : roleDefaults[selectedUser.role],
        is_active: selectedUser.is_active,
        notes: selectedUser.notes ?? '',
      });
      return;
    }
    setForm(emptyForm);
  }, [selectedUser]);

  function setRole(role: DashboardRole) {
    setForm((current) => ({ ...current, role, permissions: roleDefaults[role] }));
  }

  function togglePermission(permission: string) {
    setForm((current) => {
      const exists = current.permissions.includes(permission);
      const next = exists ? current.permissions.filter((item) => item !== permission) : [...current.permissions, permission];
      return { ...current, permissions: Array.from(new Set(next.length ? next : ['dashboard.read'])) };
    });
  }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError('');
    setNotice('');
    try {
      const payload = {
        ...form,
        email: form.email.trim().toLowerCase(),
        full_name: form.full_name.trim(),
        notes: form.notes.trim(),
      };
      const saved = selectedId === 'new'
        ? await cmsApi.post<DashboardUser>('/users/', payload)
        : await cmsApi.patch<DashboardUser>(`/users/${selectedId}/`, payload);
      setSelectedId(saved.id);
      await load();
      setNotice('Dashboard user saved. Make sure a matching Supabase Auth account exists for this email.');
    } catch (eventError) {
      setError(usersErrorMessage(eventError));
    } finally {
      setBusy(false);
    }
  }

  async function deleteUser(user: DashboardUser) {
    if (!window.confirm(`Delete ${user.email} from dashboard users? This does not delete the Supabase Auth account.`)) return;
    setBusy(true);
    setError('');
    setNotice('');
    try {
      await cmsApi.del(`/users/${user.id}/`);
      setSelectedId('new');
      await load();
      setNotice('Dashboard user deleted.');
    } catch (eventError) {
      setError(usersErrorMessage(eventError));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        eyebrow="Administration"
        title="Users"
        description="Manage dashboard access, roles and permission labels. A matching Supabase Auth account with the same email is still required before a user can sign in."
        actions={<button type="button" className="btn-primary" onClick={() => setSelectedId('new')}><i className="ri-user-add-line" aria-hidden="true" /> Add user</button>}
        meta={users && <StatusBadge tone="info">{users.length} dashboard users</StatusBadge>}
      />

      <DashboardAlert tone="warning" title="Auth account required">
        <p>Add the user here first, then create a matching account in Supabase Authentication with the same email address. Do not put the Supabase service-role key in the frontend.</p>
      </DashboardAlert>

      {error && <DashboardAlert tone="error" title="Users error" onDismiss={() => setError('')}><p>{error}</p></DashboardAlert>}
      {notice && <DashboardAlert tone="success" title="Saved" onDismiss={() => setNotice('')}><p>{notice}</p></DashboardAlert>}

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
        <section className="min-w-0">
          {users === null ? (
            <DashboardSkeletonList rows={5} />
          ) : users.length === 0 ? (
            <DashboardEmptyState icon="ri-user-settings-line" title="No dashboard users yet" description="Add the first dashboard user to control access records." />
          ) : (
            <div className="grid gap-3 lg:grid-cols-2 2xl:grid-cols-3">
              {users.map((user) => (
                <article key={user.id} className={`rounded-xl border bg-white p-4 shadow-sm ${selectedId === user.id ? 'border-[#05232E] ring-2 ring-[#05232E]/10' : 'border-background-200'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="truncate font-heading text-lg font-bold text-foreground-950">{user.full_name || user.email}</h2>
                      <p className="mt-1 truncate text-sm text-foreground-600">{user.email}</p>
                    </div>
                    <StatusBadge tone={user.is_active ? 'success' : 'neutral'}>{user.is_active ? 'Active' : 'Inactive'}</StatusBadge>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <StatusBadge tone={roleTone(user.role)}>{user.role}</StatusBadge>
                    <span className="rounded-full bg-background-100 px-2.5 py-1 text-xs font-semibold text-foreground-600">{user.permissions?.length ?? 0} permissions</span>
                  </div>
                  <p className="mt-4 text-xs text-foreground-500">Updated {formatDate(user.updated_at)}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button type="button" className="dashboard-action-secondary" onClick={() => setSelectedId(user.id)}>Edit</button>
                    <button type="button" className="dashboard-action-danger" disabled={busy} onClick={() => deleteUser(user)}>Delete</button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <aside className="rounded-xl border border-background-200 bg-white p-5 shadow-sm">
          <form onSubmit={save} className="space-y-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#05232E]">{selectedId === 'new' ? 'New user' : 'Edit user'}</p>
              <h2 className="mt-2 font-heading text-xl font-bold text-foreground-950">{selectedUser?.email || 'Dashboard user'}</h2>
            </div>

            <label className="block text-sm font-semibold">Email
              <input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className={inputClass} placeholder="name@example.com" />
            </label>

            <label className="block text-sm font-semibold">Name
              <input value={form.full_name} onChange={(event) => setForm({ ...form, full_name: event.target.value })} className={inputClass} placeholder="Full name" />
            </label>

            <label className="block text-sm font-semibold">Role
              <select value={form.role} onChange={(event) => setRole(event.target.value as DashboardRole)} className={inputClass}>
                <option value="owner">Owner</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
              </select>
            </label>

            <div>
              <p className="text-sm font-semibold">Permissions</p>
              <div className="mt-2 space-y-2">
                {permissionOptions.map((permission) => (
                  <label key={permission.key} className="flex items-start gap-3 rounded-lg border border-background-200 bg-background-50 p-3">
                    <input type="checkbox" checked={form.permissions.includes(permission.key)} onChange={() => togglePermission(permission.key)} className="mt-1" />
                    <span>
                      <span className="block text-sm font-bold text-foreground-900">{permission.label}</span>
                      <span className="block text-xs leading-relaxed text-foreground-600">{permission.description}</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <label className="flex items-center gap-2 rounded-lg border border-background-200 px-3 py-2 text-sm font-semibold">
              <input type="checkbox" checked={form.is_active} onChange={(event) => setForm({ ...form, is_active: event.target.checked })} />
              Active dashboard access
            </label>

            <label className="block text-sm font-semibold">Notes
              <textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} className={inputClass} rows={3} placeholder="Internal note" />
            </label>

            <div className="grid gap-2 sm:grid-cols-2">
              <button type="submit" disabled={busy} className="btn-primary disabled:opacity-50">{busy ? 'Saving...' : 'Save user'}</button>
              <button type="button" className="dashboard-action-secondary" onClick={() => setSelectedId('new')}>Clear form</button>
            </div>
          </form>
        </aside>
      </div>
    </div>
  );
}
