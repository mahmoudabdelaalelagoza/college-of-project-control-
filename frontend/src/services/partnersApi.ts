import { requireSupabaseClient } from '@/lib/supabase';
import { fromSupabase } from './supabaseFallback';

export interface Partner {
  id: number;
  name: string;
  imageUrl: string;
  linkUrl: string;
}

async function fetchPartnersFromSupabase(): Promise<Partner[]> {
  const { data, error } = await requireSupabaseClient()
    .from('partners')
    .select('id,name,image_url,link_url,order,is_active')
    .eq('is_active', true)
    .order('order', { ascending: true })
    .order('id', { ascending: true });

  if (error) throw error;
  return (data ?? []).map((item) => ({
    id: Number(item.id),
    name: item.name ?? '',
    imageUrl: item.image_url ?? '',
    linkUrl: item.link_url ?? '',
  }));
}

export async function fetchPartners(): Promise<Partner[]> {
  return fromSupabase(fetchPartnersFromSupabase, 'fetchPartners');
}