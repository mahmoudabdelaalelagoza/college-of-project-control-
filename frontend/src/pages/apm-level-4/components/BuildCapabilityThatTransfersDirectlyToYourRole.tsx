import { level4Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyCallout, CopyGrid, CopyNote } from './ProgrammeContentSection';

import SiteLink from '@/components/base/SiteLink';
export default function BuildCapabilityThatTransfersDirectlyToYourRole() {
  const copy = level4Copy.outcomes;
  return <ProgrammeContentSection id="overview" copy={copy}><CopyGrid blocks={copy.cards} numbered /><CopyCallout block={{ ...copy.intake, subtitle: copy.intake.tag }}><SiteLink href="/book-a-session" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-700">Enquire About the Next Cohort <i className="ri-arrow-right-line" aria-hidden="true" /></SiteLink><CopyNote text={copy.intake.note} /></CopyCallout></ProgrammeContentSection>;
}
