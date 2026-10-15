import { level6Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyGrid, CopyCallout, CopyNote } from './ProgrammeContentSection';
import SiteLink from '@/components/base/SiteLink';
export default function ProgrammeStructure(){const copy=level6Copy.structure;return <ProgrammeContentSection id="structure" copy={copy} light><CopyGrid blocks={copy.cards} light /><CopyCallout block={copy.epa} light /><CopyNote text={copy.note} light /><CopyCallout block={copy.optional} light><SiteLink href="/book-a-session" className="mt-6 inline-flex min-h-12 items-center text-sm font-bold text-signal-300 hover:text-white">{copy.cta}</SiteLink></CopyCallout></ProgrammeContentSection>;}
