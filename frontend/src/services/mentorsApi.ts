import { requireSupabaseClient } from '@/lib/supabase';
import { fromSupabase } from './supabaseFallback';

export interface Mentor {
  id: number;
  initials: string;
  name: string;
  role: string;
  affiliation: string;
  specialties: string[];
  body: string;
  imageUrl: string;
  linkedinUrl: string;
}

type MentorRow = {
  id: number;
  initials: string | null;
  name: string | null;
  role_title: string | null;
  affiliation: string | null;
  specialties: string[] | string | null;
  biography: string | null;
  image_url: string | null;
  linkedin_url: string | null;
};

function displayInitials(initials: string | null | undefined, name: string) {
  if (initials && initials.trim().length > 0) return initials.trim().toUpperCase();
  return name
    .replace('Dr.', '')
    .split(' ')
    .filter((part) => part.length > 0)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function normalizeSpecialties(value: MentorRow['specialties']) {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  return String(value ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function toMentor(item: MentorRow): Mentor {
  const name = item.name ?? '';
  return {
    id: Number(item.id),
    initials: displayInitials(item.initials, name),
    name,
    role: item.role_title ?? '',
    affiliation: item.affiliation ?? '',
    specialties: normalizeSpecialties(item.specialties),
    body: item.biography ?? '',
    imageUrl: item.image_url ?? '',
    linkedinUrl: item.linkedin_url ?? '',
  };
}

async function fetchMentorsFromSupabase(): Promise<Mentor[]> {
  const { data, error } = await requireSupabaseClient()
    .from('mentors')
    .select('id,initials,name,role_title,affiliation,specialties,biography,image_url,linkedin_url,order,is_active')
    .eq('is_active', true)
    .order('order', { ascending: true })
    .order('id', { ascending: true });

  if (error) throw error;
  return (data ?? []).map(toMentor);
}

async function fetchMentorFromSupabase(id: string | number): Promise<Mentor> {
  const { data, error } = await requireSupabaseClient()
    .from('mentors')
    .select('id,initials,name,role_title,affiliation,specialties,biography,image_url,linkedin_url,order,is_active')
    .eq('is_active', true)
    .eq('id', Number(id))
    .maybeSingle();

  if (error) throw error;
  if (!data) throw new Error(`Mentor not found: ${id}`);
  return toMentor(data);
}

export async function fetchMentors(): Promise<Mentor[]> {
  return fromSupabase(fetchMentorsFromSupabase, 'fetchMentors');
}

export async function fetchMentor(id: string | number): Promise<Mentor> {
  return fromSupabase(() => fetchMentorFromSupabase(id), 'fetchMentor');
}