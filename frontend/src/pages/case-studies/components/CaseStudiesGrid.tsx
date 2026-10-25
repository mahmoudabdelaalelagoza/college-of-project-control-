import CaseStudyCard from '@/components/feature/CaseStudyCard';
import type { CaseStudyPage } from '@/services/caseStudiesApi';
import '@/components/feature/case-studies.css';

interface CaseStudiesGridProps {
  query: string;
  sector: string;
  page: number;
  data: CaseStudyPage | null;
  loading: boolean;
  error: boolean;
  onSearch: (search: string, sector: string) => void;
  onClearSearch: () => void;
  onRetry: () => void;
  onNavigatePage: (next: number) => void;
}

export default function CaseStudiesGrid({ query, sector, page, data, loading, error, onClearSearch, onRetry, onNavigatePage }: CaseStudiesGridProps) {
  return (
    <section id="case-study-grid" className="py-12 md:py-16">
      <div className="container-site">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div><h2 className="text-section-2xl font-bold text-foreground-950">{query ? `Results for “${query}”` : sector ? sector : 'Explore the learner stories'}</h2>{data && <p role="status" className="mt-2 text-sm text-foreground-600">{data.count} {data.count === 1 ? 'case study' : 'case studies'}{query || sector ? ' found' : ' to explore'}</p>}</div>
          {(query || sector) && <button type="button" onClick={onClearSearch} className="min-h-11 text-sm font-semibold text-primary-700 underline">Clear filters</button>}
        </div>
        {loading && !data ? <p role="status">Loading case studies…</p> : error ? <div role="alert"><p>We could not load the case studies. Please try again.</p><button onClick={onRetry} className="btn-primary mt-4 px-5 py-3">Try again</button></div> : data && <>
          {data.results.length ? <div className="learner-study-grid" style={{ marginTop: 0 }}>{data.results.map(item => <CaseStudyCard key={item.slug} item={item} />)}</div> : <div className="rounded-2xl border border-background-200 bg-white p-8 text-center"><h3 className="text-xl font-bold">No matching case studies</h3><p className="mt-3 text-foreground-600">Try a different name, organisation or learning topic.</p><button type="button" onClick={onClearSearch} className="mt-4 min-h-11 text-sm font-semibold text-primary-700 underline">Show all stories</button></div>}
          {(data.next || data.previous) && <nav aria-label="Case study pages" className="mt-10 flex flex-wrap items-center justify-center gap-4"><button disabled={!data.previous} onClick={() => onNavigatePage(page - 1)} className="min-h-11 rounded-lg border border-primary-300 px-5 disabled:opacity-40">Previous</button><span>Page {page} of {Math.ceil(data.count / 12)}</span><button disabled={!data.next} onClick={() => onNavigatePage(page + 1)} className="min-h-11 rounded-lg border border-primary-300 px-5 disabled:opacity-40">Next</button></nav>}
        </>}
      </div>
    </section>
  );
}
