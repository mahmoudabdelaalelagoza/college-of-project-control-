import type { ReactNode } from 'react';
import SectionHeading from '@/components/base/SectionHeading';
import SiteLink from '@/components/base/SiteLink';
import PageSectionNav from '@/components/feature/PageSectionNav';
import LearnerExperiences from '@/components/feature/LearnerExperiences';
import LearnFromPractitioners from './LearnFromPractitioners';
import {
  aboutProgrammes, aiPrinciples, apprenticeshipStandards, collegeApproach,
  employerPillars, learningSteps, locations, pmoRecognition, professionalValues, storyThemes,
} from '../aboutContent';

const sectionLinks = [
  { label: 'Introduction', href: '/about#about-hero' },
  { label: 'Who we are', href: '/about#who-we-are' },
  { label: 'Our story', href: '/about#our-story' },
  { label: 'Mission & values', href: '/about#mission-values' },
  { label: 'What we do', href: '/about#programmes' },
  { label: 'Why choose us', href: '/about#why-choose-us' },
  { label: 'Our people', href: '/about#experts' },
  { label: 'Recognition', href: '/about#recognition' },
  { label: 'Learner experiences', href: '/about#impact' },
  { label: 'Locations & reach', href: '/about#locations' },
  { label: 'Next steps', href: '/about#next-step' },
];

