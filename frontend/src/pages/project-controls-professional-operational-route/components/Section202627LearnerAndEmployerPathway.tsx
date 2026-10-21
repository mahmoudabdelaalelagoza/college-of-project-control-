import PathwayHeroLabel from '@/components/feature/PathwayHeroLabel';
import SiteLink from '@/components/base/SiteLink';

/** Operational Pathway hero. */
export default function Section202627LearnerAndEmployerPathway() {
  return (
    <header id="operational-top" aria-labelledby="operational-hero-title" className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-primary-950 pb-16 pt-48 text-white md:pb-20 md:pt-52 site-hero">
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=85"
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center site-hero__image"
        onError={event => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = '/assets/images/employer-capability-team.webp';
        }}
      />
      <div className="hero-contrast-overlay absolute inset-0 z-10" aria-hidden="true" />
      <div className="pattern-dots pattern-dots-dark absolute inset-0 z-20" aria-hidden="true" />

      <div className="container-site relative z-30 site-hero__content">
        <div className="max-w-4xl">
          <PathwayHeroLabel />
          <h1 id="operational-hero-title" className="mt-6 font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Operational Pathway
          </h1>
          <p className="mt-5 font-heading text-xl font-semibold leading-snug text-signal-300 md:text-2xl site-hero__lead">
            Build Stronger Plans. Make Better Project Decisions.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            Develop practical expertise in planning, scheduling, cost control, risk and performance forecasting. Learn to challenge project data, strengthen delivery controls and provide evidence-based recommendations through structured, employer-supported workplace learning.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap site-hero__actions">
            <SiteLink href="/book-a-session" className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 text-center text-sm font-bold">
              Request a Consultation<i className="ri-arrow-right-line shrink-0" aria-hidden="true" />
            </SiteLink>
            <SiteLink href="#operational-overview" className="btn-secondary inline-flex min-h-12 items-center justify-center gap-2 border-white/40 text-center text-sm font-bold text-white hover:border-signal-400 hover:bg-white/10">
              Explore the Operational Pathway<i className="ri-arrow-right-line shrink-0" aria-hidden="true" />
            </SiteLink>
          </div>

          <div className="mt-7 space-y-3 border-t border-white/20 pt-5 text-sm leading-relaxed text-white/80">
            <p>6 KBC Learning Credits · Live Online Teaching · Workplace-Based Development</p>
            <p><span className="font-semibold text-white">Ideal for: </span>Planners · Schedulers · Cost Engineers · Project Controls Professionals</p>
          </div>
        </div>
      </div>
    </header>
  );
}
