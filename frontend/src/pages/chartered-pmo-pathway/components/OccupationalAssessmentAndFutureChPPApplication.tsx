import SectionHeading from '@/components/base/SectionHeading';

const assessmentMethods = [
  {
    title: 'Technical Work-Based Assignment',
    description: 'After gateway, undertake an approved technical assignment involving a written report, presentation and questioning.',
    detail: 'Demonstrate technical analysis, professional judgement and evidence-based recommendations.',
  },
  {
    title: 'Portfolio-Based Professional Discussion',
    description: 'Explain your professional decisions, methods and contribution through a structured discussion supported by authentic workplace evidence.',
    detail: 'The portfolio supports the discussion but is not assessed separately.',
  },
];

const gatewayRequirements = [
  'Your employer confirms your occupational readiness.',
  'The basis of the technical assignment is agreed with the assessment organisation.',
  'Your required workplace evidence portfolio is completed and submitted.',
  'Any applicable English, maths and other gateway requirements are checked.',
];

const assessmentOutcomes = [
  {
    title: 'Apprenticeship Completion',
    description: 'Awarded following successful independent assessment under the applicable ST0845 assessment plan.',
  },
  {
    title: 'Chartered Project Professional',
    description: 'Awarded separately by APM following its own eligibility, application and assessment requirements.',
  },
];

export default function OccupationalAssessmentAndFutureChPPApplication() {
  return (
    <section id="professional-evidence" aria-labelledby="professional-evidence-title" className="scroll-mt-44 bg-white py-16 md:py-24">
      <div className="container-site">
        <SectionHeading
          id="professional-evidence-title"
          tag="Apprenticeship Assessment"
          title="Demonstrate Competence Through Independent Assessment"
          subtitle="The Chartered Pathway leads towards End-Point Assessment (EPA) against the full Project Controls Professional Level 6 standard."
          className="max-w-4xl"
        />

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
          {assessmentMethods.map((method) => (
            <article key={method.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold leading-snug text-foreground-950">{method.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-600">{method.description}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground-600">{method.detail}</p>
            </article>
          ))}
        </div>

        <article className="mt-8 rounded-2xl border border-background-200 bg-background-50 p-6 md:p-8">
          <h3 className="text-xl font-bold leading-snug text-foreground-950">Preparing for Gateway</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground-600">Before independent assessment:</p>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-foreground-600 marker:text-primary-700">
            {gatewayRequirements.map((requirement) => <li key={requirement}>{requirement}</li>)}
          </ul>
        </article>

        <div className="mt-10">
          <h3 className="mb-5 text-xl font-bold leading-snug text-foreground-950 md:text-2xl">Two Separate Assessment Outcomes</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {assessmentOutcomes.map((outcome) => (
              <article key={outcome.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
                <h4 className="text-xl font-bold leading-snug text-foreground-950">{outcome.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-foreground-600">{outcome.description}</p>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-8 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5 text-sm leading-relaxed text-foreground-600 md:p-6">
          Learning reflections used in KBC modules must be distinguished from the formal apprenticeship EPA portfolio, which excludes reflective accounts and self-assessment under the current assessment plan.
        </p>
      </div>
    </section>
  );
}
