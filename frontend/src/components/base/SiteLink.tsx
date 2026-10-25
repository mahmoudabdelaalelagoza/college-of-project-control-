import { forwardRef, type AnchorHTMLAttributes } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isEligibilityCheckerDestination, resolveDestination } from '@/router/navigation';
import { openEligibilityChecker } from '@/components/feature/eligibilityChecker';
const SiteLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(function SiteLink({ href = '/contact', children, ...props }, ref) {
  const { pathname } = useLocation();
  let destination = resolveDestination(href);
  // The checker is a popup, not a page: every link to it opens the shared modal.
  if (isEligibilityCheckerDestination(destination)) {
    const { onClick, ...rest } = props;
    return <a ref={ref} href="#check-eligibility" aria-haspopup="dialog" {...rest} onClick={event => { onClick?.(event); event.preventDefault(); openEligibilityChecker(); }}>{children}</a>;
  }
  if (destination === '/book-a-session' && pathname !== destination) destination += `?context=${encodeURIComponent(pathname)}`;
  const internal = (destination.startsWith('/') && !destination.startsWith('//')) || destination.startsWith('#');
  if (internal && !props.download && !/\.[a-z0-9]{2,5}(?:[?#]|$)/i.test(destination.split('#')[0])) {
    return <Link ref={ref} to={destination} {...props}>{children}</Link>;
  }
  return <a ref={ref} href={destination} {...props}>{children}</a>;
});
export default SiteLink;
