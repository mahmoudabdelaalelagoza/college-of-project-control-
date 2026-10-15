import SiteLink from '@/components/base/SiteLink';
import SectionHeading from '@/components/base/SectionHeading';
import { PCP_L6 } from '@/data/programmeFacts';

const pathwayContent = [
  {
    name: 'Operational',
    label: 'Practical project controls',
    title: 'Operational Pathway',
    roleFit:
      'For planners, schedulers, cost specialists and project controls practitioners working with delivery plans, forecasts and performance information.',
    tags: ['Planning', 'Scheduling', 'Cost', 'Risk', 'Performance'],
    summary: 'Strengthen your ability to plan, monitor and control project performance, using reliable information to support timely, evidence-based decisions.',
    cta: 'Explore Operational Pathway',
  },
  {
    name: 'Strategic',
    label: 'Leadership and governance',
    title: 'Strategic Pathway',
    roleFit:
      'For experienced project controls, programme, portfolio and PMO professionals involved in governance and complex delivery decisions.',
    tags: ['Governance', 'Programmes', 'Portfolios', 'PMO', 'Decision support'],
    summary: 'Connect project performance with wider programme and portfolio priorities, strengthening governance and strategic decision-making.',
    cta: 'Explore Strategic Pathway',
  },
  {
    name: 'Chartered',
    label: 'Chartered progression',
    title: 'Chartered Pathway',
    roleFit:
      'For experienced professionals developing advanced PMO and project controls expertise, with a view towards Chartered Project Professional (ChPP) status.',
    tags: ['PMO', 'Governance', 'Integrated controls', 'Professional practice', 'ChPP preparation'],
    summary:
      "Build technical knowledge through KBC's Certified PMO Professional (Level 6), recognised by APM for the technical-knowledge element of ChPP Pathway 2.",
    note: 'Chartered status requires a separate application and assessment by APM.',
    cta: 'Explore Chartered Pathway',
  },
];

const pathways = pathwayContent.map((pathway) => ({
  ...pathway,
  href:
    PCP_L6?.internalPathways?.find((item) => item.name === pathway.name)?.href ??
    PCP_L6?.url ??
    '/project-controls-professional-level-6',
}));

export default function Level6Pathways() {
  return (
    <section className="relative left-1/2 mt-14 w-screen -translate-x-1/2 overflow-hidden bg-primary-950 py-12 text-white md:mt-16 md:py-16" aria-labelledby="level-6-pathways-heading">
      <div className="pattern-dots-overlay pattern-dots-dark" aria-hidden="true" />
      <div className="container-site relative z-10">
        <SectionHeading
          tag="Level 6 development pathways"
          title="Three pathways. One Level 6 apprenticeship."
          subtitle="Choose a development pathway that reflects your responsibilities and professional goals. Your six-credit learning plan is agreed with you and your employer, taking account of your prior learning and opportunities to apply new skills at work."
          light
          className="max-w-4xl"
        />

        <p className="mx-auto mt-5 max-w-3xl rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3 text-center text-[12px] font-semibold leading-5 text-white/82">
          All three pathways sit within the same {PCP_L6?.shortTitle} apprenticeship standard ({PCP_L6?.standard?.code}).
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pathways.map((pathway, index) => (
            <article key={pathway.title} className="flex h-full flex-col rounded-lg border border-white/14 bg-white/[0.06] p-5 md:p-6">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-signal-300">
                {String(index + 1).padStart(2, '0')} — {pathway.label}
              </p>
              <h3 className="mt-3 font-heading text-xl font-bold leading-tight text-white md:text-[1.35rem]">{pathway.title}</h3>
              <p className="mt-3 text-[0.84rem] leading-6 text-white/74">{pathway.roleFit}</p>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${pathway.title} capability areas`}>
                {pathway.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-white/14 bg-white/[0.08] px-2.5 py-1 text-[0.72rem] font-semibold text-white/86">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-6 min-h-[9.25rem] border-t border-white/12 pb-5 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">What it develops</p>
                <p className="mt-2 text-sm leading-7 text-white/78">{pathway.summary}</p>
                {pathway.note && <p className="mt-3 text-xs leading-6 text-white/70">{pathway.note}</p>}
              </div>

              <SiteLink
                href={pathway.href}
                className="btn-primary cta-button-inverse mt-auto inline-flex w-full items-center justify-center whitespace-nowrap px-5 py-3 text-[0.78rem] font-bold sm:text-sm"
                aria-label={`${pathway.cta} within Project Controls Professional Level 6`}
              >
                {pathway.cta}
                <i className="ri-arrow-right-line" aria-hidden="true" />
              </SiteLink>
            </article>
          ))}
        </div>

        <div className="mt-8 border-t border-white/12 pt-6 text-sm leading-7 text-white/72 md:flex md:items-center md:justify-between md:gap-6">
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-white">Need a different development mix?</p>
            <p className="mt-2">We can explore a tailored six-credit learning plan with you and your employer, based on your responsibilities, prior learning and workplace development opportunities.</p>
          </div>
          <SiteLink href="/book-a-session" className="mt-4 inline-flex items-center gap-2 font-bold text-signal-300 underline-offset-4 hover:underline md:mt-0 md:shrink-0">
            Discuss your route
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
