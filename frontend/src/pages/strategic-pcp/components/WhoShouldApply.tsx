import StrategicSection from './StrategicSection';
import SiteLink from '@/components/base/SiteLink';

const roleGroups = [
  {
    title: 'Project Controls Leadership',
    roles: 'Project Controls Managers · Planning & Cost Leads · Risk & Assurance Professionals',
  },
  {
    title: 'Programme & Portfolio Roles',
    roles: 'Programme Controls Professionals · Portfolio Analysts · Benefits & Transformation Specialists',
  },
  {
    title: 'PMO & Governance',
    roles: 'PMO Managers · Governance Professionals · Delivery & Assurance Leads',
  },
];

const eligibilityChecks = [
  'Eligible employment, residency and working arrangements.',
  'Role suitability and opportunities to meet the full ST0845 standard.',
  'Previous learning, qualifications and professional experience.',
  'Employer support and agreed paid training time.',
  'Any applicable English, maths or additional learning requirements.',
  'Funding availability and the individual training plan.',
];

export default function WhoShouldApply() {
  return (
    <StrategicSection
      id="who-should-apply"
      headingId="strategic-who-should-apply-title"
      tag="Who This Pathway Is For"
      title="For Professionals Connecting Project Performance with Organisational Priorities"
      intro={"The Strategic Pathway is designed for employed professionals whose roles involve project controls, programme oversight, portfolio information, governance or PMO decision support."}
      tone="light"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roleGroups.map((group) => (
          <article key={group.title} className="min-w-0 rounded-2xl border border-background-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold leading-snug text-foreground-950">{group.title}</h3>
            <p className="text-sm leading-relaxed text-foreground-600">{group.roles}</p>
          </article>
        ))}
      </div>

      <article className="mt-8 rounded-xl border border-l-4 border-accent-200 border-l-accent-600 bg-accent-50 p-5 md:p-6">
        <h3 className="text-xl font-bold leading-snug text-foreground-950">What Makes a Role Suitable?</h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground-600">
          Your responsibilities should provide opportunities to develop new Level 6 occupational competence, work with relevant project controls information and demonstrate your own professional contribution.
        </p>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-primary-900">
          A senior job title alone does not determine suitability.
        </p>
      </article>

      <article id="eligibility" aria-labelledby="strategic-eligibility-title" className="mt-8 scroll-mt-44 rounded-2xl border border-background-200 bg-background-50 p-5 md:p-6">
        <h3 id="strategic-eligibility-title" className="text-xl font-bold leading-snug text-foreground-950">How Eligibility Is Checked</h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground-600">Before enrolment, KBC reviews:</p>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-foreground-600">
          {eligibilityChecks.map((check) => <li key={check}>{check}</li>)}
        </ul>
        <div className="mt-6">
          <SiteLink
            href="/apprenticeship-eligibility-checker"
            className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 text-center text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
          >
            <span>Check Apprenticeship Eligibility</span>
            <i className="ri-arrow-right-line shrink-0" aria-hidden="true" />
          </SiteLink>
        </div>
        <p className="mt-5 border-t border-background-200 pt-5 text-sm leading-relaxed text-foreground-600">
          The eligibility checker provides an initial indication only. Final eligibility, training requirements and funding are subject to individual assessment and the applicable government rules.
        </p>
      </article>
    </StrategicSection>
  );
}
