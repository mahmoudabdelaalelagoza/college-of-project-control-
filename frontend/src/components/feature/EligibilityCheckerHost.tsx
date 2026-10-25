import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EligibilityCheckerModal from './EligibilityCheckerModal';
import { ELIGIBILITY_OPEN_EVENT, ELIGIBILITY_QUERY_FLAG } from './eligibilityChecker';

/** Mounted once beside the page so every "Check eligibility" action shares one popup. */
export default function EligibilityCheckerHost() {
  const [open, setOpen] = useState(false);
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener(ELIGIBILITY_OPEN_EVENT, show);
    return () => window.removeEventListener(ELIGIBILITY_OPEN_EVENT, show);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(search);
    if (!params.has(ELIGIBILITY_QUERY_FLAG)) return;
    params.delete(ELIGIBILITY_QUERY_FLAG);
    const rest = params.toString();
    navigate(`${pathname}${rest ? `?${rest}` : ''}${hash}`, { replace: true });
    setOpen(true);
  }, [pathname, search, hash, navigate]);

  return <EligibilityCheckerModal open={open} onClose={() => setOpen(false)} />;
}
