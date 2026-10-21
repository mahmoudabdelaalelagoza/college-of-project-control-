const pathwayFeatures = [
  {
    icon: 'ri-bar-chart-box-line',
    title: 'Integrated Project Controls',
    description: 'Connect planning, scheduling, cost and risk to establish reliable baselines, monitor progress and manage change.',
  },
  {
    icon: 'ri-search-eye-line',
    title: 'Forecasting & Data Assurance',
    description: 'Challenge data quality, analyse variances and develop realistic forecasts and recovery recommendations.',
  },
  {
    icon: 'ri-graduation-cap-line',
    title: 'Professional & Workplace Development',
    description: 'Apply your learning to relevant project controls activities, build workplace evidence and prepare for selected professional examinations where included in your agreed pathway.',
  },
];

export default function TheOperationalRoute() {
  return (
    <section id="operational-overview" aria-labelledby="operational-overview-title" className="scroll-mt-44 bg-white py-16 md:py-20">
      <div className="container-site">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-accent-700">
            The Operational Pathway
          </p>
          <h2 id="operational-overview-title" className="text-3xl font-bold leading-tight text-foreground-950 md:text-4xl">
            Turn Project Data into Reliable Controls and Forecasts
          </h2>
          <p className="text-base leading-relaxed text-foreground-600">
            Develop the practical skills to establish credible project baselines, analyse performance and recommend informed actions that support project delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pathwayFeatures.map(feature => (
            <article key={feature.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-2xl text-accent-700" aria-hidden="true">
                <i className={feature.icon} />
              </div>
              <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-600">{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5">
          <p className="text-sm leading-relaxed text-foreground-600">
            The Operational Pathway comprises six KBC learning credits within the Project Controls Professional Level 6 Apprenticeship (ST0845). External certifications are separate from the apprenticeship and require the relevant professional body's eligibility and assessment requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
