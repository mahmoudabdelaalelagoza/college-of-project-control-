import { homeCopy } from '../pageCopy';
import SiteLink from '@/components/base/SiteLink';
import HomepageContentSection, { HomeCards, HomeNote } from './HomepageContentSection';

export default function ApprenticeshipEligibility(){const copy=homeCopy.eligibility;return <HomepageContentSection id="eligibility" copy={copy}>
 <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"><SiteLink href="/apprenticeship-eligibility-checker" className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-sm font-bold">{copy.checkCta}<i className="ri-arrow-right-line" aria-hidden="true" /></SiteLink><SiteLink href="/book-a-session" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary-200 text-primary-700 px-6 py-3 text-center text-sm font-semibold">{copy.teamCta}<i className="ri-arrow-right-line" aria-hidden="true" /></SiteLink></div><HomeNote text={copy.initialNote} /><h3 className="mt-10 text-2xl">{copy.checklistTitle}</h3><HomeCards cards={copy.cards} numbered /><HomeNote text={copy.note} />
 </HomepageContentSection>;
}
