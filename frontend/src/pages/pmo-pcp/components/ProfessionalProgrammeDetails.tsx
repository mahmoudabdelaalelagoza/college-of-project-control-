import SiteLink from '@/components/base/SiteLink';
import PmoSection from './PmoSection';

// Professional-study module periods, checked against the linked KBC overview on 20 October 2026.
// These periods do not describe the duration of the ST0845 apprenticeship.
const modules = [
  {
    "period": "Months 1–4",
    "title": "PMO purpose & governance",
    "focus": "Office remit, accountability and assurance.",
    "output": "Operating-model proposal"
  },
  {
    "period": "Months 5–8",
    "title": "Integrated controls",
    "focus": "Baselines, earned value and forecast reasoning.",
    "output": "Forecast commentary"
  },
  {
    "period": "Months 9–12",
    "title": "Risk, issues & quality",
    "focus": "Ownership, escalation and continuous improvement.",
    "output": "Improvement pack"
  },
  {
    "period": "Months 13–16",
    "title": "Stakeholders & reporting",
    "focus": "Executive information, influence and reflective practice.",
    "output": "Reporting pack"
  }
] as const;

export default function ProfessionalProgrammeDetails() {
  return (
    <PmoSection id="professional-study" tag="Professional programme option" title="Certified PMO Professional (Level 6)" subtitle="If agreed within your apprenticeship pathway, this programme adds structured PMO development.">
        <ul aria-label="Professional programme facts" className="mt-7 flex flex-wrap justify-center gap-3">
          {['16 months', 'Four modules', 'Live online'].map(fact => <li key={fact} className="rounded-full border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-primary-800">{fact}</li>)}
        </ul>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xs leading-6 text-foreground-600">
          The 16-month timetable belongs to professional study; your apprenticeship follows its own training plan.
        </p>

        <div className="mx-auto mt-9 grid max-w-none gap-4 md:grid-cols-2">
          {modules.map((module, index) => (
            <details key={module.period} className="group min-w-0 self-start rounded-xl border border-background-200 bg-white shadow-sm" open={index === 0}>
              <summary className="flex min-h-24 cursor-pointer list-none items-start gap-4 p-5 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-bold uppercase tracking-wider text-accent-700">{module.period}</span>
                  <span className="mt-2 block font-heading text-xl font-bold leading-snug text-foreground-950">{module.title}</span>
                </span>
                <i className="ri-add-line mt-1 shrink-0 text-xl text-primary-700 transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <div className="border-t border-background-200 p-5">
                <p className="text-sm leading-7 text-foreground-600">{module.focus}</p>
                <p className="mt-3 rounded-lg bg-primary-50 px-4 py-3 text-sm leading-6 text-primary-800"><strong>Example:</strong> {module.output}.</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mx-auto mt-6 grid max-w-none gap-4 md:grid-cols-2">
          <article className="min-w-0 rounded-xl border border-background-200 bg-white p-5 md:p-6">
            <h3 className="text-xl font-bold">How learning is assessed</h3>
            <p className="mt-3 text-sm leading-7 text-foreground-600">Knowledge assessments, applied portfolios and reflection demonstrate understanding and practice. Apprenticeship assessment remains separate.</p>
          </article>
          <article className="min-w-0 rounded-xl border border-background-200 bg-white p-5 md:p-6">
            <h3 className="text-xl font-bold">Before enrolment</h3>
            <p className="mt-3 text-sm leading-7 text-foreground-600">Confirm suitability, timetable, workload, fees, included assessments and extras in your written offer. Simulated activities require KBC approval.</p>
          </article>
        </div>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <SiteLink href="/short-courses/pmo-level-6" className="btn-primary inline-flex min-h-12 items-center justify-center px-6 py-3 text-center text-sm font-bold">Explore professional programme</SiteLink>
          <SiteLink href="/book-a-session" className="btn-secondary text-center text-primary-700 hover:bg-white">Discuss your learning plan</SiteLink>
        </div>
        <div className="mt-5 text-center">
          <SiteLink href="https://kentbusinesscollege.com/professional-programmes/certified-pmo-professional-level-6/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary-700 underline underline-offset-4 hover:text-primary-900">
            KBC programme details<i className="ri-external-link-line" aria-hidden="true" />
          </SiteLink>
        </div>
    </PmoSection>
  );
}
