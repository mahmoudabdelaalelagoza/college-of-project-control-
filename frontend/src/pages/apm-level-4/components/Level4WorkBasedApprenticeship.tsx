import SiteLink from '@/components/base/SiteLink';
import { level4Copy } from '../pageCopy';
const catalogueUrl = 'https://kentbusinesscollege.com/wp-content/uploads/2026/04/Associated-manger-level-4-Level-4_-1.pdf';
const copy = level4Copy.hero;
function HeroVisual() {
  const dashboard = copy.dashboard;
  return <aside className="site-hero__panel mx-auto w-full min-w-0 max-w-xl rounded-2xl border border-white/20 bg-white/[0.08] p-5 shadow-2xl backdrop-blur md:p-7" aria-label={dashboard.title}>
    <p className="text-xs font-bold uppercase tracking-wider text-signal-300">{dashboard.title}</p>
    <p className="mt-3 text-xs leading-6 text-white/65">{dashboard.description}</p>
    <dl className="mt-6 grid gap-3 sm:grid-cols-2">{dashboard.facts.map(([label, value]) => <div key={label} className="min-w-0 rounded-lg border border-white/10 bg-white/[0.06] p-4"><dt className="text-xs text-white/60">{label}</dt><dd className="mt-2 text-sm font-semibold text-white">{value}</dd></div>)}</dl>
    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10" aria-hidden="true"><div className="h-full w-4/5 rounded-full bg-signal-400" /></div>
    <div className="mt-6 rounded-xl border border-signal-300/25 bg-signal-300/10 p-5"><h2 className="text-base text-white">{dashboard.briefTitle}</h2><p className="mt-3 text-sm leading-7 text-white/75">{dashboard.brief}</p><span className="mt-4 inline-flex rounded bg-white/10 px-3 py-1 text-xs font-bold text-signal-300">{dashboard.review}</span></div>
  </aside>;
}
export default function Level4WorkBasedApprenticeship() {
  return <section id="hero" className="hero-image-project relative isolate overflow-hidden bg-primary-950 pb-16 pt-36 text-white md:pb-20 md:pt-44 site-hero">
    <div className="pattern-dots-overlay pattern-dots-dark" aria-hidden="true" />
    <div className="container-site relative z-10 site-hero__content">
      <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-12 site-hero__grid">
        <div className="min-w-0"><p className="inline-flex rounded-full border border-signal-300/40 bg-signal-300/10 px-4 py-2 text-xs font-bold text-signal-300">{copy.eyebrow}</p>
          <h1 className="mt-6 text-display font-bold leading-tight text-white">{copy.title}</h1>
          <p className="mt-5 text-xl font-semibold leading-snug text-white md:text-2xl site-hero__lead">{copy.headline}</p>
          {copy.intro.map(text => <p key={text} className="mt-4 text-sm leading-7 text-white/75">{text}</p>)}
        </div><HeroVisual />
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">{copy.cards.map(card => <article key={card.title} className="min-w-0 rounded-xl border border-white/15 bg-white/[0.06] p-5"><h2 className="text-base text-white">{card.title}</h2><p className="mt-3 text-sm leading-7 text-white/70">{card.body[0]}</p></article>)}</div>
      <div className="mt-6 rounded-xl border border-white/15 bg-white/[0.06] p-5"><h2 className="text-base text-signal-300">Apprenticeship Funding</h2><p className="mt-2 text-sm leading-7 text-white/75">{copy.funding}</p></div>
      <div className="mt-7 flex flex-col flex-wrap gap-3 sm:flex-row site-hero__actions"><SiteLink href="/book-a-session" className="btn-primary inline-flex min-h-12 items-center justify-center px-6 text-sm font-bold">Book a Programme Consultation</SiteLink><SiteLink href="/apprenticeship-eligibility-checker" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10">Check Apprenticeship Eligibility</SiteLink><SiteLink href={catalogueUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 px-3 text-center text-sm font-semibold text-white underline underline-offset-4"><i className="ri-file-pdf-2-line" aria-hidden="true" />Download Programme Guide</SiteLink></div>
      <p className="mt-5 max-w-5xl text-xs leading-6 text-white/60">{copy.note}</p>
    </div>
  </section>;
}
