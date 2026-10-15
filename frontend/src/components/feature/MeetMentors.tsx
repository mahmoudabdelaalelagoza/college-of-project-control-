import useCollection from '@/hooks/useCollection';
import CollectionState from '@/components/base/CollectionState';
import SiteLink from '@/components/base/SiteLink';
import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { fetchMentors, type Mentor } from '@/services/mentorsApi';

interface DisplayMentor extends Mentor { summary?: string; profileLabel?: string; profileHref?: string; }
interface MentorSectionCopy {
  tag: string;
  title: string;
  intro: string;
  cards: readonly { title: string; subtitle: string; body: string; cta: string; match: string }[];
  cta: string;
}
interface MeetMentorsProps { id?: string; content?: MentorSectionCopy; loopOnMobile?: boolean; }

function cardStride(element: HTMLElement) {
  const card = Array.from(element.children).find(child => child.getBoundingClientRect().width > 0);
  return card ? card.getBoundingClientRect().width + (parseFloat(getComputedStyle(element).columnGap) || 0) : 0;
}

function MentorCard({ mentor }: { mentor: DisplayMentor }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative w-full min-w-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="bg-white rounded-2xl border border-background-200/70 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-primary-300/40 hover:-translate-y-1">
        {/* Image / Avatar */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-background-100">
          {mentor.imageUrl ? (
            <img loading="lazy" decoding="async" src={mentor.imageUrl} alt={mentor.name} className="h-full w-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
              <span className="text-5xl md:text-6xl font-heading font-bold text-white/90 tracking-wide">
                {mentor.initials}
              </span>
            </div>
          )}
          {/* Gradient overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/40 via-transparent to-transparent pointer-events-none" />

          {/* Stat badge floating on image */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div className="px-3 py-1.5 rounded-full bg-background-50/90 backdrop-blur-sm border border-background-200/50">
              <span className="text-sm font-semibold text-foreground-700 tracking-wide">
                {mentor.affiliation}
              </span>
            </div>
          </div>

          {/* Corner accent on hover */}
          <div className={`pointer-events-none absolute top-0 right-0 w-16 h-16 transition-all duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary-500/20 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          {/* Name */}
          <h3 className="text-base md:text-lg font-heading font-bold text-foreground-950 mb-1 leading-tight">
            {mentor.name}
          </h3>

          <p className="mb-3 text-xs font-label font-semibold tracking-wide text-highlight-700">
            {mentor.role}
          </p>

          {mentor.summary && <p className="mt-3 text-sm leading-7 text-foreground-600">{mentor.summary}</p>}
          <div className="mt-5 flex items-center justify-between gap-3 border-t border-background-200 pt-4">
            <SiteLink href={mentor.profileHref ?? `/mentors/${mentor.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 transition-colors hover:text-primary-900">
              {mentor.profileLabel ?? 'View profile'}
              <i className="ri-arrow-right-line" />
            </SiteLink>
            {mentor.linkedinUrl && (
              <SiteLink href={mentor.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`Connect with ${mentor.name} on LinkedIn`} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-transform hover:-translate-y-0.5">
                <i className="ri-linkedin-fill" />
              </SiteLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


export default function MeetMentors({ id = 'mentors', content, loopOnMobile = false }: MeetMentorsProps = {}) {
  const { items: mentors, loading, error, retry } = useCollection(fetchMentors);
  const displayedMentors = useMemo<DisplayMentor[]>(() => content ? content.cards.map((expert, index) => {
    const mentor = mentors.find(item => item.name.toLowerCase().includes(expert.match));
    return {
      id: mentor?.id ?? -(index + 1),
      initials: mentor?.initials ?? expert.title.split(' ').slice(-2).map(part => part[0]).join(''),
      name: expert.title,
      role: expert.subtitle,
      affiliation: mentor?.affiliation ?? '',
      specialties: mentor?.specialties ?? [],
      body: expert.body,
      summary: expert.body,
      imageUrl: mentor?.imageUrl ?? '',
      linkedinUrl: mentor?.linkedinUrl ?? '',
      profileLabel: expert.cta,
      profileHref: mentor ? '/mentors/' + mentor.id : '/mentors',
    };
  }) : mentors, [content, mentors]);
  const count = displayedMentors.length;
  const trackId = useId();
  const track = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ index: 0, start: true, end: true });

  const isLooping = useCallback(() => loopOnMobile && count > 1 && window.matchMedia('(max-width: 1023px)').matches, [loopOnMobile, count]);

  const measure = useCallback(() => {
    const element = track.current;
    if (!element) return;
    const stride = cardStride(element);
    const index = stride ? Math.round(element.scrollLeft / stride) : 0;
    setPosition({
      index: count ? ((index % count) + count) % count : 0,
      start: element.scrollLeft < 2,
      end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
    });
  }, [count]);

  const settleLoop = useCallback(() => {
    const element = track.current;
    if (!element || !isLooping()) return;
    const span = cardStride(element) * count;
    if (span && (element.scrollLeft < span - 1 || element.scrollLeft >= span * 2 - 1)) {
      // Three identical runs let touch scrolling cross either boundary before
      // returning to the equivalent position in the middle run.
      const target = element.scrollLeft < span - 1 ? element.scrollLeft + span : element.scrollLeft - span;
      element.scrollTo({ left: target, behavior: 'instant' });
    }
    measure();
  }, [count, isLooping, measure]);

  const move = useCallback((direction: number) => {
    const element = track.current;
    if (!element) return;
    const stride = cardStride(element);
    if (!stride) return;
    const target = direction === 0 ? 0 : (Math.round(element.scrollLeft / stride) + direction) * stride;
    element.scrollTo({ left: target, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }, []);

  useEffect(() => {
    const element = track.current;
    if (!element || !count) return;
    let width = -1;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let dragging = false;
    const resize = () => {
      if (width !== element.clientWidth) {
        width = element.clientWidth;
        element.scrollTo({ left: isLooping() ? cardStride(element) * count : 0, behavior: 'instant' });
      }
      measure();
    };
    const settle = () => { if (!dragging) settleLoop(); };
    const schedule = () => { clearTimeout(timer); timer = setTimeout(settle, 150); };
    const startDrag = () => { dragging = true; };
    const endDrag = () => { dragging = false; schedule(); };
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    element.addEventListener('scroll', schedule, { passive: true });
    element.addEventListener('scrollend', settle);
    element.addEventListener('pointerdown', startDrag, { passive: true });
    window.addEventListener('pointerup', endDrag);
    element.addEventListener('pointercancel', endDrag, { passive: true });
    resize();
    return () => {
      observer.disconnect(); clearTimeout(timer);
      element.removeEventListener('scroll', schedule);
      element.removeEventListener('scrollend', settle);
      element.removeEventListener('pointerdown', startDrag);
      window.removeEventListener('pointerup', endDrag);
      element.removeEventListener('pointercancel', endDrag);
    };
  }, [count, displayedMentors, isLooping, measure, settleLoop]);

  useEffect(() => {
    if (count < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      const element = track.current;
      if (!element || window.innerWidth >= 1024 || element.matches(':hover') || element.contains(document.activeElement)) return;
      if (isLooping()) move(1);
      else if (position.end) move(0);
      else move(1);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [count, isLooping, move, position.end]);

  if (!content && (loading || error || mentors.length === 0)) return <CollectionState id={id} label="Mentors" loading={loading} error={error} retry={retry} />;

  return (
    <section id={id} className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#F5F8F9' }}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, oklch(var(--primary-200) / 0.15), transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, oklch(var(--highlight-200) / 0.12), transparent 70%)' }} />

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-label font-semibold uppercase tracking-wider border border-highlight-500/40 text-highlight-700 mb-5">
            <i className="ri-team-line text-sm" />
            {content?.tag ?? 'Learn from Practitioners'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground-950 leading-tight">
            {content?.title ?? 'Learn from people who understand the work'}
          </h2>
          <p className="mt-4 text-base md:text-lg text-foreground-600 leading-relaxed max-w-2xl mx-auto">
            {content?.intro ?? 'Our mentors bring professional experience from project, programme, PMO and Project Controls environments.'}
          </p>
        </div>

        <div
          id={trackId}
          ref={track}
          onScroll={measure}
          tabIndex={0}
          aria-label="Mentor carousel. Swipe or use the arrow buttons to browse."
          onKeyDown={(event) => {
            if (event.target === event.currentTarget && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
              event.preventDefault();
              move(event.key === 'ArrowRight' ? 1 : -1);
            }
          }}
          className="scrollbar-hide grid auto-cols-[82%] grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory pb-4 sm:auto-cols-[46%] lg:grid-flow-row lg:grid-cols-3 lg:auto-cols-auto lg:overflow-visible lg:snap-none"
        >
          {loopOnMobile && count > 1 && displayedMentors.map(mentor => <div key={'before-' + mentor.id} className="min-w-0 snap-start lg:hidden" data-mentor-clone="before" aria-hidden="true" inert><MentorCard mentor={mentor} /></div>)}
          {displayedMentors.map(mentor => <div key={mentor.id} className="min-w-0 snap-start" data-mentor-card="true"><MentorCard mentor={mentor} /></div>)}
          {loopOnMobile && count > 1 && displayedMentors.map(mentor => <div key={'after-' + mentor.id} className="min-w-0 snap-start lg:hidden" data-mentor-clone="after" aria-hidden="true" inert><MentorCard mentor={mentor} /></div>)}
        </div>
        <div className="mt-5 flex items-center justify-between gap-4 lg:hidden">
          <p className="text-sm text-foreground-600" aria-live="polite">{Math.min(position.index + 1, count)} / {count}</p>
          <div className="flex gap-3">
            <button type="button" onClick={() => move(-1)} disabled={count < 2 || (!loopOnMobile && position.start)} aria-label="Previous mentor" aria-controls={trackId} className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-300 bg-white text-primary-800 disabled:opacity-30">
              <i className="ri-arrow-left-line text-lg" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => move(1)} disabled={count < 2 || (!loopOnMobile && position.end)} aria-label="Next mentor" aria-controls={trackId} className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-700 text-white disabled:opacity-30">
              <i className="ri-arrow-right-line text-lg" aria-hidden="true" />
            </button>
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 md:px-8 md:py-5 bg-white rounded-2xl border border-background-200/70 shadow-sm w-full">
            <div className="flex items-center gap-4 text-left">
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600 flex-shrink-0">
                <i className="ri-shield-user-line text-xl" />
              </div>
              <div>
                <p className="text-sm md:text-base font-semibold text-foreground-900">
                  Learn from practitioners with real project and controls experience
                </p>
                <p className="text-xs md:text-sm text-foreground-600 mt-0.5">
                  Mentors bring experience from project, programme, PMO and Project Controls environments.
                </p>
              </div>
            </div>
            <SiteLink
              href={content ? '/mentors' : '/contact'}
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm cursor-pointer transition-all duration-300 whitespace-nowrap lift-hover shrink-0 w-full sm:w-auto"
            >
              <i className="ri-user-star-line" />
              {content?.cta ?? 'Talk to Our Team'}
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}
