import { useCallback, useEffect, useId, useRef, useState } from 'react';
import SiteLink from '@/components/base/SiteLink';
import EventCard from '@/components/feature/EventCard';
import { getHomepageEventDisplayTitle } from '@/components/feature/homepageEventTitle';
import useCollection from '@/hooks/useCollection';
import { fetchEventLibrary } from '@/services/eventsApi';
import { selectHomepageEvents } from '../eventSelection';

async function loadHomepageEvents() {
  const data = await fetchEventLibrary({ scope: 'all', page_size: 100 });
  return selectHomepageEvents(data.results);
}

function cardStride(element: HTMLElement) {
  const card = element.firstElementChild as HTMLElement | null;
  return card ? card.getBoundingClientRect().width + (parseFloat(getComputedStyle(element).columnGap) || 0) : 0;
}

export default function LearnTogether() {
  const { items: events, loading, error, retry } = useCollection(loadHomepageEvents);
  const count = events.length;
  const trackId = useId();
  const track = useRef<HTMLDivElement>(null);
  const interaction = useRef({ hovered: false, dragging: false, visible: false, resumeAfter: 0 });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const measure = useCallback(() => {
    const element = track.current;
    if (!element || !count) return;
    const stride = cardStride(element);
    if (stride) setIndex(((Math.round(element.scrollLeft / stride) % count) + count) % count);
  }, [count]);

  const settle = useCallback(() => {
    const element = track.current;
    if (!element || count < 2 || interaction.current.dragging) return;
    const span = cardStride(element) * count;
    if (span && (element.scrollLeft < span - 1 || element.scrollLeft >= span * 2 - 1)) {
      element.scrollTo({ left: element.scrollLeft < span - 1 ? element.scrollLeft + span : element.scrollLeft - span, behavior: 'instant' });
    }
    measure();
  }, [count, measure]);

  const move = useCallback((direction: number, manual = true) => {
    const element = track.current;
    if (!element || count < 2) return;
    if (manual) interaction.current.resumeAfter = Date.now() + 6000;
    const stride = cardStride(element);
    if (!stride) return;
    // Increasing scrollLeft brings the next card in from the right.
    element.scrollTo({
      left: (Math.round(element.scrollLeft / stride) + direction) * stride,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }, [count]);

  useEffect(() => {
    const element = track.current;
    if (!element || !count) return;
    let width = -1;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const resize = () => {
      if (width !== element.clientWidth) {
        width = element.clientWidth;
        element.scrollTo({ left: count > 1 ? cardStride(element) * count : 0, behavior: 'instant' });
      }
      measure();
    };
    const onScroll = () => { clearTimeout(timer); timer = setTimeout(settle, 160); };
    const startDrag = () => { interaction.current.dragging = true; interaction.current.resumeAfter = Date.now() + 6000; };
    const endDrag = () => { interaction.current.dragging = false; onScroll(); };
    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => { interaction.current.visible = entry.isIntersecting; }, { threshold: 0.15 });
    resizeObserver.observe(element);
    visibilityObserver.observe(element);
    element.addEventListener('scroll', onScroll, { passive: true });
    element.addEventListener('scrollend', settle);
    element.addEventListener('pointerdown', startDrag, { passive: true });
    element.addEventListener('pointercancel', endDrag, { passive: true });
    window.addEventListener('pointerup', endDrag);
    resize();
    return () => {
      resizeObserver.disconnect(); visibilityObserver.disconnect(); clearTimeout(timer);
      element.removeEventListener('scroll', onScroll);
      element.removeEventListener('scrollend', settle);
      element.removeEventListener('pointerdown', startDrag);
      element.removeEventListener('pointercancel', endDrag);
      window.removeEventListener('pointerup', endDrag);
    };
  }, [count, loading, error, measure, settle]);

  useEffect(() => {
    if (count < 2 || paused) return;
    const timer = window.setInterval(() => {
      const element = track.current;
      const state = interaction.current;
      if (!element || !state.visible || state.hovered || state.dragging || document.hidden || Date.now() < state.resumeAfter || element.contains(document.activeElement) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      move(1, false);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [count, move, paused]);

  const renderRun = (duplicate: 'before' | 'after' | null) => events.map(event => (
    <div key={String(duplicate) + event.id} className="min-w-0 snap-start" data-event-clone={duplicate ?? undefined} data-event-card={!duplicate || undefined} aria-hidden={duplicate ? true : undefined}>
      <EventCard event={event} displayTitle={getHomepageEventDisplayTitle(event.title)} duplicate={Boolean(duplicate)} />
    </div>
  ));

  return <section id="events" className="bg-background-100 py-16 md:py-24" aria-labelledby="homepage-events-title">
    <div className="container-site">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-accent-700">Events & masterclasses</p>
          <h2 id="homepage-events-title" className="mt-3 text-section-3xl md:text-section-4xl">Learn together</h2>
          <p className="mt-4 text-sm leading-7 text-foreground-600">Explore project controls and project management sessions with our practitioners. Browse upcoming sessions and recent events.</p>
        </div>
        <SiteLink href="/events" className="inline-flex min-h-12 items-center gap-2 text-sm font-bold text-primary-700">View all events<i className="ri-arrow-right-line" aria-hidden="true" /></SiteLink>
      </div>
      {loading ? <p role="status">Loading events…</p> : error ? <div role="alert"><p>Events could not be loaded.</p><button type="button" onClick={retry} className="mt-4 font-semibold text-primary-700 underline">Try again</button></div> : count ? <>
        <div
          id={trackId}
          ref={track}
          role="region"
          aria-roledescription="carousel"
          aria-label="Programme events. Swipe or use the arrow buttons to browse."
          aria-live="off"
          tabIndex={0}
          onScroll={measure}
          onMouseEnter={() => { interaction.current.hovered = true; }}
          onMouseLeave={() => { interaction.current.hovered = false; }}
          onKeyDown={event => {
            if (event.target === event.currentTarget && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
              event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1);
            }
          }}
          className={'scrollbar-hide grid auto-cols-[86%] grid-flow-col gap-6 overflow-x-auto snap-x snap-mandatory py-2 sm:auto-cols-[calc((100%_-_1.5rem)/2)] ' + (count === 2 ? 'xl:auto-cols-[calc((100%_-_1.5rem)/2)]' : 'xl:auto-cols-[calc((100%_-_3rem)/3)]')}
        >
          {count > 1 && renderRun('before')}
          {renderRun(null)}
          {count > 1 && renderRun('after')}
        </div>
        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-sm text-foreground-600" aria-live={paused ? 'polite' : 'off'}>{index + 1} / {count}</p>
          <div className="flex gap-3" aria-label="Event carousel controls">
            <button type="button" onClick={() => setPaused(value => !value)} disabled={count < 2} aria-label={paused ? 'Resume automatic event scrolling' : 'Pause automatic event scrolling'} aria-pressed={paused} aria-controls={trackId} className="motion-reduce:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-300 bg-white text-primary-800 disabled:opacity-30">
              <i className={(paused ? 'ri-play-fill' : 'ri-pause-fill') + ' text-lg'} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => move(-1)} disabled={count < 2} aria-label="Previous event" aria-controls={trackId} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-300 bg-white text-primary-800 disabled:opacity-30"><i className="ri-arrow-left-line text-lg" aria-hidden="true" /></button>
            <button type="button" onClick={() => move(1)} disabled={count < 2} aria-label="Next event" aria-controls={trackId} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-700 text-white disabled:opacity-30"><i className="ri-arrow-right-line text-lg" aria-hidden="true" /></button>
          </div>
        </div>
      </> : <p className="text-sm text-foreground-600">Programme events will appear here when published.</p>}
    </div>
  </section>;
}
