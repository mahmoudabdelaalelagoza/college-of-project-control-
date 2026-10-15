import { level6Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyGrid, CopyNote } from './ProgrammeContentSection';
export default function ProgrammeBenefits(){const copy=level6Copy.benefits;return <ProgrammeContentSection id="benefits" copy={copy} light><CopyGrid blocks={copy.cards} light /><CopyNote text={copy.note} light /></ProgrammeContentSection>;}
