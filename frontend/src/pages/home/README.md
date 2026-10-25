# home sections

Composition: [page.tsx](page.tsx). Routes: `/`.

Find the label on the page, then open its component below. Shared implementation links are provided where a section is reused. Data and API calls retain their existing ownership.

| Label / heading | Component | Shared implementation |
| --- | --- | --- |
| Coaching and support | [CoachingAndSupport.tsx](components/CoachingAndSupport.tsx) | [CoachingSupport.tsx](../../components/feature/CoachingSupport.tsx), shared light coach profiles |
| College Of Project Controls And Management | [CollegeOfProjectControlsAndManagement.tsx](components/CollegeOfProjectControlsAndManagement.tsx) | Page-local |
| For Employers | [ForEmployers.tsx](components/ForEmployers.tsx) | Page-local |
| From the journal | [FromTheJournal.tsx](components/FromTheJournal.tsx) | [ArticlesSection.tsx](../../components/feature/ArticlesSection.tsx) |
| Funding eligibility and IPC support | [FundingEligibilityAndIPCSupport.tsx](components/FundingEligibilityAndIPCSupport.tsx) | Page-local |
| Apprenticeship eligibility | [ApprenticeshipEligibility.tsx](components/ApprenticeshipEligibility.tsx) | Page-local |
| Funding and costs | [FundingAndCosts.tsx](components/FundingAndCosts.tsx) | [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx), canonical homepage design and copy |
| Institute of Project Controls | [InstituteOfProjectControls.tsx](components/InstituteOfProjectControls.tsx) | [IpcAuthority.tsx](../../components/feature/IpcAuthority.tsx), with homepage copy |
| Learn from Practitioners | [LearnFromPractitioners.tsx](components/LearnFromPractitioners.tsx) | [MeetMentors.tsx](../../components/feature/MeetMentors.tsx), canonical homepage copy, portrait cards and mobile looping |
| Events and masterclasses | [LearnTogether.tsx](components/LearnTogether.tsx) | Page-local |
| Learner Case Studies | [CaseStudiesSection.tsx](../../components/feature/CaseStudiesSection.tsx) | Five supplied PCP learner stories, immediately before testimonials |
| Learner Experiences | [ProfessionalExperience.tsx](components/ProfessionalExperience.tsx) | [LearnerExperiences.tsx](../../components/feature/LearnerExperiences.tsx), canonical homepage design and copy |
| Professional pathways | [ProfessionalPathways.tsx](components/ProfessionalPathways.tsx) | [ProfessionalPathwaysSection.tsx](../../components/feature/ProfessionalPathwaysSection.tsx) |
| Professional Programmes | [ProfessionalProgrammes.tsx](components/ProfessionalProgrammes.tsx) | Page-local |
| Project Driven Sectors | [ProjectDrivenSectors.tsx](components/ProjectDrivenSectors.tsx) | [ProjectDrivenSectors.tsx](../../components/feature/ProjectDrivenSectors.tsx), canonical homepage design and copy |
| Specialist Modules | [SpecialistModules.tsx](components/SpecialistModules.tsx) | Page-local |
| Trusted By | [TrustedBy.tsx](components/TrustedBy.tsx) | Page-local |

Keep `page.tsx` focused on section order and page state. Add new page-specific sections to `components/`, use the visible label for the filename, and update imports when renaming. Shared navigation and the footer remain in `src/components/feature/`.

The page-specific homepage copy for Programme Guidance through Learner Experiences is in [pageCopy.ts](pageCopy.ts); coaching, funding, mentor, sector and learner-experience copy belong to their shared components. The hero, learning journey and Level 6 pathways retain their page-local copy; apprenticeship cards and the comparison derive their facts from `src/data/programmeFacts.ts`. Funding dates and employer contributions derive from `src/data/apprenticeshipFundingPolicy.ts`.

