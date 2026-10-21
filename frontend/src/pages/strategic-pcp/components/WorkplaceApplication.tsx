import StrategicSection from './StrategicSection';
const workplaceApplications = [
  {
    title: 'Strategic Project Decisions',
    description: 'Develop governance briefs, stakeholder analyses and evidence-based recommendations for complex delivery challenges.',
    icon: 'ri-compass-3-line',
  },
  {
    title: 'Programme & Benefits Oversight',
    description: 'Explore programme roadmaps, dependency reviews, benefits measures and assurance reporting.',
    icon: 'ri-git-branch-line',
  },
  {
    title: 'Portfolio Prioritisation',
    description: 'Contribute to investment appraisals, capacity assessments and portfolio decision-support information.',
    icon: 'ri-briefcase-line',
  },
  {
    title: 'PMO Development',
    description: 'Explore PMO mandates, service catalogues, governance arrangements and performance measures.',
    icon: 'ri-team-line',
  },
  {
    title: 'Responsible AI & Reporting',
    description: 'Develop or improve approved reporting workflows, dashboards and analytical processes with appropriate checks and human oversight.',
    icon: 'ri-bar-chart-box-line',
  },
];

export default function WorkplaceApplication() {
  return (
    <StrategicSection
      id="strategic-workplace-application"
      headingId="strategic-workplace-application-title"
      tag="From Learning to Practice"
      title="Develop Evidence That Supports Strategic Decisions"
      intro={"Apply your learning to relevant project, programme, portfolio and PMO activities, with opportunities to analyse information, consider options and communicate professional recommendations."}
      tone="white"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workplaceApplications.map((application) => (
          <article key={application.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-2xl text-accent-700" aria-hidden="true">
              <i className={application.icon} />
            </div>
            <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">{application.title}</h3>
            <p className="text-sm leading-relaxed text-foreground-600">{application.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5">
        <p className="text-sm leading-relaxed text-foreground-600">
          These are illustrative workplace outputs, not mandatory documents or a guaranteed list of assessment evidence. Suitable activities depend on your responsibilities, employer permissions and the applicable apprenticeship assessment requirements.
        </p>
      </div>
    </StrategicSection>
  );
}
