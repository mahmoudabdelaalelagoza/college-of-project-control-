import { reportCmsError } from '../api/reportError';
import { useEffect, useRef, useState } from 'react';
import { cmsApi } from '../api/client';
import Modal from '@/components/base/Modal';
import { DashboardEmptyState, DashboardPageHeader, DashboardSkeletonList, StatusBadge } from '../components/DashboardPrimitives';

interface Partner {
  id: number;
  name: string;
  logo: string | null;
  logo_url: string;
  link_url: string;
  order: number;
  is_active: boolean;
}

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[] | null>(null);
  const [newLogoUrl, setNewLogoUrl] = useState('');
  const [adding, setAdding] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const load = () => cmsApi.get<Partner[]>('/partners/').then(setPartners).catch(reportCmsError);

  useEffect(() => {
    load();
  }, []);

  const addByUrl = async () => {
    try {
      if (!newLogoUrl.trim()) return;
      setAdding(true);
      try {
        const created = await cmsApi.post<Partner>('/partners/', {
          name: '',
          logo_url: newLogoUrl.trim(),
          link_url: '',
          order: (partners?.length ?? 0) * 10 + 10,
          is_active: true,
        });
        setNewLogoUrl('');
        await load();
        setEditingId(created.id);
      } finally {
        setAdding(false);
      }
    } catch (error) { reportCmsError(error); }
  };

  const deletePartner = async (id: number) => {
    try {
      if (!window.confirm('Delete this partner logo? It will be removed from the homepage partner logo grid. This action cannot be undone.')) return;
      await cmsApi.del(`/partners/${id}/`);
      setEditingId(null);
      load();
    } catch (error) { reportCmsError(error); }
  };

  const editingPartner = partners?.find((partner) => partner.id === editingId) ?? null;

  return (
    <div>
      <DashboardPageHeader
        eyebrow="People & recognition"
        title="Partner logos"
        description="Manage the logos shown in the partner logo grid on the homepage."
        meta={partners && <StatusBadge tone="info">{partners.length} partner logos</StatusBadge>}
      />

      <div className="mt-6 flex flex-wrap items-end gap-3 rounded-xl border border-background-200/70 bg-white p-4">
        <div className="min-w-0 flex-1">
          <label htmlFor="new-partner-url" className="mb-1 block text-xs font-semibold text-foreground-600">Add a logo by link</label>
          <input
            id="new-partner-url"
            value={newLogoUrl}
            onChange={(e) => setNewLogoUrl(e.target.value)}
            placeholder="https://example.com/logo.png"
            className="w-full rounded-md border border-background-200 px-3 py-2 text-sm focus:outline-none focus:border-primary-400"
          />
        </div>
        <button
          type="button"
          onClick={addByUrl}
          disabled={adding || !newLogoUrl.trim()}
          className="btn-primary px-4 py-2 text-sm font-semibold disabled:opacity-50"
        >
          {adding ? 'Adding...' : 'Add logo'}
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
        {partners === null ? (
          <div className="col-span-full"><DashboardSkeletonList rows={3} /></div>
        ) : partners.length === 0 ? (
          <div className="col-span-full">
            <DashboardEmptyState icon="ri-award-line" title="No partner logos yet" description="Add a partner logo link to show it on the homepage." />
          </div>
        ) : (
          partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              onEdit={() => setEditingId(partner.id)}
              onDelete={() => deletePartner(partner.id)}
            />
          ))
        )}
      </div>

      <Modal open={!!editingPartner} onClose={() => setEditingId(null)} title={editingPartner?.name || 'Edit partner logo'} panelClassName="max-w-2xl">
        {editingPartner && (
          <PartnerEditor
            key={editingPartner.id}
            partner={editingPartner}
            onDelete={() => deletePartner(editingPartner.id)}
            onSaved={() => { load(); setEditingId(null); }}
          />
        )}
      </Modal>
    </div>
  );
}

