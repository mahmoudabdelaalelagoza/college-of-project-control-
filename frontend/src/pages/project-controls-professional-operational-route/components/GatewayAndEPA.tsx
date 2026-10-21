const gatewayRequirements = [
  'Your employer confirms that you are working at the required occupational standard.',
  'Your proposed technical assignment is agreed and approved by the assessment organisation.',
  'Your mapped workplace evidence portfolio is completed and submitted.',
  'Any applicable English and maths requirements are checked.',
];

export default function GatewayAndEPA() {
  return (
    <section
      id="operational-assessment"
      aria-labelledby="operational-assessment-title"
      className="scroll-mt-44 bg-background-100 py-16 md:py-20"
    >
      <div className="container-site">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-accent-700">
            Gateway & End-Point Assessment
          </p>
          <h2 id="operational-assessment-title" className="text-3xl font-bold leading-tight text-foreground-950 md:text-4xl">
            Demonstrate Your Professional Competence
          </h2>
          <p className="text-base leading-relaxed text-foreground-600">
            The Operational Pathway prepares you for independent End-Point Assessment (EPA) against the full Project Controls Professional Level 6 occupational standard (ST0845).
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">
              Technical Work-Based Assignment
            </h3>
            <div className="space-y-3 text-sm leading-relaxed text-foreground-600">
              <p>
                Complete an approved technical assignment after gateway, producing a written report and presenting your analysis and recommendations to independent assessors.
              </p>
              <p>
                Your presentation and responses to questions demonstrate technical judgement, problem-solving and professional communication.
              </p>
            </div>
          </article>

          <article className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">
              Portfolio-Based Professional Discussion
            </h3>
            <div className="space-y-3 text-sm leading-relaxed text-foreground-600">
              <p>
                Take part in a structured discussion with an independent assessor, using authentic workplace evidence to explain your decisions, methods and professional practice.
              </p>
              <p>
                Your portfolio supports the discussion but is not assessed separately.
              </p>
            </div>
          </article>

          <article className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm md:col-span-2 lg:col-span-1">
            <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">
              Getting Ready for Gateway
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-foreground-600">Before entering EPA:</p>
            <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-foreground-600">
              {gatewayRequirements.map((requirement) => <li key={requirement}>{requirement}</li>)}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-foreground-600">
              The independent assessment organisation confirms that the gateway requirements have been met.
            </p>
          </article>
        </div>

        <article className="mt-8 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5">
          <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">
            Professional Certifications Are Separate
          </h3>
          <p className="text-sm leading-relaxed text-foreground-600">
            PMP, PMI-SP, APM and APMG examinations do not replace apprenticeship assessment. Similarly, completing the apprenticeship does not automatically award external professional certifications.
          </p>
        </article>
        <p className="mt-6 text-sm leading-relaxed text-foreground-600">
          EPA is conducted independently of KBC. Assessment arrangements follow the applicable ST0845 assessment plan and apprenticeship funding rules.
        </p>
      </div>
    </section>
  );
}
