type EnvMap = Record<string, string | undefined>;

declare const process: { env?: EnvMap } | undefined;

const viteEnv = (import.meta as ImportMeta & { env?: EnvMap }).env;
const nodeEnv = typeof process === 'undefined' ? undefined : process.env;

const publicEnv: EnvMap = {
  VITE_GTM_ID: viteEnv?.VITE_GTM_ID,
  VITE_SUPABASE_URL: viteEnv?.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: viteEnv?.VITE_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_GTM_ID: nodeEnv?.NEXT_PUBLIC_GTM_ID,
  NEXT_PUBLIC_SUPABASE_URL: nodeEnv?.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: nodeEnv?.NEXT_PUBLIC_SUPABASE_ANON_KEY,
};

export function getPublicEnv(viteKey: string, nextKey: string, fallback = '') {
  return publicEnv[viteKey] ?? publicEnv[nextKey] ?? fallback;
}