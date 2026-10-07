import { useEffect, useState, type FormEvent } from 'react';
import { cmsApi } from '../api/client';
import ArticleBody from '@/components/feature/ArticleBody';
import { DashboardEmptyState, DashboardPageHeader, DashboardSkeletonList, StatusBadge } from '../components/DashboardPrimitives';

interface ArticleRecord {
  id: number; title: string; slug: string; excerpt: string; content: string; category: string;
  author: string; image: string | null; image_url: string; image_alt: string; read_minutes: number;
  is_published: boolean; published_at: string | null; order: number;
}
const empty = { title: '', slug: '', excerpt: '', content: '', category: '', author: 'College of Project Controls', image: null, image_url: '', image_alt: '', read_minutes: 5, is_published: false, published_at: null, order: 0 };
const field = 'mt-2 w-full rounded-lg border border-background-300 bg-white px-3 py-2.5 text-sm text-foreground-950';

function Editor({ article, onSaved, onCancel }: { article: Partial<ArticleRecord>; onSaved: () => void; onCancel: () => void }) {
  const [values, setValues] = useState({ ...empty, ...article });
  const [file, setFile] = useState<File | null>(null);
  const [removeImage, setRemoveImage] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(false);
  const save = async (event: FormEvent) => {
    event.preventDefault(); setBusy(true); setError('');
    const data = new FormData();
    const { id: _id, image: _image, ...editable } = values;
    Object.entries(editable).forEach(([key, value]) => { if (value !== undefined) data.set(key, value === null ? '' : String(value)); });
    data.set('remove_image', String(removeImage));
    if (file) data.set('image', file);
    try { if (article.id) await cmsApi.patch(`/articles/${article.id}/`, data); else await cmsApi.post('/articles/', data); onSaved(); }
    catch (err) { setError(err instanceof Error ? err.message : 'Unable to save the article.'); }
    finally { setBusy(false); }
  };
  return <form onSubmit={save} className="rounded-2xl border border-background-200 bg-white p-6 md:p-8">
    <div className="flex flex-wrap items-center justify-between gap-4"><h2 className="text-2xl font-bold">{article.id ? 'Edit article' : 'New article'}</h2><button type="button" onClick={() => setPreview(!preview)} className="text-sm font-semibold underline">{preview ? 'Edit content' : 'Preview content'}</button></div>
    {error && <p role="alert" className="mt-5 whitespace-pre-wrap text-sm text-red-700">{error}</p>}
    <fieldset disabled={busy} className="mt-6 space-y-6 disabled:opacity-60">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-semibold">Title<input required maxLength={240} value={values.title} onChange={e => setValues(v => ({ ...v, title: e.target.value, ...(!article.id && (!v.slug || v.slug === v.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')) ? { slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') } : {}) }))} className={field} /></label>
        <label className="text-sm font-semibold">URL slug<input required pattern="[a-zA-Z0-9_-]+" maxLength={240} value={values.slug} onChange={e => setValues(v => ({ ...v, slug: e.target.value }))} className={field} /><span className="mt-1 block text-xs font-normal text-foreground-600">/articles/{values.slug || 'your-article'}</span></label>
        <label className="text-sm font-semibold">Category<input maxLength={100} value={values.category} onChange={e => setValues(v => ({ ...v, category: e.target.value }))} className={field} /></label>
        <label className="text-sm font-semibold">Author<input required maxLength={160} value={values.author} onChange={e => setValues(v => ({ ...v, author: e.target.value }))} className={field} /></label>
      </div>
      <label className="block text-sm font-semibold">Excerpt<textarea required rows={3} maxLength={600} value={values.excerpt} onChange={e => setValues(v => ({ ...v, excerpt: e.target.value }))} className={field} /></label>
      <div><label className="block text-sm font-semibold" htmlFor="article-content">Article content</label><p id="article-content-help" className="mt-2 text-xs text-foreground-600">Separate paragraphs with a blank line. Use ## for headings, ### for subheadings, and - for list items.</p>{preview ? <div className="mt-4 rounded-lg bg-background-50 p-6"><ArticleBody content={values.content} /></div> : <textarea id="article-content" aria-describedby="article-content-help" required rows={18} value={values.content} onChange={e => setValues(v => ({ ...v, content: e.target.value }))} className={`${field} font-mono`} />}</div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-semibold">Cover image<input type="file" accept="image/*" onChange={e => { setFile(e.target.files?.[0] || null); setRemoveImage(false); }} className={field} /></label>
        <label className="text-sm font-semibold">Image URL (if no upload)<input value={values.image_url} onChange={e => setValues(v => ({ ...v, image_url: e.target.value }))} className={field} /></label>
        <label className="text-sm font-semibold">Image description<input maxLength={240} value={values.image_alt} onChange={e => setValues(v => ({ ...v, image_alt: e.target.value }))} className={field} /></label>
        <label className="text-sm font-semibold">Reading time (minutes)<input type="number" min={1} max={32767} required value={values.read_minutes} onChange={e => setValues(v => ({ ...v, read_minutes: Number(e.target.value) }))} className={field} /></label>
        <label className="text-sm font-semibold">Display order<input type="number" min={0} max={32767} required value={values.order} onChange={e => setValues(v => ({ ...v, order: Number(e.target.value) }))} className={field} /></label>
        <label className="text-sm font-semibold">Publish date<input type="datetime-local" value={values.published_at ? new Date(new Date(values.published_at).getTime() - new Date(values.published_at).getTimezoneOffset() * 60000).toISOString().slice(0,16) : ''} onChange={e => setValues(v => ({ ...v, published_at: e.target.value ? new Date(e.target.value).toISOString() : null }))} className={field} /><span className="mt-1 block text-xs font-normal text-foreground-600">Leave blank to publish now. A future date schedules publication.</span></label>
      </div>
      {values.image && <div className="flex items-center gap-4"><img src={values.image} alt="Current cover" className="h-20 w-32 rounded object-cover" /><label className="text-sm"><input type="checkbox" checked={removeImage} onChange={e => setRemoveImage(e.target.checked)} /> Remove uploaded image</label></div>}
      <label className="flex items-center gap-3 text-sm font-semibold"><input type="checkbox" checked={values.is_published} onChange={e => setValues(v => ({ ...v, is_published: e.target.checked }))} /> Publish article (uncheck to save as draft)</label>
      <div className="flex gap-4"><button type="submit" className="btn-primary min-h-11 px-6 font-semibold">{busy ? 'Saving...' : 'Save article'}</button><button type="button" onClick={onCancel} className="min-h-11 px-4 underline">Cancel</button></div>
    </fieldset>
  </form>;
}

