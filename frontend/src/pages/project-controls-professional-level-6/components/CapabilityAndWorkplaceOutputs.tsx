import { level6Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyGrid, CopyCallout } from './ProgrammeContentSection';
export default function CapabilityAndWorkplaceOutputs(){const copy=level6Copy.outputs;return <ProgrammeContentSection id="outputs" copy={copy}><CopyGrid blocks={copy.cards} columns={4} /><CopyCallout block={copy.evidence} /></ProgrammeContentSection>;}
