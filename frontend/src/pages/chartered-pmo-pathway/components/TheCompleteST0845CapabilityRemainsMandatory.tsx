import SectionHeading from '@/components/base/SectionHeading';

const occupationalCapabilities = [
  {
    title: 'Planning & Integrated Baselines',
    description: 'Develop reliable project plans connecting scope, schedules, resources, budgets, assumptions and change.',
  },
  {
    title: 'Cost Engineering & Forecasting',
    description: 'Strengthen estimating, budget analysis, performance measurement and out-turn forecasting.',
  },
  {
    title: 'Risk, Quality & Assurance',
    description: 'Apply proportionate risk controls, assurance approaches and quality management while considering safety and sustainability.',
  },
  {
    title: 'Commercial & Contractual Controls',
    description: 'Understand how contracts, supplier commitments and commercial information affect project delivery and decisions.',
  },
  {
    title: 'Data Assurance & Digital Practice',
    description: 'Validate information, maintain traceable records and apply digital tools responsibly.',
  },
  {
    title: 'Governance, Leadership & Ethics',
    description: 'Exercise professional judgement, communicate recommendations and demonstrate accountability, integrity and effective collaboration.',
  },
];

export default function TheCompleteST0845CapabilityRemainsMandatory() {
  return (
    <section id="occupational-standard" aria-labelledby="occupational-standard-title" className="relative isolate overflow-hidden bg-background-50 py-16 md:py-24">
      <div className="pattern-dots-overlay pattern-dots-light" aria-hidden="true" />
      <div className="container-site relative z-10">
        <SectionHeading
          id="occupational-standard-title"
          tag="Beyond the Professional Modules"
          title="Develop Competence Across the Full Level 6 Standard"
          subtitle="The Chartered Pathway has a professional-recognition focus, but the apprenticeship requires competence across the complete Project Controls Professional occupational standard (ST0845)."
          className="max-w-4xl"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {occupationalCapabilities.map((capability, index) => (
            <article key={capability.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
              <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-signal-100 text-sm font-semibold text-primary-900" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">{capability.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-600">{capability.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5 text-sm leading-relaxed text-foreground-600">
          The selected modules provide a development focus; they do not replace any mandatory ST0845 knowledge, skills or behaviours.
        </p>
      </div>
    </section>
  );
}
