import { requireSupabaseClient } from '@/lib/supabase';
import { fromSupabase } from './supabaseFallback';

export interface ProfessionalCredential {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  linkUrl: string;
}

async function fetchProfessionalCredentialsFromSupabase(): Promise<ProfessionalCredential[]> {
  const { data, error } = await requireSupabaseClient()
    .from('professional_credentials')
    .select('id,name,role,image_url,link_url,order,is_active')
    .eq('is_active', true)
    .order('order', { ascending: true })
    .order('id', { ascending: true });

  if (error) throw error;
  return (data ?? []).map((item) => ({
    id: Number(item.id),
    name: item.name ?? '',
    role: item.role ?? '',
    imageUrl: item.image_url ?? '',
    linkUrl: item.link_url ?? '',
  }));
}

export async function fetchProfessionalCredentials(): Promise<ProfessionalCredential[]> {
  return fromSupabase(fetchProfessionalCredentialsFromSupabase, 'fetchProfessionalCredentials');
}