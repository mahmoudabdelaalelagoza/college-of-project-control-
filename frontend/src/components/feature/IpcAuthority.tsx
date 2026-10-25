import useCollection from '@/hooks/useCollection';
import { fetchIpcImages, type IpcImage } from '@/services/ipcImagesApi';
import SiteLink from '@/components/base/SiteLink';
import { useEffect, useRef, useState } from 'react';

// Canonical IPC section copy and design for every page that includes it.
const sectionCopy = {
  name: 'Institute of Project Controls (IPC)',
  heading: 'Professional recognition and development in project controls',
  description: 'The Institute of Project Controls (IPC) supports project controls professionals through competence-based recognition, professional membership and continuing development opportunities.',
  recognitionCta: 'Explore IPC Recognition',
  aboutCta: 'Learn About IPC',
  strapline: 'Professional Recognition. Development. Community.',
  recognitionHref: '/institute-of-project-controls#membership',
  aboutHref: '/institute-of-project-controls',
} as const;

const features = [
  {
    icon: 'ri-shield-check-line',
    title: 'Trusted Accreditation',
    copy: 'Rigorous standards.\nGlobal recognition.',
  },
  {
    icon: 'ri-award-line',
    title: 'Professional Growth',
    copy: 'Build expertise.\nAdvance your career.',
  },
];

