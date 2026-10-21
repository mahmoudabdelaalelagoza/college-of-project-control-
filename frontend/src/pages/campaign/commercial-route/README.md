# campaign/commercial-route sections

Composition: [page.tsx](page.tsx). Routes: `/commercial-project-controls-route`, `/campaign/commercial-route`.

Find the label on the page, then open its component below. Shared implementation links are provided where a section is reused. Data and API calls retain their existing ownership.

| Label / heading | Component | Shared implementation |
| --- | --- | --- |
| Advance Your Project Controls Career | [CommercialAccessForNonEligibleLearners.tsx](components/CommercialAccessForNonEligibleLearners.tsx) | [PcpHero.tsx](../../../components/feature/PcpHero.tsx) |
| Commercial Route | [CommercialRoute.tsx](components/CommercialRoute.tsx) | Page-local |
| The Difference | [WithoutAccessVsWithTheCommercialRoute.tsx](components/WithoutAccessVsWithTheCommercialRoute.tsx) | [CampaignTransformation.tsx](../../../components/feature/CampaignTransformation.tsx) |
| Route Fit | [RouteFit.tsx](components/RouteFit.tsx) | [CampaignRouteFit.tsx](../../../components/feature/CampaignRouteFit.tsx) |
| Apply Project Controls Skills to Real Projects | [ProfessionalCapabilitySection.tsx](components/ProfessionalCapabilitySection.tsx) | [ProfessionalCapability.tsx](../../project-controls-professional-level-6/components/ProfessionalCapability.tsx) |
| What you could apply at work | [WhatYouCouldApplyAtWork.tsx](components/WhatYouCouldApplyAtWork.tsx) | [OutcomeExamples.tsx](../../../components/feature/OutcomeExamples.tsx) |
| Professional Recognition | [ProfessionalRecognition.tsx](components/ProfessionalRecognition.tsx) | Page-local |
| Institute of Project Controls | [InstituteOfProjectControls.tsx](components/InstituteOfProjectControls.tsx) | [IpcAuthority.tsx](../../../components/feature/IpcAuthority.tsx) |
| Funding and costs | [FundingAndCosts.tsx](components/FundingAndCosts.tsx) | [PcpFundingStrip.tsx](../../../components/feature/PcpFundingStrip.tsx) |
| Frequently Asked Questions | [FrequentlyAskedQuestions.tsx](components/FrequentlyAskedQuestions.tsx) | [PcpFaqSection.tsx](../../../components/feature/PcpFaqSection.tsx) |

Section copy, repeated items and configuration:

- [campaignData.ts](campaignData.ts)

Keep `page.tsx` focused on section order and page state. Add new page-specific sections to `components/`, use the visible label for the filename, and update imports when renaming. Shared navigation and the footer remain in `src/components/feature/`.

The IPC promotion section uses the canonical content and dark/gold design in [IpcAuthority.tsx](../../../components/feature/IpcAuthority.tsx). The shared section owns both recognition/growth features and its gold primary / outline secondary actions. Page wrappers supply no content overrides; published portraits remain dashboard-managed.

Commercial professional-capability copy is owned by `professionalCapabilities` in [campaignData.ts](campaignData.ts), passed through its local section wrapper. Other campaign pages keep the shared component defaults.

Page reading order: hero; commercial programme overview; the difference; pathway selection; professional capabilities; workplace application examples; ChPP recognition; IPC support; funding and costs; frequently asked questions. All existing sections and action destinations are preserved.
