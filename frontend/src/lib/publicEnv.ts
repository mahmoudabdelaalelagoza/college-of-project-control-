type EnvMap = Record<string, string | undefined>;

declare const process: { env: EnvMap } | undefined;

const viteEnv = (import.meta as ImportMeta & { env?: EnvMap }).env;
const hasProcess = typeof process !== 'undefined';

// Next only inlines NEXT_PUBLIC_* values for literal `process.env.NAME` reads,
// so each key must be spelled out in full here.
const publicEnv: EnvMap = {
  VITE_GTM_ID: viteEnv?.VITE_GTM_ID,
  VITE_SUPABASE_URL: viteEnv?.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: viteEnv?.VITE_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_GTM_ID: hasProcess ? process.env.NEXT_PUBLIC_GTM_ID : undefined,
  NEXT_PUBLIC_SUPABASE_URL: hasProcess ? process.env.NEXT_PUBLIC_SUPABASE_URL : undefined,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: hasProcess ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : undefined,
};

export function getPublicEnv(viteKey: string, nextKey: string, fallback = '') {
  // Values pasted into CI secrets often carry a trailing newline, which breaks URLs and auth headers.
  return (publicEnv[viteKey]?.trim() || publicEnv[nextKey]?.trim() || fallback).trim();
}