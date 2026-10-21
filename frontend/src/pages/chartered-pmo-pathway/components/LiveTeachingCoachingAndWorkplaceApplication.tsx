import SectionHeading from '@/components/base/SectionHeading';

const learningSteps = [
  {
    title: 'Learn',
    description: 'Join live tutor-led sessions, explore professional frameworks and discuss practical examples.',
  },
  {
    title: 'Apply',
    description: 'Use suitable techniques in project controls, PMO, governance and assurance activities.',
  },
  {
    title: 'Demonstrate',
    description: 'Develop authentic professional outputs, record eligible learning and identify evidence of your contribution.',
  },
  {
    title: 'Review',
    description: 'Discuss progress, development opportunities and training commitments through coaching and employer reviews.',
  },
  {
    title: 'Improve',
    description: 'Use feedback to strengthen technical understanding, professional judgement and workplace application.',
  },
];

export default function LiveTeachingCoachingAndWorkplaceApplication() {
  return (
    <section id="delivery" aria-labelledby="delivery-title" className="scroll-mt-44 bg-white py-16 md:py-24">
      <div className="container-site">
        <SectionHeading
          id="delivery-title"
          tag="Your Learning Experience"
          title="Expert-Led Teaching, Workplace Application and Ongoing Support"
          subtitle="Build your knowledge through structured learning and develop your professional practice through relevant workplace responsibilities."
          className="max-w-4xl"
        />

        <ol className="mt-10 xl:grid xl:grid-cols-5 xl:gap-6 md:mt-12">
          {learningSteps.map((step, index) => (
            <li key={step.title} className="relative flex min-w-0 gap-4 pb-8 last:pb-0 xl:block xl:pb-0">
              {index < learningSteps.length - 1 && (
                <div className="absolute bottom-0 left-6 top-12 w-px bg-primary-200 xl:bottom-auto xl:left-12 xl:top-6 xl:h-px xl:w-[calc(100%+1.5rem-3rem)]" aria-hidden="true" />
              )}
              <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary-700 bg-primary-800 text-sm font-bold text-white" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0 flex-1 rounded-2xl border border-background-200 bg-background-50 p-5 xl:mt-6">
                <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">
                  <span className="sr-only">{String(index + 1).padStart(2, '0')} — </span>{step.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <article className="mt-8 overflow-hidden rounded-2xl border border-background-200 bg-background-50">
          <div className="border-b border-background-200 p-6 md:p-8">
            <h3 className="text-xl font-bold leading-snug text-foreground-950">Understanding the Duration</h3>
            <h4 className="mt-3 text-lg font-bold leading-snug text-primary-800">
              Indicative KBC Plan: 27 Months Before Independent Assessment
            </h4>
          </div>
          <div className="space-y-4 p-6 text-sm leading-relaxed text-foreground-600 md:p-8">
            <p>
              The published KBC structure comprises an initial preparation month, six learning credits across 24 months and two months of closing workshops.
            </p>
            <p>
              The national ST0845 standard publishes a typical duration of 48 months before assessment and a minimum of 835 eligible training hours.
            </p>
            <p>
              Your actual duration, training hours and support arrangements must be individually agreed after review of prior learning and occupational requirements.
            </p>
          </div>
        </article>

        <p className="mt-8 text-center text-sm font-semibold leading-relaxed text-primary-700">
          Live Online Teaching · Guided Study · Skills Coaching · Employer Progress Reviews
        </p>
        <p className="mt-6 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5 text-sm leading-relaxed text-foreground-600 md:p-6">
          Routine productive work, administrative record keeping and progress reviews do not automatically count as eligible off-the-job training.
        </p>
      </div>
    </section>
  );
}
