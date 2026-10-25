import SiteLink from '@/components/base/SiteLink';
import type { ReactNode } from 'react';
import ProgrammeTestimonials from './ProgrammeTestimonials';
import useEnquirySubmission from '@/hooks/useEnquirySubmission';

const privacyUrl = '/privacy';

const linkColumns = [
  {
    title: 'Explore Learning',
    links: [
      { label: 'Our Programmes', href: '/#programmes' },
      { label: 'Short Courses & Modules', href: '/short-courses' },
      { label: 'Check Apprenticeship Eligibility', href: '/apprenticeship-eligibility-checker' },
      { label: 'Funding & Support', href: '/#funding' },
      { label: 'Events & Information Sessions', href: '/events' },
    ],
  },
  {
    title: 'For Employers',
    links: [
      { label: 'Employer Information', href: '/employers' },
      { label: 'Employer Development & Support', href: '/employers#workforce-services' },
      { label: 'Apprenticeship Funding', href: '/employers#funding' },
      { label: 'Employer Agreement', href: '/employer-agreement' },
      { label: 'Book a Consultation', href: '/book-a-session' },
    ],
  },
  {
    title: 'About & Support',
    links: [
      { label: 'About  College', href: '/about' },
      { label: 'Learner Support', href: '/apprentices#support' },
      { label: 'Learner Stories', href: '/testimonials' },
      { label: 'Articles & Insights', href: '/articles' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

const policyLinks = [
  { label: 'Privacy', href: privacyUrl },
  { label: 'Terms', href: '/terms' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Cookies', href: '/cookies' },
];

export default function Footer({ testimonials = <ProgrammeTestimonials /> }: { testimonials?: ReactNode }) {
  const { receipt, pending, error, handleSubmit } = useEnquirySubmission('Programme & Event Enquiries');

  return (
    <>
      {testimonials}
      <footer aria-label="College information" className="relative overflow-hidden bg-secondary-950 text-background-50">
        <div className="absolute inset-x-0 top-0 z-20 h-1 bg-[linear-gradient(90deg,#3FA7A3_0%,#3FA7A3_70%,#FFA953_70%,#FFA953_100%)]" aria-hidden="true" />
        <div className="pattern-dots-overlay pattern-dots-dark" aria-hidden="true" />

        <div className="container-site relative z-10 py-12 md:py-16">
          <div className="grid items-start gap-10 sm:grid-cols-3">
            <div className="grid min-w-0 gap-8 sm:col-span-3 md:grid-cols-2 md:gap-12">
              <div className="min-w-0">
                <SiteLink href="/" className="inline-flex rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight-300" aria-label="College of Project Controls & Management home">
                  <img loading="lazy" decoding="async" src="/assets/images/cpcm-logo-light.webp" alt="College of Project Controls & Management" className="h-auto w-[138px] object-contain" />
                </SiteLink>
                <h2 className="mt-5 text-section-xl font-bold leading-snug text-white">College of Project Controls &amp; Management</h2>
                <p className="mt-2 text-sm font-semibold text-highlight-300">Part of Kent Business College</p>
                <p className="mt-4 text-sm leading-relaxed text-background-50/75">
                  Specialist apprenticeships and professional learning in project management, project controls and PMO, connected to real workplace practice.
                </p>
                <address className="mt-4 text-sm not-italic leading-relaxed text-background-50/75">
                  <p><span className="font-semibold text-white">Email: </span><SiteLink href="mailto:office@kentbusinesscollege.org" className="break-words text-highlight-300 underline underline-offset-4 hover:text-white">office@kentbusinesscollege.org</SiteLink></p>
                  <p className="mt-2"><span className="font-semibold text-white">Telephone: </span><SiteLink href="tel:+441622958955" className="inline-block py-2 hover:text-highlight-300">+44 (0)1622 958955</SiteLink></p>
                </address>
              </div>

              <section aria-labelledby="newsletter-heading" className="min-w-0 border-t border-white/15 pt-6 md:border-t-0 md:pt-0">
                <h2 id="newsletter-heading" className="text-base font-semibold leading-snug text-white">Programme &amp; Event Enquiries</h2>
                {receipt ? (
                  <p role="status" className="mt-4 text-sm leading-relaxed text-accent-200">Request received. Our team will respond to your enquiry.{receipt.id ? ` Reference ${receipt.id}.` : ''}</p>
                ) : (
                  <form id="newsletter-form" onSubmit={handleSubmit} aria-busy={pending} className="mt-4">
                    <label htmlFor="newsletter-email" className="mb-2 block text-sm font-semibold text-white">Email address</label>
                    <input id="newsletter-email" type="email" name="email" autoComplete="email" className="min-h-11 w-full min-w-0 rounded-md border border-white/30 bg-white/5 px-3 py-2 text-base text-white focus:border-accent-200 focus:outline-none focus:ring-2 focus:ring-accent-200/40" required aria-describedby="newsletter-notice" />
                    <input type="hidden" name="name" value="Programme and event enquiry" />
                    <button type="submit" disabled={pending} className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-md bg-highlight-400 px-4 py-3 text-sm font-bold text-secondary-950 transition-colors hover:bg-highlight-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight-300 disabled:cursor-wait disabled:opacity-60">
                      {pending ? 'Sending…' : <>Request Information <span aria-hidden="true">→</span></>}
                    </button>
                    <input type="text" name="phone_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" className="honeypot-field" />
                  </form>
                )}
                {error && <p role="alert" className="mt-3 text-sm text-red-300">Your request could not be confirmed. Please retry, or email <SiteLink href="mailto:office@kentbusinesscollege.org" className="break-words underline">office@kentbusinesscollege.org</SiteLink> for help.</p>}
                <p id="newsletter-notice" className="mt-3 text-xs leading-relaxed text-background-50/75">We'll use your email address to respond to your enquiry. Read our <SiteLink href={privacyUrl} className="underline underline-offset-4 hover:text-white">Privacy Notice</SiteLink>.</p>
              </section>
            </div>

            {linkColumns.map((column) => (
              <nav key={column.title} aria-label={column.title} className="min-w-0 border-t border-white/15 pt-6 sm:border-t-0 sm:pt-0">
                <h2 className="mb-4 text-base font-semibold leading-snug text-white">{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <SiteLink href={link.href} className="inline-flex min-h-11 items-center py-2 text-sm leading-relaxed text-background-50/75 underline-offset-4 transition-colors hover:text-highlight-300 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight-300">{link.label}</SiteLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-10 border-t border-white/15 pt-6 md:mt-12">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between xl:gap-8">
              <div className="space-y-2 text-xs leading-relaxed text-background-50/75">
                <p>© {new Date().getFullYear()} Kent Business College Ltd. All rights reserved.</p>
                <p>College of Project Controls &amp; Management is part of Kent Business College.</p>
                <p>Registered in England and Wales · Company No. 10367575</p>
              </div>
              <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5">
                {policyLinks.map((link) => (
                  <SiteLink key={link.label} href={link.href} className="inline-flex min-h-11 items-center text-xs text-background-50/75 underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight-300">{link.label}</SiteLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
