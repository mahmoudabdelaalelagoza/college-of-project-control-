import { level6Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyGrid, CopyNote } from './ProgrammeContentSection';
export default function ProgrammeOverview(){const copy=level6Copy.overview;return <ProgrammeContentSection id="overview" copy={copy}><CopyGrid blocks={copy.cards} /><CopyNote text={copy.note} /></ProgrammeContentSection>;}
