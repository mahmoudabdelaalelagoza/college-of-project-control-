import type { ReactNode } from 'react';
import SectionHeading from '@/components/base/SectionHeading';

/** Uses the same heading, spacing, colour tokens and dot pattern as the homepage. */
export default function PmoSection({ id, tag, title, subtitle, tone = 'light', children }: {
  id?: string;
  tag: string;
  title: string;
  subtitle?: string;
  tone?: 'light' | 'white' | 'dark';
  children: ReactNode;
}) {
  const dark = tone === 'dark';
  const background = dark ? 'bg-primary-950 text-white' : tone === 'white' ? 'bg-white' : 'bg-background-50';
  return (
    <section id={id} aria-label={title} className={"relative isolate overflow-hidden py-16 md:py-24 " + background}>
      {tone !== 'white' && <div className={"pattern-dots-overlay " + (dark ? 'pattern-dots-dark' : 'pattern-dots-light')} aria-hidden="true" />}
      <div className="container-site relative z-10">
        <SectionHeading tag={tag} title={title} subtitle={subtitle} light={dark} className="max-w-4xl" />
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}
