import SiteLink from '@/components/base/SiteLink';
import PmoSection from './PmoSection';

export default function ApmRecognition() {
  return (
    <PmoSection id="apm" tag="Professional recognition" title="APM recognition" subtitle="Pathway 2" tone="white">
      <div className="rounded-xl border border-background-200 bg-background-50 p-6 md:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-2xl text-primary-700" aria-hidden="true"><i className="ri-shield-star-line" /></span>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider text-secondary-600">APM technical knowledge</p>
            <h3 className="mt-2 font-heading text-xl font-bold text-foreground-950 md:text-2xl">Recognised technical knowledge for the ChPP journey</h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground-600">The relevant Certified PMO Professional Level 6 element supports an APM-recognised technical-knowledge assessment route for ChPP Pathway 2, subject to APM eligibility, currency and current requirements.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <SiteLink href="/book-a-session" className="btn-primary text-sm">Understand APM Recognition</SiteLink>
              <SiteLink href="https://www.apm.org.uk/chartered-standard/recognised-assessment/" target="_blank" rel="noopener noreferrer" className="btn-secondary gap-2 text-center text-primary-700 hover:bg-white">Verify recognition with APM<i className="ri-external-link-line" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-background-200 bg-white p-6 shadow-sm"><h3 className="font-heading text-xl font-bold text-foreground-950">ChPP Readiness Support</h3><p className="mt-3 text-sm leading-7 text-foreground-600">Learners receive support to understand readiness, organise evidence and prepare for professional progression.</p><SiteLink href="/book-a-session" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary-700 hover:underline">Discuss ChPP Readiness<i className="ri-arrow-right-line" aria-hidden="true" /></SiteLink></article>
        <article className="rounded-xl border border-background-200 bg-white p-6 shadow-sm"><h3 className="font-heading text-xl font-bold text-foreground-950">Important Chartered Status Note</h3><p className="mt-3 text-sm leading-7 text-foreground-600">Completion does not automatically confer ChPP. Chartered Project Professional status is awarded only by APM after all applicable professional practice, CPD, ethics and assessment requirements are met.</p></article>
      </div>
    </PmoSection>
  );
}
