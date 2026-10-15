import SiteLink from '@/components/base/SiteLink';
import { homeCopy } from '../pageCopy';

const sectors=homeCopy.sectors.cards;

export default function ProjectDrivenSectors() {
  return (
    <section id="sectors" className="bg-background-50 py-16 md:py-24" aria-labelledby="project-driven-sectors-heading">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-label text-xs font-bold uppercase tracking-[0.18em] text-accent-700">{homeCopy.sectors.tag}</p>
          <h2
            id="project-driven-sectors-heading"
            className="mt-4 font-heading text-3xl font-bold leading-tight text-foreground-950 md:text-5xl"
          >
            {homeCopy.sectors.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground-600 md:text-lg">
            {homeCopy.sectors.intro}
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
          {homeCopy.sectors.note}
        </p>
      </div>
    </section>
  );
}