- [HomepageContentSection.tsx](components/HomepageContentSection.tsx) provides the repeated section, card and note layouts.
- [eventSelection.ts](eventSelection.ts) chooses up to three distinct real project-related events, prioritising upcoming sessions and filling available places with recent ended sessions. Event dates, states, images and detail links remain owned by the events service.
- Events are followed by the five learner Case Studies, immediately before the Learner Experiences section. The standalone Professional Recognition section is omitted from the homepage.
- Specialist course imagery and mentor portraits/profile links continue to use the existing services. Supplied homepage editorial copy stays local to this page.
- The hero uses the supplied replacement recording in `public/assets/audio/home-summary.mp3` through `HomeAudioSummary.tsx`. Its URL version is derived from the recording hash so returning visitors receive the updated audio.
- [ShortCoursesCarousel.tsx](components/ShortCoursesCarousel.tsx) shows the three supplied featured courses first, followed by the remaining catalogue. It supports touch scrolling, keyboard arrows and bottom-right previous/next controls. Each card is one link to its course detail page.

- The home mentor section uses the original large portrait design. On mobile, leading/trailing duplicate runs allow continuous swiping and arrow navigation; duplicates stay hidden from assistive technology and keyboard focus. Desktop keeps the three-column layout.

- The coach section uses one canonical layout and copy in [CoachingSupport.tsx](../../components/feature/CoachingSupport.tsx) across the homepage, Level 4, Level 6 and any other page using this component. Only the optional section `id` varies for navigation anchors. Coach profiles remain dashboard-managed. Missing photos resolve through 'src/data/coachPortraits.ts' to the official KBC portraits in 'public/assets/images/coaches'; uploaded dashboard photos take precedence.

- The homepage events carousel automatically advances from right to left every four seconds while visible. It loops on desktop and mobile, supports manual arrows and touch, and includes pause/resume. Hover, focus and touch temporarily pause automatic movement; reduced-motion preferences disable autoplay. Repeated cards remain clickable without adding duplicate keyboard stops.

The Funding & Costs design and copy are shared across the site. Edit [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx) for changes everywhere; page wrappers only set existing navigation anchors. Dates and employer contributions derive from `src/data/apprenticeshipFundingPolicy.ts`.

The mentor section uses the canonical homepage content and portrait-card layout in [MeetMentors.tsx](../../components/feature/MeetMentors.tsx). Changes there apply to every consumer, including mobile looping. Images, profile destinations and LinkedIn links come from the dashboard-managed mentor records; only navigation anchors vary by page.

The full sector section is shared through [ProjectDrivenSectors.tsx](../../components/feature/ProjectDrivenSectors.tsx). Edit this component for site-wide content and design changes. Images use `src/data/sectorHeroImages.ts`; active status is read from dashboard-managed sector records through `useActiveSectors`. Page wrappers preserve existing navigation anchors.

The featured learner-experience section uses the homepage design and copy in [LearnerExperiences.tsx](../../components/feature/LearnerExperiences.tsx). The homepage and programme-footer entry points share this implementation, so changes apply everywhere. The grouped published PCP collection, approved College reviews and submission flow remain available through `/testimonials`. The shared cards use the local KBC import and original available portraits; see the testimonials README for data ownership and sources. Existing page placement and testimonial anchors are preserved.

The IPC promotion section uses the canonical content and dark/gold design in [IpcAuthority.tsx](../../components/feature/IpcAuthority.tsx). The shared section owns both recognition/growth features and its gold primary / outline secondary actions. Page wrappers supply no content overrides; published portraits remain dashboard-managed.

- [CaseStudiesSection.tsx](../../components/feature/CaseStudiesSection.tsx) presents the five supplied PCP learner stories immediately before testimonials. Content is shared with `/case-studies` through `src/data/pcpCaseStudies.json`; there is one homepage instance.

- The third hero action, **Check Eligibility**, opens [EligibilityCheckerModal.tsx](../../components/feature/EligibilityCheckerModal.tsx). It lazy-loads the existing apprenticeship checker inside the shared native dialog, rendered outside the hero through a portal. The dialog contains scrolling, restores focus on close and keeps the current route. Closing discards the local checker answers; no enquiry is submitted.
