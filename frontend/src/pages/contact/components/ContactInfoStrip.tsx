import SiteLink from '@/components/base/SiteLink';

const contactInfo = [
  { icon: 'ri-calendar-check-line', label: 'Book a session', value: 'Choose a time with an adviser', href: 'https://bookings.cloud.microsoft/book/InformationSession@kentbusinesscollege.com/?ismsaljsauthenabled=true', accent: 'primary', external: true },
  { icon: 'ri-mail-line', label: 'Email', value: 'office@kentbusinesscollege.org', href: 'mailto:office@kentbusinesscollege.org', accent: 'signal', external: false },
  { icon: 'ri-phone-line', label: 'Telephone', value: '+44 (0)1622 958955', href: 'tel:+441622958955', accent: 'highlight', external: false },
  { icon: 'ri-time-line', label: 'Office Hours', value: 'Mon–Fri, 9:00–17:00 GMT', href: 'tel:+441622958955', accent: 'accent', external: false },
] as const;

const accentClasses = {
  primary: 'bg-primary-50 text-primary-600 group-hover:bg-primary-500',
  signal: 'bg-signal-50 text-signal-700 group-hover:bg-signal-500',
  highlight: 'bg-highlight-50 text-highlight-700 group-hover:bg-highlight-500',
  accent: 'bg-accent-50 text-accent-700 group-hover:bg-accent-500',
} as const;

export default function ContactInfoStrip() {
  return (
<section className="border-b border-background-200/40 bg-white py-14 md:py-16">
          <div className="container-site">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => (
                <SiteLink key={info.label} href={info.href} {...(info.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="group rounded-2xl border border-background-200/60 bg-background-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg">
                  <span className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-colors group-hover:text-white ${accentClasses[info.accent]}`}>
                    <i className={`${info.icon} text-xl`} aria-hidden="true" />
                  </span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-foreground-600">{info.label}</span>
                  <span className="mt-1 block text-sm font-semibold text-foreground-900 transition-colors group-hover:text-primary-700">{info.value}</span>
                </SiteLink>
              ))}
            </div>
          </div>
        </section>
  );
}
