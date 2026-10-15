import { level4Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyCallout, CopyGrid } from './ProgrammeContentSection';

import SiteLink from '@/components/base/SiteLink';
export default function ForEmployers() {
  const copy = level4Copy.employers;
  return <ProgrammeContentSection id="employers" copy={copy}><CopyGrid blocks={copy.cards} /><CopyCallout block={copy.support}><SiteLink href="/employers" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-700">Explore Employer Support <i className="ri-arrow-right-line" aria-hidden="true" /></SiteLink></CopyCallout></ProgrammeContentSection>;
}
