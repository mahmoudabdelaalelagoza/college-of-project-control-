import { requireSupabaseClient } from '@/lib/supabase';
import { fromSupabase } from './supabaseFallback';
import { pcpCaseStudies, pcpCaseStudyBySlug } from '@/data/pcpCaseStudies';
import { buildCaseStudyPage, type CaseStudyOptions } from './caseStudyCollection';


export interface CaseStudyMetric { label: string; value: string }
export interface CaseStudySummary { learner_name?: string; role?: string; employer_logo_url?: string; themes?: string[]; id: number; title: string; slug: string; sector: string; client_name: string; headline: string; summary: string; metrics: CaseStudyMetric[]; image_url: string; image_alt: string; is_featured: boolean; published_at: string }
export interface CaseStudyDetail extends CaseStudySummary { challenge: string; approach: string; outcome: string; updated_at: string; quote?: string; source_note?: string; evidence?: { title: string; description: string }[] }
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
async function fetchPublishedCaseStudies(signal?: AbortSignal): Promise<CaseStudyDetail[]> {
  const supabase = requireSupabaseClient();
  let query = supabase.from('case_studies').select('*').eq('is_published', true).not('published_at', 'is', null).lte('published_at', new Date().toISOString()).order('order', { ascending: true }).order('published_at', { ascending: false }).order('id', { ascending: false });
  if (signal) query = query.abortSignal(signal);
  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []).map(row => fromRow(row));
}

async function fetchCaseStudyFromSupabase(slug: string, signal?: AbortSignal) {
  const supabase = requireSupabaseClient();
  let query = supabase.from('case_studies').select('*').eq('slug', slug).eq('is_published', true).not('published_at', 'is', null).lte('published_at', new Date().toISOString());
  if (signal) query = query.abortSignal(signal);
  const { data, error } = await query.maybeSingle();
  if (error) throw error;
  if (!data) throw new CaseStudyRequestError(404);
  return fromRow(data);
}

export async function fetchCaseStudies(options: CaseStudyOptions = {}, signal?: AbortSignal) {
  signal?.throwIfAborted();
  let published: CaseStudyDetail[] = [];
  try {
    published = await fromSupabase(() => fetchPublishedCaseStudies(signal), 'case studies');
  } catch (error) {
    if (signal?.aborted) throw error;
    // Bundled editorial stories stay available when the additional CMS collection cannot be reached.
  }
  signal?.throwIfAborted();
  return buildCaseStudyPage(pcpCaseStudies, published, options);
}

export async function fetchCaseStudy(slug: string, signal?: AbortSignal) {
  signal?.throwIfAborted();
  const editorial = pcpCaseStudyBySlug.get(slug);
  if (editorial) return editorial;
  return fromSupabase(() => fetchCaseStudyFromSupabase(slug, signal), 'case study detail');
}
