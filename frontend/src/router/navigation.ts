export const destinations = {
  consultation: '/book-a-session', eligibility: '/apprenticeship-eligibility-checker',
  programmes: '/#programmes', articles: '/articles', events: '/events',
} as const;
const redirectTargets: Record<string, string> = {
  '/apprenticeship-eligibility-checker/': destinations.eligibility,
  '#consultation': destinations.consultation, '#eligibility': destinations.eligibility,
  '#routes': destinations.programmes, '/employers#process': '/employers#how-it-works',
  '/project-controls-professional-level-6#consultation': destinations.consultation,
  '/project-controls-professional-level-6#routes': '/project-controls-professional-level-6#pathways',
  '/project-controls-professional-level-6#proof': '/testimonials',
  // The standalone course page was retired; the PMO route page covers Certified PMO Professional.
  '/short-courses/pmo-level-6': '/project-controls-professional/pmo-governance-route',
};
const eligibilityCheckerPaths = new Set([destinations.eligibility, '/eligibility-checker']);
/** True for links that should open the eligibility popup rather than navigate. */
export function isEligibilityCheckerDestination(destination: string): boolean {
  if (!destination.startsWith('/')) return false;
  const path = destination.split(/[?#]/)[0].replace(/\/+$/, '');
  return eligibilityCheckerPaths.has(path);
}
export function resolveDestination(href: string): string {
  href = href.trim();
  if (redirectTargets[href]) return redirectTargets[href];
  if (!href || href === '#') return '/contact';
  const hasControlCharacters = Array.from(href).some(character => character.charCodeAt(0) < 32 || character.charCodeAt(0) === 127);
  if (hasControlCharacters || !/^(?:[\/#?]|https?:|mailto:|tel:)/i.test(href)) return '/contact';
  return href;
}
