# chartered-pmo-pathway sections

Composition: [page.tsx](page.tsx). Routes: `/project-controls-professional/chartered-pmo-pathway`, `/chartered-pmo-pathway`.

Find the label on the page, then open its component below. Shared implementation links are provided where a section is reused. Data and API calls retain their existing ownership.

| Label / heading | Component | Shared implementation |
| --- | --- | --- |
| APM Professional Recognition | [ApmProfessionalRecognition.tsx](components/ApmProfessionalRecognition.tsx) | [SectionHeading.tsx](../../components/base/SectionHeading.tsx), site typography and heading treatment |
| APMG International Certification Context | [APMGInternationalCertificationContext.tsx](components/APMGInternationalCertificationContext.tsx) | Page-local |
| College Specialist Development | [CollegeSpecialistDevelopment.tsx](components/CollegeSpecialistDevelopment.tsx) | Page-local |
| Employer Partnership | [EmployerPartnership.tsx](components/EmployerPartnership.tsx) | [SectionHeading.tsx](../../components/base/SectionHeading.tsx), site typography and heading treatment |
| Apprenticeship eligibility | [EligibilityCriteria.tsx](components/EligibilityCriteria.tsx) | [EligibilityCheckerSection.tsx](../../components/feature/EligibilityCheckerSection.tsx), canonical homepage design and content |
| Funding & Costs | [FundingAndCosts.tsx](components/FundingAndCosts.tsx) | [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx), canonical homepage design and content |
| Independent Professional Development Route | [IndependentProfessionalDevelopmentRoute.tsx](components/IndependentProfessionalDevelopmentRoute.tsx) | Page-local |
| Your Learning Experience | [LiveTeachingCoachingAndWorkplaceApplication.tsx](components/LiveTeachingCoachingAndWorkplaceApplication.tsx) | [SectionHeading.tsx](../../components/base/SectionHeading.tsx), site typography and heading treatment |
| Apprenticeship Assessment | [OccupationalAssessmentAndFutureChPPApplication.tsx](components/OccupationalAssessmentAndFutureChPPApplication.tsx) | [SectionHeading.tsx](../../components/base/SectionHeading.tsx), site typography and heading treatment |
| PMO Professional Development Module1 | [PMOProfessionalDevelopmentModule1.tsx](components/PMOProfessionalDevelopmentModule1.tsx) | Page-local |
| PMO Professional Development Module2 | [PMOProfessionalDevelopmentModule2.tsx](components/PMOProfessionalDevelopmentModule2.tsx) | Page-local |
| PMO Professional Development Module3 | [PMOProfessionalDevelopmentModule3.tsx](components/PMOProfessionalDevelopmentModule3.tsx) | Page-local |
| PMO Professional Development Module4 | [PMOProfessionalDevelopmentModule4.tsx](components/PMOProfessionalDevelopmentModule4.tsx) | Page-local |
| Take the Next Step | [ProgrammeInformationAndNextSteps.tsx](components/ProgrammeInformationAndNextSteps.tsx) | Matches the Strategic Pathway CTA design; shared site buttons and typography |
| Chartered Pathway hero | [ProjectControlsProfessionalLevel6.tsx](components/ProjectControlsProfessionalLevel6.tsx) | Page-local |
| The Chartered Development Journey | [TechnicalKnowledgeProfessionalPracticeCharteredAmbition.tsx](components/TechnicalKnowledgeProfessionalPracticeCharteredAmbition.tsx) | [SectionHeading.tsx](../../components/base/SectionHeading.tsx), site typography and heading treatment |
| Beyond the Professional Modules | [TheCompleteST0845CapabilityRemainsMandatory.tsx](components/TheCompleteST0845CapabilityRemainsMandatory.tsx) | [SectionHeading.tsx](../../components/base/SectionHeading.tsx), site typography and heading treatment |
| Your Chartered Learning Pathway | [TheProfessionalDevelopmentArchitecture.tsx](components/TheProfessionalDevelopmentArchitecture.tsx) | [SectionHeading.tsx](../../components/base/SectionHeading.tsx), site typography and heading treatment |
| PMO Professional Development at Level 6 | [TheTechnicalKnowledgeDevelopmentComponent.tsx](components/TheTechnicalKnowledgeDevelopmentComponent.tsx) | [SectionHeading.tsx](../../components/base/SectionHeading.tsx), site typography and heading treatment |
| Professional Practice | [WorkplaceApplication.tsx](components/WorkplaceApplication.tsx) | [SectionHeading.tsx](../../components/base/SectionHeading.tsx), site typography and heading treatment |
| Who Should Choose This Pathway? | [WhoShouldChooseTheCharteredPathway.tsx](components/WhoShouldChooseTheCharteredPathway.tsx) | [SectionHeading.tsx](../../components/base/SectionHeading.tsx), site typography and heading treatment |

