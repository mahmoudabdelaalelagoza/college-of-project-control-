import { homeCopy } from '../pageCopy';
import SiteLink from '@/components/base/SiteLink';
import {
  APPRENTICESHIP_COMPARISON,
  APPRENTICESHIP_COMPARISON_COLUMNS,
  APPRENTICESHIPS,
  PMO_L6,
  standardLabel,
  type ProgrammeFacts,
} from '@/data/programmeFacts';
import type { ReactNode } from 'react';
import { useEffect,useRef,useState } from 'react';
import Level6Pathways from './Level6Pathways';
import LearningJourney from './LearningJourney';

/* ─────────────────── ProgrammeCard ─────────────────── */
interface ProgrammeCardProps {
  /**
   * The whole approved record, not a bag of strings.
   *
   * The component cannot invent or retype a programme fact, because there is no
   * prop to pass one through. A card therefore cannot show ST0845 beside a
   * Level 4 heading — heading, standard and role text all come from one object.
   */
  programme: ProgrammeFacts;
  ctaTracking: string;
  delay?: number;
}

function ProgrammeCard({ programme, ctaTracking, delay = 0 }: ProgrammeCardProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const animClass = visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.95] translate-y-6';
  const ctaLabel = `Explore Level ${programme.level}`;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col rounded-xl transition-all duration-500 ${animClass} hover:-translate-y-1 bg-white border border-background-300 hover:border-primary-400 hover:shadow-md hover:shadow-primary-500/10`}
      style={{
        transition: `transform 350ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 350ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      <div className="rounded-t-xl bg-white px-5 pb-4 pt-6">
        <span className="mb-3 inline-block rounded-full border border-primary-300 bg-primary-100 px-2.5 py-0.5 text-sm font-label font-semibold text-primary-700">
          {programme.offerTypeLabel}
        </span>
        <h3 className="text-xl font-heading font-bold leading-tight text-primary-800 md:text-2xl">
          {programme.shortTitle}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground-600">{programme.description}</p>
      </div>

      <div className="flex-1 px-5 pb-4 pt-4">
        <dl className="space-y-4">
          <ProgrammeFact label="Level">Level {programme.level}</ProgrammeFact>
          <ProgrammeFact label="Standard">{standardLabel(programme)}</ProgrammeFact>
          <ProgrammeFact label="Role focus">{programme.roleFit}</ProgrammeFact>
          <ProgrammeFact label="Learning">{programme.learningApproach}</ProgrammeFact>
          <ProgrammeFact label="Assessment">{programme.facts.assessment}</ProgrammeFact>
        </dl>
      </div>

      <div className="px-5 pb-6 pt-4">
        <SiteLink
          href={programme.url}
          className="btn-primary inline-flex w-full items-center justify-center gap-1.5 px-6 py-3 text-sm font-bold transition-colors duration-300"
          data-gtm-event={ctaTracking}
          data-gtm-location="programme-cards"
          aria-label={`${ctaLabel}: ${programme.shortTitle}`}
        >
          {ctaLabel}
          <i className="ri-arrow-right-line text-sm" aria-hidden="true"></i>
        </SiteLink>
      </div>
    </div>
  );
}

function ProgrammeFact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-background-200 pt-4 first:border-t-0 first:pt-0">
      <dt className="text-xs font-label font-semibold uppercase tracking-wider text-foreground-500">
        {label}
      </dt>
      <dd className="mt-1.5 text-sm leading-relaxed text-foreground-700">
        {children}
      </dd>
    </div>
  );
}

