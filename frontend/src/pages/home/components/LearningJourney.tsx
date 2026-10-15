import SectionHeading from '@/components/base/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Learn',
    body: 'Develop new knowledge and skills through live teaching, guided study and learning resources.',
  },
  {
    number: '02',
    title: 'Apply',
    body: 'Put your learning into practice through relevant project activities and workplace responsibilities.',
  },
  {
    number: '03',
    title: 'Demonstrate',
    body: "Gather evidence of your own work and show how you've applied your developing knowledge and skills.",
  },
  {
    number: '04',
    title: 'Review',
    body: 'Review your progress with your coach and employer, using feedback to identify your next development priorities.',
  },
  {
    number: '05',
    title: 'Complete assessment',
    body: 'Prepare for and complete the assessment required for your apprenticeship, following the applicable assessment plan.',
  },
];

export default function LearningJourney() {
  return (
    <section className="mt-14 rounded-xl border border-background-200 bg-white/88 px-5 py-8 md:mt-16 md:px-8 md:py-10" aria-labelledby="learning-journey-heading">
      <SectionHeading
        tag="How learning works"
        title="Learn, apply and demonstrate your progress"
        subtitle="Our apprenticeships combine live teaching, guided learning and opportunities to apply new skills at work. With coaching and regular progress reviews, you'll develop your capabilities and prepare for your apprenticeship assessment."
        className="max-w-4xl"
      />

      <div className="relative mt-10">
        <div className="absolute left-5 top-0 h-full w-px bg-background-200 md:left-[10%] md:right-[10%] md:top-6 md:h-px md:w-auto" aria-hidden="true" />
        <ol className="relative grid gap-0 md:grid-cols-5 md:gap-4">
          {steps.map((step) => (
            <li key={step.number} className="relative grid gap-4 pb-8 pl-14 last:pb-0 md:block md:pb-0 md:pl-0 md:text-center">
              <span className="absolute left-0 top-0 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-signal-400 bg-white font-label text-sm font-bold text-primary-950 md:relative md:left-auto md:top-auto md:mx-auto">
                {step.number}
              </span>
              <div className="md:mt-6">
                <h3 className="font-heading text-xl font-bold text-foreground-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground-600">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
