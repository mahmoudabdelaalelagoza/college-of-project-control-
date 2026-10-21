import SiteLink from '@/components/base/SiteLink';
import { useEffect,useRef,useState } from 'react';

function useReveal(threshold = 0.1) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Large Programme Feature (PCP Level 6) ─────────────────── */
function LargeProgrammeFeature() {
  const { ref, visible } = useReveal(0.05);

  const capabilities = [
    'Planning & Scheduling',
    'Cost & Earned Value',
    'Risk & Change',
    'Integrated Controls',
    'Performance Assurance',
    'Decision Support',
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white border border-background-200/80 rounded-2xl overflow-hidden">
      {/* Image side */}
      <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden bg-background-100">
        <img loading="lazy" decoding="async"
          src="https://readdy.ai/api/search-image?query=Professional%20project%20controls%20specialist%20analysing%20a%20detailed%20project%20schedule%20and%20cost%20performance%20dashboard%20with%20earned%20value%20charts%20on%20dual%20monitors%20in%20a%20modern%20office%2C%20warm%20natural%20light%2C%20premium%20editorial%20corporate%20photography%2C%20muted%20teal%20and%20charcoal%20tones%2C%20shallow%20depth%20of%20field%2C%20high%20detail&width=1000&height=1200&seq=programme-pcp-l6&orientation=portrait"
          alt="Project Controls Professional analysing schedule and cost data"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/40 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-background-200/60 text-foreground-900 text-sm font-label font-semibold uppercase tracking-wider">
          <i className="ri-fire-line text-highlight-600"></i>
          Flagship Programme
        </span>
      </div>

      {/* Content side */}
      <div
        className="p-7 md:p-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(20px)',
          transition: 'opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <span className="inline-block max-w-full px-3 py-1 rounded-full text-sm font-label font-semibold uppercase tracking-wider bg-primary-100 text-primary-700 border border-primary-200 mb-4">
          Apprenticeship &middot; Level 6
        </span>

        <p className="text-xs font-label font-semibold uppercase tracking-wider text-foreground-400 mb-1">
          Programme
        </p>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-700 leading-tight">
          Project Controls Professional Level 6
        </h3>

        <p className="mt-3 text-lg md:text-xl font-heading font-semibold text-foreground-950 leading-snug">
          Advanced project controls for complex project environments
        </p>

        <p className="mt-3 text-sm md:text-base text-foreground-600 leading-relaxed">
          Develop the expertise to integrate planning, cost, risk and performance information into reliable forecasts, effective controls and evidence-based recommendations.
        </p>

        <div className="mt-5">
          <h4 className="text-sm font-label font-semibold uppercase tracking-wider text-foreground-400 mb-2.5">Who it's for</h4>
          <p className="text-sm md:text-base text-foreground-600 leading-relaxed">
            For planners, schedulers, cost professionals and project controls practitioners responsible for analysing, assuring and improving project performance.
          </p>
        </div>

        {/* Capability areas */}
        <div className="mt-5">
          <p className="text-sm font-label font-semibold uppercase tracking-wider text-foreground-400 mb-2.5">
            Focus Areas
          </p>
          <div className="flex flex-wrap gap-2">
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-background-100 text-foreground-700 text-xs font-semibold rounded-full border border-background-200/70"
              >
                <i className="ri-check-line text-primary-500 text-sm"></i>
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* Professional positioning */}
        <div className="mt-5 inline-flex items-start gap-2.5 bg-secondary-100 border border-secondary-200 rounded-lg px-4 py-3">
          <i className="ri-user-star-line text-secondary-600 text-base flex-shrink-0 mt-0.5"></i>
          <div>
            <h4 className="text-sm font-semibold text-foreground-800">Your Development</h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground-800">
              Explore Operational, Strategic and Chartered development pathways, with a six-credit learning plan agreed around your responsibilities, prior learning and employer needs.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-6 flex flex-col sm:flex-row items-start gap-3">
          <SiteLink
            href="/project-controls-professional-level-6"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm cursor-pointer transition-all duration-300 w-full whitespace-normal text-center sm:w-auto lift-hover"
          >
            Explore Level 6 Apprenticeship
            <i className="ri-arrow-right-line text-sm"></i>
          </SiteLink>
          
        </div>
      </div>
    </div>
  );
}

/* ── Standard Programme Feature ─────────────────────────────── */
interface StandardFeatureProps {
  eyebrow: string;
  name: string;
  descriptor?: string;
  headline: string;
  copy: string;
  capabilities: string[];
  positioning: string;
  audience: string;
  note?: string;
  cta: string;
  href: string;
  icon: string;
  index: number;
}

