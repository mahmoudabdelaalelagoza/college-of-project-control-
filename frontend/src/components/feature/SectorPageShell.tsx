import { useLocation } from 'react-router-dom';
import '@/styles/sector-pages.css';
import type { ComponentProps, ReactNode } from 'react';
import Footer from '@/components/feature/Footer';
import PageSectionNav from '@/components/feature/PageSectionNav';

type PageSectionNavLinks = ComponentProps<typeof PageSectionNav>['links'];

export default function SectorPageShell({
  pageLabel,
  links,
  hero,
  children,
}: {
  pageLabel: string;
  links: PageSectionNavLinks;
  hero: ReactNode;
  children: ReactNode;
}) {
  const { pathname } = useLocation();

  return (
    <div className="sector-page min-h-screen bg-background-50">
      <main id="hero">
        {hero}
        <PageSectionNav
          pageLabel={pageLabel}
          links={links.map(link => ({ ...link, href: link.href.startsWith('#') ? pathname + link.href : link.href }))}
          showCta={false}
          stickyTop="var(--public-header-height, 145px)"
        />
        {children}
      </main>
      <Footer />
    </div>
  );
}
