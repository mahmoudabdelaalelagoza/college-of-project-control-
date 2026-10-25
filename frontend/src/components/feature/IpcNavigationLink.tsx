import SiteLink from '@/components/base/SiteLink';
import { useLocation } from 'react-router-dom';
import { ipcNavigation } from './programmeNavigationData';
import './programme-navigation.css';

export default function IpcNavigationLink({ onClick }: { onClick?: () => void }) {
  const { pathname } = useLocation();
  const active = pathname === ipcNavigation.href || pathname === '/ipc';
  return (
    <SiteLink href={ipcNavigation.href} onClick={onClick} aria-current={active ? 'page' : undefined} className="programme-navigation__ipc">
      <img loading="lazy" decoding="async" src="/assets/images/ipc-logo.webp" alt="" width="32" height="32" />
      <span><strong>{ipcNavigation.label}</strong><small>Professional standards &amp; recognition</small></span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-7-7 7 7-7 7" /></svg>
    </SiteLink>
  );
}
