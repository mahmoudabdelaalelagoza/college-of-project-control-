import Footer from '@/components/feature/Footer';
import CaseStudiesHero from './components/CaseStudiesHero';
import CaseStudiesGrid from './components/CaseStudiesGrid';
import { fetchCaseStudies, type CaseStudyPage } from '@/services/caseStudiesApi';
import { buildCaseStudyPage } from '@/services/caseStudyCollection';
import { pcpCaseStudies } from '@/data/pcpCaseStudies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function CaseStudiesPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get('search') || '';
  const sector = params.get('sector') || '';
  const page = Math.max(1, Number.parseInt(params.get('page') || '1', 10) || 1);
  const [data, setData] = useState<CaseStudyPage | null>(() => buildCaseStudyPage(pcpCaseStudies, [], { search: query, sector, page }));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [revision, setRevision] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setData(buildCaseStudyPage(pcpCaseStudies, [], { search: query, sector, page }));
    setLoading(true);
    setError(false);
    fetchCaseStudies({ search: query, sector, page }, controller.signal)
      .then(result => { if (!controller.signal.aborted) setData(result); })
      .catch(() => { if (!controller.signal.aborted) setError(true); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [query, sector, page, revision]);

  const search = (searchText: string, selectedSector: string) => {
    setParams({ ...(searchText ? { search: searchText } : {}), ...(selectedSector ? { sector: selectedSector } : {}) });
  };
  const navigatePage = (next: number) => {
    setParams({ ...(query ? { search: query } : {}), ...(sector ? { sector } : {}), page: String(next) });
    document.getElementById('case-study-grid')?.scrollIntoView({ block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background-50">
      <main>
        <CaseStudiesHero />
        <CaseStudiesGrid query={query} sector={sector} page={page} data={data} loading={loading} error={error} onSearch={search} onClearSearch={() => setParams({})} onRetry={() => setRevision(value => value + 1)} onNavigatePage={navigatePage} />
      </main>
      <Footer />
    </div>
  );
}
