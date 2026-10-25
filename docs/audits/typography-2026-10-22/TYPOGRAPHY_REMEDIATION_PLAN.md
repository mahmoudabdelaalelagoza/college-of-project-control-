# Typography remediation plan

Date: 22 October 2026. **Planning only. Implementation requires explicit approval.**

## Priority and estimated scope

Resolve the five P1 findings before polishing the scale. A reasonable initial estimate is **6–9 engineering days including regression QA**, subject to access to authenticated content, font licensing/loading choices and review turnaround. This is a planning range, not a delivery guarantee. Central fixes should address most repeated instances; a site-wide line-by-line restyling is not recommended.

| Phase | Findings / outcome | Likely scope | Estimate |
|---|---|---|---|
| 1 — Brand-font parity | T01; align entry points and portals | Shared loader, typography tokens/mobile alias, font assets if approved | .75–1.25 days |
| 2 — Readable text | T02,T03,T04,T10; correct surface-aware colors | Shared CTA/SectionHeading, key local exceptions, input tones | 1–1.5 days |
| 3 — User text adjustments | T05; resilient header at increased spacing | Navbar layout + booking fit fallback, measured-height behavior | .5–1 day |
| 4 — Semantic/role consolidation | T06,T07; predictable hierarchy and scale ownership | Shared heading/card roles, limited page-level rank corrections | 1.5–2 days |
| 5 — Supporting copy and font polish | T08,T09,T11,T12 | Card/chat caption roles, genuine italics if retained, deduplication | .75–1.25 days |
| 6 — Regression and blocked areas | All findings; authenticate and cross-browser validation | Routes, dialogs, tables, real long content, native zoom | 1.5–2 days |

Some phases overlap; do not interpret the sum of upper bounds as a committed schedule.

## Exact likely implementation files

### Phase 1: font loading

- frontend/src/app/layout.next.tsx
- frontend/index.html
- frontend/src/styles/tokens.css
- frontend/src/styles/mobile-typography.css
- frontend/public/assets/fonts/README.md
- frontend/public/assets/fonts/ (only approved licensed additions)

Keep shared font ownership. Do not fix only the Vite entry or only a temporary deployment staging directory. The portal-based eligibility modal and public header/footer need the same loaded fonts as page content.

**Acceptance:** actual Poppins and Source Serif 4 glyph faces in Vite and a newly built Next production app at 375,768,1440px, including portal content; approved 800/900 mobile weights remain visible; no silent Georgia/Segoe UI replacement where a brand face is expected.

### Phase 2: contrast and CTA inheritance

- frontend/src/index.css — .cta-button[class*='border'] and shared surface-aware controls.
- frontend/src/components/base/SectionHeading.tsx — accessible light-surface eyebrow tone.
- frontend/src/pages/contact/components/GetInTouch.tsx — explicit dark-surface secondary CTA.
- frontend/src/pages/operational-pcp-engineering/components/ProjectControlsThatProtectEngineeringValue.tsx — pale eyebrow on ivory.
- frontend/src/components/feature/PcpComplianceNote.tsx.
- frontend/src/pages/strategic-operational-pcp/components/ComplianceNote.tsx.
- frontend/src/pages/governance-board/components/TimeCommitment.tsx.
- frontend/src/components/feature/learner-experiences.css — search placeholder.
- frontend/src/dashboard/pages/LoginPage.tsx — dark-field placeholder.
- Other confirmed warm-label/low-opacity consumers found by the same source scan; update by semantic tone, not a global color search-and-replace.

**Acceptance:** contrast is at least 4.5:1 for normal meaningful text and 3:1 for qualifying large text, including placeholders. Check composited alpha and real surfaces. Contact's consultation action is clearly readable and retains its intended outline treatment. Do not darken pale hero accents that already work on dark backgrounds.

### Phase 3: header under user spacing

- frontend/src/components/feature/Navbar.tsx.
- frontend/src/components/feature/programme-navigation.css.
- frontend/src/components/feature/mobile-navigation.css only if the fit fallback affects the mobile/tablet handoff.
- frontend/src/hooks/usePublicHeaderHeight.ts only if height observation requires an adjustment; first verify the existing observer is sufficient.

The observed failure is a narrow booking action, not a lack of document width. Preventing one wrap with nowrap alone can simply move the failure into overlapping navigation. Reserve a readable action width and introduce a controlled wrapping/drawer fallback as required.

**Acceptance:** at /about 1280x900 with line-height 1.5, letter-spacing .12em, word-spacing .16em and paragraph margin 2em, the complete Book a Session label is visible as words, its top is not negative, it does not exceed the header region, and all nav items remain usable. Repeat at the seven requested widths and around the 1280px handoff. Sticky page navigation still tracks the measured header below it.

### Phase 4: type roles and semantic hierarchy

