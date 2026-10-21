import SectionHeading from '@/components/base/SectionHeading';

const developmentAreas = [
  {
    title: 'Recognised Technical Knowledge',
    description: "Develop specialist PMO knowledge through KBC's Certified PMO Professional (Level 6) programme and its recognised assessment.",
    icon: 'ri-book-open-line',
  },
  {
    title: 'Professional Judgement',
    description: 'Strengthen your ability to evaluate information, challenge assumptions and explain decisions in complex project environments.',
    icon: 'ri-search-eye-line',
  },
  {
    title: 'Chartered Readiness',
    description: 'Understand professional-practice expectations, organise relevant experience and prepare for a potential independent ChPP application.',
    icon: 'ri-award-line',
  },
];

export default function TechnicalKnowledgeProfessionalPracticeCharteredAmbition() {
  return (
    <section id="pathway-overview" aria-labelledby="pathway-overview-title" className="scroll-mt-44 bg-white py-16 md:py-24">
      <div className="container-site">
        <SectionHeading
          id="pathway-overview-title"
          tag="The Chartered Development Journey"
          title="Strengthen Your Professional Knowledge, Judgement and Evidence"
          subtitle="The Chartered Pathway supports professionals who want to connect technical project controls expertise with governance, assurance and responsible leadership."
          className="max-w-4xl"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {developmentAreas.map((area) => (
            <article key={area.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-2xl text-accent-700" aria-hidden="true">
                <i className={area.icon} />
              </div>
              <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">{area.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-600">{area.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5 text-sm leading-relaxed text-foreground-600">
          The Chartered Pathway supports professional development; it does not guarantee Chartered status.
        </p>
      </div>
    </section>
  );
}
