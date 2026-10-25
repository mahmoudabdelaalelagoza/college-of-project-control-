# About Us — approved eleven-section page

Route: `/about`. Entry: [page.tsx](page.tsx). Composition: [AboutCPCM.tsx](components/AboutCPCM.tsx).

The page follows the supplied eleven-section structure exactly. Existing About, learning, AI and employer copy has been consolidated into that structure; shared homepage sections remain shared. No database, authentication, content-management API or route definitions were changed.

## Files and components

- [AboutCPCM.tsx](components/AboutCPCM.tsx): eleven-section composition, scoped content-section helper, existing hero, measured sticky navigation and working CTAs. Uses the site's `SectionHeading`, `SiteLink` and `PageSectionNav`.
- [aboutContent.ts](aboutContent.ts): page-local editorial content with programme names, standard references and recognition wording resolved from the canonical programme facts.
- [about.css](about.css): anchor clearance below the public header and section navigation; visible disclosure focus styles; darker existing warm brand tokens for small text on light backgrounds. Styles are limited to `.about-page`.
- [page.tsx](page.tsx): imports the local stylesheet and adds the scoped page class. Existing main and footer remain.
- [LearnFromPractitioners.tsx](components/LearnFromPractitioners.tsx): reused unchanged. Renders the canonical homepage `MeetMentors` with `id="experts"`; there is no About-specific mentor list or copy override.
- Shared [LearnerExperiences.tsx](../../components/feature/LearnerExperiences.tsx): reused unchanged for impact, with `id="impact"`.
- Generated [index.compiled.css](../../index.compiled.css): rebuilt using the existing Tailwind pipeline.

## Section order, content and evidence

| # | Section / anchor | Content and existing sources |
| --- | --- | --- |
| 1 | Hero — `#about-hero` | Existing approved About introduction, programme CTA and team contact. Uses the same `/assets/images/hero-professional.webp`, shared hero typography, overlay and header spacing as the site. |
| 2 | Who We Are — `#who-we-are` | CPCM's relationship to Kent Business College, professional focus and audiences. Sources: previous About content, [WhoWeAre.tsx](components/WhoWeAre.tsx), [WhoCPCMSupports.tsx](components/WhoCPCMSupports.tsx), homepage introduction. |
| 3 | Our Story — `#our-story` | The documented professional challenge, specialist purpose within KBC and present offer. Sources: the same existing About identity and purpose content. Uses the existing employer collaboration image. No founding dates, founders or dated milestones are invented. |
| 4 | Mission, Vision & Values — `#mission-values` | Purpose-led summaries of useful knowledge, informed decisions and professional responsibility. Values reuse [OurPointOfView.tsx](components/OurPointOfView.tsx) and existing responsible AI copy. These are editorial summaries, not claims of newly adopted official institutional statements. |
| 5 | What We Do — `#programmes` | The two apprenticeships, standalone Certified PMO programme, specialist courses and employer development. Programme names come from [programmeFacts.ts](../../data/programmeFacts.ts). Summaries retain approved About copy. Standalone PMO links to `/short-courses/pmo-level-6`, which supports that exact programme; the PMO apprenticeship route is kept distinct. |
| 6 | Why Choose Us — `#why-choose-us` | Existing specialist focus, professional relevance and support statements; Prepare → Learn → Apply → Review & Develop. Responsible AI and workplace support are accessible native disclosures. Sources: approved About copy, [HowWeWork.tsx](components/HowWeWork.tsx), home value statements and programme learning approaches. |
| 7 | Leadership & Team — `#experts` | Exact homepage mentor section: Stephen Jenner, Ray Mead and Professor Amgad Badewi, including the KBC CEO role. Source: shared [MeetMentors.tsx](../../components/feature/MeetMentors.tsx); photos, profile destinations and LinkedIn links continue to use dashboard-managed mentor records. |
| 8 | Credentials & Recognition — `#recognition` | The named Certified PMO assessment's APM technical-knowledge recognition, separate ChPP requirements, ST0310 and ST0845 occupational standards and independent apprenticeship assessment. Sources: canonical programme facts and existing Chartered pathway [APM recognition section](../chartered-pmo-pathway/components/ApmProfessionalRecognition.tsx). The existing official APM listing link is reused. Recognition is not described as blanket institutional accreditation. |
| 9 | Impact & Proof — `#impact` | Canonical homepage learner experiences, now using the published PCP collection: Marson Kwan, Leigh Pullan and Andrew Raslan, with source photographs and links to their entries in the grouped directory. Source: shared LearnerExperiences component and the KBC PCP import documented in the testimonials README. No ROI or independently verified outcome claims are added. |
| 10 | Locations & Reach — `#locations` | Kent, England; live online teaching; individual commercial study enquiries from outside England. Sources: [ContactInfoStrip.tsx](../contact/components/ContactInfoStrip.tsx), canonical programme delivery records and the commercial-route page. Existing supported sectors are retained. No extra offices, campuses or countries of operation are implied. |
| 11 | Final CTA — `#next-step` | Existing approved closing message, programme section anchor and conversation booking. Booking retains the site's `/about` context parameter. Admission, funding, included support and assessment wording is preserved. |