function PartnerCard({ partner, onEdit, onDelete }: { partner: Partner; onEdit: () => void; onDelete: () => void }) {
  const imageSrc = partner.logo || partner.logo_url;
  return (
    <article className={`overflow-hidden rounded-xl border bg-white shadow-sm ${partner.is_active ? 'border-background-200/70' : 'border-amber-200 ring-1 ring-amber-100'}`}>
      <div className="flex aspect-[4/3] items-center justify-center bg-background-50 p-4">
        {imageSrc ? (
          <img loading="lazy" decoding="async" src={imageSrc} alt={partner.name || 'Partner logo'} className="max-h-28 w-full object-contain" />
        ) : (
          <i className="ri-image-line text-5xl text-foreground-300" />
        )}
      </div>
      <div className="space-y-3 p-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-foreground-900">{partner.name || 'Partner logo'}</p>
          <p className="mt-1 text-xs font-semibold text-blue-600">Order #{partner.order}</p>
          {!partner.is_active && <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-amber-700">Draft</p>}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" onClick={onEdit} className="rounded-lg border border-blue-200 px-3 py-2 text-xs font-bold text-blue-700 transition hover:bg-blue-50">Edit</button>
          <button type="button" onClick={onDelete} className="rounded-lg border border-red-200 px-3 py-2 text-xs font-bold text-red-700 transition hover:bg-red-50">Delete</button>
        </div>
      </div>
    </article>
  );
}

function PartnerEditor({ partner, onDelete, onSaved }: { partner: Partner; onDelete: () => void; onSaved: () => void }) {
  const [form, setForm] = useState(partner);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof Partner>(key: K, value: Partner[K]) => setForm((prev) => ({ ...prev, [key]: value }));

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
          data.append('name', form.name);
          data.append('logo_url', form.logo_url);
          data.append('link_url', form.link_url);
          data.append('order', String(form.order));
          data.append('is_active', String(form.is_active));
          data.append('logo', imageFile);
          await cmsApi.patch(`/partners/${partner.id}/`, data);
        } else {
          const { logo: _logo, ...rest } = form;
          await cmsApi.patch(`/partners/${partner.id}/`, rest);
        }
        setSavedMsg(true);
        setTimeout(() => setSavedMsg(false), 2500);
        onSaved();
      } finally {
        setSaving(false);
      }
    } catch (error) { reportCmsError(error); }
  };

  const imageSrc = preview || form.logo || form.logo_url;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-col items-center gap-3 sm:w-48">
          <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg bg-background-50 p-4">
            {imageSrc ? (
              <img loading="lazy" decoding="async" src={imageSrc} alt={form.name || 'Partner logo'} className="max-h-28 w-full object-contain" />
            ) : (
              <i className="ri-image-line text-5xl text-foreground-300" />
            )}
          </div>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="text-xs font-semibold text-primary-600 hover:text-primary-700"
          >
            Upload logo
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => onFileChange(e.target.files?.[0] || null)}
          />
        </div>

        <div className="grid flex-1 grid-cols-1 gap-3">
          <div>
            <label htmlFor={`partner-name-${partner.id}`} className="mb-1 block text-xs font-semibold text-foreground-600">Label (optional)</label>
            <input
              id={`partner-name-${partner.id}`}
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
              placeholder="e.g. APM"
              className="w-full rounded-md border border-background-200 px-3 py-2 text-sm focus:outline-none focus:border-primary-400"
            />
          </div>
          <div>
            <label htmlFor={`partner-logo-url-${partner.id}`} className="mb-1 block text-xs font-semibold text-foreground-600">Logo link</label>
            <input
              id={`partner-logo-url-${partner.id}`}
              value={form.logo_url}
              onChange={(e) => set('logo_url', e.target.value)}
              placeholder="https://..."
              className="w-full rounded-md border border-background-200 px-3 py-2 text-sm focus:outline-none focus:border-primary-400"
            />
          </div>
          <div>
            <label htmlFor={`partner-link-${partner.id}`} className="mb-1 block text-xs font-semibold text-foreground-600">Click-through link (optional)</label>
            <input
              id={`partner-link-${partner.id}`}
              value={form.link_url}
              onChange={(e) => set('link_url', e.target.value)}
              placeholder="https://..."
              className="w-full rounded-md border border-background-200 px-3 py-2 text-sm focus:outline-none focus:border-primary-400"
            />
          </div>
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <label htmlFor={`partner-order-${partner.id}`} className="mb-1 block text-xs font-semibold text-foreground-600">Order</label>
              <input
                id={`partner-order-${partner.id}`}
                type="number"
                value={form.order}
                onChange={(e) => set('order', Number(e.target.value))}
                className="w-full rounded-md border border-background-200 px-3 py-2 text-sm focus:outline-none focus:border-primary-400"
              />
            </div>
            <label className="flex items-center gap-2 py-2 text-sm text-foreground-700">
              <input type="checkbox" checked={form.is_active} onChange={(e) => set('is_active', e.target.checked)} />
              Published
            </label>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 border-t border-background-200/60 pt-4">
        <button
          type="button"
          onClick={save}
          disabled={saving}
          className="btn-primary px-4 py-2 text-sm font-semibold disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save partner logo'}
        </button>
        {!form.is_active && <span className="text-xs font-semibold text-background-600">Draft</span>}
        {savedMsg && <span role="status" className="text-xs font-medium text-highlight-700">Partner logo saved.</span>}
        <button type="button" onClick={onDelete} className="ml-auto text-xs font-semibold text-red-600 hover:text-red-700">
          Delete logo
        </button>
      </div>
    </div>
  );
}