import { requireSupabaseClient } from '@/lib/supabase';
import { fromSupabase } from './supabaseFallback';


export interface ArticleSummary {
  id: number; title: string; slug: string; excerpt: string; category: string; author: string;
  image_url: string; image_alt: string; read_minutes: number; published_at: string;
}
export interface ArticleDetail extends ArticleSummary { content: string; updated_at: string }
export interface ArticlePage { count: number; next: string | null; previous: string | null; results: ArticleSummary[] }
export class ArticleRequestError extends Error {
  status: number;
  constructor(status: number) { super(`Unable to load articles (${status})`); this.status = status; }
}

function articleFromRow(row: Record<string, unknown>): ArticleDetail {
  return {
    id: Number(row.id),
    title: String(row.title ?? ''),
    slug: String(row.slug ?? ''),
    excerpt: String(row.excerpt ?? ''),
    category: String(row.category ?? ''),
    author: String(row.author ?? ''),
    image_url: String(row.image_url ?? ''),
    image_alt: String(row.image_alt ?? ''),
    read_minutes: Number(row.read_minutes ?? 1),
    published_at: String(row.published_at ?? ''),
    content: String(row.content ?? ''),
    updated_at: String(row.updated_at ?? ''),
  };
}

function paginated(items: ArticleDetail[], requestedPage: number, pageSize: number): ArticlePage {
  const count = items.length;
  const start = Math.max(0, requestedPage - 1) * pageSize;
  return {
    count,
    next: start + pageSize < count ? String(requestedPage + 1) : null,
    previous: requestedPage > 1 ? String(requestedPage - 1) : null,
    results: items.slice(start, start + pageSize),
  };
}

async function fetchArticlesFromSupabase(options: { search?: string; page?: number; pageSize?: number; exclude?: string } = {}) {
  const supabase = requireSupabaseClient();
  let query = supabase
    .from('articles')
    .select('*')
    .eq('is_published', true)
    .not('published_at', 'is', null)
    .lte('published_at', new Date().toISOString())
    .order('order', { ascending: true })
    .order('published_at', { ascending: false })
    .order('id', { ascending: false });
  if (options.exclude) query = query.neq('slug', options.exclude);
  if (options.search?.trim()) {
    const search = `%${options.search.trim()}%`;
    query = query.or(`title.ilike.${search},excerpt.ilike.${search},category.ilike.${search},content.ilike.${search}`);
  }
  const { data, error } = await query;
  if (error) throw error;
  return paginated((data ?? []).map((row) => articleFromRow(row)), options.page ?? 1, options.pageSize ?? 12);
}

async function fetchArticleFromSupabase(slug: string): Promise<ArticleDetail> {
  const supabase = requireSupabaseClient();
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .not('published_at', 'is', null)
    .lte('published_at', new Date().toISOString())
    .maybeSingle();
  if (error) throw error;
  if (!data) throw new ArticleRequestError(404);
  return articleFromRow(data);
}

export async function fetchArticles(options: { search?: string; page?: number; pageSize?: number; exclude?: string } = {}, _signal?: AbortSignal): Promise<ArticlePage> {
  return fromSupabase(() => fetchArticlesFromSupabase(options), 'articles');
}

export async function fetchArticle(slug: string, _signal?: AbortSignal): Promise<ArticleDetail> {
  return fromSupabase(() => fetchArticleFromSupabase(slug), 'article detail');
}
