import SectionHeading from '@/components/base/SectionHeading';

const pmoModules = [
  {
    title: 'PMO Fundamentals & Organisational Governance',
    description: 'Explore PMO purpose, operating models, accountability, governance structures, decision rights and proportionate assurance.',
  },
  {
    title: 'Planning, Scheduling & Integrated Controls',
    description: 'Connect scope, schedules, costs, resources, risk and change to develop credible project baselines and performance information.',
  },
  {
    title: 'Risk, Issue & Quality Management',
    description: 'Apply approaches to risk analysis, issue escalation, quality assurance, ownership and continuous improvement.',
  },
  {
    title: 'Stakeholder Management & Reporting',
    description: 'Develop stakeholder engagement, professional influence, executive reporting and communication that supports informed decisions.',
  },
];

const specialistOptions = [
  {
    label: 'Option A',
    title: 'Earned Value Management',
    description: 'Develop expertise in performance measurement, cost and schedule variances, forecasting and evidence-based corrective action.',
  },
  {
    label: 'Option B',
    title: 'Managing Portfolios',
    description: 'Explore strategic investment priorities, portfolio balance, organisational capacity, risk, benefits and governance.',
  },
];

const pmoCredits = pmoModules.length;
const aiCredits = 1;
const specialistCredits = 1;
const totalCredits = pmoCredits + aiCredits + specialistCredits;

export default function TheProfessionalDevelopmentArchitecture() {
  return (
    <section id="pathway-structure" aria-labelledby="pathway-structure-title" className="scroll-mt-44 bg-white py-16 md:py-24">
      <div className="container-site">
        <SectionHeading
          id="pathway-structure-title"
          tag="Your Chartered Learning Pathway"
          title="Six Credits. A Clear Route Towards Professional Recognition."
          subtitle="The standard Chartered Pathway brings together four KBC Certified PMO Professional modules, applied AI development and one agreed specialist option."
          className="max-w-4xl"
        />
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-foreground-600 md:mt-4 md:text-base">
          Your final learning plan is confirmed with KBC and your employer.
        </p>

        <article className="mt-10 overflow-hidden rounded-2xl border border-background-200 bg-white shadow-sm md:mt-12">
          <div className="bg-primary-800 p-6 text-white md:p-8">
            <h3 className="text-xl font-bold leading-snug text-white md:text-2xl">
              Credits 1–{pmoCredits} — Certified PMO Professional (Level 6)
            </h3>
            <p className="mt-4 text-sm font-semibold text-signal-300">{pmoCredits} KBC Credits · 16 Months</p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              A structured professional programme developing technical knowledge, critical analysis and applied PMO practice.
            </p>
          </div>

          <ol aria-label="Certified PMO Professional modules" className="grid gap-5 p-5 md:grid-cols-2 md:p-8">
            {pmoModules.map((module, index) => (
              <li key={module.title} className="min-w-0 rounded-xl border border-background-200 bg-background-50 p-5">
                <h4 className="text-lg font-bold leading-snug text-foreground-950">Module {index + 1} — {module.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-foreground-600">{module.description}</p>
              </li>
            ))}
          </ol>

          <div className="border-t border-background-200 p-6 md:p-8">
            <h4 className="text-xl font-bold leading-snug text-foreground-950">Professional Assessment</h4>
            <p className="mt-3 text-sm leading-relaxed text-foreground-600">
              The Certified PMO Professional programme combines critical knowledge assessments with an applied professional practice portfolio. Successful completion of its recognised assessment can support the technical-knowledge requirement for an eligible APM ChPP Pathway 2 application.
            </p>
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold leading-snug text-foreground-950">Credit 5 — AI in Project Controls & Management</h3>
            <p className="mt-4 text-sm font-semibold text-accent-700">{aiCredits} KBC Credit · 4 Months</p>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground-600">
              <p>Explore responsible AI applications for project controls, including data analysis, dashboards, governed automation and reporting.</p>
              <p>Develop approaches that maintain data quality, human approval, traceability and professional accountability.</p>
            </div>
          </article>
          <article className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold leading-snug text-foreground-950">Credit 6 — Choose One Specialist Option</h3>
            <p className="mt-4 text-sm font-semibold text-accent-700">{specialistCredits} KBC Credit · 4 Months</p>
            <div className="mt-5 space-y-5">
              {specialistOptions.map((option) => (
                <div key={option.label}>
                  <h4 className="text-lg font-bold leading-snug text-foreground-950">{option.label} — {option.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-600">{option.description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <article className="mt-8 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5 md:p-6">
          <h3 className="text-xl font-bold leading-snug text-foreground-950">Your Chartered Credit Structure</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground-600">
            Certified PMO Professional ({pmoCredits}) + AI in Project Controls ({aiCredits}) + EVM or Managing Portfolios ({specialistCredits}) = {totalCredits} KBC Learning Credits
          </p>
        </article>
        <p className="mt-5 text-sm leading-relaxed text-foreground-600">
          The six-credit structure is agreed individually. KBC credits are internal learning units, not transferable university credits. External qualifications and examination arrangements are confirmed in your written offer.
        </p>
      </div>
    </section>
  );
}
