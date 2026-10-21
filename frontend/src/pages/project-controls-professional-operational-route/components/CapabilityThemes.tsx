const capabilityThemes = [
  {
    icon: 'ri-git-merge-line',
    title: 'Integrated Project Baselines',
    description: 'Align scope, breakdown structures, schedules, costs and risks to establish a consistent basis for project control.',
  },
  {
    icon: 'ri-calendar-line',
    title: 'Planning & Scheduling',
    description: 'Develop realistic schedules, assess dependencies and constraints, and explain the factors affecting delivery confidence.',
  },
  {
    icon: 'ri-money-pound-circle-line',
    title: 'Cost Engineering & Forecasting',
    description: 'Develop estimates, monitor budgets and expenditure, and forecast project costs using reliable data and clear assumptions.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Risk & Opportunity Management',
    description: 'Assess uncertainty, challenge assumptions and recommend proportionate responses to project risks and opportunities.',
  },
  {
    icon: 'ri-line-chart-line',
    title: 'Progress & Performance Analysis',
    description: 'Measure progress, interpret earned value and performance trends, and recommend evidence-based corrective actions.',
  },
  {
    icon: 'ri-database-2-line',
    title: 'Data Assurance & Reporting',
    description: 'Validate project information, maintain traceable records and communicate reliable insights to decision-makers.',
  },
  {
    icon: 'ri-refresh-line',
    title: 'Change Control & Recovery',
    description: 'Assess the impact of changes, maintain approved baselines and develop realistic recovery recommendations.',
  },
  {
    icon: 'ri-building-2-line',
    title: 'Commercial & Contractual Awareness',
    description: 'Understand how contracts, tenders and supplier commitments influence project controls and commercial decisions.',
  },
  {
    icon: 'ri-team-line',
    title: 'Leadership, Ethics & Accountability',
    description: 'Challenge information constructively, influence stakeholders and take responsibility for accurate, impartial recommendations.',
  },
];

export default function CapabilityThemes() {
  return (
    <section id="operational-capability" aria-labelledby="operational-capability-title" className="scroll-mt-44 bg-white py-16 md:py-20">
      <div className="container-site">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-accent-700">Operational Capabilities</p>
          <h2 id="operational-capability-title" className="text-3xl font-bold leading-tight text-foreground-950 md:text-4xl">
            Develop the Skills Behind Effective Project Controls
          </h2>
          <p className="text-base leading-relaxed text-foreground-600">
            Build the technical knowledge and professional judgement to plan, analyse, assure and improve project performance through structured learning and workplace application.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilityThemes.map(theme => (
            <article key={theme.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-2xl text-accent-700" aria-hidden="true">
                <i className={theme.icon} />
              </div>
              <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">{theme.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-600">{theme.description}</p>
            </article>
          ))}
        </div>

        <article className="mt-8 rounded-2xl border border-accent-200 bg-accent-50 p-6">
          <h3 className="text-xl font-bold text-foreground-950">Applying Your Capabilities</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground-600">
            Demonstrate your professional judgement through relevant workplace activities: selecting appropriate methods, validating information, interpreting results and explaining your recommendations.
          </p>
        </article>
        <p className="mt-6 border-t border-background-200 pt-5 text-sm leading-relaxed text-foreground-600">
          These are capability themes, not nine separate modules. Your agreed six-credit pathway and workplace training must support the full ST0845 occupational standard, including safety, sustainability and professional behaviours. Evidence submitted for apprenticeship assessment must meet the applicable assessment-plan requirements.
        </p>
      </div>
    </section>
  );
}
