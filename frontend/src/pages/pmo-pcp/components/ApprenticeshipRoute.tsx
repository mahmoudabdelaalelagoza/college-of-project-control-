import SiteLink from '@/components/base/SiteLink';

export default function ApprenticeshipRoute() {
  return (
<section className="py-16 md:py-24 bg-white">
            <div className="container-site">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Apprenticeship Card */}
                <div className="flex min-w-0 flex-col rounded-xl border border-background-200 bg-background-50 shadow-sm p-6 md:p-8">
                  <span className="text-sm font-label font-bold text-secondary-600 uppercase tracking-wider mb-3 block">
                    Apprenticeship Route
                  </span>
                  <h3 className="font-heading font-bold text-foreground-950 text-xl md:text-2xl mb-3">
                    Structured workplace development, funded where eligible.
                  </h3>
                  <p className="text-sm text-foreground-600 leading-relaxed mb-6">
                    For employed learners with employer support who can complete workplace evidence, progress reviews, off-the-job learning records and apprenticeship requirements.
                  </p>
                  <SiteLink href="/apprenticeship-eligibility-checker" className="btn-primary mt-auto w-full text-sm sm:w-auto sm:self-start">
                    Check Eligibility
                  </SiteLink>
                </div>

                {/* Commercial Card */}
                <div className="flex min-w-0 flex-col rounded-xl border border-background-200 bg-background-50 shadow-sm p-6 md:p-8 ">
                  <span className="text-sm font-label font-bold text-secondary-600 uppercase tracking-wider mb-3 block">
                    Standalone Professional Study
                  </span>
                  <h3 className="font-heading font-bold text-foreground-950 text-xl md:text-2xl mb-3">
                    Certified PMO Professional (Level 6)
                  </h3>
                  <p className="text-sm text-foreground-600 leading-relaxed mb-6">
                    A separate professional development programme, with its own fees, enrolment requirements and study arrangements.
                  </p>
                  <SiteLink href="/short-courses/pmo-level-6" className="btn-secondary mt-auto w-full gap-2 text-center text-primary-700 hover:bg-white sm:w-auto sm:self-start">
                    Explore Certified PMO Professional
                    <i className="ri-arrow-right-line shrink-0" aria-hidden="true" />
                  </SiteLink>
                </div>
              </div>
            </div>
          </section>
  );
}
