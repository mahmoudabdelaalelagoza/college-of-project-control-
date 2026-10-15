import { level4Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyCallout, CopyGrid, CopyNote } from './ProgrammeContentSection';

import SiteLink from '@/components/base/SiteLink';
export default function WhoShouldApply() {
  const copy = level4Copy.audience;
  return <ProgrammeContentSection id="who-should-apply" copy={copy}><CopyGrid blocks={copy.cards} /><CopyCallout block={copy.role}><SiteLink href="/book-a-session" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-700">Discuss Your Role <i className="ri-arrow-right-line" aria-hidden="true" /></SiteLink></CopyCallout><CopyNote text={copy.note} /></ProgrammeContentSection>;
}
