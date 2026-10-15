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
| Funding and costs | [FundingAndCosts.tsx](components/FundingAndCosts.tsx) | [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx), original banner and cards with homepage copy |
| Institute of Project Controls | [InstituteOfProjectControls.tsx](components/InstituteOfProjectControls.tsx) | [IpcAuthority.tsx](../../components/feature/IpcAuthority.tsx), with homepage copy |
| Learn from Practitioners | [LearnFromPractitioners.tsx](components/LearnFromPractitioners.tsx) | [MeetMentors.tsx](../../components/feature/MeetMentors.tsx), with homepage copy and mobile looping |
| Events and masterclasses | [LearnTogether.tsx](components/LearnTogether.tsx) | Page-local |
| Learner Experiences | [ProfessionalExperience.tsx](components/ProfessionalExperience.tsx) | Page-local |
| Professional pathways | [ProfessionalPathways.tsx](components/ProfessionalPathways.tsx) | [ProfessionalPathwaysSection.tsx](../../components/feature/ProfessionalPathwaysSection.tsx) |
| Professional Programmes | [ProfessionalProgrammes.tsx](components/ProfessionalProgrammes.tsx) | Page-local |
| Project Driven Sectors | [ProjectDrivenSectors.tsx](components/ProjectDrivenSectors.tsx) | Page-local |
| Specialist Modules | [SpecialistModules.tsx](components/SpecialistModules.tsx) | Page-local |
| Trusted By | [TrustedBy.tsx](components/TrustedBy.tsx) | Page-local |

Keep `page.tsx` focused on section order and page state. Add new page-specific sections to `components/`, use the visible label for the filename, and update imports when renaming. Shared navigation and the footer remain in `src/components/feature/`.

The supplied homepage copy for Programme Guidance through Learner Experiences is in [pageCopy.ts](pageCopy.ts). The hero, learning journey and Level 6 pathways retain their page-local copy; apprenticeship cards and the comparison derive their facts from `src/data/programmeFacts.ts`. Funding dates and employer contributions derive from `src/data/apprenticeshipFundingPolicy.ts`.

- [HomepageContentSection.tsx](components/HomepageContentSection.tsx) provides the repeated section, card and note layouts.
- [eventSelection.ts](eventSelection.ts) chooses up to three distinct real project-related events, prioritising upcoming sessions and filling available places with recent ended sessions. Event dates, states, images and detail links remain owned by the events service.
- Events appear immediately before the Learner Experiences section. The standalone Professional Recognition section is omitted from the homepage.
- Specialist course imagery and mentor portraits/profile links continue to use the existing services. Supplied homepage editorial copy stays local to this page.
- The hero retains the supplied `PCP-Guide.mp3` recording through its existing audio player.
- [ShortCoursesCarousel.tsx](components/ShortCoursesCarousel.tsx) shows the three supplied featured courses first, followed by the remaining catalogue. It supports touch scrolling, keyboard arrows and bottom-right previous/next controls. Each card is one link to its course detail page.

- The home mentor section uses the original large portrait design. On mobile, leading/trailing duplicate runs allow continuous swiping and arrow navigation; duplicates stay hidden from assistive technology and keyboard focus. Desktop keeps the three-column layout.

- The shared light coaching section accepts optional 'id', 'content' and 'showSupportAreas' props. Coach profiles remain dashboard-managed. Missing photos resolve through 'src/data/coachPortraits.ts' to the official KBC portraits in 'public/assets/images/coaches'; uploaded dashboard photos take precedence.

- The homepage events carousel automatically advances from right to left every four seconds while visible. It loops on desktop and mobile, supports manual arrows and touch, and includes pause/resume. Hover, focus and touch temporarily pause automatic movement; reduced-motion preferences disable autoplay. Repeated cards remain clickable without adding duplicate keyboard stops.
