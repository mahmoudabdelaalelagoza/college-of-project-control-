import { requireSupabaseClient } from '@/lib/supabase';
import { fromSupabase } from './supabaseFallback';

export interface ShortCourse {
  id?: number;
  slug: string;
  title: string;
  category: string;
  duration: string;
  format: string;
  owner: string;
  audience: string;
  summary: string;
  focus: string[];
  detail?: ShortCourseDetail;
  icon: string;
  imageUrl: string;
  order?: number;
}

export interface ShortCourseDetail {
  positioning?: string;
  bestFor?: string[];
  learningBlocks?: Array<{ title: string; body: string }>;
  workplaceOutputs?: string[];
  professionalContext?: string;
}

type ShortCourseRow = Omit<ShortCourse, 'imageUrl'> & {
  image_url: string | null;
  is_active?: boolean;
};

function normalizeFocus(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((item) => String(item)).filter(Boolean);
  return [];
}

function normalizeDetail(value: unknown): ShortCourseDetail {
  return value && typeof value === 'object' && !Array.isArray(value) ? value as ShortCourseDetail : {};
}

function toShortCourse(item: ShortCourseRow): ShortCourse {
  return {
    id: item.id === undefined ? undefined : Number(item.id),
    slug: item.slug ?? '',
    title: item.title ?? '',
    category: item.category ?? '',
    duration: item.duration ?? '',
    format: item.format ?? '',
    owner: item.owner ?? '',
    audience: item.audience ?? '',
    summary: item.summary ?? '',
    focus: normalizeFocus(item.focus),
    detail: normalizeDetail(item.detail),
    icon: item.icon ?? '',
    imageUrl: item.image_url ?? '',
    order: item.order === undefined ? undefined : Number(item.order),
  };
}

async function fetchShortCoursesFromSupabase(): Promise<ShortCourse[]> {
  const { data, error } = await requireSupabaseClient()
    .from('short_courses')
    .select('id,slug,title,category,duration,format,owner,audience,summary,focus,detail,icon,image_url,order,is_active')
    .eq('is_active', true)
    .order('order', { ascending: true })
    .order('title', { ascending: true });

  if (error) throw error;
  return (data ?? []).map(toShortCourse);
}

async function fetchShortCourseFromSupabase(slug: string): Promise<ShortCourse> {
  const { data, error } = await requireSupabaseClient()
    .from('short_courses')
    .select('id,slug,title,category,duration,format,owner,audience,summary,focus,detail,icon,image_url,order,is_active')
    .eq('is_active', true)
    .eq('slug', slug)
    .maybeSingle();

  if (error) throw error;
  if (!data) throw new Error(`Short course not found: ${slug}`);
  return toShortCourse(data);
}

export async function fetchShortCourses(_signal?: AbortSignal): Promise<ShortCourse[]> {
  return fromSupabase(() => fetchShortCoursesFromSupabase(), 'fetchShortCourses');
}

export async function fetchShortCourse(slug: string, _signal?: AbortSignal): Promise<ShortCourse> {
  return fromSupabase(() => fetchShortCourseFromSupabase(slug), 'fetchShortCourse');
}