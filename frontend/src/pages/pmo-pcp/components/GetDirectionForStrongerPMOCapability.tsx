import SiteLink from '@/components/base/SiteLink';
import PmoSection from './PmoSection';

export default function GetDirectionForStrongerPMOCapability() {
  return (
    <PmoSection tag="Programme overview" title="Get direction for stronger PMO capability." tone="white">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="space-y-4 text-sm leading-7 text-foreground-600 md:text-base">
            <p>Your PMO may already collect information. The real challenge is turning that information into trusted governance, timely assurance and clear decisions.</p>
            <p>The PMO Route develops professionals who can connect reporting, planning, controls, risk, quality and stakeholder communication into a stronger organisational system.</p>
            <p>This is not simply a classroom course. It is a structured apprenticeship route built around live learning, workplace application, evidence, reflection and employer-supported progression.</p>
          </div>
          <blockquote className="mt-6 rounded-xl border-l-4 border-highlight-500 bg-primary-50 p-5 font-heading text-xl font-semibold leading-relaxed text-primary-800">&ldquo;Better PMOs create confidence before they create reports.&rdquo;</blockquote>
        </div>
        <div className="overflow-hidden rounded-xl border border-background-200 bg-background-50 shadow-sm">
          <img src="/assets/images/construction-sector-hero.webp" alt="Project team reviewing a schedule and performance dashboard" loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover object-center" />
          <div className="p-5 md:p-6">
            <h3 className="font-heading text-xl font-bold text-foreground-950">Discover the PMO Route</h3>
            <p className="mt-3 text-sm leading-7 text-foreground-600">Learn how the route develops PMO capability through structured workplace learning.</p>
            <SiteLink href="#journey" className="btn-secondary mt-5 w-full gap-2 text-center text-primary-700 hover:bg-primary-50">Explore the learning journey<i className="ri-arrow-right-line" aria-hidden="true" /></SiteLink>
          </div>
        </div>
      </div>
    </PmoSection>
  );
}
