# Strategic Pathway sections

Composition: [page.tsx](page.tsx). Routes: `/project-controls-professional/strategic-route`, `/strategic-pcp`.

The visitor journey moves from understanding the pathway and role fit to learning, workplace application, assessment, expert support, employer commitments, funding and contact. [StrategicPathwayNav.tsx](components/StrategicPathwayNav.tsx) follows the same order and measures the public header so the sticky navigation and anchor destinations stay clear of it on mobile and desktop.

| Order | Visible section | Component | Shared implementation |
| --- | --- | --- | --- |
| 1 | Strategic Pathway hero | [ProjectControlsProfessionalLevel6.tsx](components/ProjectControlsProfessionalLevel6.tsx) | Page-local |
| 2 | The Strategic Advantage | [FromEvidenceToAction.tsx](components/FromEvidenceToAction.tsx) | [StrategicSection.tsx](components/StrategicSection.tsx) |
| 3 | Who This Pathway Is For & Eligibility | [WhoShouldApply.tsx](components/WhoShouldApply.tsx) | StrategicSection; `#eligibility` targets the review panel |
| 4 | Your Learning Pathway | [YourCreditJourney.tsx](components/YourCreditJourney.tsx) | StrategicSection |
| 5 | How you study | [HowYouStudy.tsx](components/HowYouStudy.tsx) | StrategicSection; includes programme coaching guidance |
| 6 | From Learning to Practice | [WorkplaceApplication.tsx](components/WorkplaceApplication.tsx) | StrategicSection |
| 7 | Assessment & Progression | [StrategicPathwayComplete.tsx](components/StrategicPathwayComplete.tsx) | StrategicSection; existing `#completion` anchor |
| 8 | Learn from Practitioners | [ExpertLedLearning.tsx](components/ExpertLedLearning.tsx) | [MeetMentors.tsx](../../components/feature/MeetMentors.tsx), canonical homepage content, portraits and mobile looping |
| 9 | Employer Partnership | [EmployerPartnership.tsx](components/EmployerPartnership.tsx) | StrategicSection |
| 10 | Funding & Costs | [FundingScenariosForStartsFrom1August2026.tsx](components/FundingScenariosForStartsFrom1August2026.tsx) | [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx), canonical homepage content and design |
| 11 | Take the Next Step | [TakeTheNextStep.tsx](components/TakeTheNextStep.tsx) | Page-local; `#apply` |

[StrategicSection.tsx](components/StrategicSection.tsx) uses the site's [SectionHeading.tsx](../../components/base/SectionHeading.tsx), spacing, colour tokens and dotted background. It keeps page-specific copy consistent with the rest of the site. [strategic.css](strategic.css) scopes measured header and section-navigation offsets to this page.

Funding and mentor wrappers only set existing navigation anchors. Edit their shared implementations to change these sections everywhere. There are no Strategic Pathway copy or layout overrides. Funding dates and contribution rates remain owned by `src/data/apprenticeshipFundingPolicy.ts`. Mentor portraits, profile destinations and LinkedIn links come from dashboard-managed records.

The final CTA links to the apprenticeship eligibility checker, pathway consultation booking and `office@kentbusinesscollege.org`.

The following older components remain available in the folder but are no longer rendered separately. Their topics are covered by the updated pathway, learning, audience, assessment and employer sections:

- [AIInProjectControls.tsx](components/AIInProjectControls.tsx)
- [PMPExamPreparationAndStrategicProjectLeadership.tsx](components/PMPExamPreparationAndStrategicProjectLeadership.tsx)
- [PRINCE2ProgrammeManagement.tsx](components/PRINCE2ProgrammeManagement.tsx)
- [PRINCE2PortfolioManagement.tsx](components/PRINCE2PortfolioManagement.tsx)
- [PMIPMOCPPreparationAndPMOLeadership.tsx](components/PMIPMOCPPreparationAndPMOLeadership.tsx)
- [ProgrammeEssentials.tsx](components/ProgrammeEssentials.tsx)
- [EligibilityCriteria.tsx](components/EligibilityCriteria.tsx)

Keep `page.tsx` focused on composition, and keep this guide and the section navigation aligned with the rendered order. Shared public navigation and the footer remain in `src/components/feature/`.
