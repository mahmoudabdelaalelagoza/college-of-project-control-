import SectionHeading from '@/components/base/SectionHeading';
import SiteLink from '@/components/base/SiteLink';
import { featuredPcpExperiences } from '@/data/learnerExperiences';
import LearnerExperienceCard from './LearnerExperienceCard';

interface LearnerExperiencesProps { id?: string; }

/** Canonical featured PCP experiences, shared by the homepage and programme pages. */
export default function LearnerExperiences({ id = 'testimonials' }: LearnerExperiencesProps) {
  return (
    <section id={id} aria-label="Learner Experiences" className="relative isolate scroll-mt-48 overflow-hidden bg-background-50 py-16 md:py-24">
      <div className="pattern-dots-overlay pattern-dots-light" aria-hidden="true" />
      <div className="container-site relative z-10 min-w-0">
        <SectionHeading tag="Learner Experiences" title="Real experiences. Practical impact." subtitle="Discover how Project Controls Professional learners are applying their learning, developing new skills and progressing in their roles with Kent Business College." className="max-w-4xl" />
        <div className="experience-card-grid mt-10">
          {featuredPcpExperiences.map(experience => <LearnerExperienceCard key={experience.id} experience={experience} compact />)}
        </div>
        <div className="mt-8 text-center">
          <SiteLink href="/testimonials#pcp-experiences" className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-sm font-bold">Read more learner experiences</SiteLink>
        </div>
      </div>
    </section>
  );
}
