import { requireSupabaseClient } from '@/lib/supabase';
import { fromSupabase } from './supabaseFallback';

export interface MaintenancePublicSettings {
  enabled: boolean;
  site_wide: boolean;
  protected_paths: string[];
  heading: string;
  message: string;
  pin_required: boolean;
  updated_at: string;
}

const fallbackSettings: MaintenancePublicSettings = {
  enabled: false,
  site_wide: true,
  protected_paths: [],
  heading: 'Website under maintenance',
  message: 'We are making updates. Please check back soon.',
  pin_required: false,
  updated_at: '',
};

function normaliseSettings(value: unknown): MaintenancePublicSettings {
  const data = (value ?? {}) as Partial<MaintenancePublicSettings>;
  return {
    ...fallbackSettings,
    ...data,
    protected_paths: Array.isArray(data.protected_paths) ? data.protected_paths.filter(Boolean) : [],
  };
}

async function fetchMaintenanceFromSupabase(): Promise<MaintenancePublicSettings> {
  const { data, error } = await requireSupabaseClient().rpc('get_maintenance_settings');
  if (error) throw error;
  return normaliseSettings(data);
}

async function verifyMaintenancePinFromSupabase(pin: string): Promise<boolean> {
  const { data, error } = await requireSupabaseClient().rpc('verify_maintenance_pin', { input_pin: pin });
  if (error) throw error;
  return data === true;
}

export async function fetchMaintenanceSettings(): Promise<MaintenancePublicSettings> {
  return fromSupabase(fetchMaintenanceFromSupabase, 'fetchMaintenanceSettings');
}

export async function verifyMaintenancePin(pin: string): Promise<boolean> {
  return fromSupabase(() => verifyMaintenancePinFromSupabase(pin), 'verifyMaintenancePin');
}