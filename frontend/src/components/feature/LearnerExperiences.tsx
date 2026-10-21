import SectionHeading from '@/components/base/SectionHeading';
import SiteLink from '@/components/base/SiteLink';

interface LearnerExperiencesProps { id?: string; }

/** Canonical homepage learner-experience copy and layout for all featured sections.
 * The full approved-review directory and submission flow remain on /testimonials. */
const sectionCopy = {
  "tag": "Learner Experiences",
  "title": "Real experiences. Practical impact.",
  "intro": "Discover how professionals are applying their learning, developing new skills and progressing in their roles with Kent Business College.",
  "programme": "Project Controls Professional Level 6",
  "name": "James Molloy",
  "organisation": "MAG (Airports Group)",
  "quote": "The knowledge and skills I am gaining are already benefiting my day-to-day work and helping me develop professionally.",
  "cta": "Read more learner experiences"
} as const;

export default function LearnerExperiences({ id = 'testimonials' }: LearnerExperiencesProps) {
  const initials = sectionCopy.name.split(/\s+/).slice(0, 2).map(part => part[0]).join('');

  return (
    <section id={id} aria-label={sectionCopy.tag} className="relative isolate scroll-mt-48 overflow-hidden bg-background-50 py-16 md:py-24">
      <div className="pattern-dots-overlay pattern-dots-light" aria-hidden="true" />
      <div className="container-site relative z-10 min-w-0">
        <SectionHeading tag={sectionCopy.tag} title={sectionCopy.title} subtitle={sectionCopy.intro} className="max-w-4xl" />
        <figure className="mx-auto mt-10 grid max-w-5xl gap-8 rounded-2xl border border-background-200 bg-white p-6 md:grid-cols-[240px_minmax(0,1fr)] md:p-10">
          <figcaption className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary-700 text-3xl font-bold text-white" aria-hidden="true">{initials}</span>
            <p className="mt-5 text-xl font-bold text-foreground-950">{sectionCopy.name}</p>
            <p className="mt-2 text-sm font-semibold text-primary-700">{sectionCopy.organisation}</p>
            <p className="mt-3 text-xs leading-6 text-foreground-500">{sectionCopy.programme}</p>
          </figcaption>
          <blockquote className="min-w-0">
            <i className="ri-double-quotes-l text-5xl text-primary-500" aria-hidden="true" />
            <p className="mt-4 text-lg leading-8 text-foreground-700 md:text-xl">{sectionCopy.quote}</p>
          </blockquote>
        </figure>
        <div className="mt-8 text-center">
          <SiteLink href="/testimonials" className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-sm font-bold">
            {sectionCopy.cta}<i className="ri-arrow-right-line" aria-hidden="true" />
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
