# Typography audit report

Date: **22 October 2026 (Africa/Cairo)**. Mode: **audit only**. Scope: current frontend workspace; no fixes, installs, builds, migrations, commits, pushes or deployments.

## Executive assessment

The site has a verified brand typography foundation—Poppins for body/UI and Source Serif 4 for headings—but implementation is not consistently carried through both rendering entry points. The highest-impact defect is a production font-loading gap, followed by text contrast failures and a header booking label that loses readability when user text spacing is applied.

There are **12 issue groups: P0 0, P1 5, P2 5, P3 2**. These count root-cause/implementation findings, not every repeated label or route occurrence. No P0 defect was established. Lack of P0 findings is not a full accessibility certification.

### Coverage accounting

- **96 route patterns/aliases**: 78 public entries and 18 dashboard entries, including public and dashboard catch-all behavior.
- **22 additional known concrete detail URLs**: 11 bundled courses, six statically listed article slugs, five bundled learner case studies.
- **118 source-inspected coverage rows**, covering **80 unique route-entry modules**.
- **99 distinct local URLs rendered**, represented by 102 route/example rows. Dynamic-pattern samples overlap three concrete URLs.
- **391 recorded route/viewport measurements**: 94 baseline rows at 375/1440px and 29 expanded rows at all seven requested widths (320,375,430,768,1024,1440,1920).
- Separate menu/dialog, text-spacing, relative text-size, font-loading and fallback-state probes supplement these measurements.
- **851 source/style files** scanned automatically, excluding generated index.compiled.css from duplicate declaration counting. Shared typography owners and relevant component graphs were manually traced.
- **16 protected dashboard entries**, including its fallback, are static-only. Two unauthenticated dashboard URLs rendered; reset-password's valid-token flow was not tested.
- Rendering/computed-style inspection is broader than manual screenshot review. The evidence gallery contains representative reviewed screenshots; it is not a screenshot of every page.
- Detailed status, blockers and source-module ownership are in [TYPOGRAPHY_ROUTE_COVERAGE.md](TYPOGRAPHY_ROUTE_COVERAGE.md).

## Architecture and authoritative style sources

| Layer | Verified implementation | Typography consequence |
|---|---|---|
| Runtime | React/ReactDOM **19.2.8**, React Router **7.18.3** | Same React UI and lazy route components |
| Development | Vite **8.2.2** | frontend/index.html loads Google text fonts; src/main.tsx imports index.css |
| Production | Next.js **16.3.8**, App Router client wrapper | src/app/layout.next.tsx imports index.compiled.css, but does not load the Google text families |
| Type/styling tooling | TypeScript **5.8.3**, Tailwind **3.4.19**, PostCSS **8.5.26**, Autoprefixer | Versions above are lockfile/installed versions, not merely package ranges |
| Tokens | src/styles/tokens.css:94–96 | Authoritative font-family names/fallbacks; no complete semantic type-size token layer |
| Global base | src/index.css:142–175 | Body 16px/1.7; all heading tags serif/700/1.15; focus styles |
| Utility scale | tailwind.config.cjs:107–157 | Font aliases, customized size ladder, and ID-qualified H2 optical-size plugin |
| Full hero role | src/styles/heroes.css:70–175 | Common hero size, weight, line height and responsive overrides |
| Mobile public headings | src/styles/mobile-typography.css | Local serif alias and approved heavier 800/900 public-heading treatment |
| Scoped/page CSS | card/directory/navigation/chat styles; about.css; strategic.css | Independent role-level declarations and overrides |
| Shared components | SectionHeading, FormField, Modal, DashboardPrimitives, Navbar/MobileNavigation, PageSectionNav, Footer, cards | Centralization exists, but there is no universal Typography/Text component |
| Native/external UI | Native controls/dialog; remixicon; Zoho employer-agreement iframe | No Material UI/Ant Design/Bootstrap/toast/charting package with a competing text theme was found in dependencies |

This is **one Tailwind/PostCSS stack with several overlapping typography owners**, not evidence of multiple independent UI frameworks. No SCSS/Sass/Less or CSS-module layer was discovered. Generated CSS is a build artifact, not a second hand-maintained design system. The supported theme is light; dark heroes/petrol panels are section treatments, not an implemented light/dark theme switch.

Typography-specific scanning recorded **277 CSS declarations** across family/size/weight/spacing/wrapping roles. No typography !important declaration was found in that source-CSS set. Existing !important rules mostly concern control backgrounds/radii, honeypots, motion and dialog visibility; their presence is not automatically a typography defect. The significant specificity/cascade risks are documented in T02 and T07. Captured rendered states each had one visible H1; alternate source branches were not incorrectly counted as simultaneous duplicate titles.

## Font inventory and actual loading

