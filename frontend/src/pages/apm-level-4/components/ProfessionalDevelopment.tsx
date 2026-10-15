import { level4Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyGrid, CopyNote } from './ProgrammeContentSection';
export default function ProfessionalDevelopment() {
  const copy = level4Copy.recognition;
  return <ProgrammeContentSection id="recognition" copy={copy}><CopyGrid blocks={copy.cards} /><CopyNote text={copy.note} /></ProgrammeContentSection>;
}
