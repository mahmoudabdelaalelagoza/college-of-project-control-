# project-controls-professional-level-6 sections

Composition: [page.tsx](page.tsx). Route: `/project-controls-professional-level-6`.

Find the label on the page, then open its component below. Shared implementation links are provided where a section is reused. Data and API calls retain their existing ownership.

| Label / heading | Component | Shared implementation |
| --- | --- | --- |
| Sticky Cta | [StickyCta.tsx](components/StickyCta.tsx) | [StickyProgrammeCta.tsx](../../components/feature/StickyProgrammeCta.tsx) |
| Capability And Workplace Outputs | [CapabilityAndWorkplaceOutputs.tsx](components/CapabilityAndWorkplaceOutputs.tsx) | Page-local |
| Coaching & Support | [CoachingAndSupport.tsx](components/CoachingAndSupport.tsx) | [CoachingSupport.tsx](../../components/feature/CoachingSupport.tsx), canonical homepage design and copy |
| Sector-informed learning | [CohortOrientation.tsx](components/CohortOrientation.tsx) | Page-local |
| College Of Project Controls And Project Management | [CollegeOfProjectControlsAndProjectManagement.tsx](components/CollegeOfProjectControlsAndProjectManagement.tsx) | Page-local |
| Course At A Glance | [CourseAtAGlance.tsx](components/CourseAtAGlance.tsx) | Page-local |
| Delivery And Assessment | [DeliveryAndAssessment.tsx](components/DeliveryAndAssessment.tsx) | Page-local |
| Bullets | [Bullets.tsx](components/Bullets.tsx) | Page-local |
| Partner organisation logos | [EmployerPartnershipsAcrossProjectDrivenSectors.tsx](components/EmployerPartnershipsAcrossProjectDrivenSectors.tsx) | [TrustedBy.tsx](../home/components/TrustedBy.tsx) |
| Expected Workload | [ExpectedWorkload.tsx](components/ExpectedWorkload.tsx) | Page-local |
| Funding eligibility and IPC support | [FundingEligibilityAndIPCSupport.tsx](components/FundingEligibilityAndIPCSupport.tsx) | Page-local |
| Apprenticeship eligibility | [ApprenticeshipEligibility.tsx](components/ApprenticeshipEligibility.tsx) | Page-local |
| Funding and costs | [FundingAndCosts.tsx](components/FundingAndCosts.tsx) | [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx), canonical homepage design and copy |
| Institute of Project Controls | [InstituteOfProjectControls.tsx](components/InstituteOfProjectControls.tsx) | [IpcAuthority.tsx](../../components/feature/IpcAuthority.tsx) |
| Learn from Practitioners | [LearnFromPractitioners.tsx](components/LearnFromPractitioners.tsx) | [MeetMentors.tsx](../../components/feature/MeetMentors.tsx), canonical homepage copy, portrait cards and mobile looping |
| Next Step | [NextStep.tsx](components/NextStep.tsx) | Page-local |
| Professional pathways | [ProfessionalPathways.tsx](components/ProfessionalPathways.tsx) | Page-local |
| Programme Benefits | [ProgrammeBenefits.tsx](components/ProgrammeBenefits.tsx) | Page-local |
| Programme events & masterclasses | [ProgrammeEventsMasterclasses.tsx](components/ProgrammeEventsMasterclasses.tsx) | [EventsSection.tsx](../../components/feature/EventsSection.tsx) |
| Programme Overview | [ProgrammeOverview.tsx](components/ProgrammeOverview.tsx) | Page-local |
| Programme Structure | [ProgrammeStructure.tsx](components/ProgrammeStructure.tsx) | Page-local |
| Project Controls Professional Level 6, clearly explained | [ProjectControlsProfessionalLevel6ClearlyExplained.tsx](components/ProjectControlsProfessionalLevel6ClearlyExplained.tsx) | [PcpFaqSection.tsx](../../components/feature/PcpFaqSection.tsx) |
| Project-Driven Sectors | [ProjectDrivenSectorsSection.tsx](components/ProjectDrivenSectorsSection.tsx) | [ProjectDrivenSectors.tsx](../../components/feature/ProjectDrivenSectors.tsx), canonical homepage design and copy |
| Register Your Interest | [RegisterYourInterest.tsx](components/RegisterYourInterest.tsx) | Page-local |
| Who Should Apply | [WhoShouldApply.tsx](components/WhoShouldApply.tsx) | Page-local |
| Professional Capability | [ProfessionalCapability.tsx](components/ProfessionalCapability.tsx) | Page-local |

The supplied Level 6 page content is maintained in [pageCopy.ts](pageCopy.ts). Pathways and eligibility render page-specific copy; shared services continue to provide portraits, profile destinations, logos and events. Funding figures derive from the canonical programme and funding policy data.

Section copy, repeated items and configuration:

- [pageCopy.ts](pageCopy.ts)
- [programmeData.ts](programmeData.ts)
- [sectionData.ts](sectionData.ts)

Keep `page.tsx` focused on section order and page state. Add new page-specific sections to `components/`, use the visible label for the filename, and update imports when renaming. Shared navigation and the footer remain in `src/components/feature/`.

The coaching section is shared with the homepage and all other coach sections. Edit [CoachingSupport.tsx](../../components/feature/CoachingSupport.tsx) for site-wide section changes; coach profiles remain dashboard-managed. The `coaching` anchor is preserved for programme navigation.

The Funding & Costs design and copy are shared across the site. Edit [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx) for changes everywhere; page wrappers only set existing navigation anchors. Dates and employer contributions derive from `src/data/apprenticeshipFundingPolicy.ts`.

The mentor section uses the canonical homepage content and portrait-card layout in [MeetMentors.tsx](../../components/feature/MeetMentors.tsx). Changes there apply to every consumer, including mobile looping. Images, profile destinations and LinkedIn links come from the dashboard-managed mentor records; only navigation anchors vary by page.

The full sector section is shared through [ProjectDrivenSectors.tsx](../../components/feature/ProjectDrivenSectors.tsx). Edit this component for site-wide content and design changes. Images use `src/data/sectorHeroImages.ts`; active status is read from dashboard-managed sector records through `useActiveSectors`. Page wrappers preserve existing navigation anchors.

The featured learner-experience section uses the homepage design and copy in [LearnerExperiences.tsx](../../components/feature/LearnerExperiences.tsx). The homepage and programme-footer entry points share this implementation, so changes apply everywhere. The full approved-review directory and review submission flow remain available through `/testimonials`. Existing page placement and testimonial anchors are preserved.

The IPC promotion section uses the canonical content and dark/gold design in [IpcAuthority.tsx](../../components/feature/IpcAuthority.tsx). The shared section owns both recognition/growth features and its gold primary / outline secondary actions. Page wrappers supply no content overrides; published portraits remain dashboard-managed.
