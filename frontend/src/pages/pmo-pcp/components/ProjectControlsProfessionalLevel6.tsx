import SiteLink from '@/components/base/SiteLink';

export default function ProjectControlsProfessionalLevel6() {
  return (
    <section id="hero" aria-labelledby="pmo-hero-title" className="relative isolate min-h-[900px] overflow-hidden bg-primary-950 pb-16 pt-48 text-white md:pb-24 md:pt-52 site-hero">
      <img
        src="/assets/images/employer-capability-team.webp"
        alt="Project professionals reviewing plans and project information together"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-50 site-hero__image"
        loading="eager"
        fetchPriority="high"
      />
      <div className="hero-contrast-overlay absolute inset-0 z-10" aria-hidden="true" />
      <div className="pattern-dots pattern-dots-dark absolute inset-0 z-20 [mask-image:linear-gradient(90deg,black,transparent_72%)]" aria-hidden="true" />

      <div className="container-site relative z-30 min-w-0 site-hero__content">
        <div className="max-w-5xl">
          <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-signal-400/50 bg-signal-500/10 px-4 py-2 font-label text-xs font-bold uppercase leading-relaxed tracking-[0.12em] text-signal-300 sm:text-xs">
            <span className="h-2 w-2 shrink-0 rounded-full bg-signal-500" aria-hidden="true" />
            Level 6 Apprenticeship &middot; ST0845 &middot; PMO &amp; Governance Focus
          </p>
          <h1 id="pmo-hero-title" className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Project Controls Professional Level 6: PMO &amp; Governance
          </h1>
          <p className="mt-5 max-w-4xl font-heading text-xl font-semibold leading-snug text-white md:text-2xl site-hero__lead">
            Strengthen PMO governance, assurance and decision support
          </p>
        </div>

        <div className="mt-6 grid min-w-0 items-start gap-8 xl:grid-cols-[minmax(0,1.25fr)_minmax(0,.85fr)] xl:gap-12 site-hero__grid">
          <div className="min-w-0">
            <div className="space-y-4 text-sm leading-7 text-white/80 md:text-base">
              <p>Develop advanced expertise in integrated project controls, performance reporting, risk, cost and scheduling assurance through structured, work-based learning.</p>
              <p>Designed for professionals with substantial project controls responsibilities in PMO, governance and assurance environments, this apprenticeship helps you turn reliable project information into clearer reporting, informed recommendations and stronger decision support.</p>
              <p>Kent Business College works with you and your employer to agree a development pathway aligned with your responsibilities and the full requirements of the Project Controls Professional Level 6 occupational standard.</p>
            </div>
            <p className="mt-6 text-xs font-semibold leading-6 text-signal-200 md:text-sm">
              Employer-Supported Learning &middot; Workplace Application &middot; Apprenticeship Funding Subject to Eligibility
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap site-hero__actions">
              <SiteLink href="/book-a-session" className="btn-primary inline-flex min-h-12 w-full items-center justify-center px-6 py-3 text-center text-sm font-bold sm:w-auto">
                Book a PMO Pathway Consultation
              </SiteLink>
              <SiteLink href="/apprenticeship-eligibility-checker" className="btn-secondary inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-primary-950/40 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm hover:border-signal-400 hover:bg-white/10 sm:w-auto">
                <i className="ri-shield-check-line shrink-0" aria-hidden="true" />Check Apprenticeship Eligibility
              </SiteLink>
              <SiteLink href="/PMO_Governance_Project_Controls_Professional_Catalogue.pdf" className="btn-secondary inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-primary-950/40 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm hover:border-signal-400 hover:bg-white/10 sm:w-auto">
                <i className="ri-file-pdf-2-line shrink-0" aria-hidden="true" />Download the PMO &amp; Governance Programme Catalogue
              </SiteLink>
            </div>
          </div>

          <div className="grid min-w-0 gap-5">
            <aside aria-labelledby="pmo-recognition-title" className="min-w-0 rounded-xl border border-white/20 bg-primary-950/60 p-5 backdrop-blur-sm md:p-6 site-hero__panel">
              <h2 id="pmo-recognition-title" className="text-lg font-bold leading-snug text-signal-300">Professional Recognition &amp; Progression</h2>
              <p className="mt-4 text-sm leading-7 text-white/80">Where your agreed learning pathway includes KBC's Certified PMO Professional (Level 6), successful completion of its APM-recognised assessment supports the technical-knowledge requirement for Chartered Project Professional (ChPP) Pathway 2.</p>
              <p className="mt-3 text-xs leading-6 text-white/70">Chartered status requires a separate application and assessment by APM.</p>
            </aside>
            <aside aria-labelledby="pmo-professional-title" className="min-w-0 rounded-2xl border border-white/20 bg-primary-950/60 p-5 backdrop-blur-sm md:p-6 site-hero__panel">
              <h2 id="pmo-professional-title" className="text-lg font-bold leading-snug text-signal-300">Prefer Standalone Professional Study?</h2>
              <p className="mt-4 text-sm leading-7 text-white/80">Explore Certified PMO Professional (Level 6) as a separate professional development programme, with its own fees, enrolment requirements and study arrangements.</p>
              <SiteLink href="/short-courses/pmo-level-6" className="mt-4 inline-flex min-h-11 max-w-full items-center gap-2 text-sm font-bold leading-relaxed text-signal-300 underline-offset-4 hover:text-signal-200 hover:underline">
                Explore Certified PMO Professional<i className="ri-arrow-right-line shrink-0" aria-hidden="true" />
              </SiteLink>
            </aside>
          </div>
        </div>
        <p className="mt-8 border-t border-white/20 pt-5 text-xs leading-6 text-white/70">
          This PMO-focused learning option forms part of the Project Controls Professional Level 6 Apprenticeship (ST0845), not a separate occupational standard. Apprenticeship suitability and funding are subject to individual eligibility, relevant workplace responsibilities and employer support.
        </p>
      </div>
    </section>
  );
}
