import SiteLink from '@/components/base/SiteLink';
import { level6Copy } from '../pageCopy';
const catalogueUrl = 'https://kentbusinesscollege.com/wp-content/uploads/2026/05/Edit-Project-Control-Professional-with-ChPP_compressed.pdf';
export default function CollegeOfProjectControlsAndProjectManagement() {
 const copy=level6Copy.hero;
 return <section id="hero" className="relative isolate flex min-h-[90vh] flex-col justify-center overflow-hidden bg-primary-950 pb-20 pt-32 text-white md:pb-24 md:pt-40 site-hero">
  <img src="https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/304c1c37f02c49dcb7b6bc84c60de0fa.png" alt="" aria-hidden="true" fetchPriority="high" className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center site-hero__image" />
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-primary-950/70 site-hero__overlay" />
  <div className="container-site relative z-10 grid min-w-0 gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center site-hero__content site-hero__grid">
   <div className="min-w-0"><p className="max-w-2xl text-[10px] font-bold uppercase leading-6 tracking-[.14em] text-signal-300 sm:text-xs">{copy.eyebrow}</p><h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">Project Controls<br />Professional<br /><span className="text-signal-400">Level 6</span></h1><p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg site-hero__lead">{copy.intro}</p>
   <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap site-hero__actions"><SiteLink href="/book-a-session" className="btn-primary inline-flex min-h-12 items-center justify-center px-6 text-sm font-bold">Request a consultation</SiteLink><SiteLink href="#pathways" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 text-sm font-semibold text-white hover:bg-white/10">Compare pathways</SiteLink></div><p className="mt-5 max-w-2xl text-xs leading-6 text-white/70">{copy.note}</p></div>
   <aside className="min-w-0 rounded-2xl border border-white/20 bg-primary-950/70 p-6 backdrop-blur md:p-8 site-hero__panel"><h2 className="text-sm font-semibold text-signal-300">{copy.rolesTitle}</h2><p className="mt-4 text-sm leading-7 text-white/85">{copy.roles}</p><div className="mt-6 border-t border-white/20 pt-6"><h3 className="text-lg text-white">{copy.pathwaysTitle}</h3><p className="mt-3 text-sm font-semibold text-signal-300">{copy.pathways}</p><p className="mt-4 text-sm leading-7 text-white/75">{copy.pathwayDescription}</p></div><SiteLink href={catalogueUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-signal-300"><i className="ri-file-pdf-2-line" aria-hidden="true" /><span>{copy.catalogueLabel}</span></SiteLink></aside>
  </div>
 </section>;
}