| Family | Role | Loading | Weights/styles | Fallback | Observation |
|---|---|---|---|---|---|
| Poppins | --font-body / --font-label | Google stylesheet in Vite index.html only | 300,400,500,600,700,800; normal | system-ui, sans-serif | Custom face confirmed in Vite; absent in existing Next export |
| Source Serif 4 | --font-heading | Google stylesheet in Vite index.html only | 400,500,600,700,800,900; normal | Georgia, serif | Actual Next desktop glyphs fall back to Georgia |
| CPCM Mobile Heading | Alias of Source Serif 4 | Local WOFF2 inside max-width:767.98px @font-face | Declared variable range 400–900; normal; swap | var(--font-heading) | Local file exists (50,936 bytes); 800/900 custom glyphs confirmed |
| remixicon | Icon font, not prose | cdnjs stylesheet in both HTML and Next layout | normal | Icon fallback is not a prose font decision | Remote dependency; not counted as a third brand text family |
| Tailwind monospace defaults | Admin Markdown/metrics editor and masked PIN display | System stack via font-mono | Inherited/contextual | Platform monospace stack | Intentional specialist role; not a public brand-font defect |
| system-ui preview overlay | Hidden-section CMS edit label | Injected editor-only style in PageContent.tsx:55 | 700, .75rem | sans-serif | Intentional administration-only exception |

### Browser-confirmed environment divergence (T01)

| Entry/environment | Width | Actual heading glyph face | Sample body paragraph | Registered text faces |
|---|---:|---|---|---|
| Vite /about | 1440 | Source Serif 4 ExtraBold, custom | Poppins available | Poppins, Source Serif 4 |
| Vite /about | 375 | Source Serif 4 Black, local custom alias | Poppins available | Also CPCM Mobile Heading |
| Existing Next export /about/ | 1440 | **Georgia Bold, system** | **Segoe UI Semibold, system sample** | No Poppins or Source Serif 4 face |
| Existing Next export /about/ | 375 | Source Serif 4 Black, local custom alias | **Segoe UI Semibold, system sample** | Only local mobile alias |

The Next test used the **pre-existing .next-build export**, served by a temporary read-only local HTTP server. It was **not rebuilt during this audit**, and is not represented as a current deployed-site test. The source root layout still corroborates the missing text-font loader. A computed family name alone did not establish that its font loaded: platform-glyph inspection did.

The local WOFF2 exists and its declared normal 400–900 range renders the tested 800/900 heading faces. No missing local font path was observed. Full binary axis/cmap analysis was unavailable because fontTools was not installed; no dependency was installed for this audit. Google faces use normal styles only; campaign italics are synthesized (T11). The mobile alias and remote serif are both selected on a fresh Vite homepage (T12); transfer savings have not been quantified.

English is the supported application language (HTML lang en-GB in Vite / en in Next). No Arabic locale, RTL mode or Arabic text-font contract was found. Absence of an Arabic font is therefore **not reported as a defect**. Common English punctuation rendered without visible missing-glyph boxes in reviewed samples. All operating systems and every possible Unicode character were not tested.

## Existing hierarchy by text role

| Role | Family | Observed size | Weight | Line height | Assessment |
|---|---|---|---|---|---|
| Full hero H1 | Source Serif 4; CPCM mobile alias below 768 | 36px mobile; 76px desktop sample | 800 desktop / 900 mobile | 1.08 | heroes.css controls; bold mobile is intentional |
| Compact page H1 | Source Serif 4 / mobile alias | 30–36px mobile; 48–64px desktop examples | 700–800 desktop / 800 mobile | 1.07–1.25 | Compact/editorial detail headers are valid distinct roles |
| Shared section H2 | Source Serif 4 / mobile alias | 22.32px at text-2xl H2; 46.8px example at desktop | 700 desktop / 800 mobile | Usually 1.1–1.25 | High-specificity .9 rule changes only matched utility classes |
| Card/subsection title | Usually serif; some explicit body/label overrides | 16–32px by context | 700 desktop / 800 public mobile headings | 1.25–1.5 | Need named card/section variants, not one mandatory size |
| Main prose | Poppins | 16px base; some 15px summaries, 18px introductions | 400 | 1.6–1.85 | Generally readable; do not flatten editorial/context distinctions |
| Primary/secondary actions | Poppins | 15px common, 13px desktop header, 14px mobile menu footer | 600–700 | 1.4–1.65 | Normal responsive layout works; spacing override exposes T05 |
| Desktop navigation | Poppins | 13px | 500–700 | ~21.45px for primary labels | Compactness is intentional and passes ordinary widths |
| Mobile navigation | Poppins | 16px primary / 14px links / 12px descriptions | 600–700 primary | ~1.6 | Seven viewport menu/popup checks completed |
| Forms/labels | Poppins | 16px public controls; labels 15px; login controls 15px | 400 / 600 labels | 1.5–1.7 | Placeholders require explicit accessible tones (T10) |
| Tables | Poppins cells; some serif headers | 15px via text-sm; inherited variants | 400 cells / 600–700 headers | ~1.65 | Wide comparison tables have intentional horizontal scroll |
| Dialogs | Source Serif 4 heading; Poppins content | 20px title sample; 14–16px body | 700 title outside public mobile scope | ~1.45 title | Portal is outside #main-content; production loader must cover it |
| Dashboard page/metric/sidebar | Serif page title, Poppins UI; monospace editor fields | Source: H1 24.8–32px, controls 15px, some 10–11px labels | 400–700 | Component-specific | Protected content static-only; no dashboard credential bypass |
| Alerts/error/empty/loading states | Poppins text, serif headings where semantic | 14–16px common; loader 12px | 400–700 | 1.5–1.7; loader line-height 1 | Custom components; no external toast typography layer |
| Learner/case metadata | Poppins | 11–13px; body quote 15px | 400–700 | 1.6–1.85 | T08 identifies meaningful 11px metadata |
| Chat panel | Poppins | 10–16px, predominantly fixed px | 400–700 | 1.5–1.65 | T09; launcher is an SVG and has no visible text |
| Footer | Serif headings and Poppins links/body | 16–18px titles; 14–15px content | 400/600 desktop; headings 800 mobile | ~1.6 | Small footer headings are intentional UI hierarchy |

