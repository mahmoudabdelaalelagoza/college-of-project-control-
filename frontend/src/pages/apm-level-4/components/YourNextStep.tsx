import SiteLink from '@/components/base/SiteLink';
import { level4Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyNote } from './ProgrammeContentSection';
export default function YourNextStep() {
  const copy = level4Copy.next;
  return <ProgrammeContentSection id="next-step" copy={copy} light><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><SiteLink href="/book-a-session" className="btn-primary inline-flex min-h-12 items-center justify-center px-6 text-center text-sm font-bold">Book a Programme Consultation</SiteLink><SiteLink href="#funding" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10">Review Funding &amp; Eligibility</SiteLink></div><CopyNote text={copy.note} light /></ProgrammeContentSection>;
}
