import SiteLink from '@/components/base/SiteLink';
import PmoSection from './PmoSection';

// Publisher links checked on 20 October 2026. These are resource pages, not direct PDF downloads.
const references = [
  {
    publisher: 'Kent Business College',
    mark: 'KBC',
    category: 'Programme overview',
    title: 'Certified PMO Professional (Level 6)',
    detail: 'Four modules · 16 months',
    description: 'Explore module content, knowledge assessments, applied portfolios and professional development within the KBC programme.',
    href: 'https://kentbusinesscollege.com/professional-programmes/certified-pmo-professional-level-6/',
  },
  {
    publisher: 'Association for Project Management',
    mark: 'APM',
    category: 'Professional recognition',
    title: 'ChPP Recognised Assessments',
    detail: 'Pathway 2 · Technical knowledge',
    description: 'Check KBC\'s recognised assessment listing and understand its place within the separate Chartered Project Professional application process.',
    href: 'https://www.apm.org.uk/chartered-standard/recognised-assessment/',
  },
  {
    publisher: 'Project Management Institute',
    mark: 'PMI',
    category: 'Practice guide',
    title: 'Project Management Offices: A Practice Guide',
    detail: 'Published February 2025',
    description: 'Further reading on shaping a PMO, aligning services with organisational priorities and demonstrating value.',
    href: 'https://www.pmi.org/standards/pmo',
  },
  {
    publisher: 'Project Management Institute',
    mark: 'PMI',
    category: 'Professional standard',
    title: 'PMBOK® Guide',
    detail: 'Eighth edition · November 2025',
    description: 'Explore integrated project delivery across governance, scope, schedule, finance, stakeholders, resources and risk.',
    href: 'https://www.pmi.org/standards/pmbok',
  },
] as const;

export default function ProfessionalReadingAndReferences() {
  return (
    <PmoSection id="references" tag="Resources & guidance" title="Professional reading and references" subtitle="Explore programme information, professional recognition and further reading from the original publishers." tone="white">

        <ul className="grid list-none gap-4 p-0 md:grid-cols-2 md:gap-6">
          {references.map((reference, index) => (
            <li key={reference.href} className="min-w-0">
              <SiteLink href={reference.href} target="_blank" rel="noopener noreferrer" className="group flex h-full min-w-0 flex-col rounded-xl border border-background-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-4 motion-reduce:transform-none motion-reduce:transition-none sm:p-7">
                <div className="mb-6 flex items-center justify-between gap-3">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary-100 bg-primary-50 text-xs font-extrabold tracking-wide text-primary-800" aria-hidden="true">{reference.mark}</span>
                  <span className="text-xs font-semibold tabular-nums text-foreground-500" aria-hidden="true">{String(index + 1).padStart(2, '0')} / 04</span>
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary-700">{reference.category}</p>
                <h3 className="font-heading text-xl font-bold leading-snug text-foreground-950 transition-colors group-hover:text-primary-700 md:text-2xl">{reference.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-foreground-700">{reference.publisher}</p>
                <p className="mt-1 text-xs leading-6 text-foreground-500">{reference.detail}</p>
                <p className="mb-6 mt-4 text-sm leading-7 text-foreground-600">{reference.description}</p>
                <div className="mt-auto flex items-center justify-between gap-4 border-t border-background-200 pt-4 text-sm font-bold text-primary-800">
                  <span>View resource<span className="sr-only">: {reference.title} (opens in a new tab)</span></span>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 transition-colors group-hover:bg-primary-100" aria-hidden="true"><i className="ri-arrow-right-up-line text-lg" /></span>
                </div>
              </SiteLink>
            </li>
          ))}
        </ul>
    </PmoSection>
  );
}
