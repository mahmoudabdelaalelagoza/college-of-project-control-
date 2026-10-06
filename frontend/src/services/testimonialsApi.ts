import { requireSupabaseClient } from '@/lib/supabase';
import { fromSupabase } from './supabaseFallback';

export interface Review { id: number; name: string; programme: string; programme_label: string; reviewer_type: 'professional' | 'employer'; review: string; photo_url: string }
export interface ReviewProgramme { slug: string; name: string }
function fromRow(row: Record<string, unknown>): Review { return { id: Number(row.id), name: String(row.name ?? ''), programme: String(row.programme ?? ''), programme_label: String(row.programme_label || row.programme || ''), reviewer_type: String(row.reviewer_type ?? 'professional') as Review['reviewer_type'], review: String(row.review ?? ''), photo_url: String(row.photo_url ?? '') }; }
async function fetchReviewsFromSupabase(programme?: string) { const supabase = requireSupabaseClient(); let query = supabase.from('testimonials').select('*').eq('status', 'approved').eq('consent', true).order('is_featured', { ascending: false }).order('order', { ascending: true }).order('id', { ascending: true }); if (programme) query = query.eq('programme', programme); const { data, error } = await query; if (error) throw error; return (data ?? []).map((row) => fromRow(row)); }
export const fetchReviews = (programme?: string, _signal?: AbortSignal) => fromSupabase(() => fetchReviewsFromSupabase(programme), 'testimonials');
export const fetchReviewProgrammes = (_signal?: AbortSignal) => fromSupabase(async () => { const reviews = await fetchReviewsFromSupabase(); const map = new Map<string, string>(); for (const review of reviews) if (review.programme) map.set(review.programme, review.programme_label || review.programme); return [...map].map(([slug, name]) => ({ slug, name })); }, 'testimonial programmes');
export async function submitReview(data: FormData) {
  const supabase = requireSupabaseClient();
  const payload = {
    name: String(data.get('name') ?? '').trim(),
    programme: String(data.get('programme') ?? '').trim(),
    programme_label: String(data.get('programme_label') ?? data.get('programme') ?? '').trim(),
    reviewer_type: String(data.get('reviewer_type') ?? 'professional').trim(),
    review: String(data.get('review') ?? data.get('message') ?? '').trim(),
    photo_url: String(data.get('photo_url') ?? '').trim(),
    consent: data.get('consent') === 'true' || data.get('consent') === 'on' || data.get('consent') === '1',
    status: 'pending',
  };
  const { error } = await supabase.from('testimonials').insert(payload);
  if (error) throw error;
}
export const programmeReviewRoutes: Record<string, string> = { '/associate-project-manager-level-4': 'associate-project-manager-level-4', '/project-controls-professional-level-6': 'pcp-level-6', '/project-controls-professional/strategic-route': 'strategic-pcp', '/strategic-pcp': 'strategic-pcp', '/project-controls-professional/operational-route': 'operational-pcp', '/project-controls-professional/strategic-operational-route': 'strategic-operational-pcp', '/strategic-operational-pcp': 'strategic-operational-pcp', '/project-controls-professional/pmo-governance-route': 'pmo-pcp', '/pmo-pcp': 'pmo-pcp', '/project-controls-professional/chartered-pmo-pathway': 'chartered-pmo-pathway', '/chartered-pmo-pathway': 'chartered-pmo-pathway', '/project-controls-professional/engineering-manufacturing-aerospace-route': 'engineering', '/operational-pcp-engineering': 'engineering', '/project-controls-professional/public-sector-councils-route': 'public-sector', '/operational-pcp-public-sector': 'public-sector', '/project-controls-professional/energy-oil-gas-utilities-route': 'energy', '/operational-pcp-energy': 'energy', '/commercial-project-controls-route': 'commercial', '/campaign/commercial-route': 'commercial', '/institute-of-project-controls': 'ipc', '/ipc': 'ipc' };