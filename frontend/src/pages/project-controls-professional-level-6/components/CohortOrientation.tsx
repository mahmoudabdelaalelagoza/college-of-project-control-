import { level6Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyGrid, CopyNote } from './ProgrammeContentSection';
export default function CohortOrientation(){const copy=level6Copy.orientation;return <ProgrammeContentSection id="sector-learning" copy={copy} light><CopyGrid blocks={copy.cards} columns={2} light /><CopyNote text={copy.note} light /></ProgrammeContentSection>;}
