# Typography issue register

Date: 22 October 2026. **Audit only; recommendations have not been implemented.**

Issue groups: **12**. Severity distribution: **P0 0 · P1 5 · P2 5 · P3 2**. A shared defect repeated across many pages is one issue group. “Route” below identifies confirmed examples or a shared source scope; it does not assert that every authenticated/live content state was rendered.

| ID | Severity | Route | Component | File:Line | Current Behaviour | Expected Behaviour | Recommended Fix |
|---|---|---|---|---|---|---|---|
| T01 | P1 | All Next.js routes, including shared navigation, footer and dialogs | Next root layout / font loading | frontend/src/app/layout.next.tsx:4; frontend/index.html:28; frontend/src/styles/mobile-typography.css:4 | Vite loads Poppins and Source Serif 4 from Google. The existing Next export declares neither family. At 1440px actual heading glyphs use Georgia Bold; body sample uses Segoe UI Semibold. At 375px only public headings get the local serif face; body still falls back. | The same approved brand faces render in both entry points, at every breakpoint and in portals. | Load the approved text faces from a shared, explicit font-loading strategy used by Next and Vite. Preserve Source Serif 4, Poppins and the approved stronger mobile heading weights. |
| T02 | P1 | /contact | GetInTouch / global outline CTA rule | frontend/src/pages/contact/components/GetInTouch.tsx:26; frontend/src/index.css:127 | Request a consultation computes to RGB 31,41,51 on RGB 1,6,9: approximately 1.38:1. The global .cta-button[class*='border'] rule assigns color: inherit and beats the text-white utility. | The full CTA label remains clearly readable in its dark-surface variant. | Replace contextual inheritance with an explicit outline-button tone API or a scoped dark-surface variant. Audit the same selector's other consumers. |
| T03 | P1 | /, /programmes, /short-courses, /associate-project-manager-level-4, /project-controls-professional-level-6, sector pages and other light-label consumers | SectionHeading and page-local eyebrow labels | frontend/src/components/base/SectionHeading.tsx:19; frontend/src/pages/operational-pcp-engineering/components/ProjectControlsThatProtectEngineeringValue.tsx:34 | The shared text-highlight-600 label is about 2.32:1 on the ivory canvas (2.17:1 on the course catalogue surface). Engineering's text-signal-300 eyebrow is about 1.40:1. These are 14px labels, not large text. | Small meaningful labels meet 4.5:1 while preserving the warm brand accent. | Define a warm ink token for light surfaces and keep pale signal shades for dark surfaces or decoration. Replace both shared and local label variants. |
| T04 | P1 | /find-your-best-project-controls-route, /route-finder, /knowledge-hub/*, /project-controls-professional/strategic-operational-route, /strategic-operational-pcp, /governance-board and campaign examples | PcpComplianceNote / ComplianceNote / TimeCommitment | frontend/src/components/feature/PcpComplianceNote.tsx:5; frontend/src/pages/strategic-operational-pcp/components/ComplianceNote.tsx:5; frontend/src/pages/governance-board/components/TimeCommitment.tsx:25 | The 14px funding/recognition note in foreground-400 measures about 3.33:1 on the canvas. The Board renewal condition at white/50 measures about 3.69:1 on its solid dark surface. Some campaign secondary copy is about 4.21:1. | Eligibility, funding, professional-recognition and renewal conditions remain legible at normal text contrast. | Use the existing darker foreground-500/600 family or a sufficiently opaque light-on-dark text token. Verify each actual surface rather than applying opacity uniformly. |
| T05 | P1 | Shared public header; reproduced on /about at 1280px | Navbar booking action / programme-navigation.css | frontend/src/components/feature/programme-navigation.css:24; frontend/src/components/feature/Navbar.tsx:253; frontend/src/index.css:37 | With line-height 1.5, letter-spacing .12em and word-spacing .16em, Book a Session shrinks to 92.375px total width and grows to 261.594px high; its top is -38.797px. The label wraps into individual letters and begins above the viewport. | User spacing adjustments preserve the complete readable booking action and usable navigation. | Reserve a readable minimum inline size for the action and provide a responsive header fallback when content no longer fits. Preserve the measured header-height behavior; do not merely force nowrap and move overflow elsewhere. |
| T06 | P2 | /apprentices, /commercial-project-controls-route and /campaign/* | CampaignTransformation / ProfessionalCapability / YourJourney | frontend/src/components/feature/CampaignTransformation.tsx:42; frontend/src/pages/project-controls-professional-level-6/components/ProfessionalCapability.tsx:21; frontend/src/pages/apprentices/components/YourJourney.tsx:26 | Rendered heading sequences jump from h2 directly to h4, including Without a Structured Pathway and Planning & Scheduling. Visual size has been encoded through heading rank rather than the content outline. | Heading rank reflects nesting, independently of visual text size. | Use h3 for direct subsection/card headings under h2, or another appropriate semantic element for labels. Retain approved visual styles through role classes. |
| T07 | P2 | Shared public typography and page-specific card/directory styles | Tailwind type scale / H2 plugin / role styles | frontend/tailwind.config.cjs:116; frontend/tailwind.config.cjs:136; frontend/src/styles/heroes.css:70; frontend/src/components/feature/case-studies.css:15; frontend/src/components/feature/learner-experiences.css:35 | There are 98 explicit CSS font-size declarations, many utility forms and arbitrary sizes. An ID-qualified plugin scales selected h2 utilities by .9, while custom CSS h2 roles bypass it. xs is 14px and sm 15px, whereas metadata and action styles separately use 11/12/13px. These layers make equivalent roles difficult to predict. | A small documented set of role tokens governs sizes, line heights and optical adjustments without implicit selector side effects. | Introduce role tokens on the existing stack and bake approved size adjustments into those tokens. Preserve justified differences between heroes, compact headings, cards, navigation and footer. Migrate shared components first. |
| T08 | P2 | /, /testimonials, /case-studies, /case-studies/:slug and shared learner-card consumers | LearnerExperienceCard / LearnerCaseStudyCard / case-study context | frontend/src/components/feature/learner-experiences.css:21; frontend/src/components/feature/learner-experiences.css:30; frontend/src/components/feature/case-studies.css:7; frontend/src/components/feature/case-studies.css:18 | Programme labels, provenance/source links, sectors and theme labels use .6875rem (11px at the default root), often uppercase and tracked. The public utility caption scale starts at 14px, so these content-bearing labels form a separate dense micro-scale. | Meaningful metadata remains comfortable to read on mobile and follows an explicit caption role. | Use a consistent 12–14px-equivalent metadata role with suitable line height and limited tracking. Preserve compact badges only where their content and context justify it. |
| T09 | P2 | Shared programme assistant on public routes | ProgrammeAssistant text styles | frontend/src/components/feature/chatbot/programme-assistant.css:17; frontend/src/components/feature/chatbot/programme-assistant.css:19; frontend/src/components/feature/chatbot/programme-assistant.css:37 | Messages are 13px, prompt/actions 11–12px and the privacy notice 10px, versus 15–16px general text. Under a browser-only 200% root-font override body text becomes 32px while the privacy notice remains 10px. | The assistant uses readable support-text roles and participates in the site's relative type scaling. | Use shared rem-based body/support/caption tokens for chat text. Preserve pixel dimensions for icons where appropriate; keep the current flexible scrollable panel. |
| T10 | P2 | /testimonials and /dashboard/login; analogous fields require follow-up | Experience search input / LoginPage input | frontend/src/components/feature/learner-experiences.css:40; frontend/src/dashboard/pages/LoginPage.tsx:71; frontend/src/dashboard/pages/LoginPage.tsx:84 | Search placeholder RGB 156,163,175 on RGB 245,248,249 is approximately 2.38:1. Login's white/30 placeholder, composited over its card and field backgrounds, is approximately 2.54:1. | Visible placeholder examples meet 4.5:1 while persistent field labels remain available. | Specify accessible placeholder tokens for light and dark fields instead of relying on the Tailwind default gray or white/30. |
| T11 | P3 | /campaign/construction, /campaign/energy, /campaign/public-sector | KeyMessage blockquotes / font requests | frontend/src/pages/campaign/construction/components/KeyMessage.tsx:5; frontend/index.html:28 | The quote computes to Source Serif 4 italic 400, but no italic FontFace is registered. Chrome reports the regular Source-Serif-4-14pt face for its glyphs, confirming synthesis. | Approved italic styling has an intentional and documented font-face implementation. | Supply a licensed genuine italic face in the shared loader, or obtain design approval for an upright quote treatment. Do not disable synthesis globally until required styles exist. |
| T12 | P3 | Vite homepage at 375px; shared font-loading architecture | Google Source Serif loader / CPCM Mobile Heading alias | frontend/index.html:28; frontend/src/styles/mobile-typography.css:4; frontend/src/styles/mobile-typography.css:18 | A fresh mobile homepage registers and uses Source Serif 4 remote faces at several weights as well as the local CPCM Mobile Heading 400–900 face. The aliases make font ownership and loading behavior harder to reason about. | The approved serif family has one coherent shared loading and weight strategy. | Consolidate family/loading ownership while keeping the existing 800/900 mobile heading treatment. Re-measure transfers before assigning a byte-saving claim. |

## Reproduction and evidence

### T01 — Production does not load the brand text fonts

**Severity:** P1. **Source:** frontend/src/app/layout.next.tsx:4; frontend/index.html:28; frontend/src/styles/mobile-typography.css:4.

Serve the existing frontend/.next-build export without rebuilding, open /about/ at 1440 and 375px, inspect CSS.getPlatformFontsForNode rather than only computed font-family. Production font-face list contains only remixicon on desktop; mobile adds CPCM Mobile Heading.

**Evidence:** [production-fonts-1440.png](evidence/production-fonts-1440.png), [production-fonts-375.png](evidence/production-fonts-375.png).

**Recommended correction:** Load the approved text faces from a shared, explicit font-loading strategy used by Next and Vite. Preserve Source Serif 4, Poppins and the approved stronger mobile heading weights.

### T02 — Contact consultation CTA inherits dark text on a dark surface

**Severity:** P1. **Source:** frontend/src/pages/contact/components/GetInTouch.tsx:26; frontend/src/index.css:127.

Open /contact at 375px (also present across the seven tested widths). Inspect the second hero action and its computed color. The label is nearly invisible in the screenshot.

**Evidence:** [contact-cta-375.png](evidence/contact-cta-375.png).

**Recommended correction:** Replace contextual inheritance with an explicit outline-button tone API or a scoped dark-surface variant. Audit the same selector's other consumers.

### T03 — Warm accent labels fail contrast on light surfaces

**Severity:** P1. **Source:** frontend/src/components/base/SectionHeading.tsx:19; frontend/src/pages/operational-pcp-engineering/components/ProjectControlsThatProtectEngineeringValue.tsx:34.

Open /short-courses and scroll to Course catalogue. Open the engineering sector route and scroll to #value. Measure the solid foreground/background pair; do not apply this result to pale labels on dark heroes.

**Evidence:** [accent-label-375.png](evidence/accent-label-375.png), [engineering-label-375.png](evidence/engineering-label-375.png).

**Recommended correction:** Define a warm ink token for light surfaces and keep pale signal shades for dark surfaces or decoration. Replace both shared and local label variants.

### T04 — Material conditions and supporting copy are too faint

**Severity:** P1. **Source:** frontend/src/components/feature/PcpComplianceNote.tsx:5; frontend/src/pages/strategic-operational-pcp/components/ComplianceNote.tsx:5; frontend/src/pages/governance-board/components/TimeCommitment.tsx:25.

Scroll to the compliance note on /route-finder and the renewal condition on /governance-board. Inspect computed size/color and composite alpha over the solid parent surface.

**Evidence:** Computed-color evidence in TYPOGRAPHY_AUDIT_REPORT.md.

**Recommended correction:** Use the existing darker foreground-500/600 family or a sufficiently opaque light-on-dark text token. Verify each actual surface rather than applying opacity uniformly.

### T05 — Header booking text becomes a clipped vertical column with text-spacing overrides

**Severity:** P1. **Source:** frontend/src/components/feature/programme-navigation.css:24; frontend/src/components/feature/Navbar.tsx:253; frontend/src/index.css:37.

At /about, 1280x900, temporarily inject '*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}p{margin-bottom:2em!important}' in browser devtools. Compare the booking action geometry and screenshot.

**Evidence:** [text-spacing-header-1280.png](evidence/text-spacing-header-1280.png).

**Recommended correction:** Reserve a readable minimum inline size for the action and provide a responsive header fallback when content no longer fits. Preserve the measured header-height behavior; do not merely force nowrap and move overflow elsewhere.

### T06 — Campaign and learner headings skip semantic levels

**Severity:** P2. **Source:** frontend/src/components/feature/CampaignTransformation.tsx:42; frontend/src/pages/project-controls-professional-level-6/components/ProfessionalCapability.tsx:21; frontend/src/pages/apprentices/components/YourJourney.tsx:26.

List document headings on /commercial-project-controls-route and /apprentices. The h2-to-h4 transitions are actual rendered elements, not only alternate code branches. A skipped rank alone is not asserted as an automatic WCAG failure.

**Evidence:** Rendered heading sequences across eight route families; see coverage matrix.

**Recommended correction:** Use h3 for direct subsection/card headings under h2, or another appropriate semantic element for labels. Retain approved visual styles through role classes.

### T07 — Text roles are spread across competing scale rules

**Severity:** P2. **Source:** frontend/tailwind.config.cjs:116; frontend/tailwind.config.cjs:136; frontend/src/styles/heroes.css:70; frontend/src/components/feature/case-studies.css:15; frontend/src/components/feature/learner-experiences.css:35.

Compare .text-2xl (24.8px), #main-content h2.text-2xl (22.32px) and custom .learner-study-narrative h2 (24px). The 10% adjustment itself is a documented design decision; the issue is fragmented ownership and bypass behavior.

**Evidence:** Complete CSS-size and utility-form inventories in TYPOGRAPHY_AUDIT_REPORT.md.

**Recommended correction:** Introduce role tokens on the existing stack and bake approved size adjustments into those tokens. Preserve justified differences between heroes, compact headings, cards, navigation and footer. Migrate shared components first.

### T08 — Learner and case-study metadata uses unusually small meaningful text

**Severity:** P2. **Source:** frontend/src/components/feature/learner-experiences.css:21; frontend/src/components/feature/learner-experiences.css:30; frontend/src/components/feature/case-studies.css:7; frontend/src/components/feature/case-studies.css:18.

At /testimonials, inspect .experience-card__programme and .experience-card__source. At /case-studies inspect sector/theme labels. This is a usability/consistency issue; WCAG does not impose a universal minimum font size.

**Evidence:** [learner-metadata-375.png](evidence/learner-metadata-375.png), [case-study-375.png](evidence/case-study-375.png).

**Recommended correction:** Use a consistent 12–14px-equivalent metadata role with suitable line height and limited tracking. Preserve compact badges only where their content and context justify it.

### T09 — Chat supporting text has its own tiny fixed-pixel scale

**Severity:** P2. **Source:** frontend/src/components/feature/chatbot/programme-assistant.css:17; frontend/src/components/feature/chatbot/programme-assistant.css:19; frontend/src/components/feature/chatbot/programme-assistant.css:37.

Open the assistant at 375px and inspect the privacy line. Set document.documentElement.style.fontSize='200%' for a relative text-size check. This is not a native browser-zoom test and is not, by itself, claimed as a 1.4.4 conformance failure.

**Evidence:** [chat-microcopy-375.png](evidence/chat-microcopy-375.png).

**Recommended correction:** Use shared rem-based body/support/caption tokens for chat text. Preserve pixel dimensions for icons where appropriate; keep the current flexible scrollable panel.

### T10 — Placeholder text fails normal text contrast

**Severity:** P2. **Source:** frontend/src/components/feature/learner-experiences.css:40; frontend/src/dashboard/pages/LoginPage.tsx:71; frontend/src/dashboard/pages/LoginPage.tsx:84.

Inspect getComputedStyle(input,'::placeholder') on .experience-filters input and #username. Composite the login placeholder over the .04 card and .05 field overlays; do not compare its alpha color directly with white.

**Evidence:** [login-placeholder-375.png](evidence/login-placeholder-375.png), [computed alpha/background evidence](evidence/computed alpha/background evidence).

**Recommended correction:** Specify accessible placeholder tokens for light and dark fields instead of relying on the Tailwind default gray or white/30.

### T11 — Italic quotation styles use synthesized rather than supplied italic faces

**Severity:** P3. **Source:** frontend/src/pages/campaign/construction/components/KeyMessage.tsx:5; frontend/index.html:28.

Inspect the campaign blockquote, document.fonts entries with style='italic', and CSS.getPlatformFontsForNode. No broken glyphs or unreadability was observed; this is polish.

**Evidence:** Browser font-face/platform-font probe.

**Recommended correction:** Supply a licensed genuine italic face in the shared loader, or obtain design approval for an upright quote treatment. Do not disable synthesis globally until required styles exist.

### T12 — Mobile uses two logical registrations of the same heading family

**Severity:** P3. **Source:** frontend/index.html:28; frontend/src/styles/mobile-typography.css:4; frontend/src/styles/mobile-typography.css:18.

Open / at 375px in a fresh browser session and inspect loaded document.fonts faces. Both logical heading families are in use. Additional transferred bytes were not comprehensively measured, so no savings estimate is claimed.

**Evidence:** Fresh mobile font-face probe; local WOFF2 is 50,936 bytes.

**Recommended correction:** Consolidate family/loading ownership while keeping the existing 800/900 mobile heading treatment. Re-measure transfers before assigning a byte-saving claim.


## Classification notes

- **P0:** none established. No site-wide unreadable document or completely unusable text-navigation system was demonstrated.
- **P1:** confirmed production font divergence, major readable-text contrast failures or loss of the header booking label under user spacing.
- **P2:** semantic/scale consistency, content-bearing microcopy and placeholder accessibility issues where the primary journey remains available.
- **P3:** intentional font treatments whose implementation can be improved without blocking the journey.
- 10–11px text is a readability finding, not an invented WCAG minimum-size requirement.
- Strong mobile weights, footer/title role differences, horizontal tables, specialist monospace editors, decorative IPC lettering and expandable quote previews are not classified as defects merely because they differ.
- Pseudo-element/image/gradient contrast candidates and transient loading screens were not treated as confirmed color failures.
- Protected dashboard rows in the coverage matrix are not visually verified; any shared source finding affecting them is labelled as such.
