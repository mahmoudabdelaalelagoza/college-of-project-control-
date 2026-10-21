import PathwayHeroLabel from '@/components/feature/PathwayHeroLabel';
import SiteLink from '@/components/base/SiteLink';

export default function ProjectControlsProfessionalLevel6() {
  return (
    <header
      aria-labelledby="strategic-hero-title"
      className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-primary-950 pb-16 pt-48 text-white md:pb-20 md:pt-52 site-hero"
    >
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=85"
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
          <h1 id="strategic-hero-title" className="mt-6 font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Strategic Pathway
          </h1>
          <p className="mt-5 font-heading text-xl font-semibold leading-snug text-signal-300 md:text-2xl site-hero__lead">
            Connect Project Evidence to Strategic Decisions
          </p>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-white/90 md:text-lg">
            <p>
              Develop the expertise to support programme governance, portfolio priorities, PMO leadership and informed organisational decisions.
            </p>
            <p>
              Combine structured professional learning with practical workplace development through an employer-supported Level 6 apprenticeship.
            </p>
          </div>
          <p className="mt-7 text-sm leading-relaxed text-white/80">
            6 KBC Learning Credits · Live Online Teaching · Workplace-Based Development
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap site-hero__actions">
            <SiteLink
              href="/book-a-session"
              className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 text-center text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a Pathway Consultation
              <i className="ri-arrow-right-line shrink-0" aria-hidden="true" />
            </SiteLink>
            <SiteLink
              href="#strategic-advantage"
              className="btn-secondary inline-flex min-h-12 items-center justify-center gap-2 border-white/40 text-center text-sm font-bold text-white hover:border-signal-400 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore the Strategic Pathway
              <i className="ri-arrow-down-line shrink-0" aria-hidden="true" />
            </SiteLink>
          </div>
        </div>
      </div>
    </header>
  );
}
