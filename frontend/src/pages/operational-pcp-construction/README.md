# operational-pcp-construction sections

Composition: [page.tsx](page.tsx). Routes: `/project-controls-professional/construction-route`, `/operational-pcp-construction`.

Find the label on the page, then open its component below. Shared implementation links are provided where a section is reused. Data and API calls retain their existing ownership.

| Label / heading | Component | Shared implementation |
| --- | --- | --- |
| Associate Pathway Callout | [AssociatePathwayCallout.tsx](components/AssociatePathwayCallout.tsx) | Page-local |
| Choose Your Pathway Check Your Access Route | [ChooseYourPathwayCheckYourAccessRoute.tsx](components/ChooseYourPathwayCheckYourAccessRoute.tsx) | Page-local |
| Choose your professional direction | [ChooseYourProfessionalDirection.tsx](components/ChooseYourProfessionalDirection.tsx) | [SectorPathwayChoice.tsx](../../components/feature/SectorPathwayChoice.tsx) |
| Construction Infrastructure | [ConstructionInfrastructure.tsx](components/ConstructionInfrastructure.tsx) | Page-local |
| Core Professional Capability | [CoreProfessionalCapability.tsx](components/CoreProfessionalCapability.tsx) | Page-local |
| Employer Capability | [EmployerCapability.tsx](components/EmployerCapability.tsx) | Page-local |
| Expert Led Perspectives | [ExpertLedPerspectives.tsx](components/ExpertLedPerspectives.tsx) | [MeetMentors.tsx](../../components/feature/MeetMentors.tsx), canonical homepage copy, portrait cards and mobile looping |
| Funding Bursary Access | [FundingBursaryAccess.tsx](components/FundingBursaryAccess.tsx) | [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx), canonical homepage design and copy |
| Interactive Pathway Builder | [InteractivePathwayBuilder.tsx](components/InteractivePathwayBuilder.tsx) | Page-local |
| Practical Answers | [PracticalAnswers.tsx](components/PracticalAnswers.tsx) | Page-local |
| Professional Progression | [ProfessionalProgression.tsx](components/ProfessionalProgression.tsx) | Page-local |
| Quick Access Route Check | [QuickAccessRouteCheck.tsx](components/QuickAccessRouteCheck.tsx) | Page-local |
| Sector Application | [SectorApplication.tsx](components/SectorApplication.tsx) | Page-local |
| The Construction Challenge | [TheConstructionChallenge.tsx](components/TheConstructionChallenge.tsx) | Page-local |
| The Learning Experience | [TheLearningExperience.tsx](components/TheLearningExperience.tsx) | Page-local |
| Workplace Evidence | [WorkplaceEvidence.tsx](components/WorkplaceEvidence.tsx) | Page-local |

Section copy, repeated items and configuration:

- [sectionData.ts](sectionData.ts)
- [sectorData.ts](sectorData.ts)

Keep `page.tsx` focused on section order and page state. Add new page-specific sections to `components/`, use the visible label for the filename, and update imports when renaming. Shared navigation and the footer remain in `src/components/feature/`.

The Funding & Costs design and copy are shared across the site. Edit [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx) for changes everywhere; page wrappers only set existing navigation anchors. Dates and employer contributions derive from `src/data/apprenticeshipFundingPolicy.ts`.

The mentor section uses the canonical homepage content and portrait-card layout in [MeetMentors.tsx](../../components/feature/MeetMentors.tsx). Changes there apply to every consumer, including mobile looping. Images, profile destinations and LinkedIn links come from the dashboard-managed mentor records; only navigation anchors vary by page.
