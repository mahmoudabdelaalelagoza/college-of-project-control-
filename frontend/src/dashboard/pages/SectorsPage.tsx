import { reportCmsError } from '../api/reportError';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { cmsApi } from '../api/client';
import { DashboardEmptyState, DashboardPageHeader, DashboardSkeletonList, StatusBadge } from '../components/DashboardPrimitives';
import Modal from '@/components/base/Modal';

interface Sector {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: string;
  image: string | null;
  image_url: string;
  link_url: string;
  order: number;
  is_active: boolean;
}

const emptySector = {
  title: '',
  slug: '',
  description: '',
  icon: 'ri-building-line',
  image_url: '',
  link_url: '',
  order: 0,
  is_active: true,
};

type SectorDraft = typeof emptySector;

function slugify(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function SectorsPage() {
  const [sectors, setSectors] = useState<Sector[] | null>(null);
  const [adding, setAdding] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);

  const load = () => cmsApi.get<Sector[]>('/sectors/').then(setSectors).catch(reportCmsError);

  useEffect(() => {
    load();
  }, []);

  const createSector = async (values: SectorDraft) => {
    try {
      setAdding(true);
      try {
        await cmsApi.post('/sectors/', values);
        setCreateOpen(false);
        await load();
      } finally {
        setAdding(false);
      }
    } catch (error) { reportCmsError(error); }
  };

  const deleteSector = async (id: number) => {
    try {
    if (!window.confirm('Delete this sector? It will be removed from the sector cards and any connected sector content. This action cannot be undone.')) return;
    await cmsApi.del(`/sectors/${id}/`);
    load();
  
    } catch (error) { reportCmsError(error); }
};

  return (
    <div>
      <DashboardPageHeader
        eyebrow="Website content"
        title="Sectors"
        description="Manage the sector cards shown on the homepage. A matching sector slug also controls the hero image on dedicated sector pages."
        meta={sectors && <StatusBadge tone="info">{sectors.length} sectors</StatusBadge>}
        actions={
        <button
          type="button"
          onClick={() => setCreateOpen(true)}
          disabled={adding}
          className="btn-primary px-4 py-2 text-sm font-semibold disabled:opacity-50"
        >
          {adding ? 'Adding sector...' : 'Add sector'}
        </button>
        }
      />

      {createOpen && (
        <Modal
          open={createOpen}
          onClose={() => setCreateOpen(false)}
          title="Add sector"
          panelClassName="max-w-3xl rounded-xl"
          bodyClassName="p-5 md:p-6"
        >
          <AddSectorForm busy={adding} onSubmit={createSector} />
        </Modal>
      )}

      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
        {sectors === null ? (
          <DashboardSkeletonList rows={3} />
        ) : sectors.length === 0 ? (
          <DashboardEmptyState icon="ri-building-4-line" title="No sectors yet" description="Add a sector card to show it on the homepage and connect it to any matching sector route." action={<button type="button" onClick={() => setCreateOpen(true)} disabled={adding} className="btn-primary px-5 py-3">{adding ? 'Adding sector...' : 'Add sector'}</button>} />
        ) : (
          sectors.map((sector) => (
            <SectorEditor key={sector.id} sector={sector} onDelete={() => deleteSector(sector.id)} onSaved={load} />
          ))
        )}
      </div>
    </div>
  );
}

