import SiteLink from '@/components/base/SiteLink';
import PmoSection from './PmoSection';

export default function FourCapabilitiesOneRouteToAPMOThatLeadersTrust() {
  return (
    <PmoSection tag="Your next step" title="Four capabilities. One route to a PMO that leaders trust." subtitle="Build governance confidence, integrated controls, risk and quality discipline, and decision-ready stakeholder reporting through a structured workplace apprenticeship." tone="dark">
      <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
        <SiteLink href="/apprenticeship-eligibility-checker" className="btn-primary w-full text-sm sm:w-auto">Check Apprenticeship Eligibility</SiteLink>
        <SiteLink href="/book-a-session" className="btn-secondary w-full gap-2 text-center text-white hover:bg-white/10 sm:w-auto">Request a consultation<i className="ri-arrow-right-line" aria-hidden="true" /></SiteLink>
      </div>
    </PmoSection>
  );
}
