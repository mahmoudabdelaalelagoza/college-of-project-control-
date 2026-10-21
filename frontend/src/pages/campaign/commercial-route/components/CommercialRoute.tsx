import SectionHeading from '@/components/base/SectionHeading';

const programmeSections = [
  {
    title: 'What Your Programme May Include',
    icon: 'ri-check-line',
    items: [
      'Structured project controls learning and one-to-one support',
      'Live online teaching and flexible delivery options',
      'Applied assignments and professional portfolio development',
      'London masterclasses and professional networking opportunities',
      'Professional examination and membership support, where included',
      'APM ChPP readiness guidance, where applicable',
    ],
  },
  {
    title: 'Fees & Financial Support',
    icon: 'ri-money-pound-circle-line',
    items: [
      'Interest-free instalment options, subject to agreed terms',
      'Potential bursary support, subject to eligibility and approval',
      'Early-payment discounts, where available',
      'Clear confirmation of tuition fees, assessment costs and included benefits before enrolment',
    ],
  },
] as const;

export default function CommercialRoute() {
  return (
    <section id="commercial-route" className="bg-background-100 py-12 md:py-16">
      <div className="container-site max-w-4xl">
        <SectionHeading
          tag="Commercial Project Controls Route"
          title="Advanced professional development, with flexible study options"
          subtitle="Access structured Level 6 professional learning through a commercial route, with expert-led teaching, practical application and professional progression support."
        />
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {programmeSections.map(section => (
            <article key={section.title} className="min-w-0 rounded-xl border border-background-200 bg-background-50 p-5 md:p-6">
              <h3 className="mb-4 font-heading text-xl font-bold text-foreground-950">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-7 text-foreground-700">
                    <i className={section.icon + ' mt-0.5 shrink-0 text-primary-600'} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 border-t border-background-200 pt-5 text-sm leading-7 text-foreground-600">
          Commercial study is separate from the apprenticeship route. Programme content, assessments, payment arrangements and professional recognition support are confirmed in your written offer. Completion does not automatically award an apprenticeship certificate or Chartered status.
        </p>
      </div>
    </section>
  );
}
