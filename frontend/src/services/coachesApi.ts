import { requireSupabaseClient } from '@/lib/supabase';
import { fromSupabase } from './supabaseFallback';

export interface Coach {
  id: number;
  initials: string;
  name: string;
  qualification: string;
  focus: string;
  imageUrl: string;
}

type CoachRow = {
  id: number;
  initials?: string | null;
  name: string | null;
  qualification: string | null;
  focus: string | null;
  image_url: string | null;
};

function displayInitials(name: string) {
  return name
    .replace('Dr.', '')
    .split(' ')
    .filter((part) => part.length > 0)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function toCoach(item: CoachRow): Coach {
  const name = item.name ?? '';
  return {
    id: Number(item.id),
    initials: item.initials?.trim().toUpperCase() || displayInitials(name),
    name,
    qualification: item.qualification ?? '',
    focus: item.focus ?? '',
    imageUrl: item.image_url ?? '',
  };
}

async function fetchCoachesFromSupabase(): Promise<Coach[]> {
  const { data, error } = await requireSupabaseClient()
    .from('coaches')
    .select('id,initials,name,qualification,focus,image_url,order,is_active')
    .eq('is_active', true)
    .order('order', { ascending: true })
    .order('id', { ascending: true });

  if (error) throw error;
  return (data ?? []).map(toCoach);
}

export async function fetchCoaches(): Promise<Coach[]> {
  return fromSupabase(fetchCoachesFromSupabase, 'fetchCoaches');
}