function PortraitSet({ variant, images }: { variant: 'primary' | 'duplicate'; images: IpcImage[] }) {
  return (
    <div className="flex shrink-0 items-center gap-4 md:gap-5" aria-hidden={variant === 'duplicate'}>
      {images.map((person, i) => (
        <div
          key={`${variant}-${i}`}
          className="h-[155px] w-[115px] shrink-0 overflow-hidden rounded-2xl sm:h-[185px] sm:w-[135px] md:h-[215px] md:w-[160px]"
          style={{
            background: 'rgba(255,255,255,0.035)',
            border: '1px solid rgba(205,165,90,0.30)',
            boxShadow: '0 12px 28px -18px rgba(0,0,0,0.6)',
          }}
        >
          <img
            src={person.image_url}
            alt={variant === 'duplicate' ? '' : person.alt_text}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
      <div className="w-4 shrink-0 md:w-5" aria-hidden="true" />
    </div>
  );
}

export default function IpcAuthority({ id = 'ipc-authority' }: { id?: string } = {}) {
  const { items: images, loading, error, retry } = useCollection(fetchIpcImages);
  // Repeat short collections to fill the viewport, then duplicate the full track
  // for a seamless -50% loop even when only one image is published.
  const track = images.length ? Array.from({ length: Math.max(1, Math.ceil(8 / images.length)) }, () => images).flat() : [];
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative overflow-hidden py-20 md:py-28 lg:py-[130px]"
      style={{
        background:
          'radial-gradient(circle at 75% 25%, rgba(178,119,21,0.10), transparent 32%), radial-gradient(circle at 8% 100%, rgba(178,119,21,0.08), transparent 35%), #080D10',
      }}
    >
      <div className="container-site relative z-10 grid gap-14 lg:grid-cols-[0.44fr_0.56fr] lg:items-center lg:gap-10">
        {/* Left: identity + copy */}
        <div
          ref={ref}
          className="min-w-0 text-center lg:text-left"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 600ms cubic-bezier(0.22,1,0.36,1), transform 600ms cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <p
            className="font-heading font-extrabold leading-[0.9] tracking-tight"
            style={{
              fontSize: 'clamp(96px, 9vw, 170px)',
              backgroundImage: 'linear-gradient(100deg, #F5F1E8, #D6B16D)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            IPC
          </p>
          <p className="mt-1 font-heading text-2xl font-bold md:text-3xl lg:text-[34px]" style={{ color: '#D8B36E' }}>
            {sectionCopy.name}
          </p>

          <div className="relative mx-auto mt-5 h-px w-36 lg:mx-0" style={{ background: 'linear-gradient(90deg, #D7B46C, rgba(215,180,108,0))' }}>
            <span
              className="absolute -top-[3px] left-2 h-[7px] w-[7px] rounded-full"
              style={{ background: '#E9C77D', boxShadow: '0 0 8px 2px rgba(233,199,125,0.55)' }}
            />
          </div>

          <h2 id={`${id}-heading`} className="mx-auto mt-6 max-w-[500px] font-heading text-section-xl font-bold leading-snug text-white lg:mx-0 md:text-section-2xl">{sectionCopy.heading}</h2>

          <p className="mx-auto mt-6 max-w-[500px] text-base leading-relaxed md:text-lg lg:mx-0" style={{ color: 'rgba(245,245,245,0.72)' }}>
            {sectionCopy.description}
          </p>

          {/* The same two IPC features appear on every page. */}
          <div data-ipc-features className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {features.map((feature, index) => (
              <div key={feature.title} className={index === 1 ? 'flex items-start gap-3 text-left sm:border-l sm:border-ipc-gold/20 sm:pl-5 lg:border-l-0 lg:pl-0 xl:border-l xl:pl-5' : 'flex items-start gap-3 text-left'}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ipc-gold/40 text-ipc-gold" aria-hidden="true">
                  <i className={feature.icon + ' text-lg'} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ipc-gold">{feature.title}</p>
                  <p className="mt-0.5 whitespace-pre-line text-xs leading-relaxed text-white/60">{feature.copy}</p>
                </div>
              </div>
            ))}
          </div>

          {/* IPC actions deliberately use IPC gold instead of the site CTA treatment. */}
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
            <SiteLink href={sectionCopy.recognitionHref} className="ipc-action-primary inline-flex min-h-[3.25rem] max-w-full items-center justify-center gap-2 rounded-full border border-ipc-gold bg-ipc-gold px-6 py-3 text-center text-sm font-bold text-ipc-surface transition-colors hover:bg-ipc-gold/90 focus-visible:outline-ipc-gold">
              {sectionCopy.recognitionCta}<i className="ri-arrow-right-line shrink-0" aria-hidden="true" />
            </SiteLink>
            <SiteLink href={sectionCopy.aboutHref} className="ipc-action-secondary inline-flex min-h-[3.25rem] max-w-full items-center justify-center gap-2 rounded-full border border-ipc-gold/60 bg-transparent px-6 py-3 text-center text-sm font-bold text-ipc-gold transition-colors hover:border-ipc-gold hover:bg-ipc-gold/10 focus-visible:outline-ipc-gold">
              {sectionCopy.aboutCta}<i className="ri-arrow-right-line shrink-0" aria-hidden="true" />
            </SiteLink>
          </div>
        </div>

        {/* Right: logo + animated portraits */}
        <div className="min-w-0">
          <div className="relative mx-auto flex h-[230px] w-[230px] items-center justify-center sm:h-[300px] sm:w-[300px] md:h-[380px] md:w-[380px]">
            <span
              className="absolute inset-0 m-auto h-[130%] w-[130%] rounded-full"
              style={{ border: '1px solid rgba(201,154,73,0.07)' }}
              aria-hidden="true"
            />
            <span
              className="absolute inset-0 m-auto h-[165%] w-[165%] rounded-full"
              style={{ border: '1px solid rgba(201,154,73,0.04)' }}
              aria-hidden="true"
            />
            <span
              className="absolute inset-0 m-auto h-[85%] w-[85%] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201,154,73,0.14), transparent 70%)' }}
              aria-hidden="true"
            />
            <img
              src="/assets/images/ipc-logo.png"
              alt="Institute of Project Controls logo"
              className="relative z-10 h-auto w-full"
            />
          </div>

          {images.length > 0 && <div className="ipc-portrait-mask relative mt-10 min-w-0 overflow-hidden md:mt-14">
            <div className="flex w-max items-center animate-ipc-portraits">
              <PortraitSet variant="primary" images={track} />
              <PortraitSet variant="duplicate" images={track} />
            </div>
          </div>}
          {loading && <p role="status" className="mt-6 text-center text-sm text-white/70">Loading IPC images...</p>}
          {error && <div role="alert" className="mt-6 text-center text-sm text-white/70"><p>IPC images could not be loaded.</p><button type="button" onClick={retry} className="mt-2 underline">Try again</button></div>}

          <p className="mt-8 px-2 text-center text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.2em] md:text-sm md:tracking-[0.25em]" style={{ color: '#C99A49' }}>
            <span aria-hidden="true">&#9670;</span> {sectionCopy.strapline} <span aria-hidden="true">&#9670;</span>
          </p>
        </div>
      </div>
    </section>
  );
}
