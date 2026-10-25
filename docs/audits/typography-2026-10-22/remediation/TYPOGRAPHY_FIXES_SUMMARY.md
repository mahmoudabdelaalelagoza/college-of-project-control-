# Typography fixes summary

22 October 2026. Implemented in the existing frontend workspace. **12 issue groups resolved in the verified scope; 0 deferred issue groups.** No commit, push, deployment, database operation, backend change or environment-secret change was performed.

## Implementation

| Issue | Correction | Verification |
|---|---|---|
| T01 | One local brand-font stylesheet linked by Vite and Next. Poppins 300/400/500/600/700/800; normal and italic variable Source Serif 4 400–900; Latin/Latin Extended. | Actual custom glyph faces in both entry points at 375/768/1440; fresh Next export; portal and login checks. |
| T02 | Explicit `cta-button--on-dark` outline tone resolves the inherited-color cascade on Contact and the Knowledge Hub. | Contact normal/hover/focus contrast 20.36:1; Hub action also passes. |
| T03 | Semantic `text-warm-ink` light-surface labels; surface-specific campaign badges; scrolled active navigation tone; a small IPC text-ink adjustment. | Course catalogue 7.17:1, engineering/programme eyebrows 7.65:1; pale dark-hero colors retained. |
| T04 | Darker supporting text on light surfaces; opaque muted text on dark surfaces; corrections to funding, recognition, legal, renewal and workflow copy. | Funding/legal 6.68:1, Board renewal 7.79:1, nested recognition conditions 4.53:1. |
| T05 | Header reserves readable booking width and wraps its row when necessary. Dropdown and sticky offsets follow measured height. Funding ticker grows for enlarged text. | Eight text-spacing widths, mobile-menu Escape/focus return, L4/L6/Strategic sticky clearance, 200% root-text notice check. |
| T06 | Direct subsection titles use h3 in CampaignTransformation, ProfessionalCapability, YourJourney and WhatYouWillGain. | Seven affected rendered outlines have no skipped heading levels. |
| T07 | Named type roles replace hidden H2 size arithmetic; explicit section utilities preserve the approved optical scale. Shared hero/modal/form/card typography uses role tokens. | 343 heading-scale comparisons; all H1 size/weight pairs preserved; event empty-state differences explained below. |
| T08 | Meaningful learner/case metadata follows a 13px-equivalent scalable role. | Programme/provenance 13px; long names wrap; full reflections remain expandable. |
| T09 | Relative chat message/support/caption/control roles; scroll access when scaled. | Privacy 13px → 26px at 200% root size; 320/375/1440 panel checks and Escape focus return. |
| T10 | Explicit light/dark placeholder tones retain field labels. | Learner search 5.97:1; login 7.59:1; password visibility still works. |
| T11 | Licensed genuine variable serif italic supplied locally. | Campaign blockquote actual platform face is custom Source Serif italic. |
| T12 | Single Source Serif 4 family; duplicate mobile alias/remote text loader removed. | One logical serif family, no Google text-font requests, mobile 800/900 remain available. |

## Design-system ownership

- `src/styles/tokens.css`: family stacks, role sizes, leading, weights and surface-aware text tones.
- `tailwind.config.cjs`: semantic `text-page-title`, `text-section-*`, `text-subsection`, `text-card-title`, `text-dialog-title`, `text-body`, `text-body-small`, `text-lead`, `text-caption`, `text-metadata`, `text-label`, `text-button`, `text-navigation`, `text-control` and `text-table` utilities.
- Section values bake in the existing 10% adjustment: 2xl = 1.395rem/22.32px; 3xl = 1.8rem/28.8px; 4xl = clamp(2.025rem,3.6vw,2.925rem). The former ID-qualified H2 plugin is removed.
- 167 H2 class attributes in 162 files now explicitly select their section size. The exact class-only transformation is recorded in [section-role-migration.json](section-role-migration.json). 132 files have no other change in this task, verified by reversing the class migration and comparing baseline hashes.
- `SectionHeading` chooses the section visual role for h2 and retains its existing h1/h3 sizes. Heading rank remains independent of visual size. Compact titles, footer headings, monospace authoring and promotional heroes keep their distinct roles.
- Full heroes retain 36px mobile and the existing fluid desktop sizes. Public mobile headings retain 800, with full hero H1 at 900. The pre-existing 50,936-byte mobile serif file is unchanged byte for byte and now owns the single normal serif family at all widths.
- Existing role-equivalent utility sizes remain available for unrelated page details. This migration does not replace every body/UI utility or add a styling framework.
- `public/assets/fonts/fonts.css` owns text-font declarations. Its relative font URLs work under the stylesheet's base path. SIL OFL licenses and SHA-256/source provenance are bundled in the same directory. Remixicon remains its existing separate CDN icon dependency.
- Auth/API/CMS logic is unchanged. CMS field identifiers are derived from content/path, so the class/rank changes preserve their existing field identities. No new dependency was installed.

## Validation outcome

Both production builds and TypeScript pass. Existing unit tests: **31/31**; in-memory dashboard component tests: **2/2**. Targeted browser regressions: **45/45 Vite and 45/45 fresh Next**. Modified-source lint: **187 files, 0 errors, 0 warnings**.

Full-project `npm run lint` still fails its zero-warning gate because of the pre-existing `UsersPage.tsx:94` missing-effect-dependency warning. That file is unchanged. See [regression results](TYPOGRAPHY_REGRESSION_RESULTS.md) and [remaining verification issues](TYPOGRAPHY_REMAINING_ISSUES.md).

The broad local sweep rendered 99 distinct URLs with 343 viewport measurements, including seven-width coverage for representative pages. There was no measured page-level horizontal overflow or runtime exception. Supplementary final checks verify the last contrast/ticker changes. CMS-backed ready states and authenticated permissions are outside the verified runtime scope.

