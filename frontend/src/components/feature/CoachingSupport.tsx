import { coachPortrait } from '@/data/coachPortraits';
import useCollection from '@/hooks/useCollection';
import CollectionState from '@/components/base/CollectionState';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import SectionHeading from '@/components/base/SectionHeading';
import { fetchCoaches, type Coach } from '@/services/coachesApi';

// Canonical section copy and layout for every coach section on the site.
const sectionCopy = {
  "tag": "Coaching & Support",
  "title": "Guidance beyond the classroom",
  "intro": "Our tutors and coaches provide practical guidance, personalised feedback and ongoing support to help you understand new concepts, apply your learning at work and make progress towards your development goals.",
  "cards": [
    {
      "title": "Tutor & Learning Support",
      "body": "Ask questions, revisit learning resources and access one-to-one guidance to help you understand challenging topics."
    },
    {
      "title": "Workplace Application",
      "body": "Work with your coach to identify opportunities to apply new skills and develop relevant evidence of your own contribution."
    },
    {
      "title": "Coaching & Progress Reviews",
      "body": "Receive feedback, review your development and agree clear priorities for your next steps, with employer involvement as part of your apprenticeship."
    },
    {
      "title": "Personalised Learning Support",
      "body": "Discuss your learning needs, preferences and challenges so appropriate support can be explored and agreed."
    }
  ]
} as const;

interface CoachingSupportProps { id?: string; }

function CoachPortrait({ coach }: { coach: Coach }) {
  const fallback = coachPortrait(coach.name);
  const image = coach.imageUrl || fallback;
  return <div className="relative aspect-[4/3] overflow-hidden bg-primary-50">
    {image ? <img
      loading="lazy"
      decoding="async"
      src={image}
      alt={coach.name}
      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      onError={event => {
        if (fallback && event.currentTarget.getAttribute('src') !== fallback) event.currentTarget.src = fallback;
      }}
    /> : <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 font-heading text-5xl font-bold text-primary-700" aria-hidden="true">{coach.initials}</div>}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-950/25 via-transparent to-transparent" />
    <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/95 px-3 py-1.5 text-[11px] font-bold text-primary-800 shadow-sm"><i className="ri-user-star-line" aria-hidden="true" />Skills Coach</span>
  </div>;
}

/** Shared light coach profiles. Names, qualifications and photos remain dashboard-managed. */
export default function CoachingSupport({ id = 'coaching-support' }: CoachingSupportProps = {}) {
  const areas = sectionCopy.cards;
  const { items: coaches, loading, error, retry } = useCollection(fetchCoaches);
  const trackId = useId();
  const track = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ index: 0, start: true, end: true });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap || '0');
    const stride = card ? card.getBoundingClientRect().width + (Number.isFinite(gap) ? gap : 0) : 1;
    setPosition({
      index: Math.round(el.scrollLeft / stride),
      start: el.scrollLeft < 2,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
    });
  }, []);

  const move = useCallback((direction: number) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap || '0');
    const stride = card.getBoundingClientRect().width + (Number.isFinite(gap) ? gap : 0);
    el.scrollTo({ left: (Math.round(el.scrollLeft / stride) + direction) * stride, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el || coaches.length === 0) return;
    el.scrollLeft = 0;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    measure();
    return () => observer.disconnect();
  }, [coaches, measure]);

  if (loading || error || coaches.length === 0) return <CollectionState id={id} label="Coaches" loading={loading} error={error} retry={retry} />;

  return (
    <section id={id} className="relative isolate overflow-hidden bg-background-50 py-16 md:py-24">
      <div className="pattern-dots-overlay pattern-dots-light" aria-hidden="true" />
      <div className="container-site relative z-10 min-w-0">
        <SectionHeading
          tag={sectionCopy.tag}
          title={sectionCopy.title}
          subtitle={sectionCopy.intro}
          className="mb-12"
        />
        <div
          id={trackId}
          ref={track}
          role="region"
          aria-roledescription="carousel"
          onScroll={measure}
          tabIndex={0}
          aria-label="Coach carousel. Swipe or use the arrow buttons to browse."
          onKeyDown={(event) => {
            if (event.target === event.currentTarget && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
              event.preventDefault();
              move(event.key === 'ArrowRight' ? 1 : -1);
            }
          }}
          className="scrollbar-hide grid auto-cols-[84%] grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory pb-4 sm:auto-cols-[46%] lg:grid-flow-row lg:grid-cols-4 lg:auto-cols-auto lg:overflow-visible lg:snap-none"
        >
          {coaches.map(coach => (
            <div key={coach.id} className="min-w-0 snap-start">
              <article data-coach-profile={coach.id} className="group h-full overflow-hidden rounded-2xl border border-background-200 bg-white shadow-sm transition-all duration-300 hover:border-primary-300 hover:shadow-card">
                <CoachPortrait coach={coach} />
                <div className="p-5 md:p-6">
                  <h3 className="text-xl font-bold text-foreground-950">{coach.name}</h3>
                  <p className="mt-3 text-xs font-semibold leading-6 text-accent-700">{coach.qualification}</p>
                  <p className="mt-4 border-t border-background-200 pt-4 text-sm leading-7 text-foreground-600">{coach.focus}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between gap-4 lg:hidden">
          <p className="text-sm text-foreground-600" aria-live="polite">{Math.min(position.index + 1, coaches.length)} / {coaches.length}</p>
          <div className="flex gap-3">
            <button type="button" onClick={() => move(-1)} disabled={position.start} aria-label="Previous coach" aria-controls={trackId} className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-300 bg-white text-primary-800 disabled:opacity-30">
              <i className="ri-arrow-left-line text-lg" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => move(1)} disabled={position.end} aria-label="Next coach" aria-controls={trackId} className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-700 text-white disabled:opacity-30">
              <i className="ri-arrow-right-line text-lg" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map(area => (
            <div key={area.title} className="border-t border-primary-200 pt-4">
              <h3 className="text-sm font-bold text-primary-800">{area.title}</h3>
              <p className="mt-2 text-xs leading-6 text-foreground-600">{area.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
