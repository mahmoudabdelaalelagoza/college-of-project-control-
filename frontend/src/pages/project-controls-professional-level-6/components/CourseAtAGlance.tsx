import { level6Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyGrid, CopyNote } from './ProgrammeContentSection';
import SiteLink from '@/components/base/SiteLink';

export default function CourseAtAGlance(){const copy=level6Copy.glance;return <ProgrammeContentSection id="at-a-glance" copy={copy}><CopyGrid blocks={copy.cards} columns={4} /><div className="mt-10 rounded-xl border border-background-200 bg-white p-6"><h3 className="text-xl">{copy.intakesTitle}</h3><div className="mt-5 grid gap-4 md:grid-cols-3">{copy.intakes.map(intake=><SiteLink key={intake} href="#register" className="rounded-lg border border-primary-200 p-4 text-sm font-semibold leading-7 text-primary-700 hover:bg-background-50">{intake}</SiteLink>)}</div><CopyNote text={copy.note} /></div></ProgrammeContentSection>;}
