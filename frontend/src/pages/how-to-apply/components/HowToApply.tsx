import SiteLink from '@/components/base/SiteLink';
import SectionHeading from '@/components/base/SectionHeading';
import Footer from '@/components/feature/Footer';

const steps = [
  {
    title: 'Make an Enquiry',
    paragraphs: ["Tell us about your current role, professional experience and the programme you're interested in. Our team will help you understand your options."],
  },
  {
    title: 'Explore Your Programme Options',
    paragraphs: ['Discuss your development goals, workplace responsibilities and the programme or pathway that may best suit your needs.'],
  },
  {
    title: 'Review Eligibility & Prior Learning',
    paragraphs: ["We'll review the entry requirements for your chosen programme. For apprenticeships, this includes eligibility, prior learning, occupational suitability and potential funding arrangements."],
  },
  {
    title: 'Confirm Employer Support & Funding',
    paragraphs: [
      "For apprenticeships, we'll work with your employer to confirm workplace responsibilities, training commitments, funding arrangements and the required agreements.",
    ],
  },
  {
    title: 'Complete Enrolment & Onboarding',
    paragraphs: ['Provide the required documents, complete the relevant assessments and agreements, and receive guidance on induction, your learning platform and programme arrangements.'],
  },
  {
    title: 'Start Your Learning Journey',
    paragraphs: ['Join your confirmed programme intake, take part in your learning activities and begin applying new knowledge and skills to relevant professional situations.'],
  },
];

const suitabilityCriteria = [
  {
    title: 'Your Role & Responsibilities',
    body: 'We consider your current role and the opportunities you have to apply new knowledge and skills in relevant professional activities.',
  },
  {
    title: 'Your Prior Learning & Experience',
    body: 'We review your existing qualifications, training and experience to identify your development needs and the most appropriate starting point.',
  },
  {
    title: "Your Employer's Support",
    body: 'For apprenticeships, your employer must support the required training commitments, workplace learning opportunities and relevant programme agreements.',
  },
  {
    title: 'Eligibility & Funding Confirmation',
    body: 'We explain the eligibility requirements, funding or tuition arrangements and documentation needed before your enrolment is confirmed.',
  },
];

const beforeApply = [
  ['Your role and goals', 'Consider your current responsibilities and the skills you want to develop.'],
  ['Your previous learning', 'Be ready to discuss relevant qualifications, training and professional experience.'],
  ["Your employer's support", 'For apprenticeships, your employer must support relevant workplace learning and the required training commitments.'],
  ['Your next steps', 'KBC will explain the eligibility checks, funding or fee arrangements and enrolment requirements that apply to your chosen programme.'],
];

export default function HowToApply() {
  return (
    <div className="min-h-screen bg-background-50">
      <main>
        <section className="flex items-center bg-primary-950 pb-24 pt-40 text-white md:min-h-[820px] md:pb-32 md:pt-48 site-hero">
          <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end site-hero__content site-hero__grid">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal-300">Admissions</p>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">How to apply to Kent Business College</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg site-hero__lead">
                Start with a conversation about your role, experience and professional development goals. Our team will help you explore suitable programmes, understand entry requirements and identify the next steps towards enrolment.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                For apprenticeship applicants, we'll also explain employer responsibilities, prior-learning assessment and potential funding arrangements.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap site-hero__actions">
                <SiteLink href="https://bookings.cloud.microsoft/book/InformationSession@kentbusinesscollege.com/?ismsaljsauthenabled=true" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex min-h-12 items-center justify-center px-6 text-sm font-bold">
                  Book an information session
                </SiteLink>
                <SiteLink href="/apprenticeship-eligibility-checker" className="btn-secondary inline-flex min-h-12 items-center justify-center px-6 text-sm font-semibold text-white">
                  Check apprenticeship eligibility
                </SiteLink>
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-signal-300">Before you apply</p>
              <ul className="mt-5 space-y-3">
                {beforeApply.map(([title, copy]) => (
                  <li key={title} className="flex gap-3 text-sm text-white/80">
                    <i className="ri-check-line mt-1 text-signal-300" />
                    <span><strong className="font-semibold text-white">{title}:</strong> {copy}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-white/15 pt-5 text-sm leading-relaxed text-white/75">
                An initial enquiry or information session does not guarantee admission or funding. Final arrangements are confirmed following the relevant assessments, checks and written agreements.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-site">
            <SectionHeading
              tag="Application Process"
              title="Your application journey in six steps"
              subtitle="From your first enquiry to your learning start, we'll help you explore the right programme, understand the requirements and complete the necessary steps towards enrolment."
              className="mb-12"
            />
            <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {steps.map(({ title, paragraphs }, index) => (
                <li key={title} className="rounded-xl border border-background-200 bg-white p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-5 text-section-xl font-bold">{title}</h2>
                  {paragraphs.map(paragraph => <p key={paragraph} className="mt-3 text-sm leading-relaxed text-foreground-600">{paragraph}</p>)}
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm leading-relaxed text-foreground-600">
              The steps may overlap depending on your chosen programme. Admission, apprenticeship funding and learning start dates are confirmed only after the relevant checks and agreements have been completed.
            </p>
          </div>
        </section>

        <section className="bg-background-100 py-16 md:py-20">
          <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-700">Programme Suitability</p>
              <h2 className="mt-3 text-section-3xl font-bold md:text-section-4xl">Find a learning route that fits your role</h2>
              <p className="mt-4 text-foreground-600">
                The right programme starts with understanding your responsibilities, existing skills and professional development goals. Kent Business College helps you explore suitable learning options and the requirements that apply to your chosen route.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {suitabilityCriteria.map(({ title, body }) => (
                <div key={title} className="rounded-xl border border-background-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-foreground-800">
                    <i className="ri-checkbox-circle-line mr-2 text-primary-700" aria-hidden="true" />
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="container-site mt-8 text-sm leading-relaxed text-foreground-600">
            Programme suitability, admission and any applicable funding are subject to individual review and the requirements of your chosen learning route.
          </p>
        </section>

      </main>
      <Footer />
    </div>
  );
}
