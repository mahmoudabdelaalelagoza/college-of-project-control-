import SiteLink from '@/components/base/SiteLink';
import { useEffect,useRef,useState } from 'react';

const moduleCatalogue = [
  {
    "category": "Project Management",
    "title": "Project Management Professional (PMP) Preparation"
  },
  {
    "category": "AI & Digital Delivery",
    "title": "AI in Project Controls & Management"
  },
  {
    "category": "Risk Management",
    "title": "APM Risk Management Level 1 & Applied Practice"
  },
  {
    "category": "Scheduling",
    "title": "PMI Scheduling Professional (PMI-SP) Preparation"
  },
  {
    "category": "Cost & Performance",
    "title": "Earned Value Management (EVM)"
  },
  {
    "category": "Planning & Controls",
    "title": "Project Planning & Control"
  },
  {
    "category": "Programme Management",
    "title": "Managing Successful Programmes (MSP)"
  },
  {
    "category": "Portfolio Management",
    "title": "Managing Portfolios"
  },
  {
    "category": "PMO & Governance",
    "title": "PMI PMO Certified Professional (PMI-PMOCP) Preparation"
  }
];

const options = [
  {
    "icon": "ri-book-open-line",
    "eyebrow": "Structured Development",
    "title": "Complete Programme",
    "desc": "Follow a structured learning programme designed to develop broader professional expertise, knowledge and practical skills.",
    "note": "Professionals seeking comprehensive development aligned with their role, responsibilities and progression goals."
  },
  {
    "icon": "ri-focus-3-line",
    "eyebrow": "Focused Learning",
    "title": "Specialist Course or Module",
    "desc": "Strengthen your expertise in a specific area of project management, project controls or PMO practice through focused, applied learning.",
    "note": "Professionals looking to develop or refresh knowledge in a particular specialist area."
  },
  {
    "icon": "ri-stack-line",
    "eyebrow": "Flexible Development",
    "title": "Multiple Modules",
    "desc": "Explore a combination of specialist modules to support development across several related areas of professional practice.",
    "note": "Professionals who need a broader mix of specialist skills without necessarily undertaking a complete programme."
  }
];