The stronger mobile heading weights are an existing approved design decision. They are **not** classified as an error, and the proposed system preserves them. Decorative giant IPC/404 letters, monochrome editor text, compact navigation and footer headings are also legitimate distinct roles.

Static utility weight occurrences: font-semibold=663, font-bold=1140, font-medium=44, font-extrabold=25, font-black=3, font-normal=32, font-light=1. These include inactive/legacy modules and repeats; the totals do **not** prove that the visual design is excessively bold. No unsupported blanket recommendation to lighten mobile headings is made.

## Confirmed highest-impact findings

- **T01 P1 — Production does not load the brand text fonts.** Vite loads Poppins and Source Serif 4 from Google. The existing Next export declares neither family. At 1440px actual heading glyphs use Georgia Bold; body sample uses Segoe UI Semibold. At 375px only public headings get the local serif face; body still falls back.
- **T02 P1 — Contact consultation CTA inherits dark text on a dark surface.** Request a consultation computes to RGB 31,41,51 on RGB 1,6,9: approximately 1.38:1. The global .cta-button[class*='border'] rule assigns color: inherit and beats the text-white utility.
- **T03 P1 — Warm accent labels fail contrast on light surfaces.** The shared text-highlight-600 label is about 2.32:1 on the ivory canvas (2.17:1 on the course catalogue surface). Engineering's text-signal-300 eyebrow is about 1.40:1. These are 14px labels, not large text.
- **T04 P1 — Material conditions and supporting copy are too faint.** The 14px funding/recognition note in foreground-400 measures about 3.33:1 on the canvas. The Board renewal condition at white/50 measures about 3.69:1 on its solid dark surface. Some campaign secondary copy is about 4.21:1.
- **T05 P1 — Header booking text becomes a clipped vertical column with text-spacing overrides.** With line-height 1.5, letter-spacing .12em and word-spacing .16em, Book a Session shrinks to 92.375px total width and grows to 261.594px high; its top is -38.797px. The label wraps into individual letters and begins above the viewport.
- **T06 P2 — Campaign and learner headings skip semantic levels.** Rendered heading sequences jump from h2 directly to h4, including Without a Structured Pathway and Planning & Scheduling. Visual size has been encoded through heading rank rather than the content outline.
- **T07 P2 — Text roles are spread across competing scale rules.** There are 98 explicit CSS font-size declarations, many utility forms and arbitrary sizes. An ID-qualified plugin scales selected h2 utilities by .9, while custom CSS h2 roles bypass it. xs is 14px and sm 15px, whereas metadata and action styles separately use 11/12/13px. These layers make equivalent roles difficult to predict.
- **T08 P2 — Learner and case-study metadata uses unusually small meaningful text.** Programme labels, provenance/source links, sectors and theme labels use .6875rem (11px at the default root), often uppercase and tracked. The public utility caption scale starts at 14px, so these content-bearing labels form a separate dense micro-scale.
- **T09 P2 — Chat supporting text has its own tiny fixed-pixel scale.** Messages are 13px, prompt/actions 11–12px and the privacy notice 10px, versus 15–16px general text. Under a browser-only 200% root-font override body text becomes 32px while the privacy notice remains 10px.
- **T10 P2 — Placeholder text fails normal text contrast.** Search placeholder RGB 156,163,175 on RGB 245,248,249 is approximately 2.38:1. Login's white/30 placeholder, composited over its card and field backgrounds, is approximately 2.54:1.