/* ─────────────────── Programme Comparison Table ─────────────────── */
function ProgrammeComparisonTable() {
  const [highlightedRow, setHighlightedRow] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Audit P01.3: compare role focus, learning approach, level and assessment —
     not just the badge level.

     Every value is looked up by programme id from APPRENTICESHIP_COMPARISON. The
     previous `const [pcp, apm] = APPRENTICESHIPS` destructuring bound data to
     array order, so reordering the source silently attached ST0845 to the
     Level 4 heading. Column order is now explicit and independent of the data
     order, and the header and every cell resolve from the same id. */
  const columns = APPRENTICESHIP_COMPARISON_COLUMNS;

  const animClass = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  return (
    <div ref={ref} className={`mt-14 md:mt-18 transition-all duration-500 ${animClass}`} style={{ transition: 'opacity 500ms cubic-bezier(0.22, 1, 0.36, 1) 100ms, transform 500ms cubic-bezier(0.22, 1, 0.36, 1) 100ms' }}>
      <div className="text-center mb-8 md:mb-10">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground-950 mb-2">
          Which programme best fits your responsibilities?
        </h3>
        <p className="text-sm text-foreground-600">
          Compare our two apprenticeships to understand how each programme aligns with different project responsibilities, development needs and workplace learning opportunities.
        </p>
      </div>

      <p className="mb-3 flex items-center justify-center gap-2 text-xs text-foreground-500 md:hidden">
        <i className="ri-arrow-left-right-line" aria-hidden="true" />
        Swipe horizontally to compare both programmes.
      </p>
      {/* One comparison table for all screen sizes; scroll within it on mobile. */}
      <div
        className="overflow-x-auto rounded-xl border border-background-300 bg-white"
        role="region"
        aria-label="Apprenticeship programme comparison"
        tabIndex={0}
      >
        <table className="w-[calc(200%_-_8rem)] table-fixed md:w-full md:min-w-[640px]">
          <caption className="sr-only">
            Comparison of the two apprenticeships offered by Kent Business College
          </caption>
          <colgroup>
            <col className="w-32 md:w-48" />
            {columns.map((programme) => (
              <col key={programme.id} />
            ))}
          </colgroup>
          <thead>
            <tr className="bg-primary-500 border-b border-background-50/20">
              <th scope="col" className="sticky left-0 z-10 bg-primary-500 px-4 py-3 text-left text-xs font-label font-semibold uppercase tracking-wider text-background-50 md:static">
                <span className="normal-case tracking-normal">Comparison point</span>
              </th>
              {columns.map((programme) => (
                <th
                  key={programme.id}
                  scope="col"
                  className="text-left px-4 py-3 text-xs font-label font-semibold uppercase tracking-wider text-background-50"
                >
                  <span className="block normal-case tracking-normal text-sm font-heading font-bold">
                    {programme.shortTitle}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {APPRENTICESHIP_COMPARISON.map((row) => (
              <tr
                key={row.label}
                className={`border-b border-background-200 align-top transition-colors duration-200 ${
                  highlightedRow === row.label ? 'bg-primary-50' : 'bg-white'
                }`}
                onMouseEnter={() => setHighlightedRow(row.label)}
                onMouseLeave={() => setHighlightedRow(null)}
              >
                <th scope="row" className="sticky left-0 z-10 break-words bg-inherit px-4 py-3.5 text-left md:static">
                  <span className="text-[13px] font-label font-semibold text-foreground-700 md:text-sm">
                    {row.label}
                  </span>
                  {row.hint && (
                    <span className="mt-0.5 block text-[12px] font-normal leading-snug text-foreground-500 md:text-xs">
                      {row.hint}
                    </span>
                  )}
                </th>
                {columns.map((programme) => (
                  <td key={programme.id} className="break-words px-4 py-3.5 text-sm leading-relaxed text-foreground-700">
                    {row.valueById[programme.id] ?? (
                      <span className="text-foreground-500">
                        Not published — contact our admissions team.
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-xl border border-background-200 bg-white p-5 md:flex md:items-center md:justify-between md:gap-6 md:p-6">
        <div className="min-w-0">
          <h4 className="text-lg font-heading font-bold text-foreground-950">
            Not sure which programme is right for you?
          </h4>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-600">
            Our team can review your role, previous learning and workplace development opportunities to help you and your employer explore the most suitable apprenticeship.
          </p>
        </div>
        <SiteLink
          href="/book-a-session"
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-700 underline-offset-4 hover:underline md:mt-0 md:shrink-0"
        >
          Discuss your programme options
          <i className="ri-arrow-right-line" aria-hidden="true" />
        </SiteLink>
      </div>

    </div>
  );
}

/* ─────────────────── Programme Guidance ─────────────────── */
function ProgrammeGuidance() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const icons=['ri-user-line','ri-bar-chart-line','ri-list-check-2','ri-road-map-line'];
  const steps=homeCopy.guidance.steps.map((step,index)=>({...step,number:String(index+1).padStart(2,'0'),desc:step.body,icon:icons[index]}));

  const animClass = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  return (
    <div ref={ref} className={`mt-16 md:mt-20 transition-all duration-500 ${animClass}`} style={{ transition: 'opacity 500ms cubic-bezier(0.22, 1, 0.36, 1) 100ms, transform 500ms cubic-bezier(0.22, 1, 0.36, 1) 100ms' }}>
      <div className="text-center mb-10 md:mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-label font-semibold uppercase tracking-wider border border-primary-300 text-primary-600 mb-4">
          Programme Guidance
        </span>
        <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground-950 mb-2">
          {homeCopy.guidance.title}
        </h3>
        <p className="text-sm text-foreground-600 max-w-2xl mx-auto">
          {homeCopy.guidance.intro}
        </p>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-background-300"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', transition: `opacity 450ms cubic-bezier(0.22, 1, 0.36, 1) ${150 + i * 80}ms, transform 450ms cubic-bezier(0.22, 1, 0.36, 1) ${150 + i * 80}ms` }}>
              <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-white border-2 border-primary-300 mb-4 md:mb-5 lift-hover">
                <i className={`${step.icon} text-primary-500 text-xl`}></i>
              </div>
              <span className="text-xs font-label font-bold text-primary-400 mb-1">{step.number}</span>
              <h4 className="text-sm font-heading font-bold text-foreground-800 leading-snug max-w-[180px]">{step.title}</h4>
              <p className="text-xs text-foreground-600 leading-snug mt-1.5 max-w-[190px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center"><SiteLink href="/book-a-session" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary-200 text-primary-700 px-6 py-3 text-center text-sm font-semibold">{homeCopy.guidance.cta}<i className="ri-arrow-right-line" aria-hidden="true" /></SiteLink></div>
    </div>
  );
}

/* ─────────────────── Main Export ─────────────────── */
export default function ProfessionalProgrammes() {
  return (
    <section id="programmes" className="py-16 md:py-20 bg-background-50 relative overflow-hidden">
      {/* Shared dotted paper pattern for light backgrounds. */}
      <div className="pattern-dots-overlay pattern-dots-light" aria-hidden="true" />

      <div className="container-site relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-10 md:mb-14 reveal-blur-in is-visible">
          <span className="inline-block rounded-full border border-signal-400 px-4 py-1.5 text-xs font-label font-bold uppercase tracking-wider text-signal-700 mb-4">
            Apprenticeships
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground-950 leading-tight">
            Find the right apprenticeship for your role
          </h2>
          <p className="mt-3 text-sm md:text-base text-foreground-600 leading-relaxed">
            Two apprenticeship programmes designed for different roles and levels of responsibility. We consider your current role, prior learning and workplace development opportunities to help you and your employer identify the most suitable route.
          </p>
        </div>

        {/* Cards grid — audit P00.2/P01.2: two apprenticeships of equal visual
            weight. The professional programme is not a third peer.

            Every field below is read from programmeFacts.ts; the card component
            receives no retyped programme copy. `APPRENTICESHIPS` is filtered by
            offer type, so adding a professional offer cannot make it appear here. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          {APPRENTICESHIPS.map((programme, index) => (
            <ProgrammeCard
              key={programme.id}
              programme={programme}
              ctaTracking={`${programme.id}_explore`}
              delay={index * 80}
            />
          ))}
        </div>

        <LearningJourney />
        <Level6Pathways />

        {/* Secondary professional-study panel — audit P00.5 / P01.2. No
            apprenticeship application button: this is a separate offer with its
            own fee and funding terms. */}
        <div className="mt-6 rounded-xl border border-background-300 bg-white/92">
          <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-300 bg-primary-100 px-3 py-1 text-xs font-label font-semibold uppercase tracking-[0.14em] text-primary-700">
                <i className="ri-briefcase-line" aria-hidden="true"></i>
                Professional development
              </span>
              <h3 className="mt-3 text-lg md:text-xl font-heading font-bold text-foreground-950">
                {PMO_L6?.shortTitle}
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-600">
                {PMO_L6?.description}
              </p>
              <p className="mt-3 text-sm font-semibold text-primary-700">
                {PMO_L6?.facts.duration} · {PMO_L6?.facts.delivery}
              </p>
              <p className="mt-4 max-w-3xl rounded-lg border border-background-200 bg-background-50 px-4 py-3 text-xs leading-relaxed text-foreground-600">
                {PMO_L6?.recognition?.statement}
              </p>
              <p className="mt-3 max-w-3xl text-xs leading-relaxed text-foreground-500">
                {PMO_L6?.fundingNote}
              </p>
            </div>
            <div className="shrink-0">
              <SiteLink
                href={PMO_L6?.url ?? '/pmo-pcp'}
                className="cta-button inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary-700/50 px-6 py-3 text-sm font-semibold text-primary-800 transition-colors hover:bg-primary-50 sm:w-auto"
                data-gtm-event="pmo_level_6_explore"
                data-gtm-location="programme-cards"
              >
                Explore Certified PMO Professional
                <i className="ri-arrow-right-line" aria-hidden="true"></i>
              </SiteLink>
            </div>
          </div>
        </div>

        <ProgrammeComparisonTable />
        <ProgrammeGuidance />

      </div>
    </section>
  );
}
