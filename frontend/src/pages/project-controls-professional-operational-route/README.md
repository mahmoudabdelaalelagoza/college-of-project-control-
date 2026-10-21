# Operational Pathway sections

Composition: [page.tsx](page.tsx). Route: `/project-controls-professional/operational-route`.

Sections follow the visitor's journey: understand the pathway, establish role fit, explore the capabilities and workplace outputs, review the learning plan and assessment, then review employer commitments, funding, eligibility and IPC professional development before contacting admissions. The page-section navigation follows the same order.

| Order | Label / heading | Component | Shared implementation |
| --- | --- | --- | --- |
| 1 | Operational Pathway hero | [Section202627LearnerAndEmployerPathway.tsx](components/Section202627LearnerAndEmployerPathway.tsx) | Page-local |
| 2 | The Operational Pathway | [TheOperationalRoute.tsx](components/TheOperationalRoute.tsx) | Page-local |
| 3 | Who This Pathway Is For | [WhoItIsFor.tsx](components/WhoItIsFor.tsx) | Page-local |
| 4 | Operational Capabilities | [CapabilityThemes.tsx](components/CapabilityThemes.tsx) | Page-local |
| 5 | Workplace Outputs | [ProfessionalArtefacts.tsx](components/ProfessionalArtefacts.tsx) | Page-local |
| 6 | Your Six-Credit Pathway | [SelectSixCredits.tsx](components/SelectSixCredits.tsx) | Page-local |
| 7 | Gateway & End-Point Assessment | [GatewayAndEPA.tsx](components/GatewayAndEPA.tsx) | Page-local |
| 8 | For Employers | [EmployerResponsibilities.tsx](components/EmployerResponsibilities.tsx) | Page-local |
| 9 | Funding & Costs | [FundingScenariosFor202627Starts.tsx](components/FundingScenariosFor202627Starts.tsx) | [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx), canonical homepage design and copy |
| 10 | Apprenticeship Eligibility | [EligibilityCriteria.tsx](components/EligibilityCriteria.tsx) | [EligibilityCheckerSection.tsx](../../components/feature/EligibilityCheckerSection.tsx), shared design and content |
| 11 | Institute of Project Controls (IPC) | [InstituteOfProjectControls.tsx](components/InstituteOfProjectControls.tsx) | [IpcAuthority.tsx](../../components/feature/IpcAuthority.tsx), canonical homepage design and copy |
| 12 | Take the Next Step | [TakeTheNextStep.tsx](components/TakeTheNextStep.tsx) | Page-local |

[OperationalPathwayQuickEnquiry.tsx](components/OperationalPathwayQuickEnquiry.tsx) provides the floating enquiry controls. It is separate from the ordered page sections. Shared navigation and the footer remain in `src/components/feature/`.

Keep `page.tsx` focused on section order and page state. Add new page-specific sections to `components/` and keep the navigation and this guide aligned with the rendered order. Data and API calls retain their existing ownership.

The Funding & Costs design and copy are shared across the site. Edit [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx) for changes everywhere; [FundingScenariosFor202627Starts.tsx](components/FundingScenariosFor202627Starts.tsx) only sets the existing `operational-funding` navigation anchor. Dates and employer contributions derive from `src/data/apprenticeshipFundingPolicy.ts`.

Eligibility uses the canonical [EligibilityCheckerSection.tsx](../../components/feature/EligibilityCheckerSection.tsx), also used by the APM and PMO pages. The page wrapper only sets `operational-eligibility`, so shared design and content updates apply here too.

The following legacy module components remain in the folder but are not rendered by this page. The current module selection is owned by `SelectSixCredits.tsx`:

- [CoreCreditAIInProjectControls.tsx](components/CoreCreditAIInProjectControls.tsx)
- [CoreCreditPMPPreparation.tsx](components/CoreCreditPMPPreparation.tsx)
- [CoreCreditProjectPlanningAndControl.tsx](components/CoreCreditProjectPlanningAndControl.tsx)
- [SpecialistElectiveAPMRiskManagement.tsx](components/SpecialistElectiveAPMRiskManagement.tsx)
- [SpecialistElectiveEarnedValueManagement.tsx](components/SpecialistElectiveEarnedValueManagement.tsx)
- [SpecialistElectivePMISchedulingProfessional.tsx](components/SpecialistElectivePMISchedulingProfessional.tsx)
