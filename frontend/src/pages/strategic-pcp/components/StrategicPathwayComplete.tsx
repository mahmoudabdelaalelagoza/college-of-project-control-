import StrategicSection from './StrategicSection';
const assessmentMethods = [
  {
    title: 'Technical Work-Based Assignment',
    description: 'Complete an approved technical assignment, including a written report, presentation and questioning, to demonstrate analysis, application and professional judgement.',
  },
  {
    title: 'Portfolio-Based Professional Discussion',
    description: 'Explain your experience, decisions and professional contribution through discussion with an independent assessor, supported by authentic workplace evidence.',
    note: 'The portfolio supports the discussion and is not assessed separately.',
  },
  {
    title: 'Gateway Readiness',
    description: 'Before EPA, the required workplace evidence, technical assignment proposal, employer confirmation and any applicable qualification requirements must be completed and checked.',
  },
];

const professionalQualifications = [
  'Project Management Professional (PMP).',
  'Programme management certification, where included.',
  'The agreed portfolio management certification route.',
  'PMI PMO Certified Professional (PMI-PMOCP).',
];

export default function StrategicPathwayComplete() {
  return (
    <StrategicSection
      id="completion"
      headingId="strategic-assessment-title"
      tag="Assessment & Progression"
      title="Demonstrate Competence. Understand Your Professional Options."
      intro={"The Strategic Pathway supports development towards the full Project Controls Professional Level 6 occupational standard."}
      tone="light"
    >
      <div aria-labelledby="strategic-epa-title">
        <h3 id="strategic-epa-title" className="text-xl font-bold leading-snug text-foreground-950 md:text-2xl">Independent End-Point Assessment</h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground-600">
          The apprenticeship is completed through an independent assessment process following gateway.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {assessmentMethods.map((method, index) => (
            <article key={method.title} className={`min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <h4 className="mb-3 text-xl font-bold leading-snug text-foreground-950">{method.title}</h4>
              <p className="text-sm leading-relaxed text-foreground-600">{method.description}</p>
              {method.note && <p className="mt-3 text-sm leading-relaxed text-foreground-600">{method.note}</p>}
            </article>
          ))}
        </div>
      </div>

      <article className="mt-8 rounded-2xl border border-background-200 bg-background-50 p-6">
        <h3 className="text-xl font-bold leading-snug text-foreground-950">External Professional Certification</h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground-600">
          Selected learning modules can support preparation for professional qualifications, including:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-foreground-600">
          {professionalQualifications.map((qualification) => <li key={qualification}>{qualification}</li>)}
        </ul>
        <p className="mt-5 text-sm leading-relaxed text-foreground-600">
          Professional certifications are awarded independently by the relevant bodies following their own eligibility, registration and assessment requirements.
        </p>
      </article>

      <div className="mt-6 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5">
        <p className="text-sm leading-relaxed text-foreground-600">
          Completing six KBC learning credits does not automatically complete the apprenticeship. Equally, passing the apprenticeship does not automatically confer PMP, PMI-PMOCP, or other external professional certifications.
        </p>
      </div>
    </StrategicSection>
  );
}
