import StrategicSection from './StrategicSection';
const pathwayModules = [
  {
    creditLabel: 'Credits 1–2',
    mandatory: true,
    title: 'PMP Preparation & Strategic Project Leadership',
    exampleLabel: 'PMP Preparation',
    credits: 2,
    months: 8,
    paragraphs: [
      'Develop project leadership knowledge and strengthen your understanding of governance, stakeholder engagement, delivery approaches, risk and business outcomes.',
      'Explore how project decisions support organisational objectives while preparing for the external PMP examination.',
    ],
  },
  {
    creditLabel: 'Credit 3',
    mandatory: true,
    title: 'AI in Project Controls & Management',
    exampleLabel: 'AI',
    credits: 1,
    months: 4,
    paragraphs: [
      'Explore responsible AI applications for reporting, data analysis, automation and decision support.',
      'Develop approaches that combine reliable information, appropriate controls, human approval and clear accountability.',
    ],
  },
  {
    creditLabel: 'Credit 4',
    mandatory: true,
    title: 'Risk Management',
    exampleLabel: 'Risk Management',
    credits: 1,
    months: 4,
    paragraphs: [
      'Develop structured approaches to identifying, analysing and responding to project and programme risk, uncertainty and opportunity.',
      'Connect risk insight to governance, contingency planning and leadership decisions.',
    ],
  },
  {
    creditLabel: 'Specialist option',
    mandatory: false,
    title: 'Programme Management',
    exampleLabel: 'Programme Management',
    credits: 1,
    months: 4,
    paragraphs: [
      'Explore the principles of Managing Successful Programmes (MSP), including programme governance, benefits realisation, dependencies, assurance and organisational change.',
      'Develop the ability to connect coordinated project delivery with intended business outcomes.',
    ],
  },
  {
    creditLabel: 'Specialist option',
    mandatory: false,
    title: 'Portfolio Management',
    exampleLabel: 'Portfolio Management',
    credits: 1,
    months: 4,
    paragraphs: [
      'Strengthen your understanding of strategic alignment, investment prioritisation, portfolio balance, delivery capacity and benefits.',
      'Explore how organisations can evaluate competing initiatives and make evidence-based investment recommendations.',
    ],
  },
  {
    creditLabel: 'Specialist option',
    mandatory: false,
    title: 'PMO Leadership & PMI-PMOCP Preparation',
    exampleLabel: 'PMO Leadership',
    credits: 1,
    months: 4,
    paragraphs: [
      'Develop approaches to PMO governance, operating-model design, service management, performance measurement and continuous improvement.',
      'Explore how a PMO can demonstrate its contribution to organisational objectives while preparing for the relevant PMI-PMOCP certification route.',
    ],
  },
];

// PMP, AI and Risk Management are mandatory; two of the three specialist options complete the six credits.
const examplePathway = pathwayModules.filter((module) => module.mandatory || module.title === 'Programme Management' || module.title === 'Portfolio Management');
const totalCredits = examplePathway.reduce((total, module) => total + module.credits, 0);

export default function YourCreditJourney() {
  return (
    <StrategicSection
      id="credit-overview"
      headingId="strategic-learning-pathway-title"
      tag="Your Learning Pathway"
      title="Six Credits. One Strategic Development Journey."
      intro={["The Strategic Pathway combines three mandatory modules — PMP Preparation, AI in Project Controls & Management and Risk Management — with two specialist credits chosen from programme management, portfolio management and PMO leadership.","Your final six-credit combination is agreed with Kent Business College and your employer, considering your responsibilities, prior learning and workplace development needs."]}
      tone="white"
    >
      <ol aria-label="Six-credit strategic learning pathway" className="grid gap-6 md:grid-cols-2">
        {pathwayModules.map((module, index) => (
          <li key={module.title} className={index === 0 ? 'min-w-0 md:col-span-2' : 'min-w-0'}>
            <article className={`h-full rounded-2xl border p-6 shadow-sm ${index === 0 ? 'border-white/20 bg-primary-800 text-white' : 'border-background-200 bg-white text-foreground-950'}`}>
              <h3 className={`text-xl font-bold leading-snug ${index === 0 ? 'text-white' : 'text-foreground-950'}`}>
                {module.creditLabel} — {module.title}
              </h3>
              <span className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${module.mandatory ? (index === 0 ? 'bg-white/15 text-signal-300' : 'bg-accent-50 text-accent-700') : 'bg-primary-50 text-primary-700'}`}>
                {module.mandatory ? 'Mandatory' : 'Choose two of three'}
              </span>
              <p className={`mt-4 text-sm font-semibold ${index === 0 ? 'text-signal-300' : 'text-accent-700'}`}>
                {module.credits} KBC {module.credits === 1 ? 'Credit' : 'Credits'} · {module.months} Months
              </p>
              <div className={`mt-4 space-y-3 text-sm leading-relaxed ${index === 0 ? 'text-white/80' : 'text-foreground-600'}`}>
                {module.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          </li>
        ))}
      </ol>

      <article className="mt-8 rounded-2xl border border-background-200 bg-background-50 p-6">
        <h3 className="text-xl font-bold leading-snug text-foreground-950">
          Illustrative Six-Credit Combination
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-foreground-600">
          {examplePathway.map((module) => `${module.exampleLabel} (${module.credits})`).join(' + ')} = {totalCredits} KBC Learning Credits
        </p>
        <p className="mt-3 text-sm leading-relaxed text-foreground-600">
          PMP Preparation, AI and Risk Management are mandatory in every Strategic Pathway. PMO Leadership can replace either specialist option above.
        </p>
      </article>

      <div className="mt-6 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5">
        <p className="text-sm leading-relaxed text-foreground-600">
          Credits are KBC pathway learning units, not transferable higher-education academic credits. The final module selection, sequence and any external professional examinations are confirmed in the agreed learning plan and written offer. The apprenticeship must develop competence across the full ST0845 standard.
        </p>
      </div>
    </StrategicSection>
  );
}
