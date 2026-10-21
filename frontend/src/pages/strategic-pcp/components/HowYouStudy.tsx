import StrategicSection from './StrategicSection';

const learningSteps = [
  { title: 'Learn', description: 'Explore frameworks, tools, worked examples and professional practice.' },
  { title: 'Apply', description: 'Use the learning in a real or approved workplace situation.' },
  { title: 'Evidence', description: 'Capture outputs, decisions, feedback, judgement and impact.' },
  { title: 'Review', description: 'Discuss progress, KSB coverage and evidence with the coach.' },
  { title: 'Improve', description: 'Refine the output and agree the next practical development action.' },
];

const learningSupport = [
  { title: 'Live teaching', description: 'Interactive online sessions, technical discussion, strategic cases and worked examples.' },
  { title: 'Skills coaching', description: 'Regular support for evidence, reflection, progress and assessment readiness.' },
  { title: 'Workplace application', description: 'Real projects, employer feedback and practical outputs connected to the occupational standard.' },
];

export default function HowYouStudy() {
  return (
    <StrategicSection
      id="delivery"
      tag="How you study"
      title="A practical learning cycle built around workplace application"
      intro="Learning is developed through live teaching, guided study, coaching, evidence production and structured review."
      tone="light"
    >
      <ol aria-label="Learning cycle" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {learningSteps.map((step, index) => (
          <li key={step.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-5 shadow-sm">
            <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-signal-100 text-sm font-semibold text-primary-900" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="text-xl font-bold leading-snug text-foreground-950">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground-600">{step.description}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {learningSupport.map((support) => (
          <article key={support.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold leading-snug text-foreground-950">{support.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground-600">{support.description}</p>
          </article>
        ))}
      </div>
      <article className="mt-8 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5 md:p-6">
        <h3 className="text-xl font-bold leading-snug text-foreground-950">Coaching Throughout Your Journey</h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground-600">
          Alongside specialist teaching, KBC provides coaching and progress support to help you connect learning with workplace responsibilities, feedback and professional development.
        </p>
      </article>
      <p className="mt-5 text-sm leading-relaxed text-foreground-600">
        The programme team confirms your assigned tutors, coaches and access to individual specialists. Featured experts are not necessarily assigned to every learner or module.
      </p>
    </StrategicSection>
  );
}
