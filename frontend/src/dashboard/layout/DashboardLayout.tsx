import { EnquiryNotificationPanel } from './EnquiryNotifications';
import { useEnquiryNotifications } from './useEnquiryNotifications';
import { useEffect, useState } from 'react';
import RouteScroll from '@/components/feature/RouteScroll';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { DashboardAlert } from '../components/DashboardPrimitives';

const navGroups = [
  { label: 'Workspace', items: [
    { to: '/dashboard', label: 'Overview', icon: 'ri-dashboard-3-line', end: true },
    { to: '/dashboard/enquiries', label: 'Enquiries', icon: 'ri-mail-line', end: false },
  ] },
  { label: 'Website content', items: [
    { to: '/dashboard/articles', label: 'Articles', icon: 'ri-article-line', end: false },
    { to: '/dashboard/case-studies', label: 'Case studies', icon: 'ri-briefcase-4-line', end: false },
    { to: '/dashboard/events', label: 'Events', icon: 'ri-calendar-event-line', end: false },
    { to: '/dashboard/short-courses', label: 'Short courses', icon: 'ri-book-open-line', end: false },
    { to: '/dashboard/sectors', label: 'Sectors', icon: 'ri-building-4-line', end: false },
    { to: '/dashboard/ipc-images', label: 'IPC images', icon: 'ri-gallery-line', end: false },
  ] },
  { label: 'People & recognition', items: [
    { to: '/dashboard/mentors', label: 'Mentors', icon: 'ri-team-line', end: false },
    { to: '/dashboard/coaches', label: 'Coaching & support', icon: 'ri-user-star-line', end: false },
    { to: '/dashboard/testimonials', label: 'Testimonials & reviews', icon: 'ri-chat-quote-line', end: false },
    { to: '/dashboard/partners', label: 'Partner logos', icon: 'ri-award-line', end: false },
    { to: '/dashboard/professional-credentials', label: 'Professional credentials', icon: 'ri-medal-2-line', end: false },
  ] },
];

export default function DashboardLayout() {
  const notifications = useEnquiryNotifications();
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopViewport, setDesktopViewport] = useState(false);
  const [requestError, setRequestError] = useState('');
  const { pathname } = useLocation();
  useEffect(() => {
    const report = (event: Event) => setRequestError((event as CustomEvent<string>).detail);
    window.addEventListener('cms-request-error', report);
    return () => window.removeEventListener('cms-request-error', report);
  }, []);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const syncViewport = () => {
      setDesktopViewport(media.matches);
      if (media.matches) setMenuOpen(false);
    };
    syncViewport();
    media.addEventListener('change', syncViewport);
    return () => media.removeEventListener('change', syncViewport);
  }, []);
  useEffect(() => {
    if (!menuOpen || desktopViewport) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen, desktopViewport]);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const currentPage = navGroups.flatMap((group) => group.items).find((item) => pathname === item.to || (!item.end && pathname.startsWith(item.to)))?.label || 'Dashboard';

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/dashboard/login');
    } catch {
      setRequestError('Could not log out securely. Please retry.');
    }
  };

  const navigation = (
      <div className="flex h-full flex-col border-r border-slate-200 bg-white text-slate-900">
        <div className="flex shrink-0 items-center gap-2.5 px-5 py-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
            <i className="ri-layout-grid-line text-lg" aria-hidden="true" />
          </span>
          <span className="font-heading text-sm font-bold">CPCM CMS</span>
        </div>
        <nav aria-label="Dashboard" className="min-h-0 flex-1 space-y-5 overflow-y-auto px-3 pb-5">
          {navGroups.map((group) => (
            <div key={group.label} role="group" aria-label={group.label}>
              <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">{group.label}</p>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    end={item.end}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all duration-200 ${
                        isActive ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                      }`
                    }
                  >
                    <i className={`${item.icon} text-base`} aria-hidden="true" />
                    <span className="min-w-0 flex-1 truncate">{item.label}</span>
                    {item.to === '/dashboard/enquiries' && !!notifications.data?.unread_count && <span aria-label={`${notifications.data.unread_count} unread enquiries`} className="ml-auto rounded-full bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-700">{notifications.data.unread_count}</span>}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="mx-3 mb-3 shrink-0 rounded-xl border border-blue-100 bg-blue-50 p-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
              <i className="ri-external-link-line text-base" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-slate-950">Live website</p>
              <a href="/" target="_blank" rel="noreferrer" className="text-xs font-semibold text-blue-700 hover:underline">Open public site</a>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="mx-3 mb-5 flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-slate-600 transition-all hover:bg-red-50 hover:text-red-700"
        >
          <i className="ri-logout-box-line text-base" aria-hidden="true" />
          Log out
        </button>
      </div>
  );
  return (
    <div className="dashboard-shell flex min-h-screen bg-slate-100">
      <RouteScroll />
      <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 lg:block">{navigation}</aside>
      {menuOpen && !desktopViewport && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Dashboard navigation"
          className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-[2px] lg:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="drawer-panel-left relative h-dvh w-[min(84vw,288px)] overflow-hidden shadow-overlay"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              aria-label="Close dashboard menu"
            >
              <i className="ri-close-line text-2xl" aria-hidden="true" />
            </button>
            {navigation}
          </div>
        </div>
      )}
      <main id="main-content" tabIndex={-1} className="min-w-0 flex-1 overflow-y-auto">
        <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[.16em] text-slate-400">CPCM Dashboard</p>
              <p className="truncate text-sm font-semibold text-slate-950">{currentPage}</p>
            </div>
            <button type="button" onClick={() => setMenuOpen(true)} className="dashboard-action-secondary">
              <i className="ri-menu-line text-lg" aria-hidden="true" />
              Menu
            </button>
          </div>
        </div>
        <div className="sticky top-0 z-20 hidden border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:block">
          <div className="flex w-full max-w-[1480px] items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[.16em] text-slate-400">Dashboard</p>
              <p className="truncate text-sm font-bold text-slate-950">{currentPage}</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="/" target="_blank" rel="noreferrer" className="dashboard-action-secondary min-h-9 px-3">
                <i className="ri-external-link-line" aria-hidden="true" />
                Live site
              </a>
              <button type="button" onClick={handleLogout} className="dashboard-action-secondary min-h-9 px-3">
                <i className="ri-logout-box-line" aria-hidden="true" />
                Log out
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1480px] px-4 py-5 md:px-6 md:py-7 xl:px-8">
          {requestError && (
            <div className="mb-6">
              <DashboardAlert tone="error" title="Request failed" onDismiss={() => setRequestError('')}>
                <p>{requestError} Your unsaved entries are still here. Retry the action, or reload the list if the page could not load.</p>
                <button type="button" className="mt-3 font-semibold underline" onClick={() => { if (window.confirm('Reload this page? Unsaved entries will be lost.')) window.location.reload(); }}>
                  Reload page
                </button>
              </DashboardAlert>
            </div>
          )}
          <EnquiryNotificationPanel {...notifications} />
          <Outlet />
        </div>
      </main>
    </div>
  );
}