function ContentSection({ id, tag, title, subtitle, tone = 'white', children }: {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
  tone?: 'white' | 'soft' | 'dark';
  children: ReactNode;
}) {
  const light = tone === 'dark';
  const surface = { white: 'bg-white', soft: 'bg-background-100', dark: 'bg-primary-950 text-white' }[tone];
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative isolate overflow-hidden py-16 md:py-24 ${surface}`}>
      {light && <div className="pattern-dots-overlay pattern-dots-dark absolute inset-0" aria-hidden="true" />}
      <div className="container-site relative z-10">
        <SectionHeading id={`${id}-title`} tag={tag} title={title} subtitle={subtitle} light={light} className="max-w-4xl" />
        {children}
      </div>
    </section>
  );
}

const textLink = 'inline-flex max-w-full items-center gap-2 py-2 text-sm font-bold text-primary-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700';

export default function AboutCPCM() {
  return (
    <>
      <section id="about-hero" aria-labelledby="about-hero-title" className="relative isolate overflow-hidden bg-primary-950 text-white site-hero">
        <img
          src="/assets/images/hero-professional.webp"
          alt="Project professionals in a collaborative learning setting"
          className="absolute inset-0 h-full w-full object-cover site-hero__image"
          loading="eager"
          fetchPriority="high"
        />
        <div className="pattern-dots-overlay pattern-dots-dark absolute inset-0" aria-hidden="true" />
        <div className="container-site site-hero__content">
          <div className="max-w-4xl">
            <p className="max-w-3xl text-xs font-label font-semibold uppercase leading-relaxed tracking-wider text-signal-300">
              College of Project Controls &amp; Management · Kent Business College
            </p>
            <h1 id="about-hero-title" className="mt-5 font-heading font-extrabold leading-tight text-white">
              Project Controls Expertise. Grounded in Real Work.
            </h1>
            <p className="site-hero__lead mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              We help project professionals and organisations strengthen planning, performance, governance and decision-making through specialist education connected to professional practice.
            </p>
            <div className="site-hero__actions mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <SiteLink href="/about#programmes" className="btn-primary inline-flex min-h-12 items-center justify-center text-sm font-bold">
                Explore Our Programmes <i className="ri-arrow-right-line" aria-hidden="true" />
              </SiteLink>
              <SiteLink href="/contact" className="btn-secondary inline-flex min-h-12 items-center justify-center border-white/40 text-sm font-semibold text-white hover:bg-white/10">
                Speak with Our Team
              </SiteLink>
            </div>
            <p className="mt-6 text-sm font-semibold leading-relaxed text-signal-300">
              Specialist Learning · Experienced Practitioners · Workplace Application
            </p>
          </div>
        </div>
      </section>

      <PageSectionNav pageLabel="About the College" links={sectionLinks} showCta={false} stickyTop="var(--public-header-height, 145px)" />

      <ContentSection id="who-we-are" tag="Who We Are" title="Specialist Knowledge. Practical Professional Development." subtitle="The College of Project Controls & Management is part of Kent Business College, a UK-based education provider supporting professionals and employers through apprenticeships and specialist professional learning.">
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0 space-y-4 text-sm leading-relaxed text-foreground-600 md:text-base">
            <p>Our focus is on the people responsible for planning, managing, controlling and improving complex projects.</p>
            <p>We connect technical knowledge, professional experience and applied learning to help individuals develop the judgement needed in real project environments.</p>
            <p>Better plans, clearer forecasts and meaningful reporting help professionals identify uncertainty, explain options and support informed delivery decisions.</p>
            <SiteLink href="https://kentbusinesscollege.com/" target="_blank" rel="noopener noreferrer" className={textLink}>
              <span className="min-w-0">Learn More About Kent Business College</span>
              <i className="ri-external-link-line shrink-0" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </SiteLink>
          </div>
          <div className="min-w-0 rounded-2xl border border-background-200 bg-background-50 p-6 md:p-8">
            <h3 className="font-heading text-xl font-bold text-foreground-950">Who we support</h3>
            <dl className="mt-5 space-y-5">
              <div><dt className="font-semibold text-primary-700">Project professionals</dt><dd className="mt-1 text-sm leading-relaxed text-foreground-600">People developing planning, cost, risk, project management and controls capability.</dd></div>
              <div><dt className="font-semibold text-primary-700">PMO and governance teams</dt><dd className="mt-1 text-sm leading-relaxed text-foreground-600">Professionals connecting performance information with assurance and organisational decisions.</dd></div>
              <div><dt className="font-semibold text-primary-700">Employers</dt><dd className="mt-1 text-sm leading-relaxed text-foreground-600">Organisations building role-based expertise around the projects their teams deliver.</dd></div>
            </dl>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="our-story" tag="Our Story" title="A Specialist Focus, Connected to Real Work" subtitle="Our story is rooted in a practical purpose: making project information useful to the people responsible for delivery." tone="soft">
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          <figure className="min-w-0 overflow-hidden rounded-2xl border border-background-200 bg-white">
            <img src="/assets/images/employer-capability-team.webp" alt="Professionals discussing project information and development priorities" className="aspect-[4/3] w-full object-cover" loading="lazy" decoding="async" />
            <figcaption className="border-t border-background-200 p-5 text-sm leading-relaxed text-foreground-600">Specialist knowledge, professional experience and practical application shape our approach.</figcaption>
          </figure>
          <div className="min-w-0 divide-y divide-background-200">
            {storyThemes.map(({ title, body }) => (
              <article key={title} className="py-5 first:pt-0 last:pb-0">
                <h3 className="font-heading text-xl font-bold leading-snug text-foreground-950">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection id="mission-values" tag="Mission, Vision & Values" title="Useful Knowledge. Responsible Professional Practice." subtitle="Our purpose and direction connect specialist learning with the quality of decisions professionals make at work." tone="dark">
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="min-w-0 rounded-2xl border border-white/20 bg-white/5 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-signal-300">Mission · Our purpose today</p>
            <h3 className="mt-3 font-heading text-2xl font-bold text-white">Make project information useful</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/80">Help professionals and organisations build practical skills and professional judgement through learning connected to real project responsibilities.</p>
          </article>
          <article className="min-w-0 rounded-2xl border border-white/20 bg-white/5 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-signal-300">Vision · What we work towards</p>
            <h3 className="mt-3 font-heading text-2xl font-bold text-white">More informed, accountable decisions</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/80">Support professional practice in which reliable information, meaningful analysis and sound judgement lead to clearer recommendations and informed action.</p>
          </article>
        </div>
        <h3 className="mt-10 font-heading text-2xl font-bold text-white">Our values in practice</h3>
        <ul className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {professionalValues.map(({ title, body, icon }) => (
            <li key={title} className="min-w-0 border-t border-white/20 pt-5">
              <i className={`${icon} text-2xl text-signal-300`} aria-hidden="true" />
              <h4 className="mt-3 font-heading text-lg font-bold text-white">{title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{body}</p>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection id="programmes" tag="What We Do" title="Find the Programme That Fits Your Responsibilities" subtitle="Explore apprenticeships and standalone professional development designed for different roles and career ambitions.">
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {aboutProgrammes.map(({ programme, tag, body, cta, href }) => (
            <article key={programme.id} className="flex min-w-0 flex-col rounded-2xl border border-background-200 bg-background-50 p-6 shadow-sm">
              <h3 className="font-heading text-xl font-bold leading-snug text-foreground-950">{programme.shortTitle}</h3>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-primary-700">{tag}</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground-600">{body}</p>
              <div className="mt-auto pt-5"><SiteLink href={href} className={textLink}><span className="min-w-0">{cta}</span><i className="ri-arrow-right-line shrink-0" aria-hidden="true" /></SiteLink></div>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="min-w-0 rounded-2xl border border-background-200 p-6">
            <h3 className="font-heading text-xl font-bold text-foreground-950">Specialist Courses &amp; Modules</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground-600">Strengthen selected capabilities through focused professional learning in areas such as planning, earned value management, risk, AI and professional examination preparation.</p>
            <SiteLink href="/short-courses" className={`${textLink} mt-4`}><span className="min-w-0">Browse Specialist Courses</span><i className="ri-arrow-right-line shrink-0" aria-hidden="true" /></SiteLink>
          </article>
          <article id="employers" className="min-w-0 rounded-2xl border border-background-200 p-6">
            <h3 className="font-heading text-xl font-bold text-foreground-950">Employer Development</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground-600">We work with employers to connect professional development with the responsibilities, technical challenges and governance needs of their teams.</p>
            <SiteLink href="/employers" className={`${textLink} mt-4`}><span className="min-w-0">Explore Employer Support</span><i className="ri-arrow-right-line shrink-0" aria-hidden="true" /></SiteLink>
          </article>
        </div>
        <details className="mt-6 rounded-2xl border border-background-200 bg-background-50 p-6">
          <summary className="cursor-pointer text-sm font-semibold text-primary-700">How we support workplace development</summary>
          <dl className="mt-5 grid gap-5 md:grid-cols-2">
            {employerPillars.map(([title, body]) => <div key={title}><dt className="font-heading text-lg font-bold text-foreground-950">{title}</dt><dd className="mt-2 text-sm leading-relaxed text-foreground-600">{body}</dd></div>)}
          </dl>
        </details>
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-foreground-600">Apprenticeships and standalone professional programmes have separate funding, assessment and completion arrangements. External qualifications and professional recognition are subject to the relevant awarding body's requirements.</p>
      </ContentSection>

      <ContentSection id="why-choose-us" tag="Why Choose Us" title="Learning That Connects Knowledge with Practice" subtitle="Our teaching approach combines professional concepts, practical examples, guided application and feedback." tone="soft">
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="min-w-0 space-y-6">
            {collegeApproach.map(({ title, body, icon }) => (
              <article key={title} className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-xl text-primary-700" aria-hidden="true"><i className={icon} /></span>
                <div className="min-w-0"><h3 className="font-heading text-xl font-bold text-foreground-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-foreground-600">{body}</p></div>
              </article>
            ))}
            <p className="text-sm font-semibold leading-relaxed text-primary-700">Live Online Teaching · Practical Learning · Professional Guidance · Workplace Relevance</p>
            <p className="text-sm leading-relaxed text-foreground-600">Teaching formats, coaching, workplace evidence and assessment requirements depend on the programme selected.</p>
          </div>
          <ol id="learning" className="min-w-0 space-y-6 border-l border-primary-200 pl-6">
            {learningSteps.map(([number, title, body]) => (
              <li key={number} className="relative min-w-0 pl-9">
                <span className="absolute left-0 top-0 text-sm font-bold text-primary-700" aria-hidden="true">{number}</span>
                <h3 className="font-heading text-xl font-bold text-foreground-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-600">{body}</p>
              </li>
            ))}
          </ol>
        </div>
        <details id="ai" className="mt-10 rounded-2xl border border-background-200 bg-white p-6">
          <summary className="cursor-pointer font-semibold leading-relaxed text-primary-700">AI &amp; Digital Practice: Technology Should Strengthen Judgement, Not Replace It</summary>
          <p className="mt-5 text-sm leading-relaxed text-foreground-600">Artificial intelligence can support analysis, reporting and professional workflows, but reliable project controls still depend on validated information and accountable decisions.</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground-600">Our approach to AI development emphasises three principles.</p>
          <dl className="mt-5 grid gap-6 md:grid-cols-3">
            {aiPrinciples.map(([title, body]) => <div key={title}><dt className="font-heading text-lg font-bold text-foreground-950">{title}</dt><dd className="mt-2 text-sm leading-relaxed text-foreground-600">{body}</dd></div>)}
          </dl>
          <p className="mt-6 border-t border-background-200 pt-5 text-sm font-semibold text-primary-700">AI supports professional capability. Accountability remains with people.</p>
        </details>
      </ContentSection>

      <LearnFromPractitioners />

      <ContentSection id="recognition" tag="Credentials & Recognition" title="Professional Recognition, with a Clear Scope" subtitle="Understand what the recognised assessment covers and how it relates to apprenticeship completion and Chartered progression." tone="dark">
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="min-w-0 rounded-2xl border border-white/20 bg-white/5 p-6 md:p-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl text-signal-300" aria-hidden="true"><i className="ri-award-line" /></span>
            <h3 className="mt-5 font-heading text-2xl font-bold text-white">APM-Recognised Technical Knowledge</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/80">{pmoRecognition?.statement}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">Recognition applies to the named assessment. It is not a blanket accreditation of every KBC course, and does not automatically award Chartered status.</p>
            <SiteLink href="https://www.apm.org.uk/chartered-standard/recognised-assessment/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex max-w-full items-center gap-2 py-2 text-sm font-semibold text-signal-300 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-300">
              <span className="min-w-0">View APM's Recognised Assessment Listing</span><i className="ri-external-link-line shrink-0" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
            </SiteLink>
          </article>
          <article className="min-w-0 rounded-2xl border border-white/20 p-6 md:p-8">
            <h3 className="font-heading text-2xl font-bold text-white">Occupational Standards &amp; Independent Assessment</h3>
            <ul className="mt-5 space-y-5">
              {apprenticeshipStandards.map(programme => <li key={programme.id}><p className="font-semibold text-white">{programme.shortTitle}</p><p className="mt-2 text-sm leading-relaxed text-white/80">{programme.standard?.code} · {programme.standard?.issuingBody} occupational standard. {programme.facts.assessment}</p></li>)}
            </ul>
            <p className="mt-5 border-t border-white/20 pt-5 text-sm leading-relaxed text-white/80">External professional qualifications are awarded separately by the relevant bodies, subject to their eligibility and assessment requirements.</p>
            <SiteLink href="/project-controls-professional/chartered-pmo-pathway#apm-recognition" className="mt-5 inline-flex max-w-full items-center gap-2 py-2 text-sm font-semibold text-signal-300 underline underline-offset-4"><span className="min-w-0">Understand Chartered Progression</span><i className="ri-arrow-right-line shrink-0" aria-hidden="true" /></SiteLink>
          </article>
        </div>
      </ContentSection>

      <LearnerExperiences id="impact" />

      <ContentSection id="locations" tag="Our Locations & Reach" title="Based in Kent. Connected Through Professional Learning." subtitle="Explore where we are based and how our delivery routes connect with your professional circumstances.">
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {locations.map(({ title, label, body, icon }) => (
            <article key={title} className="min-w-0 rounded-2xl border border-background-200 bg-background-50 p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-xl text-primary-700" aria-hidden="true"><i className={icon} /></span>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground-950">{title}</h3>
              <p className="mt-2 text-sm font-semibold text-primary-700">{label}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground-600">{body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 border-t border-background-200 pt-6 text-center">
          <h3 className="font-heading text-xl font-bold text-foreground-950">Sectors We Support</h3>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-foreground-600">Construction &amp; Infrastructure · Energy &amp; Utilities · Engineering &amp; Aerospace · Public Services</p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <SiteLink href="/contact" className={textLink}><span className="min-w-0">Contact Our Team</span><i className="ri-arrow-right-line shrink-0" aria-hidden="true" /></SiteLink>
            <SiteLink href="/commercial-project-controls-route" className={textLink}><span className="min-w-0">Explore Commercial Study</span><i className="ri-arrow-right-line shrink-0" aria-hidden="true" /></SiteLink>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="next-step" tag="Your Next Step" title="Let's Talk About the Capability You Want to Build" subtitle="Whether you're developing your own expertise or strengthening your team's project controls capability, Kent Business College can help you explore the learning options that fit your goals." tone="dark">
        <div className="mx-auto mt-8 flex max-w-3xl flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <SiteLink href="/about#programmes" className="btn-primary inline-flex max-w-full items-center justify-center gap-2 text-center text-sm font-bold"><span className="min-w-0">Explore Our Programmes</span><i className="ri-arrow-right-line shrink-0" aria-hidden="true" /></SiteLink>
          <SiteLink href="/book-a-session" className="btn-secondary inline-flex max-w-full items-center justify-center gap-2 border-white/40 text-center text-sm font-semibold text-white hover:bg-white/10"><span className="min-w-0">Book a Conversation</span><i className="ri-arrow-right-line shrink-0" aria-hidden="true" /></SiteLink>
        </div>
        <p className="mx-auto mt-8 max-w-3xl border-t border-white/20 pt-6 text-center text-sm leading-relaxed text-white/80">Programme suitability, funding, included support and assessment arrangements are confirmed through the relevant admissions process.</p>
      </ContentSection>
    </>
  );
}
