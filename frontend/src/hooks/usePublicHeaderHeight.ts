import { useEffect } from 'react';

/** Measure from Navbar after the public header mounts, including delayed maintenance checks. */
export default function usePublicHeaderHeight() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>('[data-public-site].fixed');
    if (!header) return;
    const update = () => {
      document.documentElement.style.setProperty('--public-header-height', `${Math.ceil(header.getBoundingClientRect().height)}px`);
      const navigation = header.querySelector<HTMLElement>('nav[aria-label="Primary"]');
      if (navigation) document.documentElement.style.setProperty('--public-navigation-height', `${Math.ceil(navigation.getBoundingClientRect().height)}px`);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header, { box: 'border-box' });
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty('--public-header-height');
      document.documentElement.style.removeProperty('--public-navigation-height');
    };
  }, []);
}
