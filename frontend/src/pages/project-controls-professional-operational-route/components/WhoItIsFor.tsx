import SiteLink from '@/components/base/SiteLink';

const typicalRoles = [
  'Planners & Schedulers',
  'Cost Engineers',
  'Project Controls Specialists',
  'Risk & Assurance Professionals',
  'PMO Analysts',
  'Project Managers with Controls Responsibilities',
];

const workplaceRequirements = [
  'Opportunities to analyse project information, improve controls and make informed recommendations.',
  'Appropriate access to planning, cost, risk, change and performance information.',
  'Employer support for protected training time, workplace learning and progress reviews.',
  'Opportunities to develop and demonstrate competence across the full ST0845 occupational standard.',
];

export default function WhoItIsFor() {
  return (
    <section id="operational-roles" aria-labelledby="operational-roles-title" className="scroll-mt-44 bg-background-100 py-16 md:py-20">
      <div className="container-site">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-accent-700">Who This Pathway Is For</p>
          <h2 id="operational-roles-title" className="text-3xl font-bold leading-tight text-foreground-950 md:text-4xl">
            For Professionals with Project Controls Responsibilities
          </h2>
          <p className="text-base leading-relaxed text-foreground-600">
            Designed for employed professionals who work with planning, scheduling, cost, risk or project performance — and have opportunities to develop and apply new skills in their role.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold leading-snug text-foreground-950">Typical Roles</h3>
            <ul className="list-disc space-y-3 pl-5">
              {typicalRoles.map(role => <li key={role} className="text-sm leading-relaxed text-foreground-600">{role}</li>)}
            </ul>
          </article>
          <article className="min-w-0 rounded-2xl border border-white/20 bg-primary-800 p-6 text-white shadow-sm">
            <h3 className="mb-4 text-xl font-bold leading-snug text-white">What Your Workplace Should Provide</h3>
            <ul className="list-disc space-y-3 pl-5">
              {workplaceRequirements.map(requirement => <li key={requirement} className="text-sm leading-relaxed text-white/80">{requirement}</li>)}
            </ul>
          </article>
        </div>

        <article className="mt-6 min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold leading-snug text-foreground-950">How We Assess Your Suitability</h3>
          <p className="mt-4 text-sm leading-relaxed text-foreground-600">
            Before enrolment, KBC reviews your responsibilities, employment and funding eligibility, prior learning, development opportunities and any additional learning support needs.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground-600">
            Your employer helps agree a training plan suited to your role and the apprenticeship requirements.
          </p>
          <SiteLink href="/apprenticeship-eligibility-checker" className="btn-primary mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 text-center text-sm font-bold sm:w-auto">
            Check Apprenticeship Eligibility<i className="ri-arrow-right-line shrink-0" aria-hidden="true" />
          </SiteLink>
        </article>

        <p className="mt-6 rounded-xl border border-accent-200 bg-accent-50 p-5 text-sm leading-relaxed text-foreground-600">
          Your job title alone does not determine eligibility. External professional certifications have separate entry and assessment requirements.
        </p>
      </div>
    </section>
  );
}
