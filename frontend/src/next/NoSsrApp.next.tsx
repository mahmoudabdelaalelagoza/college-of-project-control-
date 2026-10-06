'use client';

import dynamic from 'next/dynamic';

const NextClientApp = dynamic(() => import('./NextClientApp'), {
  ssr: false,
  loading: () => <main id="main-content" className="page-loader" role="status">Loading page</main>,
});

export default function NoSsrApp() {
  return <NextClientApp />;
}
