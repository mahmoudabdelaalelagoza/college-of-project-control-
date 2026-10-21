# pmo-pcp sections

Composition: [page.tsx](page.tsx). Routes: `/project-controls-professional/pmo-governance-route`, `/pmo-pcp`.

Find the label on the page, then open its component below. Shared implementation links are provided where a section is reused. Data and API calls retain their existing ownership.

| Label / heading | Component | Shared implementation |
| --- | --- | --- |
| Apm Recognition | [ApmRecognition.tsx](components/ApmRecognition.tsx) | Page-local |
| Apply Stronger PMO Practice | [ApplyStrongerPMOPractice.tsx](components/ApplyStrongerPMOPractice.tsx) | [OutcomeExamples.tsx](../../components/feature/OutcomeExamples.tsx) |
| Apprenticeship Route | [ApprenticeshipRoute.tsx](components/ApprenticeshipRoute.tsx) | Page-local |
| A Workplace Development Journey Not Just A Course | [AWorkplaceDevelopmentJourneyNotJustACourse.tsx](components/AWorkplaceDevelopmentJourneyNotJustACourse.tsx) | Page-local |
| Develop PMO Capability Inside Your Organisation | [DevelopPMOCapabilityInsideYourOrganisation.tsx](components/DevelopPMOCapabilityInsideYourOrganisation.tsx) | Page-local |
| Footer Landscape | [FooterLandscape.tsx](components/FooterLandscape.tsx) | Page-local |
| Four Capabilities One Route To APMO That Leaders Trust | [FourCapabilitiesOneRouteToAPMOThatLeadersTrust.tsx](components/FourCapabilitiesOneRouteToAPMOThatLeadersTrust.tsx) | Page-local |
| Four Capabilities To Help Your PMO Become Trusted | [FourCapabilitiesToHelpYourPMOBecomeTrusted.tsx](components/FourCapabilitiesToHelpYourPMOBecomeTrusted.tsx) | Page-local |
| Funding eligibility and IPC support | [FundingEligibilityAndIPCSupport.tsx](components/FundingEligibilityAndIPCSupport.tsx) | Page-local |
| Apprenticeship eligibility | [ApprenticeshipEligibility.tsx](components/ApprenticeshipEligibility.tsx) | [EligibilityCheckerSection.tsx](../../components/feature/EligibilityCheckerSection.tsx) |
| Funding and costs | [FundingAndCosts.tsx](components/FundingAndCosts.tsx) | [FundingOptionsSection.tsx](../../components/feature/FundingOptionsSection.tsx) |
| Institute of Project Controls | [InstituteOfProjectControls.tsx](components/InstituteOfProjectControls.tsx) | [IpcAuthority.tsx](../../components/feature/IpcAuthority.tsx) |
| Get Direction For Stronger PMO Capability | [GetDirectionForStrongerPMOCapability.tsx](components/GetDirectionForStrongerPMOCapability.tsx) | Page-local |
| It Is Time To Stop Asking PM Os Only For Reports | [ItIsTimeToStopAskingPMOsOnlyForReports.tsx](components/ItIsTimeToStopAskingPMOsOnlyForReports.tsx) | Page-local |
| Learn from Practitioners | [LearnFromPractitioners.tsx](components/LearnFromPractitioners.tsx) | [MeetMentors.tsx](../../components/feature/MeetMentors.tsx), canonical homepage copy, portrait cards and mobile looping |
| Learn together | [LearnTogether.tsx](components/LearnTogether.tsx) | [EventsTeaser.tsx](../../components/feature/EventsTeaser.tsx) |
| Pmo Editorial Navbar | [PmoEditorialNavbar.tsx](components/PmoEditorialNavbar.tsx) | [PageSectionNav.tsx](../../components/feature/PageSectionNav.tsx) |
| Project Controls Professional Level6 | [ProjectControlsProfessionalLevel6.tsx](components/ProjectControlsProfessionalLevel6.tsx) | Page-local |
| RouteFaq | [RouteFaqSection.tsx](components/RouteFaqSection.tsx) | [RouteFaq.tsx](../../components/feature/RouteLanding/RouteFaq.tsx) |
| Sticky Cta | [StickyCta.tsx](components/StickyCta.tsx) | [StickyProgrammeCta.tsx](../../components/feature/StickyProgrammeCta.tsx) |
| Trust Strip | [TrustStrip.tsx](components/TrustStrip.tsx) | Page-local |
| Want The PMO Route Without Apprenticeship Paperwork | [WantThePMORouteWithoutApprenticeshipPaperwork.tsx](components/WantThePMORouteWithoutApprenticeshipPaperwork.tsx) | Page-local |

Section copy, repeated items and configuration:

- [sectionData.ts](sectionData.ts)

Keep `page.tsx` focused on section order and page state. Add new page-specific sections to `components/`, use the visible label for the filename, and update imports when renaming. Shared navigation and the footer remain in `src/components/feature/`.

The mentor section uses the canonical homepage content and portrait-card layout in [MeetMentors.tsx](../../components/feature/MeetMentors.tsx). Changes there apply to every consumer, including mobile looping. Images, profile destinations and LinkedIn links come from the dashboard-managed mentor records; only navigation anchors vary by page.

The featured learner-experience section uses the homepage design and copy in [LearnerExperiences.tsx](../../components/feature/LearnerExperiences.tsx). The homepage and programme-footer entry points share this implementation, so changes apply everywhere. The full approved-review directory and review submission flow remain available through `/testimonials`. Existing page placement and testimonial anchors are preserved.

Professional-study details: [ProfessionalProgrammeDetails.tsx](components/ProfessionalProgrammeDetails.tsx), rendered through the existing standalone-study wrapper. Source: [KBC programme overview](https://kentbusinesscollege.com/professional-programmes/certified-pmo-professional-level-6/). Recognition reference: [APM recognised assessments](https://www.apm.org.uk/chartered-standard/recognised-assessment/). Checked 20 October 2026.

Professional reading and publisher references use [ProfessionalReadingAndReferences.tsx](components/ProfessionalReadingAndReferences.tsx). Four linked resource cards close the page after route selection, with official KBC, APM and PMI destinations. All cards open a new tab with a visible keyboard focus state. Publisher dates and links checked 20 October 2026.

PMO page design uses the local [PmoSection.tsx](components/PmoSection.tsx) shell, composed with the site-wide SectionHeading, container, spacing and dot patterns. Page cards use shared colour/radius tokens; primary and secondary actions use the site capsule button styles. The hero and overview use existing local site photography. Shared mentors, funding, events, navigation and footer retain their canonical implementations.

Page reading order: introduction and programme features; PMO purpose; four capabilities and pathway CTA; learning experience; workplace application; practitioners; professional-study details; APM recognition; employer value; funding, eligibility and IPC support; events; route selection; references. Section navigation follows the same order.

The IPC promotion section uses the canonical content and dark/gold design in [IpcAuthority.tsx](../../components/feature/IpcAuthority.tsx). The shared section owns both recognition/growth features and its gold primary / outline secondary actions. Page wrappers supply no content overrides; published portraits remain dashboard-managed.
