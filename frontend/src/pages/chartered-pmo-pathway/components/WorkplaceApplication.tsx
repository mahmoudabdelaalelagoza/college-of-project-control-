import SectionHeading from '@/components/base/SectionHeading';

const workplaceOutputs = [
  {
    title: 'PMO Governance & Assurance',
    description: 'An operating-model proposal, governance map, decision-rights framework or assurance review.',
  },
  {
    title: 'Integrated Performance Information',
    description: 'A project baseline, performance analysis, forecast or change recommendation.',
  },
  {
    title: 'Risk & Quality Improvement',
    description: 'A risk assessment, escalation approach, quality review or improvement proposal.',
  },
  {
    title: 'Portfolio or Earned Value Analysis',
    description: 'An investment-prioritisation model or earned-value performance report, according to your agreed specialist module.',
  },
  {
    title: 'Responsible AI Application',
    description: 'An approved reporting dashboard or automated workflow with human oversight and appropriate data controls.',
  },
  {
    title: 'Professional Communication',
    description: 'An executive decision brief, stakeholder engagement approach or evidence-led recommendation.',
  },
];

export default function WorkplaceApplication() {
  return (
    <section id="workplace-application" aria-labelledby="workplace-application-title" className="scroll-mt-44 bg-white py-16 md:py-24">
      <div className="container-site">
        <SectionHeading
          id="workplace-application-title"
          tag="Professional Practice"
          title="Build Evidence of Your Decisions and Professional Contribution"
          subtitle="Apply your learning to suitable workplace challenges and develop outputs that demonstrate how you analyse information, exercise judgement and communicate recommendations."
          className="max-w-4xl"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {workplaceOutputs.map((output) => (
            <article key={output.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">{output.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-600">{output.description}</p>
            </article>
          ))}
        </div>

        <article className="mt-8 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5 md:p-6">
          <h3 className="text-xl font-bold leading-snug text-foreground-950">Authentic Evidence Matters</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground-600">
            Your professional contribution should be clear, supported by reliable information and appropriate to your responsibilities.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground-600">
            These outputs are illustrative, not a mandatory assessment checklist. Employer confidentiality and information-security requirements apply to all shared evidence.
          </p>
        </article>
      </div>
    </section>
  );
}
