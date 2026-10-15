import { level6Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyNote } from './ProgrammeContentSection';
import SiteLink from '@/components/base/SiteLink';

export default function RegisterYourInterest(){const copy=level6Copy.register;return <ProgrammeContentSection id="register" copy={copy} light><div className="text-center"><SiteLink href="/book-a-session" className="mt-6 inline-flex min-h-12 items-center text-sm font-bold text-signal-300 hover:text-white">{copy.cta}</SiteLink><CopyNote text={copy.note} light /></div></ProgrammeContentSection>;}
