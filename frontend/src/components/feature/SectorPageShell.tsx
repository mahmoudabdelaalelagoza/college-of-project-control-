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
  return (
    <div className="min-h-screen bg-background-50">
      <main id="hero">
        {hero}
        <PageSectionNav pageLabel={pageLabel} links={links} showCta={false} />
        {children}
      </main>
      <Footer />
    </div>
  );
}
