import usePublicHeaderHeight from '@/hooks/usePublicHeaderHeight';
import SiteLink from '@/components/base/SiteLink';
import PathwayMegaMenu from './PathwayMegaMenu';
import ProgrammeMegaMenu from './ProgrammeMegaMenu';
import './programme-navigation.css';
import MobileNavigation from './MobileNavigation';
import SectorMegaMenu from './SectorMegaMenu';
import useSectorCards from '@/hooks/useSectorCards';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
/* Route groups for the mega dropdown */

interface NavigationRoute {
  label: string;
  href: string;
  icon: string;
}

/** The mega-menu panel a header item opens, or none for a plain link. */
export type MegaMenuPanel = 'programmes' | 'professional-study' | 'pathways' | 'sectors' | 'resources' | 'about';

export interface NavLink {
  label: string;
  href: string;
  /** Present when hovering this item opens a panel. */
  panel?: MegaMenuPanel;
}

/* About and support destinations. These used to sit as a third column inside the
   Apprenticeships menu, where they were easy to miss and duplicated the header
   link. They now have their own menu. */
const aboutRoutes: NavigationRoute[] = [
  { label: 'About the College', href: '/about', icon: 'ri-information-line' },
  { label: 'For Employers', href: '/employers', icon: 'ri-building-line' },
  { label: 'For Professionals', href: '/apprentices', icon: 'ri-user-star-line' },
  { label: 'Contact', href: '/contact', icon: 'ri-mail-line' },
];

const resourceRoutes: NavigationRoute[] = [
  { label: 'Events', href: '/events', icon: 'ri-calendar-event-line' },
  { label: 'Articles', href: '/articles', icon: 'ri-book-open-line' },
  { label: 'Case studies', href: '/case-studies', icon: 'ri-briefcase-4-line' },
  { label: 'FAQ', href: '/faq', icon: 'ri-question-line' },
];

