import useCollection from '@/hooks/useCollection';
import { fetchCoaches } from '@/services/coachesApi';
import { level6Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyBody, CopyGrid, CopyNote } from './ProgrammeContentSection';
export default function CoachingAndSupport() {
  const copy = level6Copy.coaching;
  const { items: portraits } = useCollection(fetchCoaches);
  return <ProgrammeContentSection id="coaching" copy={copy} light>
    <h3 className="mt-10 text-xl text-white">{copy.teamTitle}</h3>
    <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{copy.coaches.map(coach => {
      const portrait = portraits.find(item => item.name.toLowerCase().includes(coach.match));
      return <article key={coach.title} className="min-w-0 rounded-xl border border-white/15 bg-white/[0.06] p-5">
        {portrait?.imageUrl ? <img src={portrait.imageUrl} alt={coach.title} loading="lazy" decoding="async" className="h-16 w-16 rounded-full object-cover" /> : <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-signal-300" aria-hidden="true">{coach.title.split(' ').map(part => part[0]).join('')}</span>}
        <h4 className="mt-5 text-lg text-white">{coach.title}</h4><p className="mt-2 text-xs font-semibold leading-6 text-signal-300">{coach.subtitle}</p><CopyBody body={coach.body} light />
      </article>;
    })}</div>
    <CopyGrid blocks={copy.areas} columns={4} light />
    <CopyNote text={copy.note} light />
  </ProgrammeContentSection>;
}
