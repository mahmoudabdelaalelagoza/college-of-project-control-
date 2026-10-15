import { level4Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyCallout, CopyGrid, CopyNote } from './ProgrammeContentSection';

export default function HowYouLearn() {
  const copy = level4Copy.learning;
  return <ProgrammeContentSection id="learning" copy={copy}><CopyGrid blocks={copy.cards} numbered /><CopyCallout block={copy.support} /><CopyNote text={copy.note} /></ProgrammeContentSection>;
}
