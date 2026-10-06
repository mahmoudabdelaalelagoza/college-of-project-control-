import { requireSupabaseClient } from '@/lib/supabase';
import { fromSupabase } from './supabaseFallback';

export interface IpcImage { id: number; image_url: string; alt_text: string; order: number; is_active: boolean; }

async function fetchIpcImagesFromSupabase(): Promise<IpcImage[]> {
  const { data, error } = await requireSupabaseClient()
    .from('ipc_images')
    .select('id,image_url,alt_text,order,is_active')
    .eq('is_active', true)
    .order('order', { ascending: true })
    .order('id', { ascending: true });

  if (error) throw error;
  return (data ?? []).map((item) => ({
    id: Number(item.id),
    image_url: item.image_url ?? '',
    alt_text: item.alt_text ?? '',
    order: Number(item.order ?? 0),
    is_active: Boolean(item.is_active),
  }));
}

export async function fetchIpcImages(): Promise<IpcImage[]> {
  return fromSupabase(fetchIpcImagesFromSupabase, 'fetchIpcImages');
}