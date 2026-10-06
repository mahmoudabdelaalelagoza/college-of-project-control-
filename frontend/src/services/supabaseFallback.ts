import { isSupabaseConfigured } from '@/lib/supabase';

export async function fromSupabase<T>(
  loadFromSupabase: () => Promise<T>,
  context: string,
): Promise<T> {
  if (!isSupabaseConfigured) {
    throw new Error(`${context}: Supabase is not configured.`);
  }

  return loadFromSupabase();
}