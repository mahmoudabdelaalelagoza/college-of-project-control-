import type { ReactNode } from 'react';
import SectionHeading from '@/components/base/SectionHeading';
interface HomeSectionCopy {tag:string;title:string;intro:string;}
export interface HomeCardCopy {title:string;body:string;}
export function HomeNote({text,dark=false}:{text:string;dark?:boolean}) {
 return <p className={'mt-6 text-xs leading-6 '+(dark?'text-white/65':'text-foreground-500')}>{text}</p>;
}
export function HomeCards({cards,dark=false,numbered=false,columns=3}:{cards:readonly HomeCardCopy[];dark?:boolean;numbered?:boolean;columns?:2|3|4}) {
 const grid=columns===4?'sm:grid-cols-2 xl:grid-cols-4':columns===2?'md:grid-cols-2':'md:grid-cols-2 xl:grid-cols-3';
 return <div className={'mt-10 grid gap-5 '+grid}>{cards.map((card,index)=><article key={card.title} className={'min-w-0 rounded-xl border p-6 '+(dark?'border-white/15 bg-white/[0.06]':'border-background-200 bg-white')}>
  {numbered&&<p className={'mb-3 text-xs font-bold '+(dark?'text-signal-300':'text-accent-700')}>{String(index+1).padStart(2,'0')} —</p>}
  <h3 className={'text-xl leading-snug '+(dark?'text-white':'text-foreground-950')}>{card.title}</h3><p className={'mt-3 text-sm leading-7 '+(dark?'text-white/75':'text-foreground-600')}>{card.body}</p>
 </article>)}</div>;
}
export default function HomepageContentSection({id,copy,dark=false,children}:{id:string;copy:HomeSectionCopy;dark?:boolean;children:ReactNode}) {
 return <section id={id} className={'relative isolate overflow-hidden py-16 md:py-24 '+(dark?'bg-primary-950 text-white':'bg-background-50')}>
  <div className={'pattern-dots-overlay '+(dark?'pattern-dots-dark':'pattern-dots-light')} aria-hidden="true" />
  <div className="container-site relative z-10 min-w-0"><SectionHeading tag={copy.tag} title={copy.title} subtitle={copy.intro} light={dark} className="max-w-4xl" />{children}</div>
 </section>;
}
