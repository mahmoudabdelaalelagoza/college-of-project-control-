import type { CaseStudyDetail, CaseStudyPage } from './caseStudiesApi';

export interface CaseStudyOptions { search?: string; sector?: string; page?: number; pageSize?: number; }

/** Supplied editorial stories lead the collection; published CMS stories remain available. */
export function buildCaseStudyPage(editorial: CaseStudyDetail[], published: CaseStudyDetail[], options: CaseStudyOptions = {}): CaseStudyPage {
  const stories = new Map<string, CaseStudyDetail>();
  for (const item of [...editorial, ...published]) {
    if (stories.has(item.slug)) continue;
    if (/\b(?:demo|sample|placeholder|test)\b/i.test(item.title + ' ' + item.slug)) continue;
    stories.set(item.slug, item);
  }
  const query = options.search?.trim().toLocaleLowerCase() || '';
  const sector = options.sector?.trim().toLocaleLowerCase() || '';
  const items = [...stories.values()].filter(item => {
    if (sector && item.sector.toLocaleLowerCase() !== sector) return false;
    const text = [item.title, item.headline, item.summary, item.client_name, item.learner_name, item.role, item.sector, item.challenge, item.approach, item.outcome, ...(item.themes || [])].filter(Boolean).join(' ').toLocaleLowerCase();
    return !query || text.includes(query);
  });
  const page = Number.isFinite(options.page) ? Math.max(1, Math.floor(options.page!)) : 1;
  const pageSize = Number.isFinite(options.pageSize) ? Math.max(1, Math.min(100, Math.floor(options.pageSize!))) : 12;
  const start = (page - 1) * pageSize;
  return { count: items.length, next: start + pageSize < items.length ? String(page + 1) : null, previous: page > 1 ? String(page - 1) : null, results: items.slice(start, start + pageSize) };
}
