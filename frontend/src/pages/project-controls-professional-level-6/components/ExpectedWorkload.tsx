import { level6Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyGrid, CopyCallout, CopyNote } from './ProgrammeContentSection';

export default function ExpectedWorkload(){const copy=level6Copy.workload;return <ProgrammeContentSection id="workload" copy={copy}><CopyGrid blocks={copy.cards} /><h3 className="mt-10 text-2xl">{copy.submissionsTitle}</h3><CopyGrid blocks={copy.submissions} columns={2} numbered /><h3 className="mt-10 text-2xl">{copy.reviewsTitle}</h3><CopyGrid blocks={copy.reviews} columns={2} /><CopyCallout block={copy.offjob} /><CopyCallout block={copy.confidentiality} /><CopyNote text={copy.note} /></ProgrammeContentSection>;}
