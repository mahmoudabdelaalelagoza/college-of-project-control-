# employers sections

Composition: [page.tsx](page.tsx). Routes: `/employers`.

Find the label on the page, then open its component below. Shared implementation links are provided where a section is reused. Data and API calls retain their existing ownership.

| Label / heading | Component | Shared implementation |
| --- | --- | --- |
| Apprenticeship Funding | [ApprenticeshipFunding.tsx](components/ApprenticeshipFunding.tsx) | [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx), canonical homepage design and copy |
| Card Grid | [CardGrid.tsx](components/CardGrid.tsx) | Page-local |
| A Real Partnership | [ARealPartnership.tsx](components/ARealPartnership.tsx) | Page-local |
| Built For Project Driven Organisations | [BuiltForProjectDrivenOrganisations.tsx](components/BuiltForProjectDrivenOrganisations.tsx) | [ProjectDrivenSectors.tsx](../../components/feature/ProjectDrivenSectors.tsx), canonical homepage design and copy |
| Capability Planning | [CapabilityPlanning.tsx](components/CapabilityPlanning.tsx) | Page-local |
| Employer Resources | [EmployerResources.tsx](components/EmployerResources.tsx) | Page-local |
| Example Scenarios | [ExampleScenarios.tsx](components/ExampleScenarios.tsx) | Page-local |
| How The Partnership Works | [HowThePartnershipWorks.tsx](components/HowThePartnershipWorks.tsx) | Page-local |
| Learning Applied At Work | [LearningAppliedAtWork.tsx](components/LearningAppliedAtWork.tsx) | Page-local |
| Progress You Can See | [ProgressYouCanSee.tsx](components/ProgressYouCanSee.tsx) | Page-local |
| Project Controls Employer Partnerships | [ProjectControlsEmployerPartnerships.tsx](components/ProjectControlsEmployerPartnerships.tsx) | Page-local |
| Project Controls Pathways | [ProjectControlsPathways.tsx](components/ProjectControlsPathways.tsx) | Page-local |
| Questions Employers Usually Ask Before Starting | [QuestionsEmployersUsuallyAskBeforeStarting.tsx](components/QuestionsEmployersUsuallyAskBeforeStarting.tsx) | Page-local |
| Start With Your Need | [StartWithYourNeed.tsx](components/StartWithYourNeed.tsx) | Page-local |
| Why Work With KBC | [WhyWorkWithKBC.tsx](components/WhyWorkWithKBC.tsx) | Page-local |

Keep `page.tsx` focused on section order and page state. Add new page-specific sections to `components/`, use the visible label for the filename, and update imports when renaming. Shared navigation and the footer remain in `src/components/feature/`.

The Funding & Costs design and copy are shared across the site. Edit [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx) for changes everywhere; page wrappers only set existing navigation anchors. Dates and employer contributions derive from `src/data/apprenticeshipFundingPolicy.ts`.

The full sector section is shared through [ProjectDrivenSectors.tsx](../../components/feature/ProjectDrivenSectors.tsx). Edit this component for site-wide content and design changes. Images use `src/data/sectorHeroImages.ts`; active status is read from dashboard-managed sector records through `useActiveSectors`. Page wrappers preserve existing navigation anchors.
