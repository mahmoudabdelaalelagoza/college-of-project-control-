/** Authentic fallback portraits from https://kentbusinesscollege.com/about/management-team/. */
const portraits: Record<string, string> = {
  "adeyomi": "/assets/images/coaches/adeyemi-adeshina.webp",
  "adeyemi": "/assets/images/coaches/adeyemi-adeshina.webp",
  "adeyemiadeshina": "/assets/images/coaches/adeyemi-adeshina.webp",
  "patryck": "/assets/images/coaches/patryk-zajac.webp",
  "patryk": "/assets/images/coaches/patryk-zajac.webp",
  "patrykzajac": "/assets/images/coaches/patryk-zajac.webp",
  "aryan": "/assets/images/coaches/aryan-harikumar.webp",
  "aryanharikumar": "/assets/images/coaches/aryan-harikumar.webp",
  "randa": "/assets/images/coaches/randa-elabd.webp",
  "drranda": "/assets/images/coaches/randa-elabd.webp",
  "randaelabd": "/assets/images/coaches/randa-elabd.webp",
  "drrandaelabd": "/assets/images/coaches/randa-elabd.webp"
};

export function coachPortrait(name: string): string {
  const key = name.toLowerCase().replace(/[^a-z]/g, '');
  return Object.hasOwn(portraits, key) ? portraits[key] : '';
}
