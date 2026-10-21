import StrategicSection from './StrategicSection';
import SiteLink from '@/components/base/SiteLink';

const employerResponsibilities = [
  {
    title: 'Relevant Workplace Responsibilities',
    description: 'Provide suitable activities and opportunities to develop the full Level 6 occupational competence.',
  },
  {
    title: 'Protected Training Time',
    description: 'Support agreed off-the-job learning during paid working hours.',
  },
  {
    title: 'Access to Information & Stakeholders',
    description: 'Enable appropriate access to project information, governance processes, systems and decision-making contexts.',
  },
  {
    title: 'Feedback & Progress Reviews',
    description: 'Nominate a manager or workplace sponsor who can support learning, provide feedback and participate in reviews.',
  },
  {
    title: 'Assessment Readiness',
    description: "Help verify the learner's own contribution and confirm occupational readiness for independent assessment.",
  },
];

export default function EmployerPartnership() {
  return (
    <StrategicSection
      id="strategic-employers"
      headingId="strategic-employers-title"
      tag="Employer Partnership"
      title="Develop Strategic Project Controls Capability Within Your Organisation"
      intro={"Support employees in developing the technical understanding and professional judgement needed to interpret project performance and contribute to programme, portfolio and PMO decisions."}
      tone="white"
    >
      <h3 className="mb-5 text-xl font-bold leading-snug text-foreground-950 md:text-2xl">What Your Organisation Provides</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {employerResponsibilities.map((responsibility) => (
          <article key={responsibility.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-xl font-bold leading-snug text-foreground-950">{responsibility.title}</h4>
            <p className="text-sm leading-relaxed text-foreground-600">{responsibility.description}</p>
          </article>
        ))}
      </div>

      <article className="mt-8 rounded-2xl bg-primary-800 p-6 text-white">
        <h3 className="text-xl font-bold leading-snug text-white">Potential Organisational Benefits</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/80">
          Clearer Governance · Better-Informed Decisions · Stronger Strategic Reporting · Developing Internal Expertise
        </p>
      </article>
      <p className="mt-6 text-sm leading-relaxed text-foreground-600">
        Workplace activities and data use must follow employer approval, confidentiality requirements and organisational information-security policies.
      </p>
      <div className="mt-6">
        <SiteLink href="/book-a-session" className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 text-center text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700">
          <span>Discuss Employer Requirements</span>
          <i className="ri-arrow-right-line shrink-0" aria-hidden="true" />
        </SiteLink>
      </div>
    </StrategicSection>
  );
}
