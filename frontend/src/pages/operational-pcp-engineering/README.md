# operational-pcp-engineering sections

Composition: [page.tsx](page.tsx). Routes: `/project-controls-professional/engineering-manufacturing-aerospace-route`, `/operational-pcp-engineering`.

Find the label on the page, then open its component below. Shared implementation links are provided where a section is reused. Data and API calls retain their existing ownership.

| Label / heading | Component | Shared implementation |
| --- | --- | --- |
| Choose your professional direction | [ChooseYourProfessionalDirection.tsx](components/ChooseYourProfessionalDirection.tsx) | [SectorPathwayChoice.tsx](../../components/feature/SectorPathwayChoice.tsx) |
| Engineering Advanced Manufacturing | [EngineeringAdvancedManufacturing.tsx](components/EngineeringAdvancedManufacturing.tsx) | Page-local |
| Engineering Project Controls Evidence | [EngineeringProjectControlsEvidence.tsx](components/EngineeringProjectControlsEvidence.tsx) | Page-local |
| Funding And Bursary Access | [FundingAndBursaryAccess.tsx](components/FundingAndBursaryAccess.tsx) | [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx), canonical homepage design and copy |
| One Professional Foundation Across Complex Engineering Environments | [OneProfessionalFoundationAcrossComplexEngineeringEnvironments.tsx](components/OneProfessionalFoundationAcrossComplexEngineeringEnvironments.tsx) | Page-local |
| Project Controls That Protect Engineering Value | [ProjectControlsThatProtectEngineeringValue.tsx](components/ProjectControlsThatProtectEngineeringValue.tsx) | Page-local |
| Questions Before You Enquire | [QuestionsBeforeYouEnquire.tsx](components/QuestionsBeforeYouEnquire.tsx) | Page-local |
| Ready To Take Control | [ReadyToTakeControl.tsx](components/ReadyToTakeControl.tsx) | Page-local |

Section copy, repeated items and configuration:

- [sectionData.ts](sectionData.ts)
- [sectorData.ts](sectorData.ts)

Keep `page.tsx` focused on section order and page state. Add new page-specific sections to `components/`, use the visible label for the filename, and update imports when renaming. Shared navigation and the footer remain in `src/components/feature/`.

The Funding & Costs design and copy are shared across the site. Edit [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx) for changes everywhere; page wrappers only set existing navigation anchors. Dates and employer contributions derive from `src/data/apprenticeshipFundingPolicy.ts`.

The mentor section uses the canonical homepage content and portrait-card layout in [MeetMentors.tsx](../../components/feature/MeetMentors.tsx). Changes there apply to every consumer, including mobile looping. Images, profile destinations and LinkedIn links come from the dashboard-managed mentor records; only navigation anchors vary by page.

The inline eligibility section is omitted. Eligibility actions open the dedicated `/apprenticeship-eligibility-checker` route; the removed section has no item in the page navigation.
