import SectionHeading from '@/components/base/SectionHeading';
import SiteLink from '@/components/base/SiteLink';

const programmeFacts = [
  { value: '16 months', label: 'Indicative duration' },
  { value: '4 modules', label: 'Applied Level 6 learning' },
  { value: '2 hours / week', label: 'Live online teaching' },
];

const moduleThemes = [
  { title: 'Governance', description: 'PMO purpose, accountability and assurance.', href: '#module-1' },
  { title: 'Integrated Controls', description: 'Planning, scheduling, cost and change.', href: '#module-2' },
  { title: 'Risk & Quality', description: 'Risk, issues and continuous improvement.', href: '#module-3' },
  { title: 'Stakeholders & Reporting', description: 'Engagement, communication and decision support.', href: '#module-4' },
];

export default function TheTechnicalKnowledgeDevelopmentComponent() {
  return (
    <section id="certified-pmo-core" aria-labelledby="certified-pmo-core-title" className="scroll-mt-44 bg-background-50 py-16 md:py-24">
      <div className="container-site">
        <SectionHeading
          id="certified-pmo-core-title"
          tag="Certified PMO Professional"
          title="PMO Professional Development at Level 6"
          subtitle="A 16-month professional programme for experienced project, PMO and project controls practitioners. Develop practical expertise in governance, integrated controls, risk, quality and stakeholder reporting."
          className="max-w-4xl"
        />

        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-background-200 bg-white md:mt-12">
          <dl className="grid divide-y divide-background-200 border-b border-background-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {programmeFacts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 p-5 sm:text-center md:p-6">
                <dt className="order-2 text-sm leading-relaxed text-foreground-600">{fact.label}</dt>
                <dd className="text-xl font-bold leading-snug text-primary-800">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <ol className="grid px-5 md:grid-cols-2 md:gap-x-8 md:px-8">
            {moduleThemes.map((module, index) => (
              <li key={module.title} className="min-w-0 border-b border-background-200">
                <SiteLink href={module.href} className="group flex h-full items-start gap-4 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700">
                  <span className="pt-1 text-sm font-bold text-accent-700" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold leading-snug text-foreground-950 group-hover:text-primary-700 group-hover:underline">
                      <span className="sr-only">Module {index + 1}: </span>{module.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-600">{module.description}</p>
                  </div>
                  <i className="ri-arrow-right-line mt-1 shrink-0 text-primary-700" aria-hidden="true" />
                </SiteLink>
              </li>
            ))}
          </ol>

          <div className="space-y-3 p-5 md:p-8">
            <h3 className="text-lg font-bold text-foreground-950">How you are assessed</h3>
            <p className="text-sm leading-relaxed text-foreground-600">
              Critical knowledge assessments and an applied professional practice portfolio develop your analysis, judgement and workplace application.
            </p>
            <p className="text-sm leading-relaxed text-foreground-600">
              The named recognised assessment can support ChPP Pathway 2 technical knowledge. Chartered status requires a separate application and assessment by APM.
            </p>
            <SiteLink href="#apm-recognition" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700">
              APM recognition and ChPP requirements
              <i className="ri-arrow-right-line shrink-0" aria-hidden="true" />
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}
