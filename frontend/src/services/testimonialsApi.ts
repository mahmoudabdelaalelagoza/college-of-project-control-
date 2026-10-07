import { isSupabaseConfigured, requireSupabaseClient, supabase } from '@/lib/supabase';
import { fromSupabase } from './supabaseFallback';

export interface Review {
  id: number;
  name: string;
  programme: string;
  programme_label: string;
  reviewer_type: 'professional' | 'employer';
  review: string;
  photo_url: string;
}

export interface ReviewProgramme {
  slug: string;
  name: string;
}

export const defaultReviewProgrammes: ReviewProgramme[] = [
  { slug: 'associate-project-manager-level-4', name: 'Associate Project Manager Level 4' },
  { slug: 'pcp-level-6', name: 'Project Controls Professional Level 6' },
  { slug: 'operational-pcp', name: 'Project Controls Professional Level 6 - Operational Pathway' },
  { slug: 'strategic-pcp', name: 'Project Controls Professional Level 6 - Strategic Pathway' },
  { slug: 'strategic-operational-pcp', name: 'Project Controls Professional Level 6 - Strategic + Operational Pathway' },
  { slug: 'chartered-pmo-pathway', name: 'Project Controls Professional Level 6 - Chartered PMO Pathway' },
  { slug: 'pmo-pcp', name: 'Certified PMO Professional Level 6' },
  { slug: 'engineering', name: 'Engineering & Manufacturing Project Controls Route' },
  { slug: 'public-sector', name: 'Public Sector Project Controls Route' },
  { slug: 'energy', name: 'Energy & Utilities Project Controls Route' },
  { slug: 'commercial', name: 'Commercial Project Controls Route' },
  { slug: 'ipc', name: 'Institute of Project Controls' },
];

const defaultProgrammeLabelBySlug = new Map(
  defaultReviewProgrammes.map((programme) => [programme.slug, programme.name]),
);

function fromRow(row: Record<string, unknown>): Review {
  const programme = String(row.programme ?? '');

  return {
    id: Number(row.id),
    name: String(row.name ?? ''),
    programme,
    programme_label: String(row.programme_label || defaultProgrammeLabelBySlug.get(programme) || programme),
    reviewer_type: String(row.reviewer_type ?? 'professional') as Review['reviewer_type'],
    review: String(row.review ?? ''),
    photo_url: String(row.photo_url ?? ''),
  };
}

function isMissingProgrammesTable(error: { code?: string; message?: string } | null | undefined) {
  return error?.code === '42P01' || /testimonial_programmes/i.test(error?.message ?? '');
}

async function fetchReviewsFromSupabase(programme?: string) {
  const supabaseClient = requireSupabaseClient();
  let query = supabaseClient
    .from('testimonials')
    .select('*')
    .eq('status', 'approved')
    .eq('consent', true)
    .order('is_featured', { ascending: false })
    .order('order', { ascending: true })
    .order('id', { ascending: true });

  if (programme) query = query.eq('programme', programme);

  const { data, error } = await query;
  if (error) throw error;

  return (data ?? []).map((row) => fromRow(row));
}

async function fetchProgrammesFromSupabase(): Promise<ReviewProgramme[]> {
  const supabaseClient = requireSupabaseClient();
  const { data, error } = await supabaseClient
    .from('testimonial_programmes')
    .select('slug,name')
    .eq('is_active', true)
    .order('order', { ascending: true })
    .order('name', { ascending: true });

  if (error) {
    if (isMissingProgrammesTable(error)) return defaultReviewProgrammes;
    throw error;
  }

  return (data ?? []).map((row) => ({ slug: String(row.slug ?? ''), name: String(row.name ?? '') })).filter((row) => row.slug && row.name);
}

async function resolveProgrammeLabel(programme: string) {
  if (!programme) return '';
  if (!isSupabaseConfigured || !supabase) return defaultProgrammeLabelBySlug.get(programme) || programme;

  const { data, error } = await supabase
    .from('testimonial_programmes')
    .select('name')
    .eq('slug', programme)
    .maybeSingle();

  if (error && !isMissingProgrammesTable(error)) throw error;
  return String(data?.name || defaultProgrammeLabelBySlug.get(programme) || programme);
}

export const fetchReviews = (programme?: string, _signal?: AbortSignal) =>
  fromSupabase(() => fetchReviewsFromSupabase(programme), 'testimonials');

export async function fetchReviewProgrammes(_signal?: AbortSignal) {
  if (!isSupabaseConfigured) return defaultReviewProgrammes;

  try {
    return await fetchProgrammesFromSupabase();
  } catch {
    return defaultReviewProgrammes;
  }
}

export async function submitReview(data: FormData) {
  const supabaseClient = requireSupabaseClient();
  const programme = String(data.get('programme') ?? '').trim();
  const payload = {
    name: String(data.get('name') ?? '').trim(),
    programme,
    programme_label: String(data.get('programme_label') || await resolveProgrammeLabel(programme)).trim(),
    reviewer_type: String(data.get('reviewer_type') ?? 'professional').trim(),
    review: String(data.get('review') ?? data.get('message') ?? '').trim(),
    photo_url: String(data.get('photo_url') ?? '').trim(),
    consent: data.get('consent') === 'true' || data.get('consent') === 'on' || data.get('consent') === '1',
    status: 'pending',
  };

  const { error } = await supabaseClient.from('testimonials').insert(payload);
  if (error) throw error;
}

export const programmeReviewRoutes: Record<string, string> = {
  '/associate-project-manager-level-4': 'associate-project-manager-level-4',
  '/project-controls-professional-level-6': 'pcp-level-6',
  '/project-controls-professional/strategic-route': 'strategic-pcp',
  '/strategic-pcp': 'strategic-pcp',
  '/project-controls-professional/operational-route': 'operational-pcp',
  '/operational-pcp': 'operational-pcp',
  '/project-controls-professional/strategic-operational-route': 'strategic-operational-pcp',
  '/strategic-operational-pcp': 'strategic-operational-pcp',
  '/project-controls-professional/pmo-governance-route': 'pmo-pcp',
  '/pmo-pcp': 'pmo-pcp',
  '/project-controls-professional/chartered-pmo-pathway': 'chartered-pmo-pathway',
  '/chartered-pmo-pathway': 'chartered-pmo-pathway',
  '/project-controls-professional/engineering-manufacturing-aerospace-route': 'engineering',
  '/operational-pcp-engineering': 'engineering',
  '/project-controls-professional/public-sector-councils-route': 'public-sector',
  '/operational-pcp-public-sector': 'public-sector',
  '/project-controls-professional/energy-oil-gas-utilities-route': 'energy',
  '/operational-pcp-energy': 'energy',
  '/commercial-project-controls-route': 'commercial',
  '/campaign/commercial-route': 'commercial',
  '/institute-of-project-controls': 'ipc',
  '/ipc': 'ipc',
};
