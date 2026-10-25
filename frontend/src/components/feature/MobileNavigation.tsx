import { useEffect, useRef, useState, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import SiteLink from '@/components/base/SiteLink';
import IpcNavigationLink from './IpcNavigationLink';
import { apprenticeshipNavigation, professionalStudyNavigation, ipcNavigation } from './programmeNavigationData';
import { pathwayCards, type MegaMenuCard } from './navMegaMenuData';
import './mobile-navigation.css';

interface MenuDestination {
  label: string;
  href: string;
  note?: string;
}

interface MenuGroup {
  id: string;
  label: string;
  links: MenuDestination[];
  pathways?: MenuDestination[];
  showIpc?: boolean;
}

function MenuIcon({ kind }: { kind: 'arrow' | 'close' | 'chevron' }) {
  const paths = { arrow: 'M5 12h14m-6-6 6 6-6 6', close: 'm6 6 12 12M6 18 18 6', chevron: 'm6 9 6 6 6-6' };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[kind]} /></svg>;
}
function navigationGroups(sectors: MegaMenuCard[]): MenuGroup[] {
  const sectorOrder = ['construction', 'engineering', 'energy', 'public-sector'];
  return [
    {
      id: 'apprenticeships', label: 'Apprenticeships',
      links: apprenticeshipNavigation,
      pathways: pathwayCards,
    },
    {
      id: 'professional-study', label: 'Professional study',
      links: professionalStudyNavigation,
      showIpc: true,
    },
    {
      id: 'sectors', label: 'Sectors',
      links: [...sectors].sort((a, b) => sectorOrder.indexOf(a.slug ?? '') - sectorOrder.indexOf(b.slug ?? '')),
    },
    {
      id: 'resources', label: 'Resources',
      links: [
        { label: 'Events', href: '/events' },
        { label: 'Articles', href: '/articles' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'FAQs', href: '/faq' },
      ],
    },
    {
      id: 'support', label: 'About & Support',
      links: [
        { label: 'About the College', href: '/about' },
        { label: 'Our Experts', href: '/about#experts' },
        { label: 'Learner Experiences', href: '/testimonials' },
        { label: 'For Employers', href: '/employers' },
        { label: 'For Professionals', href: '/apprentices' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ];
}

/** Mounted only while open. The native modal keeps focus and background interaction contained. */
export default function MobileNavigation({ sectors, onClose, returnFocusRef }: {
  sectors: MegaMenuCard[];
  onClose: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
}) {
  const { pathname, hash } = useLocation();
  const groups = navigationGroups(sectors);
  const currentPath = pathname.replace(/\/+$/, '') || '/';
  const isCurrent = (href: string) => href === currentPath + hash || (href === ipcNavigation.href && currentPath === '/ipc');
  const [expandedGroup, setExpandedGroup] = useState<string | null>(() =>
    groups.find(group => [...group.links, ...(group.pathways ?? []), ...(group.showIpc ? [ipcNavigation] : [])].some(link => isCurrent(link.href)))?.id ?? null,
  );
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    const trigger = returnFocusRef.current;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    closeRef.current?.focus();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (trigger?.isConnected && trigger.getClientRects().length) trigger.focus({ preventScroll: true });
    };
  }, [returnFocusRef]);

  const renderLink = (link: MenuDestination) => (
    <li key={link.href}>
      <SiteLink
        href={link.href}
        onClick={onClose}
        aria-current={isCurrent(link.href) ? 'page' : undefined}
        className="mobile-navigation__link"
      >
        <span>
          <span>{link.label}</span>
          {link.note && <small>{link.note}</small>}
        </span>
        <MenuIcon kind="arrow" />
      </SiteLink>
    </li>
  );

  if (typeof document === 'undefined') return null;
  return createPortal(
    <dialog
      ref={dialogRef}
      id="mobile-navigation"
      className="mobile-navigation"
      aria-modal="true"
      aria-labelledby="mobile-navigation-title"
      onKeyDown={event => {
        if (event.key !== 'Tab') return;
        const controls = [...event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')]
          .filter(control => control.getClientRects().length > 0);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }}
      onCancel={event => { event.preventDefault(); onClose(); }}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
      }}
    >
      <div className="mobile-navigation__header">
        <h2 id="mobile-navigation-title" className="sr-only">Site navigation</h2>
        <SiteLink href="/" onClick={onClose} aria-label="College of Project Controls & Management home">
          <img src="/assets/images/cpcm-logo-dark.webp" alt="College of Project Controls & Management" width="164" height="70" decoding="async" />
        </SiteLink>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close menu" className="mobile-navigation__close">
          <MenuIcon kind="close" />
        </button>
      </div>
      <nav className="mobile-navigation__content" aria-label="Mobile and tablet">
        <ul className="mobile-navigation__groups">
          <li>
            <SiteLink href="/" onClick={onClose} aria-current={isCurrent('/') ? 'page' : undefined} className="mobile-navigation__row">
              Home <MenuIcon kind="arrow" />
            </SiteLink>
          </li>
          {groups.map(group => (
            <li key={group.id} className="mobile-navigation__group">
              <button
                type="button"
                id={`mobile-menu-${group.id}`}
                className="mobile-navigation__row"
                aria-expanded={expandedGroup === group.id}
                aria-controls={`mobile-panel-${group.id}`}
                onClick={() => setExpandedGroup(current => current === group.id ? null : group.id)}
              >
                {group.label}
                <MenuIcon kind="chevron" />
              </button>
              <div id={`mobile-panel-${group.id}`} role="region" aria-labelledby={`mobile-menu-${group.id}`} hidden={expandedGroup !== group.id}>
                <ul className="mobile-navigation__links">{group.links.map(renderLink)}</ul>
                {group.showIpc && <IpcNavigationLink onClick={onClose} />}
                {group.pathways && (
                  <div className="mobile-navigation__pathways">
                    <p>Level 6 pathways</p>
                    <ul className="mobile-navigation__links">{group.pathways.map(renderLink)}</ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mobile-navigation__footer">
        <SiteLink href="https://bookings.cloud.microsoft/book/InformationSession@kentbusinesscollege.com/?ismsaljsauthenabled=true" target="_blank" rel="noopener noreferrer" onClick={onClose} className="btn-primary mobile-navigation__booking">Book a Session</SiteLink>
      </div>
    </dialog>,
    document.body,
  );
}
