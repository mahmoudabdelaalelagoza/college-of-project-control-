import SiteLink from '@/components/base/SiteLink';
import { homeCopy } from '../pageCopy';

const icons=['ri-crosshair-line','ri-user-star-line','ri-briefcase-line','ri-route-line'];
const capabilityPoints=homeCopy.employers.cards.map((card,index)=>({...card,copy:card.body,icon:icons[index]}));

export default function ForEmployers() {
  return (
    <section id="employers" className="bg-white py-16 md:py-24" aria-labelledby="employer-capability-heading">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.82fr)] lg:items-center">
          <div>
            <p className="font-label text-xs font-bold uppercase tracking-[0.18em] text-accent-700">For employers</p>
            <h2
              id="employer-capability-heading"
              className="mt-4 max-w-3xl font-heading text-3xl font-bold leading-tight text-foreground-950 md:text-5xl"
            >
              {homeCopy.employers.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground-600 md:text-lg">
              {homeCopy.employers.intro}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {capabilityPoints.map((item) => (
                <article key={item.title} className="rounded-lg border border-background-200 bg-background-50 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                    <i className={`${item.icon} text-lg`} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-foreground-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-600">{item.copy}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <SiteLink href="/employers" className="btn-primary inline-flex min-h-12 items-center gap-3 px-6 text-sm font-bold">
                {homeCopy.employers.exploreCta}
                <i className="ri-arrow-right-line text-base" aria-hidden="true" />
              </SiteLink>
              <SiteLink href="/contact" className="cta-button inline-flex min-h-12 items-center gap-3 px-6 text-sm font-bold">
                {homeCopy.employers.talkCta}
                <i className="ri-arrow-right-line text-base" aria-hidden="true" />
              </SiteLink>
            </div>
          </div>

          <figure className="overflow-hidden rounded-xl border border-background-200 bg-primary-950 shadow-sm">
            <img
              src="/assets/images/employer-capability-team.webp"
              alt="Employer team discussing project capability and project controls development"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
