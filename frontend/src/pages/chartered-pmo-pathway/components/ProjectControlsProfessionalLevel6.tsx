import PathwayHeroLabel from '@/components/feature/PathwayHeroLabel';
import SiteLink from '@/components/base/SiteLink';

export default function ProjectControlsProfessionalLevel6() {
  return (
    <header
      aria-labelledby="chartered-hero-title"
      className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-primary-950 pb-16 pt-48 text-white md:pb-20 md:pt-52 site-hero"
    >
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2200&q=85"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center site-hero__image"
        onError={event => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = '/assets/images/employer-capability-team.webp';
        }}
      />
      <div className="hero-contrast-overlay absolute inset-0 z-10" aria-hidden="true" />

      <div className="container-site relative z-20 w-full site-hero__content">
        <div className="max-w-4xl">
          <PathwayHeroLabel />
          <h1 id="chartered-hero-title" className="mt-6 font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Chartered Pathway
          </h1>
          <p className="mt-5 font-heading text-xl font-semibold leading-snug text-signal-300 md:text-2xl site-hero__lead">
            Build Recognised Knowledge. Prepare for Chartered Progression.
          </p>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-white/90 md:text-lg">
            <p>
              Develop advanced project controls, PMO governance and professional judgement through an employer-supported apprenticeship.
            </p>
            <p>
              The Chartered Pathway combines workplace development towards the full Level 6 occupational standard with KBC's Certified PMO Professional programme, recognised by APM for the technical-knowledge element of ChPP Pathway 2.
            </p>
          </div>
          <p className="mt-7 text-sm leading-relaxed text-white/80">
            6 KBC Learning Credits · APM-Recognised Technical-Knowledge Assessment · Workplace-Based Learning
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap site-hero__actions">
            <SiteLink
              href="#pathway-overview"
              className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 text-center text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore the Chartered Pathway
              <i className="ri-arrow-right-line shrink-0" aria-hidden="true" />
            </SiteLink>
            <SiteLink
              href="/book-a-session"
              className="btn-secondary inline-flex min-h-12 items-center justify-center gap-2 border-white/40 text-center text-sm font-bold text-white hover:border-signal-400 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a Pathway Consultation
              <i className="ri-arrow-right-line shrink-0" aria-hidden="true" />
            </SiteLink>
          </div>
          <p className="mt-6 border-t border-white/20 pt-5 text-sm leading-relaxed text-white/80">
            Chartered Project Professional status is awarded separately by APM.
          </p>
        </div>
      </div>
    </header>
  );
}
