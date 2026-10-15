import { level4Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyCallout, CopyGrid, CopyNote } from './ProgrammeContentSection';

export default function LearnByBuilding() {
  const copy = level4Copy.outputs;
  return <ProgrammeContentSection id="outputs" copy={copy} light><CopyGrid blocks={copy.cards} light /><CopyCallout block={copy.workplace} light /><CopyNote text={copy.note} light /></ProgrammeContentSection>;
}
