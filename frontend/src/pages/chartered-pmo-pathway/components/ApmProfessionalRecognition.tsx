import SectionHeading from '@/components/base/SectionHeading';
import SiteLink from '@/components/base/SiteLink';

const recognitionAreas = [
  {
    title: 'Recognised Technical Knowledge',
    description: 'Demonstrate advanced PMO knowledge through the recognised Certified PMO Professional assessment.',
    icon: 'ri-award-line',
  },
  {
    title: 'Professional Practice Evidence',
    description: 'Prepare to explain your experience, professional decisions, responsibilities and contribution to project, programme or portfolio outcomes.',
    icon: 'ri-folder-check-line',
  },
  {
    title: 'CPD, Ethics & Professional Currency',
    description: 'Understand the requirements for continuing professional development, current professional knowledge and ethical conduct.',
    icon: 'ri-shield-check-line',
  },
  {
    title: 'Independent APM Assessment',
    description: 'APM assesses the remaining Chartered requirements through its own application and assessment process, including professional-practice evidence and an interview under its applicable rules.',
    icon: 'ri-discuss-line',
  },
];

export default function ApmProfessionalRecognition() {
  return (
    <section id="apm-recognition" aria-labelledby="apm-recognition-title" className="relative isolate scroll-mt-44 overflow-hidden bg-background-50 py-16 md:py-24">
      <div className="pattern-dots-overlay pattern-dots-light" aria-hidden="true" />
      <div className="container-site relative z-10">
        <SectionHeading
          id="apm-recognition-title"
          tag="APM Professional Recognition"
          title="A Recognised Technical-Knowledge Route Towards ChPP"
          subtitle="Kent Business College's Certified PMO Professional (Level 6) is listed by the Association for Project Management (APM) as a recognised assessment for the technical-knowledge requirement of Chartered Project Professional (ChPP) Pathway 2."
          className="max-w-4xl"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-foreground-600 md:text-base">
          Where the named assessment is included in your agreed pathway and successfully completed, it can support the technical-knowledge element of an eligible ChPP application.
        </p>

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
          {recognitionAreas.map((area) => (
            <article key={area.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-2xl text-primary-700" aria-hidden="true">
                <i className={area.icon} />
              </span>
              <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">{area.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-600">{area.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <SiteLink href="https://www.apm.org.uk/chartered-standard/recognised-assessment/" target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm">
            View APM&apos;s Recognised Assessment Listing
            <i className="ri-arrow-right-line" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </SiteLink>
          <SiteLink href="/book-a-session" className="btn-secondary gap-2 text-center text-sm text-primary-800 hover:bg-white">
            Discuss Your ChPP Readiness
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </SiteLink>
        </div>

        <p className="mt-8 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5 text-sm leading-relaxed text-foreground-600 md:p-6">
          Successfully completing the apprenticeship or Certified PMO Professional programme does not automatically confer ChPP. APM controls eligibility, application requirements, assessment and the award of Chartered status.
        </p>
      </div>
    </section>
  );
}
