import SectionHeading from '@/components/base/SectionHeading';

const professionalGroups = [
  {
    title: 'Project Controls Professionals',
    roles: 'Project Controls Managers · Planning & Cost Leads · Performance & Assurance Specialists',
  },
  {
    title: 'PMO & Governance Professionals',
    roles: 'PMO Managers · Governance Leads · Portfolio Office Professionals',
  },
  {
    title: 'Programme & Delivery Professionals',
    roles: 'Programme Controls Specialists · Risk & Quality Practitioners · Project Leaders with Controls Responsibilities',
  },
];

export default function WhoShouldChooseTheCharteredPathway() {
  return (
    <section id="role-fit" aria-labelledby="role-fit-title" className="relative isolate overflow-hidden bg-background-50 py-16 md:py-24">
      <div className="pattern-dots-overlay pattern-dots-light" aria-hidden="true" />
      <div className="container-site relative z-10">
        <SectionHeading
          id="role-fit-title"
          tag="Who Should Choose This Pathway?"
          title="For Professionals Combining Project Controls with Governance and Leadership"
          subtitle="The pathway is designed for employed professionals whose responsibilities provide opportunities to develop and demonstrate advanced project controls competence."
          className="max-w-4xl"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {professionalGroups.map((group) => (
            <article key={group.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">{group.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-600">{group.roles}</p>
            </article>
          ))}
        </div>

        <article className="mt-8 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5 md:p-6">
          <h3 className="text-xl font-bold leading-snug text-foreground-950">A Suitable Workplace Role</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground-600">
            Your responsibilities should provide opportunities to analyse delivery information, contribute to governance or assurance, communicate recommendations and demonstrate your own professional judgement.
          </p>
          <p className="mt-3 text-sm font-semibold leading-relaxed text-primary-900">
            Your role must also support the full ST0845 occupational requirements. A senior job title or Chartered ambition alone is not sufficient.
          </p>
        </article>
      </div>
    </section>
  );
}