- frontend/tailwind.config.cjs.
- frontend/src/styles/tokens.css.
- frontend/src/styles/heroes.css.
- frontend/src/styles/mobile-typography.css.
- frontend/src/components/base/SectionHeading.tsx.
- frontend/src/components/base/Modal.tsx.
- frontend/src/components/base/FormField.tsx.
- frontend/src/dashboard/components/DashboardPrimitives.tsx.
- frontend/src/components/feature/CampaignTransformation.tsx.
- frontend/src/pages/project-controls-professional-level-6/components/ProfessionalCapability.tsx.
- frontend/src/pages/apprentices/components/YourJourney.tsx.
- frontend/src/components/feature/case-studies.css.
- frontend/src/components/feature/learner-experiences.css.

Adopt a few semantic roles with the existing Tailwind/CSS architecture. Move the intended H2 optical adjustment into documented role values before removing its ID-qualified plugin. Change heading rank independently of visual size. Preserve compact page headers, normal hero distinctions, footer hierarchy and the approved heavy mobile headings.

**Acceptance:** shared section/card/modal roles have documented family, size, weight and line-height ownership; equivalent roles no longer require hidden selector arithmetic. Campaign/apprentice heading outlines reflect their actual nesting. Decorative IPC and specialist monospace are preserved as intentional exceptions.

### Phase 5: metadata/chat and optional font refinement

- frontend/src/components/feature/learner-experiences.css.
- frontend/src/components/feature/case-studies.css.
- frontend/src/components/feature/chatbot/programme-assistant.css.
- frontend/src/pages/campaign/construction/components/KeyMessage.tsx.
- frontend/src/pages/campaign/energy/components/KeyMessage.tsx.
- frontend/src/pages/campaign/public-sector/components/KeyMessage.tsx.
- The shared loader/font files selected in Phase 1.

Increase meaningful microcopy through role tokens, and use relative units for text. Keep SVG/icon geometry separate. If italic treatment is retained, supply a real italic face. Consolidating the mobile alias is optional only if Phase 1 already achieves parity without it.

**Acceptance:** metadata and privacy content are comfortable to read; relative root-font changes scale text coherently; chat scroll/composer actions stay usable; disclosure previews still expose full reflections; no fabricated font-transfer saving is claimed without measurement.

## Shared-component regression risks

1. Genuine brand fonts will change line breaks compared with current production fallback fonts. Verify header, hero heights, long course titles, cards, tables and controls before release.
2. CTA inheritance changes can affect outline actions on both light and dark surfaces. Use explicit tone variants and test both; avoid global replacement of every inherited color.
3. The H2 plugin currently affects many components, including small footer/modal contexts where applicable. Preserve optical intent while migrating and compare reference captures.
4. Removing a mobile family alias must not remove the approved 800/900 heading weight distinction.
5. Caption increases can change card density and metadata wrapping; do not compensate by clipping content.
6. Header height/fallback changes must preserve the existing public-header variable and sticky navigation clearance.
7. Font-face URLs must resolve in production and any configured base path; no deployment configuration is changed by this audit.
8. Parent styles cannot control the internals of the cross-origin Zoho agreement form; it needs separate provider-side review.

## Validation plan

| Check | Reference targets | Evidence required |
|---|---|---|
| Font parity | Home, About, L4, L6, dialog, header/footer; Vite + rebuilt Next | Actual platform font names and loaded faces, including italic/800/900 |
| Solid-surface contrast | Contact CTA, warm eyebrows, legal notes, placeholders | Color/alpha calculations plus reviewed screenshots |
| Standard responsive layout | All current route families at 320/375/430/768/1024/1440/1920 | No unintended text loss or document overflow; intentional table scrolling retained |
| Text spacing | All shared controls/header plus reference pages | Full user-spacing overrides without lost action labels/content |
| Native zoom | Chrome/Firefox/Safari at 200%; 320px-equivalent reflow | Native browser evidence, not only viewport/pinch/root-font proxies |
| Semantics | Public page sections and card trees | Correct heading nesting; label/legend/table/disclosure semantics intact |
| Forms/dialogs | Eligibility, consultation, review modal, login/reset | Long labels, placeholder contrast, errors, focus visibility, close/focus return |
| Authenticated content | All 15 protected content pages, relevant roles and dialogs | Authorized access; real list/empty/error/editor variants |
| Long content | Bundled learner names and approved long course/article fixtures | Wrapping and complete reading path; no permanent test data writes |
| Stability | Cold/warm font load and image load | Font loading and layout-shift observations with attribution limits |

No new dependency is needed merely to introduce type roles. Do not add tests that mirror CSS strings; prioritize browser-observable behavior and the existing test stack. Build/test commands and code changes would be part of a separately approved implementation phase.

## Unverified dependencies before sign-off

- Authorized dashboard accounts/role access and representative populated records.
- Ready-state article, event and mentor records; live College-submission content.
- Valid password-reset token state.
- Zoho agreement form's internal typography.
- Safari/iOS/macOS/Firefox and native zoom behavior.
- Final licensing/loading choice for shared normal/italic font assets.

The next approved work should start with **T01–T05**, then T10 contrast, then the shared role migration and semantic fixes. No implementation or deployment was performed as part of this audit.
