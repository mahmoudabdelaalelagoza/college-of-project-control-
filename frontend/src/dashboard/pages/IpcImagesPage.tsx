import { useEffect, useRef, useState, type FormEvent } from 'react';
import { cmsApi } from '../api/client';
import type { IpcImage } from '@/services/ipcImagesApi';
import DeleteImageDialog from '../components/DeleteImageDialog';
import { DashboardEmptyState, DashboardPageHeader, DashboardSkeletonList, StatusBadge } from '../components/DashboardPrimitives';
import Modal from '@/components/base/Modal';

function readFields(form: HTMLFormElement) {
  const data = new FormData(form);
  const image_url = String(data.get('image_url') || '').trim();
  const url = new URL(image_url);
  if (!['https:', 'http:'].includes(url.protocol)) throw new Error('Use a direct HTTP or HTTPS image link.');
  return { image_url, alt_text: String(data.get('alt_text') || '').trim(), order: Number(data.get('order') || 0), is_active: data.get('is_active') === 'on' };
}

function ImageFields({ item }: { item?: IpcImage }) {
  const prefix = item ? `ipc-${item.id}` : 'ipc-new';
  return <div className="grid gap-4 sm:grid-cols-2">
    <div className="sm:col-span-2"><label htmlFor={`${prefix}-url`} className="mb-2 block text-sm font-semibold">Direct image link (required)</label>
      <input id={`${prefix}-url`} type="url" name="image_url" defaultValue={item?.image_url} required maxLength={2000} placeholder="https://example.com/photo.jpg" className="form-control" /></div>
    <div><label htmlFor={`${prefix}-alt`} className="mb-2 block text-sm font-semibold">Image description</label>
      <input id={`${prefix}-alt`} name="alt_text" defaultValue={item?.alt_text} maxLength={255} className="form-control" /></div>
    <div><label htmlFor={`${prefix}-order`} className="mb-2 block text-sm font-semibold">Display order</label>
      <input id={`${prefix}-order`} name="order" type="number" min={0} max={32767} step={1} defaultValue={item?.order ?? 0} className="form-control" /></div>
    <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="is_active" defaultChecked={item?.is_active ?? true} /> Show on website</label>
  </div>;
}