343 comparisons preserve all measured H1 sizes/weights. H2 size sets match in 341 cases; two `/events` observations contain an additional 22.32px empty-state title compared with the earlier loading-state capture. This is different asynchronous content, not an asserted size regression. Evidence: [scale-preservation.json](scale-preservation.json).

## Scope and preserved work

Pre-existing modifications/untracked files were recorded in [baseline-git-status.txt](baseline-git-status.txt). Existing CoachingSupport, ProgrammeAssistant implementation, ConfirmationPage, package.json and `.env.local` are unchanged by this task. The robot launcher and chat business logic are preserved.

**218 frontend files changed: 199 modified, 19 added.** This includes the 132 verified role-only files and regenerated `index.compiled.css`. Build/cache outputs are excluded from this list. Generated CSS was produced by the supported build command. See [modified-files.json](modified-files.json) for the machine-readable list and the complete table below.

## Changed frontend files

| File | Task change |
|---|---|
| [frontend/index.html](../../../../frontend/index.html) | Modified |
| [frontend/tailwind.config.cjs](../../../../frontend/tailwind.config.cjs) | Modified |
| [frontend/public/assets/fonts/fonts.css](../../../../frontend/public/assets/fonts/fonts.css) | Added |
| [frontend/public/assets/fonts/poppins-latin-300.woff2](../../../../frontend/public/assets/fonts/poppins-latin-300.woff2) | Added |
| [frontend/public/assets/fonts/poppins-latin-400.woff2](../../../../frontend/public/assets/fonts/poppins-latin-400.woff2) | Added |
| [frontend/public/assets/fonts/poppins-latin-500.woff2](../../../../frontend/public/assets/fonts/poppins-latin-500.woff2) | Added |
| [frontend/public/assets/fonts/poppins-latin-600.woff2](../../../../frontend/public/assets/fonts/poppins-latin-600.woff2) | Added |
| [frontend/public/assets/fonts/poppins-latin-700.woff2](../../../../frontend/public/assets/fonts/poppins-latin-700.woff2) | Added |
| [frontend/public/assets/fonts/poppins-latin-800.woff2](../../../../frontend/public/assets/fonts/poppins-latin-800.woff2) | Added |
| [frontend/public/assets/fonts/poppins-latin-ext-300.woff2](../../../../frontend/public/assets/fonts/poppins-latin-ext-300.woff2) | Added |
| [frontend/public/assets/fonts/poppins-latin-ext-400.woff2](../../../../frontend/public/assets/fonts/poppins-latin-ext-400.woff2) | Added |
| [frontend/public/assets/fonts/poppins-latin-ext-500.woff2](../../../../frontend/public/assets/fonts/poppins-latin-ext-500.woff2) | Added |
| [frontend/public/assets/fonts/poppins-latin-ext-600.woff2](../../../../frontend/public/assets/fonts/poppins-latin-ext-600.woff2) | Added |
| [frontend/public/assets/fonts/poppins-latin-ext-700.woff2](../../../../frontend/public/assets/fonts/poppins-latin-ext-700.woff2) | Added |
| [frontend/public/assets/fonts/poppins-latin-ext-800.woff2](../../../../frontend/public/assets/fonts/poppins-latin-ext-800.woff2) | Added |
| [frontend/public/assets/fonts/Poppins-OFL.txt](../../../../frontend/public/assets/fonts/Poppins-OFL.txt) | Added |
| [frontend/public/assets/fonts/README.md](../../../../frontend/public/assets/fonts/README.md) | Modified |
| [frontend/public/assets/fonts/source-manifest.json](../../../../frontend/public/assets/fonts/source-manifest.json) | Added |
| [frontend/public/assets/fonts/source-serif-4-latin-ext-italic-variable.woff2](../../../../frontend/public/assets/fonts/source-serif-4-latin-ext-italic-variable.woff2) | Added |
| [frontend/public/assets/fonts/source-serif-4-latin-ext-variable.woff2](../../../../frontend/public/assets/fonts/source-serif-4-latin-ext-variable.woff2) | Added |
| [frontend/public/assets/fonts/source-serif-4-latin-italic-variable.woff2](../../../../frontend/public/assets/fonts/source-serif-4-latin-italic-variable.woff2) | Added |
| [frontend/scripts/typography-regression.mjs](../../../../frontend/scripts/typography-regression.mjs) | Added |
| [frontend/src/index.compiled.css](../../../../frontend/src/index.compiled.css) | Modified |
| [frontend/src/index.css](../../../../frontend/src/index.css) | Modified |
| [frontend/src/app/layout.next.tsx](../../../../frontend/src/app/layout.next.tsx) | Modified |
| [frontend/src/components/base/FormField.tsx](../../../../frontend/src/components/base/FormField.tsx) | Modified |
| [frontend/src/components/base/Modal.tsx](../../../../frontend/src/components/base/Modal.tsx) | Modified |
| [frontend/src/components/base/SectionHeading.tsx](../../../../frontend/src/components/base/SectionHeading.tsx) | Modified |
| [frontend/src/components/feature/ArticleBody.tsx](../../../../frontend/src/components/feature/ArticleBody.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/ArticleCta.tsx](../../../../frontend/src/components/feature/ArticleCta.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/ArticlesSection.tsx](../../../../frontend/src/components/feature/ArticlesSection.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/CampaignTransformation.tsx](../../../../frontend/src/components/feature/CampaignTransformation.tsx) | Modified |
| [frontend/src/components/feature/case-studies.css](../../../../frontend/src/components/feature/case-studies.css) | Modified |
| [frontend/src/components/feature/EligibilityCheckerSection.tsx](../../../../frontend/src/components/feature/EligibilityCheckerSection.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/EventCard.tsx](../../../../frontend/src/components/feature/EventCard.tsx) | Modified |
| [frontend/src/components/feature/EventsSection.tsx](../../../../frontend/src/components/feature/EventsSection.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/Footer.tsx](../../../../frontend/src/components/feature/Footer.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/FundingOptionsSection.tsx](../../../../frontend/src/components/feature/FundingOptionsSection.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/FundingTicker.tsx](../../../../frontend/src/components/feature/FundingTicker.tsx) | Modified |
| [frontend/src/components/feature/IpcAuthority.tsx](../../../../frontend/src/components/feature/IpcAuthority.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/learner-experiences.css](../../../../frontend/src/components/feature/learner-experiences.css) | Modified |
| [frontend/src/components/feature/MeetMentors.tsx](../../../../frontend/src/components/feature/MeetMentors.tsx) | Modified |
| [frontend/src/components/feature/Navbar.tsx](../../../../frontend/src/components/feature/Navbar.tsx) | Modified |
| [frontend/src/components/feature/OutcomeExamples.tsx](../../../../frontend/src/components/feature/OutcomeExamples.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/PcpComplianceNote.tsx](../../../../frontend/src/components/feature/PcpComplianceNote.tsx) | Modified |
| [frontend/src/components/feature/ProfessionalPathwaysSection.tsx](../../../../frontend/src/components/feature/ProfessionalPathwaysSection.tsx) | Modified |
| [frontend/src/components/feature/ProfessionalRecognitionSection.tsx](../../../../frontend/src/components/feature/ProfessionalRecognitionSection.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/programme-navigation.css](../../../../frontend/src/components/feature/programme-navigation.css) | Modified |
| [frontend/src/components/feature/ProjectDrivenSectors.tsx](../../../../frontend/src/components/feature/ProjectDrivenSectors.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/RelatedArticles.tsx](../../../../frontend/src/components/feature/RelatedArticles.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/RequestStatus.tsx](../../../../frontend/src/components/feature/RequestStatus.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/SectorPathwayChoice.tsx](../../../../frontend/src/components/feature/SectorPathwayChoice.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/TestimonialsSection.tsx](../../../../frontend/src/components/feature/TestimonialsSection.tsx) | Modified |
| [frontend/src/components/feature/chatbot/programme-assistant.css](../../../../frontend/src/components/feature/chatbot/programme-assistant.css) | Modified |
| [frontend/src/components/feature/RouteLanding/RouteCapability.tsx](../../../../frontend/src/components/feature/RouteLanding/RouteCapability.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/RouteLanding/RouteChoose.tsx](../../../../frontend/src/components/feature/RouteLanding/RouteChoose.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/RouteLanding/RouteDevelop.tsx](../../../../frontend/src/components/feature/RouteLanding/RouteDevelop.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/RouteLanding/RouteFinalCta.tsx](../../../../frontend/src/components/feature/RouteLanding/RouteFinalCta.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/RouteLanding/RouteHero.tsx](../../../../frontend/src/components/feature/RouteLanding/RouteHero.tsx) | Modified |
| [frontend/src/components/feature/RouteLanding/RouteProblems.tsx](../../../../frontend/src/components/feature/RouteLanding/RouteProblems.tsx) | Modified |
| [frontend/src/components/feature/RouteLanding/RouteProcess.tsx](../../../../frontend/src/components/feature/RouteLanding/RouteProcess.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/RouteLanding/RouteStats.tsx](../../../../frontend/src/components/feature/RouteLanding/RouteStats.tsx) | Explicit H2 section role only |
| [frontend/src/components/feature/RouteLanding/RouteWhoFor.tsx](../../../../frontend/src/components/feature/RouteLanding/RouteWhoFor.tsx) | Explicit H2 section role only |
| [frontend/src/dashboard/pages/LoginPage.tsx](../../../../frontend/src/dashboard/pages/LoginPage.tsx) | Modified |
| [frontend/src/hooks/usePublicHeaderHeight.ts](../../../../frontend/src/hooks/usePublicHeaderHeight.ts) | Modified |
| [frontend/src/pages/about/components/HowWeWork.tsx](../../../../frontend/src/pages/about/components/HowWeWork.tsx) | Explicit H2 section role only |
| [frontend/src/pages/about/components/OurPointOfView.tsx](../../../../frontend/src/pages/about/components/OurPointOfView.tsx) | Explicit H2 section role only |
| [frontend/src/pages/about/components/OurSpecialistFocus.tsx](../../../../frontend/src/pages/about/components/OurSpecialistFocus.tsx) | Explicit H2 section role only |
| [frontend/src/pages/about/components/StartWithTheRightQuestion.tsx](../../../../frontend/src/pages/about/components/StartWithTheRightQuestion.tsx) | Explicit H2 section role only |
| [frontend/src/pages/about/components/WhoWeAre.tsx](../../../../frontend/src/pages/about/components/WhoWeAre.tsx) | Explicit H2 section role only |
| [frontend/src/pages/apm-level-4/components/KeyProgrammeFacts.tsx](../../../../frontend/src/pages/apm-level-4/components/KeyProgrammeFacts.tsx) | Explicit H2 section role only |
| [frontend/src/pages/apprentices/components/ForApprenticesProfessionals.tsx](../../../../frontend/src/pages/apprentices/components/ForApprenticesProfessionals.tsx) | Modified |
| [frontend/src/pages/apprentices/components/LearnerSupport.tsx](../../../../frontend/src/pages/apprentices/components/LearnerSupport.tsx) | Modified |
| [frontend/src/pages/apprentices/components/QuickAnswers.tsx](../../../../frontend/src/pages/apprentices/components/QuickAnswers.tsx) | Modified |
| [frontend/src/pages/apprentices/components/ReadyToAdvanceYourCareerInProjectControls.tsx](../../../../frontend/src/pages/apprentices/components/ReadyToAdvanceYourCareerInProjectControls.tsx) | Explicit H2 section role only |
| [frontend/src/pages/apprentices/components/WeeklyRhythm.tsx](../../../../frontend/src/pages/apprentices/components/WeeklyRhythm.tsx) | Modified |
| [frontend/src/pages/apprentices/components/WhatYouWillGain.tsx](../../../../frontend/src/pages/apprentices/components/WhatYouWillGain.tsx) | Modified |
| [frontend/src/pages/apprentices/components/YourJourney.tsx](../../../../frontend/src/pages/apprentices/components/YourJourney.tsx) | Modified |
| [frontend/src/pages/apprenticeship-eligibility-checker/components/ApprenticeshipEligibilityCheckerSection.tsx](../../../../frontend/src/pages/apprenticeship-eligibility-checker/components/ApprenticeshipEligibilityCheckerSection.tsx) | Explicit H2 section role only |
| [frontend/src/pages/articles/components/ArticleResults.tsx](../../../../frontend/src/pages/articles/components/ArticleResults.tsx) | Explicit H2 section role only |
| [frontend/src/pages/campaign/commercial-route/components/ProfessionalRecognition.tsx](../../../../frontend/src/pages/campaign/commercial-route/components/ProfessionalRecognition.tsx) | Modified |
| [frontend/src/pages/campaign/construction/components/DiscussYourDevelopmentNeeds.tsx](../../../../frontend/src/pages/campaign/construction/components/DiscussYourDevelopmentNeeds.tsx) | Explicit H2 section role only |
| [frontend/src/pages/campaign/construction/components/KeyMessage.tsx](../../../../frontend/src/pages/campaign/construction/components/KeyMessage.tsx) | Modified |
| [frontend/src/pages/campaign/energy/components/DiscussYourDevelopmentNeeds.tsx](../../../../frontend/src/pages/campaign/energy/components/DiscussYourDevelopmentNeeds.tsx) | Explicit H2 section role only |
| [frontend/src/pages/campaign/energy/components/KeyMessage.tsx](../../../../frontend/src/pages/campaign/energy/components/KeyMessage.tsx) | Modified |
| [frontend/src/pages/campaign/head-of-pmo/components/APMRecognisedAssessmentCentre.tsx](../../../../frontend/src/pages/campaign/head-of-pmo/components/APMRecognisedAssessmentCentre.tsx) | Modified |
| [frontend/src/pages/campaign/head-of-pmo/components/DiscussYourDevelopmentNeeds.tsx](../../../../frontend/src/pages/campaign/head-of-pmo/components/DiscussYourDevelopmentNeeds.tsx) | Explicit H2 section role only |
| [frontend/src/pages/campaign/hr-employer/components/APMChPPReadinessSupport.tsx](../../../../frontend/src/pages/campaign/hr-employer/components/APMChPPReadinessSupport.tsx) | Modified |
| [frontend/src/pages/campaign/hr-employer/components/DiscussYourDevelopmentNeeds.tsx](../../../../frontend/src/pages/campaign/hr-employer/components/DiscussYourDevelopmentNeeds.tsx) | Explicit H2 section role only |
| [frontend/src/pages/campaign/public-sector/components/DiscussYourDevelopmentNeeds.tsx](../../../../frontend/src/pages/campaign/public-sector/components/DiscussYourDevelopmentNeeds.tsx) | Explicit H2 section role only |
| [frontend/src/pages/campaign/public-sector/components/KeyMessage.tsx](../../../../frontend/src/pages/campaign/public-sector/components/KeyMessage.tsx) | Modified |
| [frontend/src/pages/case-studies/components/CaseStudiesGrid.tsx](../../../../frontend/src/pages/case-studies/components/CaseStudiesGrid.tsx) | Explicit H2 section role only |
| [frontend/src/pages/chartered-pmo-pathway/components/APMGInternationalCertificationContext.tsx](../../../../frontend/src/pages/chartered-pmo-pathway/components/APMGInternationalCertificationContext.tsx) | Explicit H2 section role only |
| [frontend/src/pages/chartered-pmo-pathway/components/CatalogueNavigation.tsx](../../../../frontend/src/pages/chartered-pmo-pathway/components/CatalogueNavigation.tsx) | Explicit H2 section role only |
| [frontend/src/pages/chartered-pmo-pathway/components/CollegeSpecialistDevelopment.tsx](../../../../frontend/src/pages/chartered-pmo-pathway/components/CollegeSpecialistDevelopment.tsx) | Explicit H2 section role only |
| [frontend/src/pages/chartered-pmo-pathway/components/IndependentProfessionalDevelopmentRoute.tsx](../../../../frontend/src/pages/chartered-pmo-pathway/components/IndependentProfessionalDevelopmentRoute.tsx) | Explicit H2 section role only |
| [frontend/src/pages/chartered-pmo-pathway/components/PMOProfessionalDevelopmentModule1.tsx](../../../../frontend/src/pages/chartered-pmo-pathway/components/PMOProfessionalDevelopmentModule1.tsx) | Explicit H2 section role only |
| [frontend/src/pages/chartered-pmo-pathway/components/PMOProfessionalDevelopmentModule2.tsx](../../../../frontend/src/pages/chartered-pmo-pathway/components/PMOProfessionalDevelopmentModule2.tsx) | Explicit H2 section role only |
| [frontend/src/pages/chartered-pmo-pathway/components/PMOProfessionalDevelopmentModule3.tsx](../../../../frontend/src/pages/chartered-pmo-pathway/components/PMOProfessionalDevelopmentModule3.tsx) | Explicit H2 section role only |
| [frontend/src/pages/chartered-pmo-pathway/components/PMOProfessionalDevelopmentModule4.tsx](../../../../frontend/src/pages/chartered-pmo-pathway/components/PMOProfessionalDevelopmentModule4.tsx) | Explicit H2 section role only |
| [frontend/src/pages/chartered-pmo-pathway/components/ProgrammeInformationAndNextSteps.tsx](../../../../frontend/src/pages/chartered-pmo-pathway/components/ProgrammeInformationAndNextSteps.tsx) | Explicit H2 section role only |
| [frontend/src/pages/contact/components/BeforeYouReachOut.tsx](../../../../frontend/src/pages/contact/components/BeforeYouReachOut.tsx) | Explicit H2 section role only |
| [frontend/src/pages/contact/components/FindYourNextStep.tsx](../../../../frontend/src/pages/contact/components/FindYourNextStep.tsx) | Explicit H2 section role only |
| [frontend/src/pages/contact/components/GetInTouch.tsx](../../../../frontend/src/pages/contact/components/GetInTouch.tsx) | Modified |
| [frontend/src/pages/employers/components/ExampleScenarios.tsx](../../../../frontend/src/pages/employers/components/ExampleScenarios.tsx) | Explicit H2 section role only |
| [frontend/src/pages/employers/components/LearningAppliedAtWork.tsx](../../../../frontend/src/pages/employers/components/LearningAppliedAtWork.tsx) | Explicit H2 section role only |
| [frontend/src/pages/employers/components/StartWithTheBusinessNeed.tsx](../../../../frontend/src/pages/employers/components/StartWithTheBusinessNeed.tsx) | Explicit H2 section role only |
| [frontend/src/pages/events/components/FindEvents.tsx](../../../../frontend/src/pages/events/components/FindEvents.tsx) | Explicit H2 section role only |
| [frontend/src/pages/events/detail/components/AboutThisEvent.tsx](../../../../frontend/src/pages/events/detail/components/AboutThisEvent.tsx) | Explicit H2 section role only |
| [frontend/src/pages/events/detail/components/EventDetailsSection.tsx](../../../../frontend/src/pages/events/detail/components/EventDetailsSection.tsx) | Explicit H2 section role only |
| [frontend/src/pages/faq/components/BrowseByTopicSection.tsx](../../../../frontend/src/pages/faq/components/BrowseByTopicSection.tsx) | Modified |
| [frontend/src/pages/faq/components/NeedASpecificAnswer.tsx](../../../../frontend/src/pages/faq/components/NeedASpecificAnswer.tsx) | Explicit H2 section role only |
| [frontend/src/pages/governance-board/components/AboutTheBoard.tsx](../../../../frontend/src/pages/governance-board/components/AboutTheBoard.tsx) | Explicit H2 section role only |
| [frontend/src/pages/governance-board/components/CandidateProfile.tsx](../../../../frontend/src/pages/governance-board/components/CandidateProfile.tsx) | Explicit H2 section role only |
| [frontend/src/pages/governance-board/components/ExpertiseSought.tsx](../../../../frontend/src/pages/governance-board/components/ExpertiseSought.tsx) | Modified |
| [frontend/src/pages/governance-board/components/ExpressionOfInterest.tsx](../../../../frontend/src/pages/governance-board/components/ExpressionOfInterest.tsx) | Explicit H2 section role only |
| [frontend/src/pages/governance-board/components/HelpShapeTheFutureOfProfessionalEducation.tsx](../../../../frontend/src/pages/governance-board/components/HelpShapeTheFutureOfProfessionalEducation.tsx) | Explicit H2 section role only |
| [frontend/src/pages/governance-board/components/OurApproach.tsx](../../../../frontend/src/pages/governance-board/components/OurApproach.tsx) | Modified |
| [frontend/src/pages/governance-board/components/Responsibilities.tsx](../../../../frontend/src/pages/governance-board/components/Responsibilities.tsx) | Explicit H2 section role only |
| [frontend/src/pages/governance-board/components/TimeCommitment.tsx](../../../../frontend/src/pages/governance-board/components/TimeCommitment.tsx) | Modified |
| [frontend/src/pages/governance-board/components/WhyJoin.tsx](../../../../frontend/src/pages/governance-board/components/WhyJoin.tsx) | Modified |
| [frontend/src/pages/home/components/FinalHomepageCta.tsx](../../../../frontend/src/pages/home/components/FinalHomepageCta.tsx) | Modified |
| [frontend/src/pages/home/components/ForEmployers.tsx](../../../../frontend/src/pages/home/components/ForEmployers.tsx) | Explicit H2 section role only |
| [frontend/src/pages/home/components/LearnTogether.tsx](../../../../frontend/src/pages/home/components/LearnTogether.tsx) | Explicit H2 section role only |
| [frontend/src/pages/home/components/ProfessionalProgrammes.tsx](../../../../frontend/src/pages/home/components/ProfessionalProgrammes.tsx) | Modified |
| [frontend/src/pages/home/components/ShortCoursesCarousel.tsx](../../../../frontend/src/pages/home/components/ShortCoursesCarousel.tsx) | Explicit H2 section role only |
| [frontend/src/pages/how-to-apply/components/HowToApply.tsx](../../../../frontend/src/pages/how-to-apply/components/HowToApply.tsx) | Explicit H2 section role only |
| [frontend/src/pages/ipc/components/BuildYourProfessionalDirection.tsx](../../../../frontend/src/pages/ipc/components/BuildYourProfessionalDirection.tsx) | Explicit H2 section role only |
| [frontend/src/pages/ipc/components/IPCExplained.tsx](../../../../frontend/src/pages/ipc/components/IPCExplained.tsx) | Explicit H2 section role only |
| [frontend/src/pages/ipc/components/Membership.tsx](../../../../frontend/src/pages/ipc/components/Membership.tsx) | Explicit H2 section role only |
| [frontend/src/pages/ipc/components/ProfessionalJourney.tsx](../../../../frontend/src/pages/ipc/components/ProfessionalJourney.tsx) | Explicit H2 section role only |
| [frontend/src/pages/ipc/components/TheCapabilityFramework.tsx](../../../../frontend/src/pages/ipc/components/TheCapabilityFramework.tsx) | Explicit H2 section role only |
| [frontend/src/pages/ipc/components/WhyIPCMatters.tsx](../../../../frontend/src/pages/ipc/components/WhyIPCMatters.tsx) | Explicit H2 section role only |
| [frontend/src/pages/knowledge-hub/apm-chpp-readiness/components/HonestyAboutProfessionalRecognitionMatters.tsx](../../../../frontend/src/pages/knowledge-hub/apm-chpp-readiness/components/HonestyAboutProfessionalRecognitionMatters.tsx) | Explicit H2 section role only |
| [frontend/src/pages/knowledge-hub/commercial-routes-explained/components/NotEligibleForApprenticeshipFundingYouStillDeserveProfessionalProjectControlsDevelopment.tsx](../../../../frontend/src/pages/knowledge-hub/commercial-routes-explained/components/NotEligibleForApprenticeshipFundingYouStillDeserveProfessionalProjectControlsDevelopment.tsx) | Explicit H2 section role only |
| [frontend/src/pages/knowledge-hub/components/ArticleCard.tsx](../../../../frontend/src/pages/knowledge-hub/components/ArticleCard.tsx) | Modified |
| [frontend/src/pages/knowledge-hub/components/ExploreByTopic.tsx](../../../../frontend/src/pages/knowledge-hub/components/ExploreByTopic.tsx) | Modified |
| [frontend/src/pages/knowledge-hub/components/ReadyToFindYourBestRoute.tsx](../../../../frontend/src/pages/knowledge-hub/components/ReadyToFindYourBestRoute.tsx) | Modified |
| [frontend/src/pages/knowledge-hub/construction-training/components/StopLettingScheduleDelaysAndCostDriftBecomeNormal.tsx](../../../../frontend/src/pages/knowledge-hub/construction-training/components/StopLettingScheduleDelaysAndCostDriftBecomeNormal.tsx) | Explicit H2 section role only |
| [frontend/src/pages/knowledge-hub/employer-apprenticeship-funding/components/UseApprenticeshipFundingToBuildProjectControlsCapabilityYourBusinessCanActuallyMeasure.tsx](../../../../frontend/src/pages/knowledge-hub/employer-apprenticeship-funding/components/UseApprenticeshipFundingToBuildProjectControlsCapabilityYourBusinessCanActuallyMeasure.tsx) | Explicit H2 section role only |
| [frontend/src/pages/knowledge-hub/energy-training/components/ForCapitalProgrammesWhereWeakControlsAreTooExpensiveToIgnore.tsx](../../../../frontend/src/pages/knowledge-hub/energy-training/components/ForCapitalProgrammesWhereWeakControlsAreTooExpensiveToIgnore.tsx) | Explicit H2 section role only |
| [frontend/src/pages/knowledge-hub/funded-pcp-employer-guide/components/UseApprenticeshipFundingToBuildProjectControlsCapabilityYourBusinessCanActuallyMeasure.tsx](../../../../frontend/src/pages/knowledge-hub/funded-pcp-employer-guide/components/UseApprenticeshipFundingToBuildProjectControlsCapabilityYourBusinessCanActuallyMeasure.tsx) | Explicit H2 section role only |
| [frontend/src/pages/knowledge-hub/pcp-vs-pmp/components/TwoDifferentPathsTwoDifferentPurposes.tsx](../../../../frontend/src/pages/knowledge-hub/pcp-vs-pmp/components/TwoDifferentPathsTwoDifferentPurposes.tsx) | Explicit H2 section role only |
| [frontend/src/pages/knowledge-hub/pmo-governance-training/components/YourPMODoesNotNeedMoreReportsItNeedsStrongerDecisionConfidence.tsx](../../../../frontend/src/pages/knowledge-hub/pmo-governance-training/components/YourPMODoesNotNeedMoreReportsItNeedsStrongerDecisionConfidence.tsx) | Explicit H2 section role only |
| [frontend/src/pages/knowledge-hub/strategic-vs-operational/components/TwoPathwaysOneProfessionalStandardDifferentCareerOutcomes.tsx](../../../../frontend/src/pages/knowledge-hub/strategic-vs-operational/components/TwoPathwaysOneProfessionalStandardDifferentCareerOutcomes.tsx) | Explicit H2 section role only |
| [frontend/src/pages/knowledge-hub/what-is-pcp-apprenticeship/components/WhatIsTheLevel6ProjectControlsProfessionalApprenticeship.tsx](../../../../frontend/src/pages/knowledge-hub/what-is-pcp-apprenticeship/components/WhatIsTheLevel6ProjectControlsProfessionalApprenticeship.tsx) | Explicit H2 section role only |
| [frontend/src/pages/legal/components/PolicyClause.tsx](../../../../frontend/src/pages/legal/components/PolicyClause.tsx) | Explicit H2 section role only |
| [frontend/src/pages/legal/components/PolicyContents.tsx](../../../../frontend/src/pages/legal/components/PolicyContents.tsx) | Modified |
| [frontend/src/pages/mentors/detail/components/MeetTheMentor.tsx](../../../../frontend/src/pages/mentors/detail/components/MeetTheMentor.tsx) | Modified |
| [frontend/src/pages/mentors/detail/components/MentorProfile.tsx](../../../../frontend/src/pages/mentors/detail/components/MentorProfile.tsx) | Modified |
| [frontend/src/pages/operational-pcp-construction/components/AssociatePathwayCallout.tsx](../../../../frontend/src/pages/operational-pcp-construction/components/AssociatePathwayCallout.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-construction/components/ChooseYourPathwayCheckYourAccessRoute.tsx](../../../../frontend/src/pages/operational-pcp-construction/components/ChooseYourPathwayCheckYourAccessRoute.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-construction/components/CoreProfessionalCapability.tsx](../../../../frontend/src/pages/operational-pcp-construction/components/CoreProfessionalCapability.tsx) | Modified |
| [frontend/src/pages/operational-pcp-construction/components/EmployerCapability.tsx](../../../../frontend/src/pages/operational-pcp-construction/components/EmployerCapability.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-construction/components/InteractivePathwayBuilder.tsx](../../../../frontend/src/pages/operational-pcp-construction/components/InteractivePathwayBuilder.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-construction/components/PracticalAnswers.tsx](../../../../frontend/src/pages/operational-pcp-construction/components/PracticalAnswers.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-construction/components/ProfessionalProgression.tsx](../../../../frontend/src/pages/operational-pcp-construction/components/ProfessionalProgression.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-construction/components/QuickAccessRouteCheck.tsx](../../../../frontend/src/pages/operational-pcp-construction/components/QuickAccessRouteCheck.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-construction/components/SectorApplication.tsx](../../../../frontend/src/pages/operational-pcp-construction/components/SectorApplication.tsx) | Modified |
| [frontend/src/pages/operational-pcp-construction/components/TheConstructionChallenge.tsx](../../../../frontend/src/pages/operational-pcp-construction/components/TheConstructionChallenge.tsx) | Modified |
| [frontend/src/pages/operational-pcp-construction/components/TheLearningExperience.tsx](../../../../frontend/src/pages/operational-pcp-construction/components/TheLearningExperience.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-construction/components/WorkplaceEvidence.tsx](../../../../frontend/src/pages/operational-pcp-construction/components/WorkplaceEvidence.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-energy/components/BuildTheCapabilityToControlComplexEnergyProgrammesWithConfidence.tsx](../../../../frontend/src/pages/operational-pcp-energy/components/BuildTheCapabilityToControlComplexEnergyProgrammesWithConfidence.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-energy/components/CheckTheRightAccessRouteForYou.tsx](../../../../frontend/src/pages/operational-pcp-energy/components/CheckTheRightAccessRouteForYou.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-energy/components/CoreProfessionalCapability.tsx](../../../../frontend/src/pages/operational-pcp-energy/components/CoreProfessionalCapability.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-energy/components/EmployerCapability.tsx](../../../../frontend/src/pages/operational-pcp-energy/components/EmployerCapability.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-energy/components/OneFoundation.tsx](../../../../frontend/src/pages/operational-pcp-energy/components/OneFoundation.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-energy/components/PracticalAnswers.tsx](../../../../frontend/src/pages/operational-pcp-energy/components/PracticalAnswers.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-energy/components/ProfessionalProgression.tsx](../../../../frontend/src/pages/operational-pcp-energy/components/ProfessionalProgression.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-energy/components/SectorApplication.tsx](../../../../frontend/src/pages/operational-pcp-energy/components/SectorApplication.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-energy/components/TheEnergyDeliveryChallenge.tsx](../../../../frontend/src/pages/operational-pcp-energy/components/TheEnergyDeliveryChallenge.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-energy/components/TheLearningExperience.tsx](../../../../frontend/src/pages/operational-pcp-energy/components/TheLearningExperience.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-energy/components/WorkplaceEvidence.tsx](../../../../frontend/src/pages/operational-pcp-energy/components/WorkplaceEvidence.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-engineering/components/EngineeringProjectControlsEvidence.tsx](../../../../frontend/src/pages/operational-pcp-engineering/components/EngineeringProjectControlsEvidence.tsx) | Modified |
| [frontend/src/pages/operational-pcp-engineering/components/OneProfessionalFoundationAcrossComplexEngineeringEnvironments.tsx](../../../../frontend/src/pages/operational-pcp-engineering/components/OneProfessionalFoundationAcrossComplexEngineeringEnvironments.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-engineering/components/ProjectControlsThatProtectEngineeringValue.tsx](../../../../frontend/src/pages/operational-pcp-engineering/components/ProjectControlsThatProtectEngineeringValue.tsx) | Modified |
| [frontend/src/pages/operational-pcp-engineering/components/QuestionsBeforeYouEnquire.tsx](../../../../frontend/src/pages/operational-pcp-engineering/components/QuestionsBeforeYouEnquire.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-engineering/components/ReadyToTakeControl.tsx](../../../../frontend/src/pages/operational-pcp-engineering/components/ReadyToTakeControl.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-public-sector/components/CareerDevelopment.tsx](../../../../frontend/src/pages/operational-pcp-public-sector/components/CareerDevelopment.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-public-sector/components/CareerProgression.tsx](../../../../frontend/src/pages/operational-pcp-public-sector/components/CareerProgression.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-public-sector/components/DevelopAccountableProjectCapability.tsx](../../../../frontend/src/pages/operational-pcp-public-sector/components/DevelopAccountableProjectCapability.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-public-sector/components/EmployerJourney.tsx](../../../../frontend/src/pages/operational-pcp-public-sector/components/EmployerJourney.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-public-sector/components/EmployerQuestions.tsx](../../../../frontend/src/pages/operational-pcp-public-sector/components/EmployerQuestions.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-public-sector/components/IllustrativePublicSectorApplication.tsx](../../../../frontend/src/pages/operational-pcp-public-sector/components/IllustrativePublicSectorApplication.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-public-sector/components/LearningGroundedInGovernmentDelivery.tsx](../../../../frontend/src/pages/operational-pcp-public-sector/components/LearningGroundedInGovernmentDelivery.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-public-sector/components/TheProjectControlsCapabilityModel.tsx](../../../../frontend/src/pages/operational-pcp-public-sector/components/TheProjectControlsCapabilityModel.tsx) | Explicit H2 section role only |
| [frontend/src/pages/operational-pcp-public-sector/components/WhyPublicSectorDeliveryIsDifferent.tsx](../../../../frontend/src/pages/operational-pcp-public-sector/components/WhyPublicSectorDeliveryIsDifferent.tsx) | Explicit H2 section role only |
| [frontend/src/pages/pmo-pcp/components/DiscussThePMOCapabilityYourTeamNeeds.tsx](../../../../frontend/src/pages/pmo-pcp/components/DiscussThePMOCapabilityYourTeamNeeds.tsx) | Explicit H2 section role only |
| [frontend/src/pages/programme-template/PathwayPage.tsx](../../../../frontend/src/pages/programme-template/PathwayPage.tsx) | Explicit H2 section role only |
| [frontend/src/pages/programmes/components/ChooseYourProgramme.tsx](../../../../frontend/src/pages/programmes/components/ChooseYourProgramme.tsx) | Modified |
| [frontend/src/pages/programmes/components/CompareProgrammes.tsx](../../../../frontend/src/pages/programmes/components/CompareProgrammes.tsx) | Modified |
| [frontend/src/pages/programmes/components/FindYourFit.tsx](../../../../frontend/src/pages/programmes/components/FindYourFit.tsx) | Modified |
| [frontend/src/pages/programmes/components/FlexibleProfessionalDevelopment.tsx](../../../../frontend/src/pages/programmes/components/FlexibleProfessionalDevelopment.tsx) | Modified |
| [frontend/src/pages/programmes/components/ForEmployers.tsx](../../../../frontend/src/pages/programmes/components/ForEmployers.tsx) | Modified |
| [frontend/src/pages/programmes/components/FrequentlyAskedQuestions.tsx](../../../../frontend/src/pages/programmes/components/FrequentlyAskedQuestions.tsx) | Modified |
| [frontend/src/pages/project-controls-professional-level-6/components/ProfessionalCapability.tsx](../../../../frontend/src/pages/project-controls-professional-level-6/components/ProfessionalCapability.tsx) | Modified |
| [frontend/src/pages/project-controls-professional-operational-route/components/CapabilityThemes.tsx](../../../../frontend/src/pages/project-controls-professional-operational-route/components/CapabilityThemes.tsx) | Explicit H2 section role only |
| [frontend/src/pages/project-controls-professional-operational-route/components/EmployerResponsibilities.tsx](../../../../frontend/src/pages/project-controls-professional-operational-route/components/EmployerResponsibilities.tsx) | Explicit H2 section role only |
| [frontend/src/pages/project-controls-professional-operational-route/components/GatewayAndEPA.tsx](../../../../frontend/src/pages/project-controls-professional-operational-route/components/GatewayAndEPA.tsx) | Explicit H2 section role only |
| [frontend/src/pages/project-controls-professional-operational-route/components/ProfessionalArtefacts.tsx](../../../../frontend/src/pages/project-controls-professional-operational-route/components/ProfessionalArtefacts.tsx) | Explicit H2 section role only |
| [frontend/src/pages/project-controls-professional-operational-route/components/SelectSixCredits.tsx](../../../../frontend/src/pages/project-controls-professional-operational-route/components/SelectSixCredits.tsx) | Explicit H2 section role only |
| [frontend/src/pages/project-controls-professional-operational-route/components/TakeTheNextStep.tsx](../../../../frontend/src/pages/project-controls-professional-operational-route/components/TakeTheNextStep.tsx) | Explicit H2 section role only |
| [frontend/src/pages/project-controls-professional-operational-route/components/TheOperationalRoute.tsx](../../../../frontend/src/pages/project-controls-professional-operational-route/components/TheOperationalRoute.tsx) | Explicit H2 section role only |
| [frontend/src/pages/project-controls-professional-operational-route/components/WhoItIsFor.tsx](../../../../frontend/src/pages/project-controls-professional-operational-route/components/WhoItIsFor.tsx) | Explicit H2 section role only |
| [frontend/src/pages/route-finder/components/RouteFinder.tsx](../../../../frontend/src/pages/route-finder/components/RouteFinder.tsx) | Explicit H2 section role only |
| [frontend/src/pages/short-courses/components/ShortCourses.tsx](../../../../frontend/src/pages/short-courses/components/ShortCourses.tsx) | Explicit H2 section role only |
| [frontend/src/pages/strategic-operational-pcp/components/ComplianceNote.tsx](../../../../frontend/src/pages/strategic-operational-pcp/components/ComplianceNote.tsx) | Modified |
| [frontend/src/pages/strategic-pcp/components/AIInProjectControls.tsx](../../../../frontend/src/pages/strategic-pcp/components/AIInProjectControls.tsx) | Explicit H2 section role only |
| [frontend/src/pages/strategic-pcp/components/EligibilityCriteria.tsx](../../../../frontend/src/pages/strategic-pcp/components/EligibilityCriteria.tsx) | Explicit H2 section role only |
| [frontend/src/pages/strategic-pcp/components/PMIPMOCPPreparationAndPMOLeadership.tsx](../../../../frontend/src/pages/strategic-pcp/components/PMIPMOCPPreparationAndPMOLeadership.tsx) | Explicit H2 section role only |
| [frontend/src/pages/strategic-pcp/components/PMPExamPreparationAndStrategicProjectLeadership.tsx](../../../../frontend/src/pages/strategic-pcp/components/PMPExamPreparationAndStrategicProjectLeadership.tsx) | Explicit H2 section role only |
| [frontend/src/pages/strategic-pcp/components/PRINCE2PortfolioManagement.tsx](../../../../frontend/src/pages/strategic-pcp/components/PRINCE2PortfolioManagement.tsx) | Explicit H2 section role only |
| [frontend/src/pages/strategic-pcp/components/PRINCE2ProgrammeManagement.tsx](../../../../frontend/src/pages/strategic-pcp/components/PRINCE2ProgrammeManagement.tsx) | Explicit H2 section role only |
| [frontend/src/pages/strategic-pcp/components/ProgrammeEssentials.tsx](../../../../frontend/src/pages/strategic-pcp/components/ProgrammeEssentials.tsx) | Explicit H2 section role only |
| [frontend/src/pages/strategic-pcp/components/TakeTheNextStep.tsx](../../../../frontend/src/pages/strategic-pcp/components/TakeTheNextStep.tsx) | Explicit H2 section role only |
| [frontend/src/styles/heroes.css](../../../../frontend/src/styles/heroes.css) | Modified |
| [frontend/src/styles/mobile-typography.css](../../../../frontend/src/styles/mobile-typography.css) | Modified |
| [frontend/src/styles/tokens.css](../../../../frontend/src/styles/tokens.css) | Modified |
