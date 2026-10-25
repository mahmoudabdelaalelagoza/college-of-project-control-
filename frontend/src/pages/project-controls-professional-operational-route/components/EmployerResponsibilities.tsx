const employerCommitments = [
  {
    title: 'Relevant Responsibilities',
    description: 'Provide suitable project controls duties aligned with ST0845.',
  },
  {
    title: 'Protected Training Time',
    description: 'Release the apprentice for agreed off-the-job training during paid working hours.',
  },
  {
    title: 'Workplace Opportunities',
    description: 'Enable appropriate access to projects, data, systems and stakeholders.',
  },
  {
    title: 'Guidance & Feedback',
    description: 'Provide supervision, constructive challenge and opportunities to apply new skills.',
  },
  {
    title: 'Progress Reviews',
    description: 'Participate in reviews with KBC and support agreed development actions.',
  },
  {
    title: 'Assessment Readiness',
    description: "Verify the apprentice's own contribution to evidence and confirm occupational readiness for end-point assessment.",
  },
];

const organisationBenefits = [
  'More Reliable Forecasts',
  'Earlier Identification of Issues',
  'Consistent Project Controls',
  'Stronger Internal Expertise',
];

export default function EmployerResponsibilities() {
  return (
    <section
      id="operational-employer"
      aria-labelledby="operational-employer-title"
      className="scroll-mt-44 bg-background-100 py-16 md:py-20"
    >
      <div className="container-site">
        <div className="mb-10 max-w-3xl space-y-4">
          <div className="text-xs font-bold uppercase tracking-[.18em] text-accent-700">
            For Employers
          </div>
          <h2 id="operational-employer-title" className="text-section-3xl font-bold leading-tight text-foreground-950 md:text-section-4xl">
            Your Workplace Makes Professional Development Possible
          </h2>
          <p className="leading-relaxed text-foreground-600">
            The Operational Pathway combines structured teaching with opportunities to develop and apply project controls skills at work. Employer support is essential to meeting the full Level 6 apprenticeship requirements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-primary-800 p-6 text-white shadow-sm">
            <h3 className="mb-5 text-xl font-bold leading-snug text-white">
              Employer Commitments
            </h3>
            <ul className="list-disc space-y-4 pl-5">
              {employerCommitments.map((commitment) => (
                <li key={commitment.title} className="text-sm leading-relaxed text-white/80">
                  <strong className="font-semibold text-white">{commitment.title}:</strong>{' '}
                  {commitment.description}
                </li>
              ))}
            </ul>
          </article>

          <div className="grid gap-6">
            <article className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">
                Your Operational Sponsor
              </h3>
              <p className="text-sm leading-relaxed text-foreground-600">
                Nominate a line manager or project controls lead who can provide workplace opportunities, feedback and professional guidance without completing the apprentice's work.
              </p>
            </article>
            <article className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">
                Protecting Project Information
              </h3>
              <p className="text-sm leading-relaxed text-foreground-600">
                Live project data, AI tools and external applications must only be used with appropriate employer approval. Confidential, personal and commercially sensitive information must be protected in accordance with organisational policies.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-5 text-xl font-bold leading-snug text-foreground-950">
            Potential Benefits for Your Organisation
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {organisationBenefits.map((benefit) => (
              <li key={benefit} className="rounded-2xl border border-background-200 bg-white p-5 text-sm font-semibold leading-relaxed text-foreground-950 shadow-sm">
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 border-t border-background-200 pt-6 text-sm leading-relaxed text-foreground-600">
          Employer responsibilities, protected training time and assessment arrangements are agreed through the individual training plan. Independent apprenticeship assessment is conducted separately under the applicable ST0845 assessment requirements.
        </p>
      </div>
    </section>
  );
}
