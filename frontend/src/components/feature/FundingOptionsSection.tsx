import SiteLink from '@/components/base/SiteLink';
import { AGE_25_PLUS, employerContributionPercent, fundingContributionPercent, formatPercent, fundingWindowPhrase } from '@/data/apprenticeshipFundingPolicy';

interface FundingOptionsSectionProps {
  id?: string;
  bursaryId?: string;
}

/** Canonical Funding & Costs section: shared homepage design and content.
 * Funding dates and employer contribution rates remain owned by the funding policy. */
const sectionCopy = {
  "tag": "Funding & Costs",
  "title": "Understand your funding options",
  "intro": "Apprenticeships and professional development follow different funding arrangements. Explore the options available and understand how eligibility, employer contributions and programme choice may affect your costs.",
  "apprenticeship": {
    "title": "Apprenticeship funding",
    "body": "Associate Project Manager Level 4 and Project Controls Professional Level 6 may be eligible for apprenticeship funding in England, subject to learner, employer and programme eligibility."
  },
  "note": "Funding applies up to the relevant funding-band maximum. Eligibility, employer contributions and costs above that maximum are confirmed before enrolment.",
  "professional": {
    "title": "Professional study and IPC funding",
    "body": [
      "Standalone professional courses are commercially priced and are not automatically eligible for government apprenticeship funding.",
      "The Institute of Project Controls Fund may provide tuition support for eligible professional-study applicants, subject to approval."
    ]
  },
  "support": {
    "title": "Additional professional support",
    "body": [
      "Depending on your agreed programme package, KBC and IPC support may include professional examinations, memberships, London masterclasses and learner wellbeing services.",
      "These benefits are separate from eligible government-funded apprenticeship training and assessment costs. Your written offer confirms what is included."
    ]
  },
  "discussCta": "Discuss your funding options"
} as const;

export default function FundingOptionsSection({
  id = 'funding-options',
  bursaryId,
}: FundingOptionsSectionProps) {
  const headingId = `${id}-title`;
  const overviewCards = [
    { title: sectionCopy.apprenticeship.title, content: sectionCopy.apprenticeship.body },
    {
      title: sectionCopy.professional.title,
      content: sectionCopy.professional.body.map(text => <p key={text} className="mt-2 first:mt-0">{text}</p>),
    },
  ];
  const rows = [
    ['Apprentices aged 16–24','Up to 100% of eligible training and assessment costs may be covered, subject to funding rules.'],
    ['Levy-paying employers with sufficient funds',"Eligible costs can be paid through the employer's apprenticeship service account."],
    ['Levy-paying employers with insufficient funds — aged 25+',`Government contributes ${formatPercent(fundingContributionPercent('levy-insufficient',AGE_25_PLUS)!)} of eligible costs, with ${formatPercent(employerContributionPercent('levy-insufficient',AGE_25_PLUS)!)} employer co-investment.`],
    ['Non-levy employers — aged 25+',`Government contributes ${formatPercent(fundingContributionPercent('non-levy',AGE_25_PLUS)!)} of eligible costs, with ${formatPercent(employerContributionPercent('non-levy',AGE_25_PLUS)!)} employer co-investment.`],
  ];
  const contributionCards = rows.map(([title, description]) => ({ title, description }));

  return (
    <section id={id} className="scroll-mt-48 bg-background-50 py-12 md:py-16" aria-labelledby={headingId}>
      <header className="relative isolate flex min-h-80 w-full min-w-0 items-end overflow-hidden bg-primary-950 md:aspect-[3/1]">
        <img
          src="/assets/images/funding/funding-options.webp"
          alt="Construction professional wearing a hard hat at a city building site"
          width={2172}
          height={724}
          className="absolute inset-0 z-0 h-full w-full object-cover object-[65%_center] md:object-center"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary-950/90 via-primary-950/60 to-primary-950/10 md:via-primary-950/20" aria-hidden="true" />
        <div className="container-site relative z-20 flex items-end justify-between gap-8 pb-24 pt-8 md:pb-28">
          <div className="max-w-md lg:max-w-lg">
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-white/90">
              <span className="h-0.5 w-10 bg-highlight-400" aria-hidden="true" />{sectionCopy.tag}
            </p>
            <h2 id={headingId} className="mt-4 text-section-4xl font-bold leading-tight tracking-tight text-white lg:text-section-5xl">{sectionCopy.title}</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/90">{sectionCopy.intro}</p>
          </div>
          <div className="hidden shrink-0 text-xs font-semibold uppercase leading-7 tracking-[.22em] text-white lg:block" aria-hidden="true">
            <span className="mb-4 block h-0.5 w-10 bg-highlight-400" />People<br />Projects<br />Progress
          </div>
        </div>
      </header>

      <div className="container-site relative z-10 -mt-12 space-y-4">
        <div className="grid gap-3 md:grid-cols-2">
          {overviewCards.map((card, index) => (
            <article key={card.title} id={index === 1 ? bursaryId : undefined} className="scroll-mt-48 flex items-start gap-4 rounded-xl border border-background-200 bg-white p-5 shadow-card">
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-2xl ${index === 0 ? 'bg-highlight-50 text-highlight-700' : 'bg-accent-50 text-primary-800'}`}><i className={index === 0 ? 'ri-coins-line' : 'ri-team-line'} aria-hidden="true" /></span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-foreground-950 sm:text-base">{card.title}</h3>
                <div className="mt-2 text-xs leading-relaxed text-foreground-600">{card.content}</div>
              </div>
              <SiteLink href="/book-a-session" aria-label={`Discuss ${card.title.toLowerCase()}`} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-800 transition-colors hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"><i className="ri-arrow-right-s-line text-lg" aria-hidden="true" /></SiteLink>
            </article>
          ))}
        </div>

        <article className="flex items-start gap-4 rounded-xl border border-accent-100 bg-accent-50/50 p-5">
          <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-100 text-2xl text-primary-800 sm:flex"><i className="ri-box-3-line" aria-hidden="true" /></span>
          <div>
            <h3 className="text-sm font-bold text-primary-900 sm:text-base">{sectionCopy.support.title}</h3>
            <div className="mt-1 space-y-2 text-xs leading-relaxed text-foreground-600">{sectionCopy.support.body.map(text => <p key={text}>{text}</p>)}</div>
          </div>
        </article>

        {/* Employer-side apprenticeship funding positions use the canonical policy. */}
        <h3 className="pt-3 text-base font-bold text-primary-900">Funding for starts {fundingWindowPhrase()}</h3>
        <div className="grid divide-y divide-accent-300/25 overflow-hidden rounded-xl bg-primary-900 text-white lg:grid-cols-2">
          {contributionCards.map((card) => (
            <article key={card.title} className="flex items-start gap-4 p-5 lg:p-6">
              <i className="ri-percent-line shrink-0 text-3xl text-accent-100" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-bold leading-snug text-white">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/75">{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="px-1 text-xs leading-relaxed text-foreground-600">{sectionCopy.note}</p>

        <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-stretch">
          <SiteLink href="/book-a-session" className="btn-primary inline-flex min-h-12 shrink-0 items-center justify-center gap-3 px-5 py-3 text-xs font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700">{sectionCopy.discussCta}<i className="ri-arrow-right-line text-base" aria-hidden="true" /></SiteLink>
        </div>
      </div>
    </section>
  );
}