export default function FlexibleProfessionalDevelopment() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="flexible-development" className="py-16 md:py-24 bg-background-50 relative overflow-hidden">

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-44 reveal-blur-in is-visible">
            <span className="inline-flex max-w-full items-center gap-2 px-4 py-1.5 rounded-full text-xs font-label font-semibold uppercase tracking-wider border border-highlight-500/40 text-warm-ink mb-5">
              <i className="ri-equalizer-2-line text-sm"></i>
              Flexible Professional Development
            </span>
            <h2 className="max-w-xl text-section-3xl md:text-section-4xl lg:text-section-5xl font-heading font-bold text-foreground-950 leading-[1.08]">
              Choose how you want to develop
            </h2>
            <p className="mt-5 max-w-lg text-base md:text-lg text-foreground-600 leading-relaxed">
              Whether you're looking for a structured programme, focused specialist learning or a combination of modules, explore development options aligned with your current responsibilities and professional goals.
            </p>

          </div>

          <div ref={ref} className="relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 shrink-0 rounded-full bg-primary-500 text-white inline-flex items-center justify-center text-xs font-bold">01</span>
              <p className="text-sm font-label font-semibold uppercase tracking-wider text-foreground-600">
                Explore Your Development Options
              </p>
            </div>

            <div className="space-y-3">
              {options.map((option, i) => (
                <article
                  key={option.title}
                  className={`group relative overflow-hidden rounded-2xl border p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5 ${
                    i === 0
                      ? 'bg-primary-500 border-primary-500 text-white'
                      : 'bg-white border-background-200/90 hover:border-primary-300'
                  }`}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(18px)',
                    transition: `opacity 500ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 90}ms, transform 500ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 90}ms, border-color 300ms`,
                  }}
                >
                  {i === 0 && (
                    <div className="absolute top-0 right-0 w-36 h-36 rounded-full translate-x-12 -translate-y-14 bg-white/5"></div>
                  )}
                  <div className="relative flex gap-4 md:gap-5 items-start">
                    <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl ${i === 0 ? 'bg-white/10' : 'bg-primary-100'}`}>
                      <i className={`${option.icon} text-xl ${i === 0 ? 'text-highlight-300' : 'text-primary-600'}`}></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`text-xs font-label font-semibold uppercase tracking-wider ${i === 0 ? 'text-highlight-300' : 'text-warm-ink'}`}>
                        {option.eyebrow}
                      </p>
                      <h3 className={`mt-1 text-xl font-heading font-bold ${i === 0 ? 'text-white' : 'text-foreground-950'}`}>
                        {option.title}
                      </h3>
                      <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? 'text-white/80' : 'text-foreground-600'}`}>
                        {option.desc}
                      </p>
                      <p className={`mt-3 text-xs font-medium ${i === 0 ? 'text-white/65' : 'text-foreground-600'}`}>
                        <strong className="font-semibold">Best suited to:</strong> {option.note}
                      </p>
                    </div>
                    <i className={`ri-arrow-right-up-line hidden sm:block text-lg flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${i === 0 ? 'text-highlight-300' : 'text-primary-400'}`}></i>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-foreground-600">
              Module combinations, availability, fees and any pathway requirements are confirmed with Kent Business College.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-12 md:mt-16 mb-4">
          <span className="w-8 h-8 shrink-0 rounded-full bg-highlight-500 text-foreground-950 inline-flex items-center justify-center text-xs font-bold">02</span>
          <p className="text-sm font-label font-semibold uppercase tracking-wider text-foreground-600">
            Explore Specialist Learning Areas
          </p>
        </div>

        <div className="bg-white border border-background-200/90 rounded-2xl p-5 md:p-7 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5">
            <div>
              <p className="text-xs font-label font-semibold uppercase tracking-wider text-warm-ink">Specialist Courses &amp; Modules</p>
              <h3 className="mt-1 text-xl font-heading font-bold text-foreground-950">Build expertise in the areas that matter to your work</h3>
            </div>
            <span className="text-xs font-medium text-foreground-600">9 specialist areas</span>
          </div>

          <p className="mb-5 text-sm leading-relaxed text-foreground-600">
            Explore specialist learning in project management, planning, scheduling, cost, risk, governance and digital project controls.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {moduleCatalogue.map((mod) => (
              <div
                key={mod.title}
                className="flex items-center gap-3 rounded-xl border border-background-200/70 bg-background-50 px-3.5 py-3"
              >
                <span className="w-7 h-7 flex-shrink-0 rounded-lg bg-primary-100 inline-flex items-center justify-center">
                  <i className="ri-check-line text-primary-600 text-sm"></i>
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-warm-ink">{mod.category}</p>
                  <p className="mt-1 text-xs md:text-sm font-semibold text-foreground-700 leading-snug">{mod.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <SiteLink href="/short-courses" className="btn-primary inline-flex w-full max-w-full items-center justify-center gap-2 px-6 py-3 text-center text-sm font-semibold sm:w-auto">
              Explore All Specialist Courses
              <i className="ri-arrow-right-line" aria-hidden="true" />
            </SiteLink>
          </div>
        </div>
        <div className="mt-8 rounded-xl border border-background-200 bg-white p-5 md:flex md:items-center md:justify-between md:gap-6 md:p-6">
          <div className="min-w-0">
            <h3 className="text-lg font-heading font-bold text-foreground-950">Not sure which development option fits your needs?</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-600">
              Our team can help you review your responsibilities, prior learning and professional goals to explore a suitable programme or combination of specialist courses.
            </p>
          </div>
          <SiteLink href="/contact" className="btn-primary mt-4 inline-flex w-full max-w-full shrink-0 items-center justify-center gap-2 px-6 py-3 text-center text-sm font-semibold md:mt-0 md:w-auto">
            Discuss Your Development Options
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </SiteLink>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-foreground-600">
          Apprenticeship pathways and module selections remain subject to programme eligibility, employer agreement and occupational requirements. Standalone professional study has separate enrolment and fee arrangements. External certifications are awarded independently by the relevant professional bodies.
        </p>
      </div>
    </section>
  );
}

