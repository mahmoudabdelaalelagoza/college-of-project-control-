import { level4Copy } from '../pageCopy';
import ProgrammeContentSection, { CopyBody, CopyList } from './ProgrammeContentSection';
export default function WhatYouWillLearn() {
  const copy = level4Copy.curriculum;
  return <ProgrammeContentSection id="curriculum" copy={copy}><div className="mx-auto mt-10 max-w-5xl space-y-4">{copy.cards.map((card, index) => <details key={card.title} className="group rounded-xl border border-background-200 bg-white open:border-primary-300" open={index === 0}><summary className="flex cursor-pointer list-none items-center gap-4 p-5"><span className="shrink-0 text-xs font-bold text-accent-700">{String(index + 1).padStart(2, '0')} —</span><h3 className="min-w-0 flex-1 text-base md:text-xl">{card.title}</h3><i className="ri-add-line shrink-0 text-xl text-primary-700 group-open:rotate-45" aria-hidden="true" /></summary><div className="border-t border-background-200 px-5 pb-6"><CopyBody body={card.body} /><h4 className="mt-5 text-sm font-bold text-primary-800">Key Topics</h4><CopyList items={card.items} /></div></details>)}</div></ProgrammeContentSection>;
}
