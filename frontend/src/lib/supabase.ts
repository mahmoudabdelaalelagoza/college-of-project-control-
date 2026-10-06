import { createClient } from '@supabase/supabase-js';
import { getPublicEnv } from './publicEnv';

const supabaseUrl = getPublicEnv('VITE_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_URL');
const supabaseAnonKey = getPublicEnv('VITE_SUPABASE_ANON_KEY', 'NEXT_PUBLIC_SUPABASE_ANON_KEY');

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
      },
    })
  : null;

export function requireSupabaseClient() {
  if (!supabase) {
    throw new Error('Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
  }
  return supabase;
}
