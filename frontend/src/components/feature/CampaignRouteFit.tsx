import SectionHeading from '@/components/base/SectionHeading';
import SiteLink from '@/components/base/SiteLink';

interface RouteFitCard {
  icon: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  description: string;
  href: string;
  tracking: string;
  recommended?: boolean;
}

interface CampaignRouteFitProps {
  tag?: string;
  title?: string;
  subtitle?: string;
  note?: string;
  routes: RouteFitCard[];
}

export default function CampaignRouteFit({
  tag = 'Route Fit',
  title = 'Which Route Fits Your Team?',
  subtitle,
  note,
  routes,
}: CampaignRouteFitProps) {
  return (
    <section className="py-16 md:py-20 bg-background-100">
      <div className="container-site">
        <SectionHeading tag={tag} title={title} subtitle={subtitle} />

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
          {routes.map((route) => (
            <div
              key={route.title}
              className={`group flex min-w-0 flex-col bg-background-50 border rounded-lg p-5 transition-all duration-300 hover:border-primary-400 ${
                route.recommended
                  ? 'border-highlight-400/50 relative'
                  : 'border-background-200/70 hover:border-primary-400'
              }`}
            >
              {route.recommended && (
                <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 bg-highlight-500 text-secondary-950 text-xs font-semibold rounded-full whitespace-nowrap">
                  Recommended
                </span>
              )}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 group-hover:bg-primary-500 transition-colors duration-300 mb-3">
                <i className={`${route.icon} text-lg text-primary-600 group-hover:text-background-50 transition-colors duration-300`}></i>
              </div>
              <h3 className="text-sm font-heading font-bold text-foreground-900">{route.title}</h3>
              {route.subtitle && <p className="mt-2 text-sm font-semibold leading-relaxed text-primary-700">{route.subtitle}</p>}
              <p className="text-xs text-foreground-600 mt-1.5 leading-relaxed">{route.description}</p>
              <SiteLink
                href={route.href}
                data-gtm-event={route.tracking}
                className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start pt-4 text-left text-xs font-semibold text-primary-600 group-hover:text-primary-700 transition-colors whitespace-normal"
              >
                {route.ctaLabel ?? 'Explore Route'}
                <i className="ri-arrow-right-line shrink-0 text-xs" aria-hidden="true" />
              </SiteLink>
            </div>
          ))}
        </div>
        {note && <p className="mx-auto mt-6 max-w-5xl text-center text-xs leading-relaxed text-foreground-600">{note}</p>}
      </div>
    </section>
  );
}