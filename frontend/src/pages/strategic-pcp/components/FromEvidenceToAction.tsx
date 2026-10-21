import StrategicSection from './StrategicSection';
const strategicBenefits = [
  {
    title: 'Programme Governance',
    description: 'Connect project delivery with programme outcomes, dependencies, assurance and benefits.',
    icon: 'ri-git-branch-line',
  },
  {
    title: 'Portfolio Decisions',
    description: 'Assess priorities, investment options, organisational capacity and strategic risks.',
    icon: 'ri-briefcase-line',
  },
  {
    title: 'PMO Leadership',
    description: 'Develop governance, reporting and assurance approaches that help decision-makers understand performance and take appropriate action.',
    icon: 'ri-team-line',
  },
];

export default function FromEvidenceToAction() {
  return (
    <StrategicSection
      id="strategic-advantage"
      headingId="strategic-advantage-title"
      tag="The Strategic Advantage"
      title="Move Beyond Project Reporting to Strategic Decision Support"
      intro={["Effective strategic project controls connect reliable delivery information with wider organisational priorities.","The Strategic Pathway helps professionals develop the judgement to understand competing demands, challenge assumptions and provide evidence that supports important decisions."]}
      tone="white"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {strategicBenefits.map((benefit) => (
          <article key={benefit.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-2xl text-accent-700" aria-hidden="true">
              <i className={benefit.icon} />
            </div>
            <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">{benefit.title}</h3>
            <p className="text-sm leading-relaxed text-foreground-600">{benefit.description}</p>
          </article>
        ))}
      </div>
    </StrategicSection>
  );
}
