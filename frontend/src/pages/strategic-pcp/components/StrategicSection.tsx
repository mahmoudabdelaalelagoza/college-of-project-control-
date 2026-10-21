import type { ReactNode } from 'react';
import SectionHeading from '@/components/base/SectionHeading';

/** Page sections use the site's canonical headings, spacing, colour tokens and dot pattern. */
export default function StrategicSection({ id, headingId, tag, title, intro, tone = 'white', children }: {
  id: string;
  headingId?: string;
  tag: string;
  title: string;
  intro: string | readonly string[];
  tone?: 'white' | 'light';
  children: ReactNode;
}) {
  const paragraphs = typeof intro === 'string' ? [intro] : intro;
  const titleId = headingId ?? `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className={`relative isolate overflow-hidden py-16 md:py-24 ${tone === 'light' ? 'bg-background-50' : 'bg-white'}`}>
      {tone === 'light' && <div className="pattern-dots-overlay pattern-dots-light" aria-hidden="true" />}
      <div className="container-site relative z-10">
        <SectionHeading id={titleId} tag={tag} title={title} subtitle={paragraphs[0]} className="max-w-4xl" />
        {paragraphs.slice(1).map((paragraph) => (
          <p key={paragraph} className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-foreground-600 md:mt-4 md:text-base">{paragraph}</p>
        ))}
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}
