import { level6Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyGrid, CopyCallout } from './ProgrammeContentSection';
import SiteLink from '@/components/base/SiteLink';
export default function WhoShouldApply(){const copy=level6Copy.audience;return <ProgrammeContentSection id="audience" copy={copy}><CopyGrid blocks={copy.cards} /><CopyCallout block={copy.role}><SiteLink href="/book-a-session" className="mt-6 inline-flex min-h-12 items-center text-sm font-bold text-primary-700 hover:text-primary-900">{copy.cta}</SiteLink></CopyCallout></ProgrammeContentSection>;}
