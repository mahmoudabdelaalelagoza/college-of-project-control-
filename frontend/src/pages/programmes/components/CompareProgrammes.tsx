import SiteLink from '@/components/base/SiteLink';
import { PROGRAMME_COMPARISON, PROGRAMME_COMPARISON_COLUMNS } from '../programmeComparison';
import { useEffect, useRef, useState } from 'react';

/** Page-specific comparison of two apprenticeships and one standalone professional programme. */
export default function CompareProgrammes() {
  const [highlightedRow, setHighlightedRow] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="programmes-comparison" className="py-16 md:py-20 bg-canvas relative overflow-hidden">
      <div className="container-site relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 reveal-blur-in is-visible">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-label font-semibold uppercase tracking-wider border border-highlight-500/40 text-highlight-600 mb-4">
            Compare Programmes
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground-950 leading-tight">
            Compare your professional development options
          </h2>
          <p className="mt-3 text-sm md:text-base text-foreground-600 leading-relaxed">
            Explore the differences between our two apprenticeships and our standalone professional programme. Find the route that best aligns with your responsibilities, experience and development goals.
          </p>
        </div>

        <div ref={ref} className={`transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="mb-3 flex items-center justify-center gap-2 text-xs text-foreground-500 md:hidden">
            <i className="ri-arrow-left-right-line" aria-hidden="true" />
            Swipe horizontally to compare all three programmes.
          </p>
          <div
            className="overflow-x-auto rounded-xl border border-background-300 bg-white"
            role="region"
            aria-label="Programme comparison"
            tabIndex={0}
          >
            {/* On mobile, show the fixed row label and one readable programme column at a time. */}
            <table className="w-[calc(300%_-_16rem)] table-fixed md:w-full md:min-w-[960px]">
              <caption className="sr-only">Comparison of two apprenticeships and one standalone professional programme offered by Kent Business College</caption>
              <colgroup>
                <col className="w-32 md:w-48" />
                {PROGRAMME_COMPARISON_COLUMNS.map(programme => <col key={programme.id} />)}
              </colgroup>
              <thead>
                <tr className="bg-primary-500 border-b border-background-50/20">
                  <th scope="col" className="sticky left-0 z-10 bg-primary-500 px-4 py-3 text-left text-sm font-label font-semibold text-background-50 md:static">
                    Comparison point
                  </th>
                  {PROGRAMME_COMPARISON_COLUMNS.map(programme => (
                    <th key={programme.id} scope="col" className="break-words px-4 py-3 text-left text-sm font-heading font-bold text-background-50">
                      {programme.comparisonTitle}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PROGRAMME_COMPARISON.map(row => (
                  <tr
                    key={row.label}
                    className={`border-b border-background-200 last:border-b-0 transition-colors duration-200 ${highlightedRow === row.label ? 'bg-primary-50' : 'bg-white'}`}
                    onMouseEnter={() => setHighlightedRow(row.label)}
                    onMouseLeave={() => setHighlightedRow(null)}
                  >
                    <th scope="row" className="sticky left-0 z-10 break-words bg-inherit px-4 py-4 text-left align-top text-sm font-label font-semibold text-foreground-700 md:static">
                      {row.label}
                    </th>
                    {PROGRAMME_COMPARISON_COLUMNS.map(programme => (
                      <td key={programme.id} className="break-words px-4 py-4 align-top text-sm leading-relaxed text-foreground-600">
                        {row.valueById[programme.id]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-background-200 bg-white p-5 md:flex md:items-center md:justify-between md:gap-6 md:p-6">
          <div className="min-w-0">
            <h3 className="text-lg font-heading font-bold text-foreground-950">Not sure which programme fits your role?</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-600">
              Our team can review your responsibilities, prior learning and professional development goals to help you explore the most suitable route.
            </p>
          </div>
          <SiteLink href="#how-to-choose" className="btn-primary mt-4 inline-flex w-full shrink-0 items-center justify-center gap-2 px-7 py-3.5 text-center text-sm font-semibold transition-all duration-300 md:mt-0 md:w-auto">
            Help Me Choose
            <i className="ri-arrow-right-line text-sm" aria-hidden="true" />
          </SiteLink>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-foreground-600">
          Apprenticeship eligibility and funding are subject to individual assessment and employer support. External professional recognition is subject to the relevant awarding body's requirements.
        </p>
      </div>
    </section>
  );
}