function StandardProgrammeFeature({ eyebrow, name, descriptor, headline, copy, capabilities, positioning, audience, note, cta, href, icon, index }: StandardFeatureProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-white border border-background-200/80 rounded-2xl overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 600ms cubic-bezier(0.22, 1, 0.36, 1) ${index * 80}ms, transform 600ms cubic-bezier(0.22, 1, 0.36, 1) ${index * 80}ms`,
      }}
    >
      <div className="p-7 md:p-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <span className="inline-block max-w-full px-3 py-1 rounded-full text-sm font-label font-semibold uppercase tracking-wider bg-secondary-100 text-secondary-700 border border-secondary-200 mb-4">
              {eyebrow}
            </span>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-primary-100 flex-shrink-0">
                <i className={`${icon} text-xl text-primary-600`}></i>
              </div>
              <div>
                <p className="text-xs font-label font-semibold uppercase tracking-wider text-foreground-400">Programme</p>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground-950 leading-tight">
                  {name}
                </h3>
                {descriptor && (
                  <p className="text-sm font-medium text-foreground-600">{descriptor}</p>
                )}
              </div>
            </div>

            <p className="mt-3 text-lg font-heading font-semibold text-foreground-950 leading-snug">
              {headline}
            </p>

            <p className="mt-3 text-sm md:text-base text-foreground-600 leading-relaxed">
              {copy}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="text-sm font-label font-semibold uppercase tracking-wider text-foreground-400 mb-2.5">Who it's for</h4>
          <p className="text-sm md:text-base text-foreground-600 leading-relaxed">{audience}</p>
        </div>

        {/* Capability areas */}
        <div className="mt-5">
          <p className="text-sm font-label font-semibold uppercase tracking-wider text-foreground-400 mb-2.5">
            Focus Areas
          </p>
          <div className="flex flex-wrap gap-2">
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-background-100 text-foreground-700 text-xs font-semibold rounded-full border border-background-200/70"
              >
                <i className="ri-check-line text-primary-500 text-sm"></i>
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* Professional positioning */}
        <div className="mt-5 inline-flex items-start gap-2.5 bg-secondary-100 border border-secondary-200 rounded-lg px-4 py-3">
          <i className="ri-user-star-line text-secondary-600 text-base flex-shrink-0 mt-0.5"></i>
          <div>
            <h4 className="text-sm font-semibold text-foreground-800">Your Development</h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground-800">{positioning}</p>
          </div>
        </div>

        {note && <p className="mt-4 text-xs text-foreground-600 leading-relaxed">{note}</p>}

        {/* CTA */}
        <div className="mt-6">
          <SiteLink
            href={href}
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm cursor-pointer transition-all duration-300 w-full whitespace-normal text-center sm:w-auto lift-hover"
          >
            {cta}
            <i className="ri-arrow-right-line text-sm"></i>
          </SiteLink>
        </div>
      </div>
    </div>
  );
}

/* ── Main Export ────────────────────────────────────────────── */
export default function ChooseYourProgramme() {
  return (
    <section id="programmes-list" className="py-16 md:py-20 bg-background-50 relative overflow-hidden">
      <div className="pattern-dots-overlay pattern-dots-light" aria-hidden="true" />

      <div className="container-site relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 reveal-blur-in is-visible">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-label font-semibold uppercase tracking-wider border border-highlight-500/40 text-highlight-600 mb-4">
            Choose Your Programme
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground-950 leading-tight">
            Find the right programme for your role
          </h2>
          <p className="mt-3 text-sm md:text-base text-foreground-600 leading-relaxed">
            Explore two work-based apprenticeships and a standalone professional programme, designed to strengthen different areas of project management, project controls and PMO practice.
          </p>
          <p className="mt-3 text-sm md:text-base text-foreground-600 leading-relaxed">
            Compare the options based on your responsibilities, existing experience and professional development goals.
          </p>
        </div>

        <LargeProgrammeFeature />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 items-stretch">
          <StandardProgrammeFeature
            eyebrow="Apprenticeship · Level 4"
            name="Associate Project Manager Level 4"
            headline="PMP Preparation + AI in Project Controls"
            copy="Build practical project management skills to plan activities, manage stakeholders, monitor progress and support successful project delivery."
            audience="For project coordinators, assistant project managers and professionals developing greater responsibility for managing project activities and teams."
            capabilities={[
              'Project Planning',
              'Governance',
              'Stakeholder Management',
              'Cost & Risk',
              'Project Delivery',
              'Applied AI',
            ]}
            positioning="Combine project management learning with PMP examination preparation and practical AI development, applying new skills to relevant workplace responsibilities."
            note="PMP certification is awarded separately by PMI, subject to its eligibility and examination requirements."
            cta="Explore Level 4 Apprenticeship"
            href="/associate-project-manager-level-4"
            icon="ri-briefcase-line"
            index={0}
          />
          <StandardProgrammeFeature
            eyebrow="Professional Programme · Level 6 · 16 Months"
            name="Certified PMO Professional (Level 6)"
            headline="Advanced PMO governance and professional practice"
            copy="Develop advanced PMO expertise in governance, integrated planning and controls, risk, quality, stakeholder engagement and evidence-based reporting."
            audience="For experienced PMO professionals, project controllers, assurance practitioners and project or programme leaders looking to strengthen organisational governance and PMO performance."
            capabilities={[
              'PMO Governance',
              'Integrated Controls',
              'Risk & Quality',
              'Stakeholder Engagement',
              'Performance Reporting',
              'Professional Practice',
            ]}
            positioning="Build a structured portfolio of professional practice through four connected modules. The programme includes an APM-recognised assessment for the technical-knowledge requirement of Chartered Project Professional (ChPP) Pathway 2."
            note="Chartered status requires a separate application and assessment by APM."
            cta="Explore Certified PMO Professional"
            href="/pmo-pcp"
            icon="ri-organization-chart"
            index={1}
          />
        </div>
        <p className="mt-8 text-sm leading-relaxed text-foreground-600">
          The Level 4 and Project Controls Level 6 programmes are apprenticeships, subject to eligibility and employer support. Certified PMO Professional is a separate professional development programme with its own enrolment and fee arrangements.
        </p>
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-foreground-950">Not sure which programme suits your role?</p>
          <SiteLink href="/contact" className="mt-4 btn-primary inline-flex max-w-full items-center justify-center gap-2 px-6 py-3 text-center text-sm font-semibold">
            Discuss Your Development Options
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
