/* eslint-disable react-refresh/only-export-components */
import NoSsrApp from '@/next/NoSsrApp.next';
import { nextStaticRoutes } from '@/next/staticRoutes';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return nextStaticRoutes.map((route) => ({
    slug: route === '/' ? undefined : route.replace(/^\//, '').split('/'),
  }));
}

export default function Page() {
  return <NoSsrApp />;
}

