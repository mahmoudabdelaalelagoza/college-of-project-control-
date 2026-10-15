import { level4Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyNote } from './ProgrammeContentSection';
export default function TrustAndRelevance() {
  const copy = level4Copy.industries;
  return <ProgrammeContentSection id="industries" copy={copy}><ul className="mt-8 flex flex-wrap justify-center gap-3">{copy.sectors.map(sector => <li key={sector} className="rounded-full border border-background-200 bg-white px-4 py-2 text-sm font-semibold text-primary-800">{sector}</li>)}</ul><CopyNote text={copy.note} /></ProgrammeContentSection>;
}
