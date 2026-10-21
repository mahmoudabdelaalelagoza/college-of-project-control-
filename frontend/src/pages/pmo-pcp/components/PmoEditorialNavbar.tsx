import PageSectionNav from '@/components/feature/PageSectionNav';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Overview', href: '#hero' },
  { label: 'PMO Journey', href: '#journey' },
  { label: 'Apprenticeship', href: '#apprenticeship' },
  { label: 'Professional study', href: '#professional-study' },
  { label: 'APM Recognition', href: '#apm' },
  { label: 'For Employers', href: '#employers' },
  { label: 'Funding & eligibility', href: '#funding' },
  { label: 'References', href: '#references' },
];

export default function PmoEditorialNavbar() {
  const [headerHeight, setHeaderHeight] = useState(144);

  useEffect(() => {
    const header = document.querySelector('nav[aria-label="Primary"]')?.closest('[data-public-site]');
    if (!header) return;
    const measure = () => setHeaderHeight(Math.ceil(header.getBoundingClientRect().height));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <PageSectionNav
      pageLabel="PMO & governance"
      links={navItems}
      showCta={false}
      stickyTop={headerHeight}
    />
  );
}
