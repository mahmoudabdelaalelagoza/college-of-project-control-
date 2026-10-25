import SiteLink from '@/components/base/SiteLink';
import { useLocation } from 'react-router-dom';
import { apprenticeshipNavigation, professionalStudyNavigation } from './programmeNavigationData';
import IpcNavigationLink from './IpcNavigationLink';
import './programme-navigation.css';

export default function ProgrammeMegaMenu({ professionalStudy = false }: { professionalStudy?: boolean }) {
  const { pathname } = useLocation();
  const links = professionalStudy ? professionalStudyNavigation : apprenticeshipNavigation;
  return (
    <>
      <div className="programme-navigation__panel">
        <h2>{professionalStudy ? 'Professional study' : 'Apprenticeships'}</h2>
        <div className={'programme-navigation__cards' + (professionalStudy ? ' programme-navigation__cards--professional' : '')}>
          {links.map(link => (
            <SiteLink key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined} className="programme-navigation__card">
              <span><strong>{link.shortLabel}</strong><small>{link.description}</small></span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-7-7 7 7-7 7" /></svg>
            </SiteLink>
          ))}
        </div>
      </div>
      {professionalStudy && <IpcNavigationLink />}
    </>
  );
}
