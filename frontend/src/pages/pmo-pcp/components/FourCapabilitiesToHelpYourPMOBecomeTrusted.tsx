import PmoSection from './PmoSection';
const stages = [
  {
    number: '01',
    heading: 'Project Management Office',
    subheading: 'PMO Governance and Organisational Direction',
    text: 'Develop the purpose, operating model and governance arrangements of an effective PMO.',
    includes: [
      'PMO operating models',
      'Governance structures',
      'Decision rights',
      'Roles and responsibilities',
      'Assurance reviews',
      'Stage gates',
      'Ethics and organisational context',
    ],
    outputs: [
      'Governance map',
      'RACI matrix',
      'Decision log',
      'Escalation framework',
      'Assurance review',
    ],
  },
  {
    number: '02',
    heading: 'Project Planning and Control',
    subheading: 'PMP-Aligned Capability',
    text: 'Connect scope, schedule, cost, resources, performance and change into a credible integrated control environment.',
    includes: [
      'Work breakdown structures',
      'Planning and scheduling',
      'Baseline management',
      'Critical path',
      'Performance reporting',
      'Forecasting',
      'Change control',
    ],
    outputs: [
      'WBS',
      'Integrated baseline',
      'Schedule analysis',
      'Performance report',
      'Change log',
    ],
  },
  {
    number: '03',
    heading: 'Risk, Quality and Issue Management',
    subheading: 'Assurance and Continuous Improvement',
    text: 'Move from static registers and reactive escalation towards stronger risk ownership, issue discipline, quality assurance and continuous improvement.',
    includes: [
      'Risk identification',
      'Risk response',
      'Issue management',
      'Quality planning',
      'Assurance',
      'Root-cause analysis',
      'Lessons learned',
    ],
    outputs: [
      'Risk and issue register',
      'Risk response plan',
      'Quality plan',
      'Assurance checklist',
      'Lessons learned record',
    ],
  },
  {
    number: '04',
    heading: 'Stakeholder Engagement and Communication',
    subheading: 'PMP-Aligned Capability',
    text: 'Translate project information into clear messages, executive reporting, options and recommendations that help stakeholders act with confidence.',
    includes: [
      'Stakeholder analysis',
      'Communication planning',
      'Executive reporting',
      'Dashboard narrative',
      'Benefits visibility',
      'Engagement',
      'Escalation communication',
    ],
    outputs: [
      'Stakeholder map',
      'Engagement plan',
      'Executive dashboard',
      'Exception report',
      'Benefits report',
    ],
  },
];


const stageIcons = ['ri-building-4-line', 'ri-bar-chart-box-line', 'ri-shield-check-line', 'ri-discuss-line'];

export default function FourCapabilitiesToHelpYourPMOBecomeTrusted() {
  return (
    <PmoSection id="journey" tag="The PMO Route" title="Four capabilities to help your PMO become trusted." subtitle="Each capability strengthens a different area of PMO performance. Together, they create a clearer route from project information to governance confidence and better decisions.">
      <ol className="grid gap-6 lg:grid-cols-2">
        {stages.map((stage, index) => (
          <li key={stage.number} className="flex min-w-0 flex-col rounded-xl border border-background-200 bg-white p-5 shadow-sm md:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-xl text-primary-700"><i className={stageIcons[index]} aria-hidden="true" /></span>
              <span className="font-label text-xs font-bold uppercase tracking-wider text-secondary-600">Stage {stage.number}</span>
            </div>
            <h3 className="font-heading text-xl font-bold leading-snug text-foreground-950 md:text-2xl">{stage.heading}</h3>
            <p className="mt-2 text-xs font-semibold text-secondary-600">{stage.subheading}</p>
            <p className="mt-4 text-sm leading-7 text-foreground-600">{stage.text}</p>
            <div className="mt-6 border-t border-background-200 pt-5">
              <h4 className="text-sm font-bold text-foreground-800">Includes</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {stage.includes.map(item => <li key={item} className="flex items-start gap-2 text-sm leading-6 text-foreground-600"><i className="ri-check-line mt-0.5 shrink-0 text-secondary-500" aria-hidden="true" />{item}</li>)}
              </ul>
            </div>
            <div className="mb-6 mt-5">
              <h4 className="mb-3 text-sm font-bold text-foreground-800">Workplace outputs</h4>
              <ul className="flex flex-wrap gap-2">{stage.outputs.map(item => <li key={item} className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs leading-6 text-primary-700">{item}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-foreground-600">PMP-aligned capability means learning relevant to professional planning and stakeholder practice. It does not imply PMI endorsement or automatic PMP certification.</p>
    </PmoSection>
  );
}