export default function ArticlesDashboardPage() {
  const [articles, setArticles] = useState<ArticleRecord[]>([]);
  const [editing, setEditing] = useState<Partial<ArticleRecord> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [revision, setRevision] = useState(0);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  useEffect(() => { let active = true; setLoading(true); setError(''); cmsApi.get<ArticleRecord[]>('/articles/').then(data => { if (active) setArticles(data); }).catch(() => { if (active) setError('Unable to load articles.'); }).finally(() => { if (active) setLoading(false); }); return () => { active = false; }; }, [revision]);
  const remove = async (article: ArticleRecord) => {
    if (!window.confirm(`Delete "${article.title}"? This cannot be undone.`)) return;
    setDeleting(article.id); setError('');
    try { await cmsApi.del(`/articles/${article.id}/`); setRevision(v => v + 1); setMessage('Article deleted.'); } catch { setError('Unable to delete this article.'); } finally { setDeleting(null); }
  };
  if (editing) return <Editor key={editing.id ?? 'new'} article={editing} onCancel={() => setEditing(null)} onSaved={() => { setEditing(null); setRevision(v => v + 1); setMessage('Article saved.'); }} />;
  return <div>
    <DashboardPageHeader
      eyebrow="Website content"
      title="Articles"
      description="Manage the article library, individual pages and shared carousel."
      meta={<StatusBadge tone="info">{articles.length} articles</StatusBadge>}
      actions={<button onClick={() => { setEditing({}); setMessage(''); }} className="btn-primary min-h-11 px-6 font-semibold">Add article</button>}
    />
    {message && <p role="status" className="mb-5 text-primary-700">{message}</p>}
    {error && <div role="alert" className="mb-5 text-red-700">{error} <button onClick={() => setRevision(v => v + 1)} className="underline">Try again</button></div>}
    {loading ? (
      <DashboardSkeletonList rows={6} />
    ) : articles.length === 0 ? (
      <DashboardEmptyState title="No articles yet" description="Add your first article to get started." action={<button onClick={() => { setEditing({}); setMessage(''); }} className="btn-primary px-5 py-3">Add article</button>} />
    ) : (
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
        {articles.map(article => {
          const state = article.is_published ? article.published_at && new Date(article.published_at) > new Date() ? 'Scheduled' : 'Published' : 'Draft';
          return (
            <details key={article.id} className={`dashboard-disclosure ${article.is_published ? '' : 'border-amber-200 bg-amber-50/70'}`}>
              <summary className="dashboard-disclosure-summary">
                <span className="dashboard-icon-chip">
                  <i className="ri-article-line" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="truncate text-sm font-bold text-slate-950">{article.title || 'Untitled article'}</span>
                    <StatusBadge tone={state === 'Published' ? 'success' : state === 'Scheduled' ? 'warning' : 'neutral'}>{state}</StatusBadge>
                  </span>
                  <span className="mt-1 block truncate text-xs font-semibold text-primary-700">{article.category || 'Uncategorised'}</span>
                  <span className="mt-1 block break-all text-xs text-slate-500">/articles/{article.slug}</span>
                </span>
                <i className="dashboard-disclosure-icon ri-arrow-down-s-line" aria-hidden="true" />
              </summary>
              <div className="dashboard-disclosure-body">
                <p className="line-clamp-3 text-sm leading-relaxed text-slate-700">{article.excerpt || 'No excerpt added yet.'}</p>
                <dl className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <dt className="dashboard-label">Author</dt>
                    <dd className="mt-1 text-sm font-semibold text-slate-900">{article.author || '-'}</dd>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <dt className="dashboard-label">Read time</dt>
                    <dd className="mt-1 text-sm font-semibold text-slate-900">{article.read_minutes} min</dd>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <dt className="dashboard-label">Order</dt>
                    <dd className="mt-1 text-sm font-semibold text-slate-900">{article.order}</dd>
                  </div>
                </dl>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button onClick={() => setEditing(article)} className="btn-primary min-h-10 px-4 text-sm font-semibold">
                    <i className="ri-edit-line" aria-hidden="true" />
                    Edit
                  </button>
                  {article.is_published && <a href={`/articles/${article.slug}`} target="_blank" rel="noreferrer" className="dashboard-action-secondary min-h-10">View</a>}
                  <button disabled={deleting !== null} onClick={() => remove(article)} className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50 disabled:opacity-40">
                    {deleting === article.id ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>
            </details>
          );
        })}
      </div>
    )}
  </div>;
}