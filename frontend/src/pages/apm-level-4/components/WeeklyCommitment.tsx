import { level4Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyCallout, CopyGrid } from './ProgrammeContentSection';

export default function WeeklyCommitment() {
  const copy = level4Copy.commitment;
  return <ProgrammeContentSection id="commitment" copy={copy}><CopyGrid blocks={copy.cards} /><CopyCallout block={copy.protected} /></ProgrammeContentSection>;
}