T11 and T12 are lower-priority font-face/loading refinements. Full references, reproduction steps and recommendations are in [TYPOGRAPHY_ISSUES.md](TYPOGRAPHY_ISSUES.md).

### Solid-surface contrast evidence

| Text | Route/example | Size | Foreground / composited background | Ratio |
|---|---|---:|---|---:|
| Request a consultation | /contact | 15px | RGB 31,41,51 / 1,6,9 | 1.38:1 |
| Engineering value eyebrow | engineering sector #value | 14px | RGB 255,202,140 / 245,248,249 | 1.40:1 |
| Shared warm eyebrow | homepage / SectionHeading | 14px | RGB 230,145,60 / 245,248,249 | 2.32:1 |
| Course catalogue eyebrow | /short-courses | 14px | RGB 230,145,60 / 236,241,243 | 2.17:1 |
| Funding/recognition conditions | /route-finder | 14px | RGB 122,138,150 / 245,248,249 | 3.33:1 |
| Board renewal condition | /governance-board | 14px | Alpha-composited RGB 136,165,174 / 17,75,93 | 3.69:1 |
| Learner search placeholder | /testimonials | 16px | RGB 156,163,175 / 245,248,249 | 2.38:1 |
| Login placeholder | /dashboard/login | 15px | White/.30 over nested dark card/field overlays | 2.54:1 |

Normal meaningful text is assessed against 4.5:1; eligible large text against 3:1. Alpha was composited. Transparent text over photographs, gradients, pseudo-element layers and moving/hidden content was not accepted as a confirmed failure from ancestor colors alone. Borderline IPC-gold candidates were not turned into separate issue counts without further exact-paint validation.

## Responsive and accessibility findings

### Rendered H1 sizes (pixels)

These are measured output, not proposed replacements. Different page archetypes are intentional.

| URL | 320 | 375 | 430 | 768 | 1024 | 1440 | 1920 |
|---|---|---|---|---|---|---|---|
| `/` | 36px | 36px | 36px | 42.4px | 61.44px | 76px | 76px |
| `/about` | 36px | 36px | 36px | 42.4px | 61.44px | 76px | 76px |
| `/associate-project-manager-level-4` | 36px | 36px | 36px | 42.4px | 61.44px | 76px | 76px |
| `/project-controls-professional-level-6` | 36px | 36px | 36px | 42.4px | 61.44px | 76px | 76px |
| `/project-controls-professional/operational-route` | 36px | 36px | 36px | 42.4px | 61.44px | 76px | 76px |
| `/project-controls-professional/strategic-route` | 36px | 36px | 36px | 42.4px | 61.44px | 76px | 76px |
| `/project-controls-professional/chartered-pmo-pathway` | 36px | 36px | 36px | 42.4px | 61.44px | 76px | 76px |
| `/project-controls-professional/construction-route` | 36px | 36px | 36px | 42.4px | 61.44px | 76px | 76px |
| `/short-courses` | 32px | 32px | 32px | 42.4px | 51.2px | 64px | 64px |
| `/testimonials` | 36px | 36px | 36px | 42.4px | 51.2px | 64px | 64px |
| `/case-studies/elizabeth-pardoe-pcp` | 30px | 30px | 30px | 30px | 35.84px | 48px | 48px |
| `/contact` | 36px | 36px | 36px | 47.04px | 54.72px | 64px | 64px |
| `/dashboard/login` | 20px | 20px | 20px | 20px | 20px | 20px | 20px |

- No **positive page-level horizontal overflow** was recorded in the 391 captured default route/viewport measurements. This is not proof that all conditional content, authentication states or browsers pass reflow.
- Primary menus and the eligibility popup were exercised at all seven requested widths. Regular label wrapping and modal bounds were usable in these checks.
- User text-spacing overrides were exercised on /about (1280 and 375), /programmes (320), a case-study detail (375) and /testimonials (375).
- A **confirmed spacing failure** occurs in the public booking CTA at 1280px: width 92.375px, height 261.594px, top -38.797px. See T05.
- Horizontally scrollable section links, topic chips and wide tables were not mistaken for page overflow. This is intentional access to overflowing content.
- Five-line learner quote previews are intentional. The directory's disclosure was verified to change to **Show less**, set aria-expanded=true and remove line clamping. They are not counted as lost text.
- A browser-only long-name stress fixture (“Professor Alexandra-Christina Montgomery-Williams”) wrapped inside the existing 213px identity region with scrollWidth=clientWidth. It was not saved to source or a database.
- Four 640-CSS-pixel viewport checks modelled a 1280px desktop viewport at 200% zoom on /about, a learner detail, /contact and /dashboard/login. They showed no page overflow. **This is a viewport proxy, not native browser-UI zoom verification.**
- A 200% root-font override exposed chat's 10px privacy copy remaining fixed while body text became 32px. This is a relative-text scaling observation, not a claim of failure under native browser zoom.
- Heading outline inspection confirmed h2→h4 jumps in campaign/commercial and apprentice content. A skipped rank alone is not labelled an automatic WCAG failure.
- Menu/dialog focus support was inspected and Escape closure exercised. No complete screen-reader or all-control keyboard audit was claimed.