export default function Navbar() {
  usePublicHeaderHeight();
  const { pathname, hash } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const sectorCards = useSectorCards();
  const [routesOpen, setRoutesOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<MegaMenuPanel | null>(null);
  const [desktopViewport, setDesktopViewport] = useState(false);
  const routesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60 || pathname.startsWith('/mentors/'));
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setRoutesOpen(false);
      }
    };
    if (routesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [routesOpen]);

  const triggerRefs = useRef<Partial<Record<MegaMenuPanel, HTMLButtonElement | null>>>({});
  useEffect(() => { setRoutesOpen(false); setMobileOpen(false); }, [pathname, hash]);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && routesOpen) { setRoutesOpen(false); if (openPanel) triggerRefs.current[openPanel]?.focus(); }
    };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [routesOpen, openPanel]);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1280px)');
    const syncViewport = () => {
      setDesktopViewport(media.matches);
      if (media.matches) setMobileOpen(false);
      else {
        if (routesTimeoutRef.current) clearTimeout(routesTimeoutRef.current);
        setRoutesOpen(false);
        setOpenPanel(null);
      }
    };
    syncViewport();
    media.addEventListener('change', syncViewport);
    return () => { media.removeEventListener('change', syncViewport); if (routesTimeoutRef.current) clearTimeout(routesTimeoutRef.current); };
  }, []);
  const handleRoutesEnter = (panel: MegaMenuPanel) => {
    if (routesTimeoutRef.current) clearTimeout(routesTimeoutRef.current);
    setOpenPanel(panel);
    setRoutesOpen(true);
  };

  const handleRoutesLeave = () => {
    if (routesTimeoutRef.current) clearTimeout(routesTimeoutRef.current);
    routesTimeoutRef.current = setTimeout(() => {
      setRoutesOpen(false);
      setOpenPanel(null);
    }, 200);
  };

  /* Apprenticeships and professional study have independent header menus. */
  const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Apprenticeships', href: '/#programmes', panel: 'programmes' },
    { label: 'Professional study', href: '/short-courses', panel: 'professional-study' },
    { label: 'Pathways', href: '/project-controls-professional-level-6', panel: 'pathways' },
    { label: 'Sectors', href: '/sectors', panel: 'sectors' },
    { label: 'Resources', href: '/articles', panel: 'resources' },
    { label: 'About & Support', href: '/about', panel: 'about' },
  ];

  const linkTextClass = scrolled
    ? 'text-foreground-700 hover:text-primary-600'
    : 'text-white/90 hover:text-white';

  return (
    <header
      className={`header-entrance relative w-full overflow-visible transition-all duration-500 ease-out ${
        scrolled
          ? 'border-b border-background-200/80 bg-background-50/95 shadow-sm backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
    <nav ref={navRef} aria-label="Primary">
      <div
        className="container-site relative overflow-visible"
      >
        <div className="public-navigation__row flex min-h-[104px] items-center">
          <SiteLink href="/" className="public-navigation__brand relative flex h-[76px] w-[176px] shrink-0 cursor-pointer items-center md:h-[90px] md:w-[208px]" aria-label="College of Project Controls & Management home">
            <img decoding="async" width="208" height="90"
              src={scrolled ? '/assets/images/cpcm-logo-dark.webp' : '/assets/images/cpcm-logo-light.webp'}
              alt="College of Project Controls" className="h-full w-full object-contain" />
          </SiteLink>

          <div className="public-navigation__links hidden items-center xl:flex">
            {navLinks.map((link) => (
              <div
                key={link.label}
                /* `relative` makes the panel a real DOM descendant of this hover target,
                   so React keeps it "entered" while the pointer is over the menu. The
                   panel is positioned against the viewport with `fixed` so it still
                   centres on the window rather than on this narrow item. */
                className="relative"
                onMouseEnter={link.panel ? () => handleRoutesEnter(link.panel as MegaMenuPanel) : undefined}
                onMouseLeave={link.panel ? handleRoutesLeave : undefined}
              >
                {link.panel ? (
                  <button
                    type="button"
                    data-navigation-control
                    ref={node => { if (link.panel) triggerRefs.current[link.panel] = node; }}
                    aria-expanded={routesOpen && openPanel === link.panel}
                    aria-controls="desktop-routes-menu"
                    className={`nav-underline-slide flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-md px-1.5 py-1 text-sm font-medium transition-colors duration-200 ${linkTextClass}`}
                    onClick={() => {
                      const nextOpen = !(routesOpen && openPanel === link.panel);
                      setOpenPanel(nextOpen ? (link.panel as MegaMenuPanel) : null);
                      setRoutesOpen(nextOpen);
                    }}
                  >
                    {link.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`transition-transform duration-300 ${routesOpen && openPanel === link.panel ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                ) : (
                  <SiteLink
                    href={link.href}
                    className={`nav-underline-slide cursor-pointer whitespace-nowrap rounded-md px-1.5 py-1 text-sm font-medium transition-colors duration-200 ${
                      pathname === link.href ? (scrolled ? 'text-warm-ink' : 'text-signal-500') : linkTextClass
                    }`}
                  >
                    {link.label}
                  </SiteLink>
                )}

                {/* Mega Dropdown */}
                {link.panel && routesOpen && openPanel === link.panel && (
                  <div
                    id="desktop-routes-menu"
                    data-navigation-menu
                    className={`fixed left-4 right-4 top-[104px] z-[80] max-h-[calc(100vh-120px)] xl:left-1/2 xl:right-auto xl:w-[min(1180px,calc(100vw-2rem))] xl:-translate-x-1/2 ${openPanel === 'programmes' ? 'programme-navigation__dropdown' : openPanel === 'professional-study' ? 'programme-navigation__dropdown--professional' : ''}`}
                    style={{ top: 'var(--public-navigation-height, 104px)', animation: 'navbar-dropdown-in 350ms cubic-bezier(0.22,1,0.36,1) forwards' }}
                  >
                    {/* Bridge over the header's bottom padding. The panel hangs from the
                        header, so a strip of dead space sits between the trigger and the
                        menu. The pointer crossing it leaves the trigger's hover chain and
                        the close timer runs. This transparent block sits inside the same
                        wrapper, so the pointer never leaves. */}
                    <div className="pointer-events-none h-6" aria-hidden="true" />
                    <div className="-mt-6 overflow-x-hidden overflow-y-auto rounded-2xl border border-background-200 bg-white shadow-card">
                    {openPanel === 'sectors' ? (
                      <SectorMegaMenu />
                    ) : openPanel === 'pathways' ? (
                      <PathwayMegaMenu />
                    ) : openPanel === 'about' || openPanel === 'resources' ? (
                      <div className="p-5">
                        <p className="mb-4 text-sm font-label font-semibold uppercase tracking-[0.12em] text-foreground-600">
                          {openPanel === 'about' ? 'About & Support' : 'Resources'}
                        </p>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-0.5 sm:grid-cols-3 xl:grid-cols-4">
                          {(openPanel === 'about' ? aboutRoutes : resourceRoutes).map((route) => (
                            <SiteLink
                              key={route.label}
                              href={route.href}
                              aria-current={pathname === route.href ? 'page' : undefined}
                              className={`group flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors duration-200 ${
                                pathname === route.href ? 'bg-signal-50' : 'hover:bg-background-50'
                              }`}
                            >
                              <i
                                className={`${route.icon} text-sm flex-shrink-0 ${
                                  pathname === route.href ? 'text-signal-600' : 'text-secondary-500'
                                }`}
                              ></i>
                              <p
                                className={`min-w-0 truncate text-sm font-medium transition-colors ${
                                  pathname === route.href
                                    ? 'font-semibold text-warm-ink'
                                    : 'text-foreground-800 group-hover:text-primary-700'
                                }`}
                              >
                                {route.label}
                              </p>
                            </SiteLink>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <ProgrammeMegaMenu professionalStudy={openPanel === 'professional-study'} />
                    )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="public-navigation__booking-wrap ml-auto hidden items-center xl:flex">
            <SiteLink
              href="https://bookings.cloud.microsoft/book/InformationSession@kentbusinesscollege.com/?ismsaljsauthenabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="public-navigation__booking btn-primary cursor-pointer whitespace-nowrap py-3 text-sm font-bold transition-colors duration-300"
            >
              Book a Session
            </SiteLink>
          </div>

          <button
            type="button"
            ref={mobileTriggerRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`ml-auto flex h-11 w-11 cursor-pointer items-center justify-center rounded-md transition-colors duration-200 hover:bg-white/10 xl:hidden ${scrolled ? 'text-foreground-800 hover:bg-background-100' : 'text-white'}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {mobileOpen && !desktopViewport && (
        <MobileNavigation sectors={sectorCards} onClose={closeMobile} returnFocusRef={mobileTriggerRef} />
      )}

      {/* Dropdown + header entrance keyframes */}
      <style>{`
        @keyframes navbar-dropdown-in {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 1280px) {
          @keyframes navbar-dropdown-in {
            from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
          }
        }
        @keyframes header-entrance {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .header-entrance {
          animation: header-entrance 800ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </nav>
    </header>
  );
}