function ImageEditor({ item, onChanged }: { item: IpcImage; onChanged: () => void }) {
  const [busy, setBusy] = useState(false);
  const inFlight = useRef(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [broken, setBroken] = useState(false);
  const [editing, setEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  useEffect(() => { setBroken(false); }, [item.image_url]);

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    let payload: ReturnType<typeof readFields>;
    try { payload = readFields(form); }
    catch { setError('Use a valid direct HTTP or HTTPS image link.'); return; }
    inFlight.current = true;
    setBusy(true);
    setError('');
    setMessage('');
    try {
      await cmsApi.patch(`/ipc-images/${item.id}/`, payload);
      setEditing(false);
      setMessage('Saved.');
      onChanged();
    } catch {
      setError('The server could not save this image. Your entries are still here. Please retry once the service is available.');
    } finally {
      inFlight.current = false;
      setBusy(false);
    }
  }

  async function remove() {
    if (inFlight.current) return;
    inFlight.current = true;
    setBusy(true);
    setError('');
    setMessage('');
    try {
      await cmsApi.del(`/ipc-images/${item.id}/`);
      setConfirmDelete(false);
      onChanged();
    } catch {
      setError('Could not remove this image. Please try again.');
    } finally {
      inFlight.current = false;
      setBusy(false);
    }
  }

  return <article className={`overflow-hidden rounded-xl border bg-white shadow-sm ${item.is_active ? 'border-background-200' : 'border-amber-200 ring-1 ring-amber-100'}`}>
    <div className="relative aspect-[4/5] bg-slate-100">
      <img src={item.image_url} alt={item.alt_text || `IPC image ${item.id}`} onError={() => setBroken(true)} loading="lazy" className="h-full w-full object-cover" />
      <span className="absolute left-2 top-2"><StatusBadge tone={item.is_active ? 'success' : 'neutral'}>{item.is_active ? 'Visible' : 'Hidden'}</StatusBadge></span>
      {broken && <div className="absolute inset-0 grid place-items-center bg-slate-100 p-3 text-center text-xs font-semibold text-status-error">Image preview unavailable</div>}
    </div>
    <div className="space-y-3 p-3">
      <div className="min-w-0">
        <h2 className="truncate text-sm font-bold text-slate-950">IPC image {item.id}</h2>
        <p className="mt-1 truncate text-xs font-semibold text-primary-700">Order #{item.order}</p>
        <p className="mt-1 line-clamp-2 min-h-[2rem] text-xs text-slate-500">{item.alt_text || 'No description'}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button type="button" onClick={() => { setError(''); setMessage(''); setEditing(true); }} className="rounded-lg border border-primary-200 px-3 py-2 text-xs font-bold text-primary-800 transition hover:bg-primary-50">Edit</button>
        <button type="button" onClick={() => { setError(''); setMessage(''); setConfirmDelete(true); }} className="rounded-lg border border-red-200 px-3 py-2 text-xs font-bold text-red-700 transition hover:bg-red-50">Delete</button>
      </div>
      {error && !editing && <p role="alert" className="text-xs text-status-error">{error}</p>}
      {message && <p role="status" className="text-xs text-slate-500">{message}</p>}
    </div>
    {editing && <Modal open={editing} onClose={() => { if (!busy) { setEditing(false); setError(''); } }} title={`Edit IPC image ${item.id}`} panelClassName="max-w-2xl">
      <form onSubmit={save} aria-busy={busy}>
        <fieldset disabled={busy}>
          <ImageFields item={item} />
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="submit" className="btn-primary">{busy ? 'Please wait...' : 'Save image'}</button>
            <button type="button" onClick={() => { if (!busy) { setEditing(false); setError(''); } }} className="btn-secondary">Cancel</button>
          </div>
        </fieldset>
        {error && <p role="alert" className="mt-3 text-sm text-status-error">{error}</p>}
      </form>
    </Modal>}
    {confirmDelete && <DeleteImageDialog busy={busy} error={error} message="Remove this image from the IPC section? This action cannot be undone." onCancel={() => setConfirmDelete(false)} onConfirm={() => void remove()} />}
  </article>;
}
export default function IpcImagesPage() {
  const [images, setImages] = useState<IpcImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formError, setFormError] = useState('');
  const [message, setMessage] = useState('');
  const [adding, setAdding] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const inFlight = useRef(false);
  const [revision, setRevision] = useState(0);
  const reload = () => setRevision(value => value + 1);
  useEffect(() => {
    let active = true; setLoading(true); setError('');
    cmsApi.get<IpcImage[]>('/ipc-images/').then(data => { if (!Array.isArray(data)) throw new Error(); if (active) setImages(data); })
      .catch(() => { if (active) setError('Could not load IPC images.'); }).finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [revision]);
  async function add(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (inFlight.current) return;
    const form = event.currentTarget;
    let payload: ReturnType<typeof readFields>;
    try { payload = readFields(form); }
    catch { setFormError('Use a valid direct HTTP or HTTPS image link.'); return; }
    inFlight.current = true; setAdding(true); setFormError(''); setMessage('');
    try { await cmsApi.post('/ipc-images/', payload); form.reset(); setAddOpen(false); setMessage('Image added to IPC.'); reload(); }
    catch { setFormError('The server could not add this image. Your entries are still here. Please retry once the service is available.'); }
    finally { inFlight.current = false; setAdding(false); }
  }
  return <div>
    <DashboardPageHeader
      eyebrow="Website content"
      title="IPC images"
      description="Manage the moving photo strip below the IPC logo. Paste direct image links, change their order, hide them or remove them."
      meta={<StatusBadge tone="info">{images.length} images</StatusBadge>}
      actions={<button type="button" onClick={() => { setFormError(''); setMessage(''); setAddOpen(true); }} className="btn-primary">Add Member</button>}
    />
    {addOpen && <Modal open={addOpen} onClose={() => { if (!adding) { setAddOpen(false); setFormError(''); } }} title="Add Member">
      <form onSubmit={add} aria-label="Add IPC image" aria-busy={adding}>
        <p className="mb-4 text-sm text-slate-600">Add a member image to the IPC photo strip.</p>
        <fieldset disabled={adding}>
          <ImageFields />
          <button type="submit" className="btn-primary mt-4">{adding ? 'Adding...' : 'Add Member'}</button>
        </fieldset>
        {formError && <p role="alert" className="mt-3 text-sm text-status-error">{formError}</p>}
      </form>
    </Modal>}
    <p role="status" className="mb-4 text-sm">{message}</p>
    {error ? <div role="alert"><p>{error}</p><button type="button" onClick={reload} className="btn-secondary mt-3">Try again</button></div> : loading && !images.length ? <DashboardSkeletonList rows={4} /> : !images.length ? <DashboardEmptyState title="No images yet" description="Use Add Member to start the photo strip." /> : null}
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">{images.map(item => <ImageEditor key={item.id} item={item} onChanged={reload} />)}</div>
  </div>;
}
