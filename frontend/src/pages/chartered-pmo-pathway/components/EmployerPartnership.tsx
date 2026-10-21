import SectionHeading from '@/components/base/SectionHeading';
import SiteLink from '@/components/base/SiteLink';

const employerCommitments = [
  {
    title: 'Relevant Responsibilities',
    description: 'Provide suitable project controls duties and opportunities to develop the complete Level 6 occupational competence.',
  },
  {
    title: 'Protected Training Time',
    description: 'Support the agreed training plan through paid learning time and appropriate workplace arrangements.',
  },
  {
    title: 'Professional Guidance',
    description: 'Provide supervision, feedback and access to relevant projects, information and stakeholders.',
  },
  {
    title: 'Progress & Assessment Support',
    description: "Participate in progress reviews, verify the apprentice's own contribution and support gateway readiness.",
  },
  {
    title: 'Data Protection',
    description: 'Approve any use of confidential project information in learning activities, AI tools or assessment evidence.',
  },
];

export default function EmployerPartnership() {
  return (
    <section id="chartered-employers" aria-labelledby="chartered-employers-title" className="relative isolate scroll-mt-44 overflow-hidden bg-background-50 py-16 md:py-24">
      <div className="pattern-dots-overlay pattern-dots-light" aria-hidden="true" />
      <div className="container-site relative z-10">
        <SectionHeading
          id="chartered-employers-title"
          tag="Employer Partnership"
          title="Support the Development of Your Future Project Controls Leaders"
          subtitle="The Chartered Pathway combines structured learning with opportunities to strengthen governance, assurance and project controls practice in the workplace."
          className="max-w-4xl"
        />

        <div className="mt-10 md:mt-12">
          <h3 className="mb-5 text-xl font-bold leading-snug text-foreground-950 md:text-2xl">Employer Commitments</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {employerCommitments.map((commitment) => (
              <article key={commitment.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
                <h4 className="mb-3 text-xl font-bold leading-snug text-foreground-950">{commitment.title}</h4>
                <p className="text-sm leading-relaxed text-foreground-600">{commitment.description}</p>
              </article>
            ))}
          </div>
        </div>

        <article className="mt-8 rounded-2xl bg-primary-800 p-6 text-white md:p-8">
          <h3 className="text-xl font-bold leading-snug text-white">Potential Organisational Benefits</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            Clearer Accountability · More Reliable Controls Information · Stronger Assurance · Better-Informed Decisions · Developing Internal Expertise
          </p>
        </article>

        <div className="mt-8 flex justify-center">
          <SiteLink href="/book-a-session" className="btn-primary text-center text-sm">
            Discuss Employer Requirements
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </SiteLink>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-foreground-600">
          Employer responsibilities and opportunities for workplace learning are agreed through the individual apprenticeship training plan.
        </p>
      </div>
    </section>
  );
}