## Missing information and editorial limits

- No documented founding date, founder narrative or dated organisational milestones were found. The story therefore explains the documented purpose and current role rather than fabricating a historical timeline.
- No separate formally approved mission and vision statements were found. The page uses cautious purpose and direction summaries grounded in existing site messaging.
- The contact page provides Kent, England, without a street address or confirmed campus list. No precise map, postcode or additional physical location is introduced.
- No verified organisational outcome metrics or awards were established for this page. Impact uses the existing published learner experience rather than invented figures.
- No official APM logo asset was found locally. The recognition section uses the site's existing icon system and the exact named assessment, rather than recreating a logo or implying a wider endorsement.
- Mentor photos and profile links still depend on published CMS records. The shared component's existing initials fallback is retained when a portrait is unavailable.

## Responsive and accessibility review

- Shared promotional hero styling and gradient remain intact; content clears the fixed public header.
- The local navigation follows `--public-header-height` and stays directly below the header. Section anchors include the navigation height and an additional reading gap.
- Exactly eleven top-level sections, one H1, logical heading levels and accessible section labels were checked.
- Story layout, programme cards, values, learning steps and location cards adapt across mobile, tablet and desktop.
- Native `details`/`summary` controls support keyboard interaction and expose optional employer and AI detail without adding top-level sections.
- Existing image assets have meaningful alt text, new-tab links have `noopener noreferrer`, and decorative icons are hidden from assistive technology.
- The shared mentor carousel retains mobile looping, arrow buttons, keyboard navigation, inert duplicate cards and reduced-motion behaviour.
- Small warm labels on light surfaces use the darker existing highlight token. The local colour check sampled visible headings, text, labels and links, including expanded disclosures: minimum computed contrast 6.26:1 at 390px and 1440px.

## Validation results

Commands were run from `frontend`:

| Check | Actual result |
| --- | --- |
| `npm run type-check` | Passed. |
| `eslint src/pages/about --ext ts,tsx --max-warnings 0` | Passed, no warnings. |
| `npm test` | Passed: 3 section tests and 24 journey tests. |
| `npm run build` | Passed: Tailwind compiled, Next production build completed, 74 static pages generated and output copied to `dist/`. |
| `git diff --check -- frontend/src/pages/about` (repository root) | Passed. |
| Local browser review | Passed at 320, 390, 768, 1024 and 1440px: eleven-section order, headings, internal routes and anchors, image paths, external-link attributes, no horizontal overflow, sticky header clearance, Enter-key disclosure operation and mobile carousel wrapping. |
| Existing destination smoke checks | Passed for Level 4, Level 6, standalone PMO, course catalogue, booking, contact, commercial route and testimonials. Homepage shared mentor and learner-experience content also passed. |
| `npm run lint` | Failed the zero-warning policy on an existing `react-hooks/exhaustive-deps` warning in `src/dashboard/pages/UsersPage.tsx:94` (`load` missing from a dependency array). This file was not changed by the About implementation. |
| `npm run test:dashboard` | Initially blocked by sandbox temporary-directory permissions. With write permission, short-course draft test passed; mentor draft test failed in the existing test helper (`fill`, `Illegal invocation`, at `scripts/dashboard-drafts.test.mjs:122`). Neither the dashboard editor nor this test/helper was changed. |

Screenshots and the temporary browser-review harness are in the ignored repository `.codex_tmp` directory. External recognition and testimonial claims were sourced from the existing project as requested; no new independent external verification is claimed.

No approval is required to use the completed About page. The unrelated lint warning and dashboard test-helper failure remain outside this page's scope.
