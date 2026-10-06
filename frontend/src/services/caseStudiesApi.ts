import { requireSupabaseClient } from '@/lib/supabase';
import { fromSupabase } from './supabaseFallback';


export interface CaseStudyMetric { label: string; value: string }
export interface CaseStudySummary { id: number; title: string; slug: string; sector: string; client_name: string; headline: string; summary: string; metrics: CaseStudyMetric[]; image_url: string; image_alt: string; is_featured: boolean; published_at: string }
export interface CaseStudyDetail extends CaseStudySummary { challenge: string; approach: string; outcome: string; updated_at: string }
export interface CaseStudyPage { count: number; next: string | null; previous: string | null; results: CaseStudySummary[] }
export class CaseStudyRequestError extends Error { status: number; constructor(status: number) { super(`Unable to load case studies (${status})`); this.status = status; } }

function metrics(value: unknown): CaseStudyMetric[] { return Array.isArray(value) ? value as CaseStudyMetric[] : []; }
function fromRow(row: Record<string, unknown>): CaseStudyDetail {
  return {
    id: Number(row.id), title: String(row.title ?? ''), slug: String(row.slug ?? ''), sector: String(row.sector ?? ''), client_name: String(row.client_name ?? ''),
    headline: String(row.headline ?? ''), summary: String(row.summary ?? ''), metrics: metrics(row.metrics), image_url: String(row.image_url ?? ''), image_alt: String(row.image_alt ?? ''),
    is_featured: Boolean(row.is_featured), published_at: String(row.published_at ?? ''), challenge: String(row.challenge ?? ''), approach: String(row.approach ?? ''), outcome: String(row.outcome ?? ''), updated_at: String(row.updated_at ?? ''),
  };
}
function paginated(items: CaseStudyDetail[], requestedPage: number, pageSize: number): CaseStudyPage {
  const count = items.length; const start = Math.max(0, requestedPage - 1) * pageSize;
  return { count, next: start + pageSize < count ? String(requestedPage + 1) : null, previous: requestedPage > 1 ? String(requestedPage - 1) : null, results: items.slice(start, start + pageSize) };
}
async function fetchCaseStudiesFromSupabase(options: { search?: string; sector?: string; page?: number; pageSize?: number } = {}) {
  const supabase = requireSupabaseClient();
  let query = supabase.from('case_studies').select('*').eq('is_published', true).not('published_at', 'is', null).lte('published_at', new Date().toISOString()).order('order', { ascending: true }).order('published_at', { ascending: false }).order('id', { ascending: false });
  if (options.sector) query = query.ilike('sector', options.sector);
  if (options.search?.trim()) { const search = `%${options.search.trim()}%`; query = query.or(`title.ilike.${search},headline.ilike.${search},summary.ilike.${search},sector.ilike.${search},client_name.ilike.${search},challenge.ilike.${search},approach.ilike.${search},outcome.ilike.${search}`); }
  const { data, error } = await query; if (error) throw error;
  return paginated((data ?? []).map((row) => fromRow(row)), options.page ?? 1, options.pageSize ?? 12);
}
async function fetchCaseStudyFromSupabase(slug: string) {
  const supabase = requireSupabaseClient();
  const { data, error } = await supabase.from('case_studies').select('*').eq('slug', slug).eq('is_published', true).not('published_at', 'is', null).lte('published_at', new Date().toISOString()).maybeSingle();
  if (error) throw error; if (!data) throw new CaseStudyRequestError(404); return fromRow(data);
}
export function fetchCaseStudies(options: { search?: string; sector?: string; page?: number; pageSize?: number } = {}, _signal?: AbortSignal) {
  return fromSupabase(() => fetchCaseStudiesFromSupabase(options), 'case studies');
}
export function fetchCaseStudy(slug: string, _signal?: AbortSignal) {
  return fromSupabase(() => fetchCaseStudyFromSupabase(slug), 'case study detail');
}
