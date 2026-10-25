import { level4Copy } from '../pageCopy';
export default function KeyProgrammeFacts() {
  const copy = level4Copy.glance;
  return <section aria-label={copy.tag} className="border-b border-background-200 bg-white py-8"><div className="container-site"><h2 className="mb-6 text-section-xl">{copy.tag}</h2><dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{copy.cards.map(card => <div key={card.title} className="min-w-0 border-l-2 border-signal-400 pl-3"><dt className="text-sm font-bold text-primary-800">{card.title}</dt><dd className="mt-2 text-xs leading-6 text-foreground-600">{card.body[0]}</dd></div>)}</dl><p className="mt-6 max-w-5xl text-xs leading-6 text-foreground-500">{copy.note}</p></div></section>;
}
