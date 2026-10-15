import { homeCopy } from '../pageCopy';
import SiteLink from '@/components/base/SiteLink';
import HomepageContentSection, { HomeCards, HomeNote } from './HomepageContentSection';

export default function SpecialistModules(){const copy=homeCopy.modules;return <HomepageContentSection id="specialist-modules" copy={copy}>
 <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{copy.cards.map(module=><article key={module.slug} className="min-w-0 rounded-xl border border-background-200 bg-white p-6"><i className={module.icon+' text-2xl text-primary-700'} aria-hidden="true" /><h3 className="mt-4 text-lg leading-snug"><SiteLink href={'/short-courses/'+module.slug} className="font-bold text-primary-900 hover:underline">{module.title}</SiteLink></h3><p className="mt-3 text-sm leading-7 text-foreground-600">{module.body}</p></article>)}</div><HomeNote text={copy.note} />
 <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"><SiteLink href="/short-courses" className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-sm font-bold">{copy.exploreCta}<i className="ri-arrow-right-line" aria-hidden="true" /></SiteLink><SiteLink href="/book-a-session" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary-200 text-primary-700 px-6 py-3 text-center text-sm font-semibold">{copy.discussCta}<i className="ri-arrow-right-line" aria-hidden="true" /></SiteLink></div>
 </HomepageContentSection>;}
