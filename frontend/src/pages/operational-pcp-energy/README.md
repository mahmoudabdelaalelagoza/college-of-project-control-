# operational-pcp-energy sections

Composition: [page.tsx](page.tsx). Routes: `/project-controls-professional/energy-oil-gas-utilities-route`, `/operational-pcp-energy`.

Find the label on the page, then open its component below. Shared implementation links are provided where a section is reused. Data and API calls retain their existing ownership.

| Label / heading | Component | Shared implementation |
| --- | --- | --- |
| Build A Project Management Foundation For The Energy Sector | [BuildAProjectManagementFoundationForTheEnergySector.tsx](components/BuildAProjectManagementFoundationForTheEnergySector.tsx) | Page-local |
| Build The Capability To Control Complex Energy Programmes With Confidence | [BuildTheCapabilityToControlComplexEnergyProgrammesWithConfidence.tsx](components/BuildTheCapabilityToControlComplexEnergyProgrammesWithConfidence.tsx) | Page-local |
| Check The Right Access Route For You | [CheckTheRightAccessRouteForYou.tsx](components/CheckTheRightAccessRouteForYou.tsx) | Page-local |
| Choose your professional direction | [ChooseYourProfessionalDirection.tsx](components/ChooseYourProfessionalDirection.tsx) | [SectorPathwayChoice.tsx](../../components/feature/SectorPathwayChoice.tsx) |
| Core Professional Capability | [CoreProfessionalCapability.tsx](components/CoreProfessionalCapability.tsx) | Page-local |
| Employer Capability | [EmployerCapability.tsx](components/EmployerCapability.tsx) | Page-local |
| Energy Utilities | [EnergyUtilities.tsx](components/EnergyUtilities.tsx) | Page-local |
| Expert Led Perspectives | [ExpertLedPerspectives.tsx](components/ExpertLedPerspectives.tsx) | [MeetMentors.tsx](../../components/feature/MeetMentors.tsx), canonical homepage copy, portrait cards and mobile looping |
| Funding Bursary Access | [FundingBursaryAccess.tsx](components/FundingBursaryAccess.tsx) | [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx), canonical homepage design and copy |
| One Foundation | [OneFoundation.tsx](components/OneFoundation.tsx) | Page-local |
| Practical Answers | [PracticalAnswers.tsx](components/PracticalAnswers.tsx) | Page-local |
| Professional Progression | [ProfessionalProgression.tsx](components/ProfessionalProgression.tsx) | Page-local |
| Sector Application | [SectorApplication.tsx](components/SectorApplication.tsx) | Page-local |
| The Energy Delivery Challenge | [TheEnergyDeliveryChallenge.tsx](components/TheEnergyDeliveryChallenge.tsx) | Page-local |
| The Learning Experience | [TheLearningExperience.tsx](components/TheLearningExperience.tsx) | Page-local |
| Workplace Evidence | [WorkplaceEvidence.tsx](components/WorkplaceEvidence.tsx) | Page-local |

Section copy, repeated items and configuration:

- [sectionData.ts](sectionData.ts)
- [sectorData.ts](sectorData.ts)

Keep `page.tsx` focused on section order and page state. Add new page-specific sections to `components/`, use the visible label for the filename, and update imports when renaming. Shared navigation and the footer remain in `src/components/feature/`.

The Funding & Costs design and copy are shared across the site. Edit [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx) for changes everywhere; page wrappers only set existing navigation anchors. Dates and employer contributions derive from `src/data/apprenticeshipFundingPolicy.ts`.

The mentor section uses the canonical homepage content and portrait-card layout in [MeetMentors.tsx](../../components/feature/MeetMentors.tsx). Changes there apply to every consumer, including mobile looping. Images, profile destinations and LinkedIn links come from the dashboard-managed mentor records; only navigation anchors vary by page.
