const pmpPreparation = {
  title: 'Project Management Professional (PMP) Preparation',
  exampleLabel: 'PMP Preparation',
  credits: 2,
  months: 8,
};

const specialistModules = [
  { id: 'ai', title: 'AI in Project Controls & Management', exampleLabel: 'AI', credits: 1, months: 4 },
  { id: 'planning', title: 'Project Planning & Control', exampleLabel: 'Project Planning & Control', credits: 1, months: 4 },
  { id: 'risk', title: 'APM Risk Management', exampleLabel: 'APM Risk Management', credits: 1, months: 4 },
  { id: 'evm', title: 'Earned Value Management', exampleLabel: 'Earned Value Management', credits: 1, months: 4 },
  { id: 'scheduling', title: 'PMI Scheduling Professional Preparation', exampleLabel: 'PMI-SP Preparation', credits: 1, months: 4 },
];

const exampleSpecialists = specialistModules.filter(module => ['ai', 'planning', 'evm', 'scheduling'].includes(module.id));
const examplePathway = [pmpPreparation, ...exampleSpecialists];
const exampleCredits = examplePathway.reduce((total, module) => total + module.credits, 0);

export default function SelectSixCredits() {
  return (
    <section id="operational-structure" aria-labelledby="operational-structure-title" className="scroll-mt-44 bg-background-100 py-16 md:py-20">
      <div className="container-site">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-accent-700">Your Six-Credit Pathway</p>
          <h2 id="operational-structure-title" className="text-3xl font-bold leading-tight text-foreground-950 md:text-4xl">
            Build Your Operational Pathway Around Your Role
          </h2>
          <p className="text-base leading-relaxed text-foreground-600">
            Combine six KBC learning credits to develop practical expertise in planning, scheduling, cost, risk and project performance.
          </p>
          <p className="text-base leading-relaxed text-foreground-600">
            Your final module selection is agreed with Kent Business College and your employer, based on your responsibilities, prior learning and workplace development needs.
          </p>
        </div>

        <h3 className="mb-5 text-xl font-bold text-foreground-950 md:text-2xl">How the Six Credits Work</h3>
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <article className="min-w-0 rounded-2xl border border-white/20 bg-primary-800 p-6 text-white shadow-sm">
            <h4 className="text-xl font-bold leading-snug text-white">{pmpPreparation.title}</h4>
            <p className="mt-4 text-sm font-bold text-signal-300">{pmpPreparation.credits} Credits · {pmpPreparation.months} Months</p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Develop project management knowledge, leadership judgement and preparation for the external PMP examination.
            </p>
          </article>

          <article className="min-w-0 overflow-hidden rounded-2xl border border-background-200 bg-white shadow-sm">
            <div className="p-5 md:p-6">
              <h4 className="text-xl font-bold leading-snug text-foreground-950">Choose Four Specialist Modules</h4>
              <p className="mt-3 text-sm leading-relaxed text-foreground-600">Select four additional one-credit modules from the following options:</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs sm:text-sm">
                <caption className="sr-only">Specialist module options, credits and duration</caption>
                <thead className="border-y border-background-200 bg-primary-50 text-primary-800">
                  <tr>
                    <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Specialist Module</th>
                    <th scope="col" className="px-2 py-3 text-center font-semibold sm:px-3">Credits</th>
                    <th scope="col" className="px-2 py-3 font-semibold sm:px-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-background-200">
                  {specialistModules.map(module => (
                    <tr key={module.id}>
                      <th scope="row" className="px-3 py-4 font-medium leading-relaxed text-foreground-800 sm:px-5">{module.title}</th>
                      <td className="px-2 py-4 text-center text-foreground-600 sm:px-3">{module.credits}</td>
                      <td className="px-2 py-4 text-foreground-600 sm:px-3">{module.months} months</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </div>

        <article className="mt-6 rounded-2xl border border-background-200 bg-white p-5 shadow-sm md:p-6">
          <h3 className="text-xl font-bold text-foreground-950">Example Operational Pathway</h3>
          <p className="mt-4 text-sm leading-7 text-foreground-600">
            {examplePathway.map(module => `${module.exampleLabel} (${module.credits})`).join(' + ')}
          </p>
          <p className="mt-4 text-sm font-bold text-primary-800">Total: {exampleCredits} KBC Learning Credits</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground-600">
            APM Risk Management is another available specialist option, subject to the agreed module selection.
          </p>
        </article>

        <div className="mt-8 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5">
          <p className="text-sm leading-relaxed text-foreground-600">
            Credits are KBC learning units, not university credits. The selected modules must support the full ST0845 apprenticeship requirements. External professional certifications require separate eligibility and successful assessment by the relevant awarding body.
          </p>
        </div>
      </div>
    </section>
  );
}
