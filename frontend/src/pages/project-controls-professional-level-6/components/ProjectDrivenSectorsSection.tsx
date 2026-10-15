import { level6Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyBody, CopyNote } from './ProgrammeContentSection';
import SiteLink from '@/components/base/SiteLink';

const images=['/assets/images/construction-sector-hero.webp','/assets/images/engineering-sector-hero.webp','/assets/images/public-sector-sector-hero.webp','/assets/images/energy-sector-hero.jpg'];
export default function ProjectDrivenSectorsSection(){const copy=level6Copy.sectors;return <ProgrammeContentSection id="sectors" copy={copy}><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{copy.cards.map((sector,index)=><article key={sector.title} className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-background-200 bg-white"><img src={images[index]} alt="" loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" /><div className="flex flex-1 flex-col p-5"><h3 className="text-xl">{sector.title}</h3><CopyBody body={sector.body} /><SiteLink href={sector.href} className="mt-auto inline-flex min-h-12 items-center pt-5 text-sm font-bold text-primary-700">{sector.cta}</SiteLink></div></article>)}</div><CopyNote text={copy.note} /></ProgrammeContentSection>;}
