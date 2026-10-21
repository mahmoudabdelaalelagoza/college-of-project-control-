import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageSectionNav from '@/components/feature/PageSectionNav';

const sectionLinks = [
  { label: 'Overview', href: '#strategic-advantage' },
  { label: 'Who This Is For', href: '#who-should-apply' },
  { label: 'Eligibility', href: '#eligibility' },
  { label: 'Learning Pathway', href: '#credit-overview' },
  { label: 'How You Learn', href: '#delivery' },
  { label: 'Workplace Application', href: '#strategic-workplace-application' },
  { label: 'Assessment', href: '#completion' },
  { label: 'Experts', href: '#experts' },
  { label: 'For Employers', href: '#strategic-employers' },
  { label: 'Funding', href: '#funding' },
  { label: 'Next Steps', href: '#apply' },
];

export default function StrategicPathwayNav() {
  const [headerHeight, setHeaderHeight] = useState(145);
  const { pathname } = useLocation();

  useEffect(() => {
    const header = document.querySelector('nav[aria-label="Primary"]')?.closest('[data-public-site]');
    const page = document.querySelector<HTMLElement>('.strategic-pathway');
    if (!header || !page) return;
    const measure = () => {
      const height = Math.ceil(header.getBoundingClientRect().height);
      setHeaderHeight(height);
      page.style.setProperty('--header-height', `${height}px`);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return <PageSectionNav pageLabel="Strategic Pathway" links={sectionLinks.map((link) => ({ ...link, href: pathname + link.href }))} showCta={false} stickyTop={headerHeight} />;
}
