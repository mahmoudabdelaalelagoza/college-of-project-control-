import PmoSection from './PmoSection';

const apprenticeshipSteps = [
  { step: '1', title: 'Learn', text: 'Live 2-hour tutor-led sessions.' },
  { step: '2', title: 'Apply', text: 'Use learning in real PMO, governance and reporting activity.' },
  { step: '3', title: 'Evidence', text: 'Collect workplace outputs, reflection and portfolio evidence.' },
  { step: '4', title: 'Review', text: 'Complete structured progress reviews with employer support.' },
  { step: '5', title: 'Improve', text: 'Use feedback to strengthen professional practice and organisational capability.' },
];


export default function AWorkplaceDevelopmentJourneyNotJustACourse() {
  return (
    <PmoSection id="apprenticeship" tag="How learning works" title="A workplace development journey, not just a course." subtitle="Structured around live learning, workplace application, evidence collection and employer-supported progress." tone="white">
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {apprenticeshipSteps.map(step => <li key={step.step} className="rounded-xl border border-background-200 bg-background-50 p-5"><span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700" aria-hidden="true">{step.step.padStart(2, '0')}</span><h3 className="font-heading text-xl font-bold text-foreground-950">{step.title}</h3><p className="mt-3 text-sm leading-7 text-foreground-600">{step.text}</p></li>)}
      </ol>
    </PmoSection>
  );
}
