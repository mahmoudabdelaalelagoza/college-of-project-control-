import SiteLink from '@/components/base/SiteLink';
import { sectorHeroImages } from '@/data/sectorHeroImages';
import { useActiveSectors } from '@/hooks/useSectorCards';

interface ProjectDrivenSectorsProps { id?: string; }

/** Canonical homepage sector copy and card layout for every public sector section.
 * Shared local imagery comes from sectorHeroImages; dashboard status controls visibility. */
const sectionCopy = {
  "tag": "Sector applications",
  "title": "Project controls across key sectors",
  "intro": "Explore how project controls support planning, risk management and informed decision-making across different industries and project environments.",
  "cards": [
    {
      "slug": "construction",
      "title": "Construction & Infrastructure",
      "description": "Manage project schedules, cost forecasts, contractual requirements and risks across complex construction and infrastructure projects.",
      "href": "/project-controls-professional/construction-route",
      "image": sectorHeroImages.construction,
      "alt": "Construction and infrastructure project environment"
    },
    {
      "slug": "engineering",
      "title": "Engineering & Manufacturing",
      "description": "Coordinate engineering milestones, production dependencies and performance information across complex technical projects.",
      "href": "/project-controls-professional/engineering-manufacturing-aerospace-route",
      "image": sectorHeroImages.engineering,
      "alt": "Engineering and manufacturing project environment"
    },
    {
      "slug": "public-sector",
      "title": "Public Sector",
      "description": "Support accountable project delivery through effective governance, assurance, planning and performance reporting.",
      "href": "/project-controls-professional/public-sector-councils-route",
      "image": sectorHeroImages.publicSector,
      "alt": "Public sector project environment"
    },
    {
      "slug": "energy",
      "title": "Energy & Utilities",
      "description": "Apply integrated planning, cost forecasting and risk analysis across major assets, upgrades and energy and utilities projects.",
      "href": "/project-controls-professional/energy-oil-gas-utilities-route",
      "image": sectorHeroImages.energy,
      "alt": "Energy and utilities project environment"
    }
  ],
  "note": "These sectors illustrate how Project Controls Professional Level 6 capabilities can be applied. They are not separate apprenticeship standards. Programme suitability depends on your role, prior learning and workplace development opportunities."
} as const;

export default function ProjectDrivenSectors({ id = 'sectors' }: ProjectDrivenSectorsProps) {
  const activeSectors = useActiveSectors();
  const activeSlugs = activeSectors && new Set(activeSectors.map(sector => sector.slug));
  const sectors = sectionCopy.cards.filter(sector => !activeSlugs || activeSlugs.has(sector.slug));
  const headingId = `${id}-heading`;

  return (
    <section id={id} className="scroll-mt-48 bg-background-50 py-16 md:py-24" aria-labelledby={headingId}>
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-label text-xs font-bold uppercase tracking-[0.18em] text-accent-700">{sectionCopy.tag}</p>
          <h2
            id={headingId}
            className="mt-4 font-heading text-3xl font-bold leading-tight text-foreground-950 md:text-5xl"
          >
            {sectionCopy.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground-600 md:text-lg">
            {sectionCopy.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {sectors.map((sector) => (
            <article key={sector.title} className="flex h-full flex-col overflow-hidden rounded-xl border border-background-200 bg-white shadow-sm">
              <img
                src={sector.image}
                alt={sector.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-xl font-bold leading-tight text-foreground-950">{sector.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-600">{sector.description}</p>
                <SiteLink
                  href={sector.href}
                  aria-label={`Explore ${sector.title}`}
                  className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-primary-200 px-4 text-sm font-bold text-primary-900 transition-colors hover:border-primary-600 hover:bg-primary-50"
                >
                  Explore
                  <i className="ri-arrow-right-line" aria-hidden="true" />
                </SiteLink>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-foreground-600">
          {sectionCopy.note}
        </p>
      </div>
    </section>
  );
}
