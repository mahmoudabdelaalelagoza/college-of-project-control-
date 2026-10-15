import type { ReactNode } from 'react';
import SectionHeading from '@/components/base/SectionHeading';

export interface CopyBlock {
  title: string;
  subtitle?: string;
  body?: readonly string[];
  items?: readonly string[];
  itemsHeading?: string;
}
interface SectionCopy { tag: string; title: string; intro: readonly string[]; }
export function CopyBody({ body = [], light = false }: { body?: readonly string[]; light?: boolean }) {
  return <>{body.map(text => <p key={text} className={'mt-3 text-sm leading-7 ' + (light ? 'text-white/75' : 'text-foreground-600')}>{text}</p>)}</>;
}
export function CopyList({ items = [], light = false }: { items?: readonly string[]; light?: boolean }) {
  return <ul className="mt-4 space-y-3">{items.map(item => <li key={item} className={'flex gap-3 text-sm leading-7 ' + (light ? 'text-white/75' : 'text-foreground-700')}><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-400" aria-hidden="true" /><span className="min-w-0">{item}</span></li>)}</ul>;
}
export function CopyGrid({ blocks, light = false, numbered = false, columns = 3 }: { blocks: readonly CopyBlock[]; light?: boolean; numbered?: boolean; columns?: 2 | 3 | 4 }) {
  const grid = columns === 2 ? 'md:grid-cols-2' : columns === 4 ? 'md:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-2 xl:grid-cols-3';
  return <div className={'mt-10 grid gap-5 ' + grid}>{blocks.map((block, index) => <article key={block.title} className={'min-w-0 rounded-xl border p-6 ' + (light ? 'border-white/15 bg-white/[0.06]' : 'border-background-200 bg-white')}>
    {numbered && <p className={'mb-3 text-xs font-bold ' + (light ? 'text-signal-300' : 'text-accent-700')}>{String(index + 1).padStart(2, '0')} —</p>}
    {block.subtitle && <p className={'mb-3 text-xs font-semibold ' + (light ? 'text-signal-300' : 'text-accent-700')}>{block.subtitle}</p>}
    <h3 className={'text-xl leading-snug ' + (light ? 'text-white' : 'text-foreground-950')}>{block.title}</h3>
    <CopyBody body={block.body} light={light} />{block.itemsHeading && <h4 className={'mt-5 text-sm font-bold ' + (light ? 'text-white' : 'text-primary-800')}>{block.itemsHeading}</h4>}<CopyList items={block.items} light={light} />
  </article>)}</div>;
}
export function CopyCallout({ block, light = false, children }: { block: CopyBlock; light?: boolean; children?: ReactNode }) {
  return <div className={'mt-8 rounded-xl border p-6 md:p-8 ' + (light ? 'border-white/15 bg-white/[0.06]' : 'border-background-200 bg-white')}>
    {block.subtitle && <p className={'mb-3 text-xs font-bold uppercase tracking-wider ' + (light ? 'text-signal-300' : 'text-accent-700')}>{block.subtitle}</p>}
    <h3 className={'text-xl ' + (light ? 'text-white' : 'text-foreground-950')}>{block.title}</h3>
    <CopyBody body={block.body} light={light} /><CopyList items={block.items} light={light} />{children}
  </div>;
}
export function CopyNote({ text, light = false }: { text: string; light?: boolean }) {
  return <p className={'mt-6 text-xs leading-6 ' + (light ? 'text-white/65' : 'text-foreground-500')}>{text}</p>;
}
export default function ProgrammeContentSection({ id, copy, light = false, children }: { id?: string; copy: SectionCopy; light?: boolean; children: ReactNode }) {
  return <section id={id} className={'relative isolate overflow-hidden py-16 md:py-24 ' + (light ? 'bg-primary-950 text-white' : 'bg-background-50')}>
    {light && <div className="pattern-dots-overlay pattern-dots-dark" aria-hidden="true" />}
    <div className="container-site relative z-10 min-w-0">
      <SectionHeading tag={copy.tag} title={copy.title} subtitle={copy.intro[0]} light={light} className="max-w-4xl" />
      {copy.intro.slice(1).map(text => <p key={text} className={'mx-auto mt-4 max-w-3xl text-center text-sm leading-7 ' + (light ? 'text-white/75' : 'text-foreground-600')}>{text}</p>)}
      {children}
    </div>
  </section>;
}
