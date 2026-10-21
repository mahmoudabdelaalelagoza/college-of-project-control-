import PmoSection from './PmoSection';
const problemCards = [
  {
    title: 'Governance Confidence',
    text: 'Clarify who decides, who escalates and how assurance should work.',
  },
  {
    title: 'Reporting With Meaning',
    text: 'Explain what the information means and what decision is required.',
  },
  {
    title: 'Integrated Controls',
    text: 'Connect schedule, cost, risk, quality, issues and change.',
  },
  {
    title: 'Assurance Before Failure',
    text: 'Identify warning signs before they become delivery surprises.',
  },
  {
    title: 'Professional PMO Influence',
    text: 'Help PMO professionals contribute confidently in senior forums.',
  },
];


export default function ItIsTimeToStopAskingPMOsOnlyForReports() {
  return (
    <PmoSection tag="Why this route exists" title="It is time to stop asking PMOs only for reports." subtitle="A PMO should not simply chase updates, maintain templates and distribute dashboards. It should help leaders understand confidence, risk, priorities, options and action.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {problemCards.map((card, index) => <article key={card.title} className="rounded-xl border border-background-200 bg-white p-6 shadow-sm"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><h3 className="font-heading text-xl font-bold text-foreground-950">{card.title}</h3><p className="mt-3 text-sm leading-7 text-foreground-600">{card.text}</p></article>)}
      </div>
    </PmoSection>
  );
}