### Font loading / layout stability

Chrome **154.0.8037.98**, Windows headless rendering was used. A fresh mobile homepage probe recorded three non-recent-input layout shifts totaling approximately **0.01189** during its observation window. This is an **observed sum**, not a full session-window Web Vitals CLS benchmark; shifts were not attributed solely to fonts. A repeatable severe font-induced layout shift was not established, so no separate CLS defect was invented. Source Serif 4 regular weights and the local mobile alias were simultaneously registered/selected.

### Standards basis

Assessment references [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [text spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html), [text resizing](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html), [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) and [structural relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html). This audit is not a conformance certificate.

## Limitations and explicit exclusions

1. Authenticated dashboard content, backend-driven permissions and edit dialogs were source-inspected, not entered using fabricated credentials.
2. CMS requests in broad rendering runs were isolated with empty browser responses. Article/event/mentor ready-content states and live user submissions are not claimed as visually verified. A representative event/article settled missing state was checked separately.
3. The employer-agreement Zoho iframe is cross-origin and was not traversed; only its surrounding page typography was reviewed.
4. Native 200% browser zoom, Firefox/Safari, macOS/iOS/Android devices and assistive-technology combinations require follow-up.
5. The existing Next export is older than recent source-only section removals/launcher work. It supports font-loading comparison only, not a claim that every current source change was production-rendered.
6. All 851 source/style files were scanned; manual review concentrated on typography owners and confirmed findings. This is not a claim that every line or every CMS-generated string was manually inspected.
7. No Arabic support was inferred from the conversation language.

## Evidence gallery

- [Production desktop fallback](evidence/production-fonts-1440.png), [production mobile font split](evidence/production-fonts-375.png).
- [Dark consultation text](evidence/contact-cta-375.png).
- [Light warm label](evidence/accent-label-375.png), [engineering eyebrow](evidence/engineering-label-375.png).
- [Text-spacing booking failure](evidence/text-spacing-header-1280.png).
- [Learner metadata](evidence/learner-metadata-375.png), [case-study detail](evidence/case-study-375.png).
- [Chat microcopy](evidence/chat-microcopy-375.png), [login placeholder](evidence/login-placeholder-375.png).
- [Mobile menu](evidence/mobile-menu-375.png), [eligibility dialog](evidence/eligibility-popup-375.png).
- Homepage and Level 6 samples at 375/1440px are also included.

## Appendix A — complete explicit source-CSS font-size inventory

Generated index.compiled.css is excluded to avoid counting the same authored rules twice. Equivalent numeric spellings (.75rem / 0.75rem) are retained as authored. Icon dimensions and decorative roles are classified rather than automatically treated as defects.

| File:Line | Selector | Authored size |
|---|---|---|
| frontend/src/components/feature/case-studies.css:7 | .learner-study-card__sector | .6875rem |
| frontend/src/components/feature/case-studies.css:12 | .learner-study-card__initials | 1.125rem |
| frontend/src/components/feature/case-studies.css:13 | .learner-study-card__name | 1rem |
| frontend/src/components/feature/case-studies.css:14 | .learner-study-card__role | .75rem |
| frontend/src/components/feature/case-studies.css:15 | .learner-study-card h3 | 1.375rem |
| frontend/src/components/feature/case-studies.css:16 | .learner-study-card__summary | .875rem |
| frontend/src/components/feature/case-studies.css:18 | .learner-study-card__themes li | .6875rem |
| frontend/src/components/feature/case-studies.css:20 | .learner-study-card__bottom > p | .6875rem |
| frontend/src/components/feature/case-studies.css:21 | .learner-study-card__action | .8125rem |
| frontend/src/components/feature/case-studies.css:24 | .learner-study-back | .8125rem |
| frontend/src/components/feature/case-studies.css:25 | .learner-study-intro__eyebrow | .6875rem |
| frontend/src/components/feature/case-studies.css:26 | .learner-study-intro h1 | clamp(1.875rem, 3.5vw, 3rem) |
| frontend/src/components/feature/case-studies.css:27 | .learner-study-intro__lead | 1rem |
| frontend/src/components/feature/case-studies.css:30 | .learner-study-intro__person > span | 1.25rem |
| frontend/src/components/feature/case-studies.css:31 | .learner-study-intro__person p | .9375rem |
| frontend/src/components/feature/case-studies.css:32 | .learner-study-intro__person p + p | .8125rem |
| frontend/src/components/feature/case-studies.css:36 | .learner-study-narrative__summary | 1.0625rem |
| frontend/src/components/feature/case-studies.css:38 | .learner-study-narrative blockquote p | 1.25rem |
| frontend/src/components/feature/case-studies.css:39 | .learner-study-narrative cite | .8125rem |
| frontend/src/components/feature/case-studies.css:41 | .learner-study-narrative h2 | 1.5rem |
| frontend/src/components/feature/case-studies.css:42 | .learner-study-narrative section > p | .9375rem |
| frontend/src/components/feature/case-studies.css:45 | .learner-study-evidence h3 | 1.0625rem |
| frontend/src/components/feature/case-studies.css:46 | .learner-study-evidence p | .875rem |
| frontend/src/components/feature/case-studies.css:47 | .learner-study-source | .75rem |
| frontend/src/components/feature/case-studies.css:49 | .learner-study-context__label | .6875rem |
| frontend/src/components/feature/case-studies.css:50 | .learner-study-context h2 | 1.375rem |
| frontend/src/components/feature/case-studies.css:51 | .learner-study-context > p:not(:first-child) | .875rem |
| frontend/src/components/feature/case-studies.css:54 | .learner-study-context dt | .6875rem |
| frontend/src/components/feature/case-studies.css:55 | .learner-study-context dd | .875rem |
| frontend/src/components/feature/case-studies.css:57 | .learner-study-context__link | .8125rem |
| frontend/src/components/feature/case-studies.css:61 | .learner-study-filters label | .8125rem |
| frontend/src/components/feature/case-studies.css:62 | .learner-study-filters input, .learner-study-filters select | 1rem |
| frontend/src/components/feature/eligibility-checker-modal.css:10 | .eligibility-checker-modal__intro | .875rem |
| frontend/src/components/feature/eligibility-checker-modal.css:13 | .eligibility-checker-modal #checker :is(input[type='text'], select, textarea) | 1rem |
| frontend/src/components/feature/learner-experiences.css:16 | .experience-card__initials | 1.25rem |
| frontend/src/components/feature/learner-experiences.css:18 | .experience-card__name | 1rem |
| frontend/src/components/feature/learner-experiences.css:19 | .experience-card__organisation | 0.8125rem |
| frontend/src/components/feature/learner-experiences.css:20 | .experience-card__date | 0.75rem |
| frontend/src/components/feature/learner-experiences.css:21 | .experience-card__programme | 0.6875rem |
| frontend/src/components/feature/learner-experiences.css:24 | .experience-card__text | 0.9375rem |
| frontend/src/components/feature/learner-experiences.css:26 | .experience-card__more | 0.8125rem |
| frontend/src/components/feature/learner-experiences.css:30 | .experience-card__source | 0.6875rem |
| frontend/src/components/feature/learner-experiences.css:34 | .experience-directory__eyebrow | 0.75rem |
| frontend/src/components/feature/learner-experiences.css:35 | .experience-directory__heading h2 | clamp(1.75rem, 3vw, 2.5rem) |
| frontend/src/components/feature/learner-experiences.css:36 | .experience-directory__heading > p:last-child | 0.9375rem |
| frontend/src/components/feature/learner-experiences.css:39 | .experience-filters label | 0.8125rem |
| frontend/src/components/feature/learner-experiences.css:40 | .experience-filters :is(input, select) | 1rem |
| frontend/src/components/feature/learner-experiences.css:42 | .experience-topics button | 0.75rem |
| frontend/src/components/feature/learner-experiences.css:44 | .experience-topics button > span | 0.6875rem |
| frontend/src/components/feature/learner-experiences.css:47 | .experience-filters__status p | 0.75rem |
| frontend/src/components/feature/learner-experiences.css:48 | .experience-filters__status button | 0.8125rem |
| frontend/src/components/feature/learner-experiences.css:49 | .experience-directory__collection-title | 1.5rem |
| frontend/src/components/feature/learner-experiences.css:52 | .experience-group__heading h3 | 1.375rem |
| frontend/src/components/feature/learner-experiences.css:53 | .experience-group__heading p | 0.8125rem |
| frontend/src/components/feature/learner-experiences.css:54 | .experience-group__count | 0.75rem |
| frontend/src/components/feature/learner-experiences.css:56 | .experience-outline-button | 0.8125rem |
| frontend/src/components/feature/learner-experiences.css:58 | .experience-group__remaining | 0.6875rem |
| frontend/src/components/feature/learner-experiences.css:60 | .experience-short-collection > summary | 1.0625rem |
| frontend/src/components/feature/learner-experiences.css:62 | .experience-short-collection__hint | 0.75rem |
| frontend/src/components/feature/learner-experiences.css:65 | .experience-empty h3 | 1.5rem |
| frontend/src/components/feature/learner-experiences.css:67 | .experience-directory__source | 0.75rem |
| frontend/src/components/feature/learner-experiences.css:74 | .experience-short-collection__hint | 0.6875rem |
| frontend/src/components/feature/mobile-navigation.css:44 | .mobile-navigation__close | 1.5rem |
| frontend/src/components/feature/mobile-navigation.css:68 | .mobile-navigation__row | 1rem |
| frontend/src/components/feature/mobile-navigation.css:75 | .mobile-navigation__row > svg | 1.25rem |
| frontend/src/components/feature/mobile-navigation.css:90 | .mobile-navigation__link | 0.875rem |
| frontend/src/components/feature/mobile-navigation.css:102 | .mobile-navigation__link small | 0.75rem |
| frontend/src/components/feature/mobile-navigation.css:112 | .mobile-navigation__pathways p | 0.75rem |
| frontend/src/components/feature/mobile-navigation.css:119 | .mobile-navigation .mobile-navigation__booking | 0.875rem |
| frontend/src/components/feature/programme-navigation.css:2 | .programme-navigation__panel h2 | .8125rem |
| frontend/src/components/feature/programme-navigation.css:7 | .programme-navigation__card strong | .875rem |
| frontend/src/components/feature/programme-navigation.css:8 | .programme-navigation__card small | .75rem |
| frontend/src/components/feature/programme-navigation.css:15 | .programme-navigation__ipc strong | .75rem |
| frontend/src/components/feature/programme-navigation.css:16 | .programme-navigation__ipc small | .6875rem |
| frontend/src/components/feature/programme-navigation.css:22 | .public-navigation__links > div > :is(button, a) | .8125rem |
| frontend/src/components/feature/programme-navigation.css:24 | .public-navigation__booking | .8125rem |
| frontend/src/components/feature/chatbot/programme-assistant.css:12 | .assistant-header strong | 16px |
| frontend/src/components/feature/chatbot/programme-assistant.css:13 | .assistant-header div>span | 11px |
| frontend/src/components/feature/chatbot/programme-assistant.css:14 | .assistant-avatar | 22px |
| frontend/src/components/feature/chatbot/programme-assistant.css:15 | .assistant-icon | 23px |
| frontend/src/components/feature/chatbot/programme-assistant.css:17 | .assistant-notice | 11px |
| frontend/src/components/feature/chatbot/programme-assistant.css:19 | .assistant-message | 13px |
| frontend/src/components/feature/chatbot/programme-assistant.css:25 | .assistant-prompts button | 12px |
| frontend/src/components/feature/chatbot/programme-assistant.css:27 | .assistant-thinking,.assistant-offline,.assistant-error | 12px |
| frontend/src/components/feature/chatbot/programme-assistant.css:29 | .assistant-sources | 11px |
| frontend/src/components/feature/chatbot/programme-assistant.css:32 | .assistant-consultation a | 12px |
| frontend/src/components/feature/chatbot/programme-assistant.css:33 | .assistant-consultation button | 11px |
| frontend/src/components/feature/chatbot/programme-assistant.css:35 | .assistant-composer textarea | 13px |
| frontend/src/components/feature/chatbot/programme-assistant.css:37 | .assistant-privacy | 10px |
| frontend/src/components/feature/chatbot/programme-assistant.css:45 | .assistant-composer textarea | 16px |
| frontend/src/index.css:149 | body | 1rem |
| frontend/src/index.css:169 | small | 0.875rem |
| frontend/src/index.css:716 | .label-editorial | 0.875rem |
| frontend/src/styles/heroes.css:74 | .site-hero h1 | 2.25rem |
| frontend/src/styles/heroes.css:90 | .site-hero .site-hero__lead | 1rem |
| frontend/src/styles/heroes.css:155 | .site-hero h1 | clamp(2.65rem, 5vw, 4rem) |
| frontend/src/styles/heroes.css:164 | .site-hero .site-hero__lead | 1.125rem |
| frontend/src/styles/heroes.css:172 | .site-hero h1 | clamp(3rem, 6vw, 4.75rem) |

## Appendix B — every detected Tailwind size utility form

Counts are lexical source occurrences across scanned active and inactive modules, not independent visual defects. Arbitrary values were filtered to size units/functions so arbitrary text colors were not counted as sizes. There are **48 utility forms**, with **46 occurrences of arbitrary size forms**.

| Utility form | Occurrences |
|---|---:|
| `lg:text-[34px]` | 1 |
| `lg:text-4xl` | 16 |
| `lg:text-5xl` | 10 |
| `lg:text-6xl` | 2 |
| `lg:text-xl` | 1 |
| `md:text-[1.35rem]` | 1 |
| `md:text-[1.65rem]` | 1 |
| `md:text-[20rem]` | 1 |
| `md:text-[52px]` | 3 |
| `md:text-[58px]` | 1 |
| `md:text-2xl` | 38 |
| `md:text-3xl` | 38 |
| `md:text-4xl` | 89 |
| `md:text-5xl` | 25 |
| `md:text-6xl` | 6 |
| `md:text-base` | 47 |
| `md:text-display` | 1 |
| `md:text-lg` | 29 |
| `md:text-sm` | 12 |
| `md:text-xl` | 57 |
| `md:text-xs` | 1 |
| `sm:text-4xl` | 3 |
| `sm:text-5xl` | 1 |
| `sm:text-base` | 3 |
| `sm:text-sm` | 2 |
| `sm:text-xs` | 3 |
| `text-[0.68rem]` | 2 |
| `text-[0.72rem]` | 1 |
| `text-[0.78rem]` | 1 |
| `text-[0.84rem]` | 1 |
| `text-[10px]` | 8 |
| `text-[11px]` | 19 |
| `text-[12px]` | 2 |
| `text-[12rem]` | 1 |
| `text-[13px]` | 3 |
| `text-2xl` | 113 |
| `text-3xl` | 136 |
| `text-4xl` | 29 |
| `text-5xl` | 8 |
| `text-6xl` | 1 |
| `text-7xl` | 2 |
| `text-base` | 230 |
| `text-display` | 13 |
| `text-lg` | 170 |
| `text-sm` | 1242 |
| `text-xl` | 313 |
| `text-xs` | 624 |
| `xl:text-5xl` | 1 |

The customized theme defines display, xs, sm, base, lg, xl and 2xl–7xl; its exact current ladder is documented in the design-system proposal. One explicit inline fontSize object was found: **IpcAuthority.tsx:105**, clamp(96px,9vw,170px), a decorative IPC wordmark role rather than oversized body text. Editor-only injected CSS also has a system-ui font shorthand (PageContent.tsx:55); it is an intentional admin overlay.

## Source preservation

A SHA-256 inventory of **1,053 frontend files** was taken before inspection and checked after browser work. Both digests were:

`734035e2eb9d8bbc69a7c90cfb3a9ef11c7f2b4595f0b037670ef62ff15198ca`

No application source file changed. Permitted audit output consists of the five Markdown reports and optional PNG evidence in this directory.

## Appendix C — CSS @apply and shorthand font sizes

The 48 utility-form / 46 arbitrary-occurrence totals in Appendix B refer to TypeScript/TSX lexical occurrences. CSS @apply introduces these additional size uses (not counted in those totals):

| File:Line | Selector | Size utilities |
|---|---|---|
| frontend/src/index.css:221 | .btn-secondary | text-sm |
| frontend/src/index.css:226 | .dashboard-shell .btn-primary | text-sm |
| frontend/src/index.css:246 | .dashboard-field | text-sm |
| frontend/src/index.css:249 | .dashboard-label | text-[11px] |
| frontend/src/index.css:252 | .dashboard-action-secondary | text-sm |
| frontend/src/index.css:255 | .dashboard-action-danger | text-sm |
| frontend/src/index.css:258 | .dashboard-action-success | text-sm |
| frontend/src/index.css:276 | .dashboard-disclosure-icon | text-lg |
| frontend/src/index.css:287 | .form-control | text-base |
| frontend/src/index.css:320 | .button-quiet | text-sm |

Additional CSS font shorthands:

| File:Line | Selector | Authored shorthand |
|---|---|---|
| frontend/src/components/feature/learner-experiences.css:40 | .experience-filters :is(input, select) | inherit |
| frontend/src/components/feature/chatbot/programme-assistant.css:35 | .assistant-composer textarea | inherit |
| frontend/src/index.css:363 | .page-loader | 600 0.75rem/1 var(--font-label) |

Native browser title tooltips/validation messages are not governed by application font classes and were not verified across operating systems. Breadcrumb/back-link roles use the body/label stack (13–15px examples); topic tabs/badges use body text from 11–15px, with topic chips at 12px. Dashboard/illustrative performance labels use inherited body/UI styles; no independent chart-library font theme was found. Editor-only font shorthands are identified above rather than incorrectly counted as public text-family drift.
