import SiteLink from '@/components/base/SiteLink';
import PmoSection from './PmoSection';

const employerValues = [
  { title: 'Stronger Governance', text: 'Improve decision rights, escalation, assurance and reporting lines.' },
  { title: 'Better Reporting', text: 'Turn status updates into insight, options and recommendations.' },
  { title: 'Integrated Controls', text: 'Connect planning, cost, risk, quality, issues and change.' },
  { title: 'Delivery Confidence', text: 'Improve visibility and earlier intervention.' },
  { title: 'Stakeholder Alignment', text: 'Strengthen communication with boards, sponsors and delivery teams.' },
  { title: 'Retention and Progression', text: 'Develop future PMO managers and project controls leaders.' },
];


export default function DevelopPMOCapabilityInsideYourOrganisation() {
  return (
    <PmoSection id="employers" tag="For employers" title="Develop PMO capability inside your organisation.">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <img src="/assets/images/employer-capability-team.webp" alt="A professional team reviewing project plans together" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-xl object-cover" />
        <div>
          <div className="grid gap-5 sm:grid-cols-2">{employerValues.map(item => <div key={item.title} className="flex items-start gap-3"><span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700" aria-hidden="true"><i className="ri-check-line" /></span><div><h3 className="font-heading text-lg font-bold leading-snug text-foreground-950">{item.title}</h3><p className="mt-2 text-sm leading-7 text-foreground-600">{item.text}</p></div></div>)}</div>
          <SiteLink href="/book-a-session" className="btn-primary mt-8 w-full text-sm sm:w-auto">Request an employer PMO consultation</SiteLink>
        </div>
      </div>
    </PmoSection>
  );
}
