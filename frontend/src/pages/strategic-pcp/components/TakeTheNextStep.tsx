import SiteLink from '@/components/base/SiteLink';

export default function TakeTheNextStep() {
  return (
    <section id="apply" aria-labelledby="strategic-next-step-title" className="scroll-mt-44 bg-white py-16 md:py-20">
      <div className="container-site">
        <div className="rounded-2xl bg-primary-800 p-6 text-white sm:p-8 md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0 max-w-3xl space-y-4">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-signal-300">Take the Next Step</p>
              <h2 id="strategic-next-step-title" className="text-section-2xl font-bold leading-tight text-white md:text-section-3xl lg:text-section-4xl">
                Explore Your Strategic Project Controls Pathway
              </h2>
              <p className="text-base font-semibold leading-relaxed text-white">
                Ready to connect project controls expertise with wider organisational decisions?
              </p>
              <p className="text-sm leading-relaxed text-white/80">
                Speak with Kent Business College about your role, professional experience and employer priorities. We'll help you review eligibility, explore a suitable six-credit combination and understand the requirements before enrolment.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto lg:shrink-0">
              <SiteLink
                href="/apprenticeship-eligibility-checker"
                className="btn-primary inline-flex min-h-12 items-center justify-center gap-3 px-5 py-3 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Check Apprenticeship Eligibility</span>
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </SiteLink>
              <SiteLink
                href="/book-a-session"
                className="btn-secondary inline-flex min-h-12 items-center justify-center gap-3 border-white/40 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Book a Pathway Consultation</span>
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </SiteLink>
            </div>
          </div>

          <div className="mt-8 space-y-2">
            <h3 className="text-base font-bold leading-snug text-white">Admissions & Employer Enquiries</h3>
            <SiteLink
              href="mailto:office@kentbusinesscollege.org"
              className="inline-block max-w-full break-all text-sm font-semibold text-signal-300 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              office@kentbusinesscollege.org
            </SiteLink>
          </div>
          <p className="mt-6 border-t border-white/20 pt-6 text-sm leading-relaxed text-white/80">
            Programme availability, individual suitability, funding and professional examination arrangements are confirmed through the relevant checks and written agreements.
          </p>
        </div>
      </div>
    </section>
  );
}