function AddSectorForm({ busy, onSubmit }: { busy: boolean; onSubmit: (values: SectorDraft) => Promise<void> }) {
  const [form, setForm] = useState<SectorDraft>({ ...emptySector });
  const [touchedSlug, setTouchedSlug] = useState(false);

  const set = <K extends keyof SectorDraft>(key: K, value: SectorDraft[K]) => setForm((current) => ({ ...current, [key]: value }));

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = form.title.trim();
    const slug = slugify(form.slug || title);
    if (!title || !slug || busy) return;
    void onSubmit({ ...form, title, slug, order: Number(form.order) || 0 });
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Title
          <input
            required
            value={form.title}
            onChange={(event) => {
              const value = event.target.value;
              setForm((current) => ({ ...current, title: value, slug: touchedSlug ? current.slug : slugify(value) }));
            }}
            className="dashboard-field mt-1.5"
          />
        </label>
        <label className="text-sm font-semibold">
          Slug
          <input
            required
            pattern="[a-z0-9-]+"
            value={form.slug}
            onChange={(event) => { setTouchedSlug(true); set('slug', slugify(event.target.value)); }}
            className="dashboard-field mt-1.5"
          />
        </label>
        <label className="text-sm font-semibold">
          Icon class
          <input value={form.icon} onChange={(event) => set('icon', event.target.value)} className="dashboard-field mt-1.5" />
        </label>
        <label className="text-sm font-semibold">
          Card link
          <input value={form.link_url} onChange={(event) => set('link_url', event.target.value)} className="dashboard-field mt-1.5" />
        </label>
        <label className="text-sm font-semibold sm:col-span-2">
          Image link
          <input value={form.image_url} onChange={(event) => set('image_url', event.target.value)} className="dashboard-field mt-1.5" />
        </label>
        <label className="text-sm font-semibold sm:col-span-2">
          Description
          <textarea value={form.description} onChange={(event) => set('description', event.target.value)} rows={3} className="dashboard-field mt-1.5" />
        </label>
        <label className="text-sm font-semibold">
          Order
          <input type="number" value={form.order} onChange={(event) => set('order', Number(event.target.value))} className="dashboard-field mt-1.5" />
        </label>
        <label className="flex items-center gap-2 pt-7 text-sm font-semibold text-slate-700">
          <input type="checkbox" checked={form.is_active} onChange={(event) => set('is_active', event.target.checked)} />
          Published
        </label>
      </div>
      <button disabled={busy || !form.title.trim() || !slugify(form.slug || form.title)} className="btn-primary px-5 py-3 text-sm font-bold disabled:opacity-40">
        {busy ? 'Adding sector...' : 'Create sector'}
      </button>
    </form>
  );
}
function SectorEditor({ sector, onDelete, onSaved }: { sector: Sector; onDelete: () => void; onSaved: () => void }) {
  const [form, setForm] = useState(sector);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof Sector>(key: K, value: Sector[K]) => setForm((prev) => ({ ...prev, [key]: value }));

  const onFileChange = (file: File | null) => {
    setImageFile(file);
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  const save = async () => {
    try {
    setSaving(true);
    try {
      if (imageFile) {
        const data = new FormData();
        data.append('title', form.title);
        data.append('slug', form.slug);
        data.append('description', form.description);
        data.append('icon', form.icon);
        data.append('image_url', form.image_url);
        data.append('link_url', form.link_url);
        data.append('order', String(form.order));
        data.append('is_active', String(form.is_active));
        data.append('image', imageFile);
        await cmsApi.patch(`/sectors/${sector.id}/`, data);
      } else {
        const { image: _image, ...rest } = form;
        await cmsApi.patch(`/sectors/${sector.id}/`, rest);
      }
      setSavedMsg(true);
      setTimeout(() => setSavedMsg(false), 2500);
      onSaved();
    } finally {
      setSaving(false);
    }
  
    } catch (error) { reportCmsError(error); }
};

  const imageSrc = preview || form.image || form.image_url;

  return (
    <details className={`dashboard-disclosure overflow-hidden ${form.is_active ? '' : 'border-amber-200 bg-amber-50/70'}`}>
      <summary className="cursor-pointer list-none">
        <div className="aspect-[16/10] bg-background-100">
          {imageSrc ? (
            <img loading="lazy" decoding="async" src={imageSrc} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-foreground-300">
              <i className={`${form.icon || 'ri-building-line'} text-3xl`} aria-hidden="true" />
            </div>
          )}
        </div>
        <div className="p-3">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge tone={form.is_active ? 'success' : 'neutral'}>{form.is_active ? 'Published' : 'Draft'}</StatusBadge>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">#{form.order}</span>
          </div>
          <h2 className="mt-3 line-clamp-2 text-sm font-bold leading-snug text-slate-950">{form.title || 'Untitled sector'}</h2>
          <p className="mt-1 truncate text-xs font-semibold text-blue-600">{form.slug || 'No slug'}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-600">
            Edit <i className="ri-arrow-down-s-line dashboard-disclosure-icon" aria-hidden="true" />
          </span>
        </div>
      </summary>

      <div className="dashboard-disclosure-body">
        <div className="mb-4 flex justify-end">
          <button type="button" onClick={onDelete} className="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-50">
            Delete sector
          </button>
        </div>

        <div className="grid gap-4">
          <div>
            <div className="aspect-[16/10] overflow-hidden rounded-lg bg-background-100">
              {imageSrc ? (
                <img loading="lazy" decoding="async" src={imageSrc} alt={form.title} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-foreground-300">
                  <i className="ri-image-line text-3xl" />
                </div>
              )}
            </div>
            <button type="button" onClick={() => fileInputRef.current?.click()} className="mt-2 text-xs font-semibold text-primary-600 hover:text-primary-700">
              Upload sector image
            </button>
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={(e) => onFileChange(e.target.files?.[0] || null)} />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <TextField id={`title-${sector.id}`} label="Title" value={form.title} onChange={(v) => set('title', v)} />
            <TextField id={`slug-${sector.id}`} label="Slug (matches its page, if any)" value={form.slug} onChange={(v) => set('slug', v)} />
            <TextField id={`icon-${sector.id}`} label="Icon (Remix Icon class)" value={form.icon} onChange={(v) => set('icon', v)} />
            <TextField id={`link-${sector.id}`} label="Card link" value={form.link_url} onChange={(v) => set('link_url', v)} />
            <TextField id={`image-url-${sector.id}`} label="Image link (used if no upload)" value={form.image_url} onChange={(v) => set('image_url', v)} className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label htmlFor={`description-${sector.id}`} className="mb-1 block text-xs font-semibold text-foreground-600">Description</label>
              <textarea id={`description-${sector.id}`} value={form.description} onChange={(e) => set('description', e.target.value)} rows={2} className="w-full resize-y rounded-md border border-background-200 px-3 py-2 text-sm focus:outline-none focus:border-primary-400" />
            </div>
            <div className="flex items-end gap-3">
              <div className="flex-1">
                <label htmlFor={`order-${sector.id}`} className="mb-1 block text-xs font-semibold text-foreground-600">Order</label>
                <input id={`order-${sector.id}`} type="number" value={form.order} onChange={(e) => set('order', Number(e.target.value))} className="w-full rounded-md border border-background-200 px-3 py-2 text-sm focus:outline-none focus:border-primary-400" />
              </div>
              <label className="flex items-center gap-2 py-2 text-sm text-foreground-700">
                <input type="checkbox" checked={form.is_active} onChange={(e) => set('is_active', e.target.checked)} />
                Published
              </label>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button type="button" onClick={save} disabled={saving} className="btn-primary px-4 py-2 text-sm font-semibold disabled:opacity-50">
            {saving ? 'Saving...' : 'Save sector'}
          </button>
          {!form.is_active && <span className="text-xs font-semibold text-background-600">Draft - hidden from the live site</span>}
          {savedMsg && <span role="status" className="text-xs font-medium text-highlight-700">Sector saved.</span>}
        </div>
      </div>
    </details>
  );
}
function TextField({ id, label, value, onChange, className = '' }: { id: string; label: string; value: string; onChange: (v: string) => void; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1 block text-xs font-semibold text-foreground-600">{label}</label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-background-200 px-3 py-2 text-sm focus:outline-none focus:border-primary-400"
      />
    </div>
  );
}
