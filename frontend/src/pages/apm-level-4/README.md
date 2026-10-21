# apm-level-4 sections

Composition: [page.tsx](page.tsx). Routes: `/associate-project-manager-level-4`.

Find the label on the page, then open its component below. Shared implementation links are provided where a section is reused. Data and API calls retain their existing ownership.

| Label / heading | Component | Shared implementation |
| --- | --- | --- |
| Sticky Cta | [StickyCta.tsx](components/StickyCta.tsx) | [StickyProgrammeCta.tsx](../../components/feature/StickyProgrammeCta.tsx) |
| Build Capability That Transfers Directly To Your Role | [BuildCapabilityThatTransfersDirectlyToYourRole.tsx](components/BuildCapabilityThatTransfersDirectlyToYourRole.tsx) | Page-local |
| Coaching & Support | [CoachingAndSupport.tsx](components/CoachingAndSupport.tsx) | [CoachingSupport.tsx](../../components/feature/CoachingSupport.tsx), canonical homepage design and copy |
| For Employers | [ForEmployers.tsx](components/ForEmployers.tsx) | Page-local |
| Frequently Asked Questions | [FrequentlyAskedQuestions.tsx](components/FrequentlyAskedQuestions.tsx) | Page-local |
| Funding eligibility and IPC support | [FundingEligibilityAndIPCSupport.tsx](components/FundingEligibilityAndIPCSupport.tsx) | Page-local |
| Apprenticeship eligibility | [ApprenticeshipEligibility.tsx](components/ApprenticeshipEligibility.tsx) | [EligibilityCheckerSection.tsx](../../components/feature/EligibilityCheckerSection.tsx) |
| Funding and costs | [FundingAndCosts.tsx](components/FundingAndCosts.tsx) | [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx), canonical homepage design and copy |
| Institute of Project Controls | [InstituteOfProjectControls.tsx](components/InstituteOfProjectControls.tsx) | [IpcAuthority.tsx](../../components/feature/IpcAuthority.tsx) |
| How You Learn | [HowYouLearn.tsx](components/HowYouLearn.tsx) | Page-local |
| Key Programme Facts | [KeyProgrammeFacts.tsx](components/KeyProgrammeFacts.tsx) | Page-local |
| Learn from Practitioners | [LearnFromPractitioners.tsx](components/LearnFromPractitioners.tsx) | [MeetMentors.tsx](../../components/feature/MeetMentors.tsx), shared homepage section placed immediately before coaching |
| Learn By Building | [LearnByBuilding.tsx](components/LearnByBuilding.tsx) | Page-local |
| Learner Experiences | [LearnerEmployerFeedback.tsx](components/LearnerEmployerFeedback.tsx) | [LearnerExperiences.tsx](../../components/feature/LearnerExperiences.tsx), canonical homepage design and copy |
| Level4 Work Based Apprenticeship | [Level4WorkBasedApprenticeship.tsx](components/Level4WorkBasedApprenticeship.tsx) | Page-local |
| Professional Development | [ProfessionalDevelopment.tsx](components/ProfessionalDevelopment.tsx) | Page-local |
| Trust And Relevance | [TrustAndRelevance.tsx](components/TrustAndRelevance.tsx) | [ProjectDrivenSectors.tsx](../../components/feature/ProjectDrivenSectors.tsx), canonical homepage design and copy |
| Weekly Commitment | [WeeklyCommitment.tsx](components/WeeklyCommitment.tsx) | Page-local |
| What You Will Learn | [WhatYouWillLearn.tsx](components/WhatYouWillLearn.tsx) | Page-local |
| Who Should Apply | [WhoShouldApply.tsx](components/WhoShouldApply.tsx) | Page-local |
| Your12 Month Development Journey | [Your12MonthDevelopmentJourney.tsx](components/Your12MonthDevelopmentJourney.tsx) | Page-local |
| Your Next Step | [YourNextStep.tsx](components/YourNextStep.tsx) | Page-local |

Section copy, repeated items and configuration:

- [pageCopy.ts](pageCopy.ts) — current page copy, organised by section.
- [ProgrammeContentSection.tsx](components/ProgrammeContentSection.tsx) — page-local section and card layouts.
- [programmeData.ts](programmeData.ts)
- [sectionData.ts](sectionData.ts)

Keep `page.tsx` focused on section order and page state. Add new page-specific sections to `components/`, use the visible label for the filename, and update imports when renaming. Shared navigation and the footer remain in `src/components/feature/`.

The coaching section is shared with the homepage and all other coach sections. Edit [CoachingSupport.tsx](../../components/feature/CoachingSupport.tsx) for site-wide section changes; coach profiles remain dashboard-managed. The `coaching` anchor is preserved for programme navigation.

The Funding & Costs design and copy are shared across the site. Edit [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx) for changes everywhere; page wrappers only set existing navigation anchors. Dates and employer contributions derive from `src/data/apprenticeshipFundingPolicy.ts`.

The mentor section uses the canonical homepage content and portrait-card layout in [MeetMentors.tsx](../../components/feature/MeetMentors.tsx). Changes there apply to every consumer, including mobile looping. Images, profile destinations and LinkedIn links come from the dashboard-managed mentor records; only navigation anchors vary by page.

The full sector section is shared through [ProjectDrivenSectors.tsx](../../components/feature/ProjectDrivenSectors.tsx). Edit this component for site-wide content and design changes. Images use `src/data/sectorHeroImages.ts`; active status is read from dashboard-managed sector records through `useActiveSectors`. Page wrappers preserve existing navigation anchors.

The featured learner-experience section uses the homepage design and copy in [LearnerExperiences.tsx](../../components/feature/LearnerExperiences.tsx). The homepage and programme-footer entry points share this implementation, so changes apply everywhere. The full approved-review directory and review submission flow remain available through `/testimonials`. Existing page placement and testimonial anchors are preserved.

The IPC promotion section uses the canonical content and dark/gold design in [IpcAuthority.tsx](../../components/feature/IpcAuthority.tsx). The shared section owns both recognition/growth features and its gold primary / outline secondary actions. Page wrappers supply no content overrides; published portraits remain dashboard-managed.
