const workplaceOutputs = [
  {
    title: 'Controls Strategy & Integrated Baseline',
    description: 'Project controls plans connecting scope, schedules, budgets, risk assumptions and reporting responsibilities.',
  },
  {
    title: 'Schedule & Cost Assurance',
    description: 'Schedule logic reviews, critical-path analysis, earned value measures and evidence-based cost forecasts.',
  },
  {
    title: 'Risk, Change & Recovery',
    description: 'Risk assessments, change-impact analysis, contingency reviews and practical recovery recommendations.',
  },
  {
    title: 'Data, Dashboards & Automation',
    description: 'Validated performance dashboards, reporting models and, where relevant, AI-assisted workflows with appropriate human oversight.',
  },
  {
    title: 'Decision Support',
    description: 'Executive reports, option appraisals and clear recommendations supported by reliable project information.',
  },
  {
    title: 'Leadership & Continuous Improvement',
    description: 'Examples of stakeholder engagement, professional challenge, lessons learned and improvements to project controls practices.',
  },
];

export default function ProfessionalArtefacts() {
  return (
    <section id="operational-evidence" aria-labelledby="operational-evidence-title" className="scroll-mt-44 bg-background-100 py-16 md:py-20">
      <div className="container-site">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-accent-700">Workplace Outputs</p>
          <h2 id="operational-evidence-title" className="text-section-3xl font-bold leading-tight text-foreground-950 md:text-section-4xl">
            Turn Your Learning into Practical Project Controls Work
          </h2>
          <p className="text-base leading-relaxed text-foreground-600">
            Apply your skills to relevant workplace activities and develop professional outputs that support planning, performance analysis and informed decision-making.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workplaceOutputs.map(output => (
            <article key={output.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">{output.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-600">{output.description}</p>
            </article>
          ))}
        </div>

        <article className="mt-8 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5 md:p-6">
          <h3 className="text-xl font-bold text-foreground-950">Workplace Evidence &amp; Confidentiality</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground-600">
            These are illustrative outputs, not a mandatory assessment checklist. Your employer and KBC coach help identify suitable evidence based on your role and the apprenticeship requirements.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground-600">
            Only authorised evidence should be shared. Sensitive information must be protected through appropriate redaction or anonymisation, with expert witness statements used where permitted by the assessment requirements.
          </p>
        </article>
      </div>
    </section>
  );
}