The hero exploration button targets the pathway overview at `#pathway-overview`; the consultation button links to `/book-a-session`. The hero uses the same responsive typography, header clearance and button styles as the other pathway pages and states that Chartered status is awarded separately by APM.

The role-fit section (`WhoShouldChooseTheCharteredPathway.tsx`, `#role-fit`) follows the development journey directly, with three professional groups and the workplace suitability note.

The learning pathway (`TheProfessionalDevelopmentArchitecture.tsx`, `#pathway-structure`) is section four: four PMO credits, one AI credit and one specialist choice (EVM or Managing Portfolios). The total is calculated from these components. The older `CatalogueNavigation.tsx` summary is no longer rendered because it described three specialist components rather than the agreed six-credit structure.

Professional Practice (`WorkplaceApplication.tsx`, `#workplace-application`) follows full occupational capability as section six, with six illustrative workplace outputs and the authenticity and confidentiality note. Apprenticeship and ChPP assessment information remains separate at `#professional-evidence`.

APM Professional Recognition (`ApmProfessionalRecognition.tsx`, `#apm-recognition`) follows workplace application as section seven. It links to APM's recognised-assessment listing and the programme consultation route, and distinguishes technical-knowledge recognition from the independent award of ChPP.

Your Learning Experience (`LiveTeachingCoachingAndWorkplaceApplication.tsx`, `#delivery`) follows APM recognition as section eight. Its five-step learning cycle is presented as a connected timeline: vertical on smaller screens and horizontal on wide screens. The timeline is followed by the indicative 27-month KBC plan, the national standard's published duration and training hours, and the individual training-plan and eligible-learning notes.

Employer Partnership (`EmployerPartnership.tsx`, `#chartered-employers`) follows the learning experience as section nine, with five employer commitments, potential organisational benefits and a consultation link to `/book-a-session`.

Apprenticeship Assessment (`OccupationalAssessmentAndFutureChPPApplication.tsx`, `#professional-evidence`) follows employer partnership as section ten. It covers the two EPA methods, gateway preparation, separate apprenticeship and Chartered outcomes, and the distinction between module reflections and formal EPA portfolio evidence.

PMO Professional Development at Level 6 (`TheTechnicalKnowledgeDevelopmentComponent.tsx`, `#certified-pmo-core`) uses one simple programme panel: three headline facts, four linked module summaries, a short assessment description and a link to the full APM recognition section. Detailed module sections remain available at their existing anchors.

Earned Value Management (`#earned-value-management`) is followed immediately by shared Funding & Costs (`#chartered-funding`) and shared Apprenticeship eligibility (`#chartered-eligibility`). Both use the canonical homepage components without content overrides. The previous page-specific eligibility markup has been replaced, and the page navigation targets the shared sections.

The final Take the Next Step block (`ProgrammeInformationAndNextSteps.tsx`, `#sources-contact`) follows the shared eligibility section. It uses the Strategic Pathway CTA design with Chartered-specific copy, eligibility and consultation links, and the admissions email shown in the approved reference (`office@kentbusinesscollege.org`).

Keep `page.tsx` focused on section order and page state. Add new page-specific sections to `components/`, use the visible label for the filename, and update imports when renaming. Shared navigation and the footer remain in `src/components/feature/`.

The featured learner-experience section uses the homepage design and copy in [LearnerExperiences.tsx](../../components/feature/LearnerExperiences.tsx). The homepage and programme-footer entry points share this implementation, so changes apply everywhere. The full approved-review directory and review submission flow remain available through `/testimonials`. Existing page placement and testimonial anchors are preserved.
