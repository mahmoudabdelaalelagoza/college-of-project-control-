import SiteLink from '@/components/base/SiteLink';
import { pcpLearnerExperiences } from '@/data/learnerExperiences';

/** Compact directory introduction, with room below the complete public header. */
export default function ProfessionalEmployerExperiences() {
  const detailedCount = pcpLearnerExperiences.filter(experience => experience.detailed).length;
  return (
    <header className="experience-directory-intro bg-primary-950 text-white">
      <div className="container-site">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-signal-400">Project Controls Professional Level 6</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">Real experiences. Practical impact.</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/80">Explore published experiences from Kent Business College learners. Discover how they connect professional learning with their work, build confidence and learn with support.</p>
        <div className="mt-7 flex flex-wrap gap-3 text-sm font-medium">
          <span className="rounded-full border border-white/20 px-4 py-2">{pcpLearnerExperiences.length} PCP learner reflections</span>
          <span className="rounded-full border border-white/20 px-4 py-2">{detailedCount} featured experiences</span>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <SiteLink href="/testimonials#pcp-experiences" className="btn-primary text-sm">Explore learner experiences</SiteLink>
          <SiteLink href="/contact?review=1&programme=pcp-level-6" className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold underline underline-offset-4">Share your experience <span className="ml-2" aria-hidden="true">→</span></SiteLink>
        </div>
      </div>
    </header>
  );
}
