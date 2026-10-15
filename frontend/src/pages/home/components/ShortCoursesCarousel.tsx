import { homeCopy } from '../pageCopy';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import SiteLink from '@/components/base/SiteLink';
import { fetchShortCourses, type ShortCourse } from '@/services/shortCoursesApi';
import { shortCourses as fallbackCourses } from '@/pages/short-courses/data/shortCourses';

const homepageCourseSlugs = [
  'ai-in-project-controls',
  'project-planning-control',
  'earned-value-management',
];

function selectHomepageCourses(courses: ShortCourse[]) {
  const uniqueCourses = courses.filter((course, index) => course.slug && courses.findIndex(item => item.slug === course.slug) === index);
  const featured = homepageCourseSlugs.flatMap(slug => uniqueCourses.filter(course => course.slug === slug));
  const remaining = uniqueCourses.filter(course => !homepageCourseSlugs.includes(course.slug));
  return [...featured, ...remaining].map(course => ({
    ...course,
    ...homeCopy.featured.cards.find(item => item.slug === course.slug),
  }));
}

export default function ShortCoursesCarousel() {
  const [courses, setCourses] = useState<ShortCourse[]>(selectHomepageCourses(fallbackCourses));
  const trackId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setPosition({ start: track.scrollLeft <= 2, end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 2 });
  }, []);

  const move = (direction: number) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    const stride = card.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).columnGap) || 0);
    track.scrollTo({
      left: (Math.round(track.scrollLeft / stride) + direction) * stride,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    measure();
    return () => observer.disconnect();
  }, [courses, measure]);

  useEffect(() => {
    const controller = new AbortController();
    fetchShortCourses(controller.signal)
      .then((items) => {
        const selected = selectHomepageCourses(items);
        if (!controller.signal.aborted && selected.length) setCourses(selected);
      })
      .catch(() => { /* Keep the existing local course images when live data is unavailable. */ });
    return () => controller.abort();
  }, []);

  if (courses.length === 0) return null;

  return (
    <section id="short-courses-preview" className="bg-background-50 py-16 md:py-24" aria-labelledby="short-courses-preview-heading">
      <div className="container-site">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-accent-700">{homeCopy.featured.tag}</p>
            <h2 id="short-courses-preview-heading" className="mt-3 text-3xl font-bold text-foreground-950 md:text-4xl">
              {homeCopy.featured.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground-600">
              {homeCopy.featured.intro}
            </p>
          </div>
          <SiteLink href="/short-courses" className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary-700">
            {homeCopy.featured.cta} <i className="ri-arrow-right-line" aria-hidden="true" />
          </SiteLink>
        </div>

        <div
          id={trackId}
          ref={trackRef}
          role="region"
          aria-label="Professional courses"
          aria-roledescription="carousel"
          tabIndex={0}
          onScroll={measure}
          onKeyDown={event => {
            if (event.target === event.currentTarget && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
              event.preventDefault();
              move(event.key === 'ArrowRight' ? 1 : -1);
            }
          }}
          className="scrollbar-hide grid auto-cols-[88%] grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory py-2 md:auto-cols-[calc((100%_-_1.25rem)/2)] xl:auto-cols-[calc((100%_-_2.5rem)/3)]"
        >
          {courses.map((course) => (
            <article key={course.slug} className="min-w-0 snap-start">
              <SiteLink href={`/short-courses/${course.slug}`} aria-label={`View course: ${course.title}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-background-200 bg-white shadow-sm transition hover:border-primary-300 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500">
              <div className="relative aspect-[16/10] overflow-hidden bg-primary-950">
                {course.imageUrl ? (
                  <img
                    loading="lazy"
                    decoding="async"
                    src={course.imageUrl}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="pattern-dots pattern-dots-dark h-full w-full" aria-hidden="true" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/82 via-primary-950/20 to-transparent" />
                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/92 text-primary-700">
                  <i className={`${course.icon} text-lg`} aria-hidden="true" />
                </span>
                <span className="absolute bottom-4 left-4 right-4 text-xs font-bold uppercase tracking-[.14em] text-signal-300">
                  {course.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-4 w-fit rounded-full bg-background-100 px-3 py-1 text-[11px] font-semibold text-foreground-700">
                  {course.duration}
                </span>
                <h3 className="text-xl font-bold leading-tight text-foreground-950">{course.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-600">{course.summary}</p>
                <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary-700">
                  View course <i className="ri-arrow-right-line transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
              </SiteLink>
            </article>
          ))}
        </div>
        <div className="mt-6 flex justify-end gap-3" aria-label="Course carousel controls">
          <button type="button" onClick={() => move(-1)} disabled={position.start} aria-label="Previous course" aria-controls={trackId} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-300 bg-white text-primary-800 transition hover:bg-primary-50 disabled:cursor-default disabled:opacity-30">
            <i className="ri-arrow-left-line text-xl" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move(1)} disabled={position.end} aria-label="Next course" aria-controls={trackId} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-700 text-white transition hover:bg-primary-800 disabled:cursor-default disabled:opacity-30">
            <i className="ri-arrow-right-line text-xl" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
