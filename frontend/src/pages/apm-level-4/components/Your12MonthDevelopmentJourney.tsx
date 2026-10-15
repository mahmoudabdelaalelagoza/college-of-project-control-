import { level4Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyCallout, CopyGrid, CopyNote } from './ProgrammeContentSection';

export default function Your12MonthDevelopmentJourney() {
  const copy = level4Copy.pathway;
  return <ProgrammeContentSection id="pathway" copy={copy}><CopyGrid blocks={copy.cards} columns={2} /><CopyCallout block={copy.workplace} /><CopyNote text={copy.note} /></ProgrammeContentSection>;
}
