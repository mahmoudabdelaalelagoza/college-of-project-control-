import SiteLink from '@/components/base/SiteLink';

export default function DiscussThePMOCapabilityYourTeamNeeds() {
  return (
    <section aria-labelledby="pmo-next-step" className="relative isolate overflow-hidden bg-primary-950 py-16 text-white md:py-24">
      <div className="pattern-dots-overlay pattern-dots-dark" aria-hidden="true" />
      <div className="container-site relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="max-w-3xl">
          <p className="font-label text-xs font-bold uppercase tracking-wider text-accent-200">Next step</p>
          <h2 id="pmo-next-step" className="mt-4 font-heading text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">Discuss the PMO capability your team needs</h2>
          <p className="mt-5 text-sm leading-7 text-white/80 md:text-base">Tell us about your responsibilities and the decisions you want your PMO to support.</p>
        </div>
        <SiteLink href="/book-a-session" className="btn-primary w-full text-sm sm:w-auto sm:justify-self-start lg:justify-self-end">Request a consultation</SiteLink>
      </div>
    </section>
  );
}
