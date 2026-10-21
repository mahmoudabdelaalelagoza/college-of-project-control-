import SiteLink from '@/components/base/SiteLink';
import PmoSection from './PmoSection';

const insightsArticles = [
  {
    title: 'Why Strong PMOs Focus on Decision Confidence',
    size: 'large',
  },
  {
    title: 'From Status Reporting to Executive Insight',
    size: 'small',
  },
  {
    title: 'How Integrated Controls Improve Governance',
    size: 'small',
  },
  {
    title: 'APM Recognition and the ChPP Journey',
    size: 'small',
  },
];


export default function PMOINSIGHTS() {
  return (
    <PmoSection tag="From the knowledge hub" title="PMO insights">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {insightsArticles.map((article, index) => <article key={article.title} className="flex min-w-0 flex-col rounded-xl border border-background-200 bg-white p-6 shadow-sm"><span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-xl text-primary-700" aria-hidden="true"><i className="ri-article-line" /></span>{index === 0 && <p className="mb-2 text-xs font-bold uppercase tracking-wider text-secondary-600">Featured</p>}<h3 className="font-heading text-xl font-bold leading-snug text-foreground-950">{article.title}</h3>{index === 0 && <p className="mt-3 text-sm leading-7 text-foreground-600">Strong PMOs do not simply report status. They build the confidence that enables better decisions, clearer governance and more reliable delivery.</p>}<SiteLink href="/knowledge-hub" className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-bold text-primary-700 hover:underline">{index === 0 ? 'Read More' : 'Read'}<i className="ri-arrow-right-line" aria-hidden="true" /><span className="sr-only">: {article.title}</span></SiteLink></article>)}
      </div>
      <div className="mt-8 text-center"><SiteLink href="/knowledge-hub" className="btn-secondary w-full gap-2 text-center text-primary-700 hover:bg-white sm:w-auto">Explore PMO Insights<i className="ri-arrow-right-line" aria-hidden="true" /></SiteLink></div>
    </PmoSection>
  );
}
