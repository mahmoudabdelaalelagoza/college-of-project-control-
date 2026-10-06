import { requireSupabaseClient } from '@/lib/supabase';
import { fromSupabase } from './supabaseFallback';

export interface Sector {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  linkUrl: string;
}

type SectorRow = {
  id: number;
  slug: string | null;
  title: string | null;
  description: string | null;
  icon: string | null;
  image_url: string | null;
  link_url: string | null;
};

function toSector(item: SectorRow): Sector {
  return {
    id: Number(item.id),
    slug: item.slug ?? '',
    title: item.title ?? '',
    description: item.description ?? '',
    icon: item.icon ?? '',
    imageUrl: item.image_url ?? '',
    linkUrl: item.link_url ?? '',
  };
}

async function fetchSectorsFromSupabase(): Promise<Sector[]> {
  const { data, error } = await requireSupabaseClient()
    .from('sectors')
    .select('id,slug,title,description,icon,image_url,link_url,order,is_active')
    .eq('is_active', true)
    .order('order', { ascending: true })
    .order('id', { ascending: true });

  if (error) throw error;
  return (data ?? []).map(toSector);
}

async function fetchSectorFromSupabase(slug: string): Promise<Sector> {
  const { data, error } = await requireSupabaseClient()
    .from('sectors')
    .select('id,slug,title,description,icon,image_url,link_url,order,is_active')
    .eq('is_active', true)
    .eq('slug', slug)
    .maybeSingle();

  if (error) throw error;
  if (!data) throw new Error(`Sector not found: ${slug}`);
  return toSector(data);
}

export async function fetchSectors(): Promise<Sector[]> {
  return fromSupabase(fetchSectorsFromSupabase, 'fetchSectors');
}

export async function fetchSector(slug: string): Promise<Sector> {
  return fromSupabase(() => fetchSectorFromSupabase(slug), 'fetchSector');
}