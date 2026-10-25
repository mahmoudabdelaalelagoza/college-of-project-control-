# Typography regression results

22 October 2026. Windows; Chrome 154.0.8037.98 headless; Node 24.18.0. Installed Next 16.3.8, Vite 8.2.2, Tailwind 3.4.19. These are local results, not deployed-site certification.

## Final checks

| Check / command | Result | Detail |
|---|---|---|
| `npm.cmd run type-check` | PASS | tsc, no errors. Also passed Next's build-time TypeScript stage. |
| `npm.cmd run lint` | FAIL — pre-existing warning | 0 errors, 1 `react-hooks/exhaustive-deps` warning in unchanged UsersPage.tsx:94. Zero-warning gate exits 1. |
| ESLint on task-modified TS/TSX | PASS | 187 files; 0 errors, 0 warnings. [Report](targeted-lint.json). |
| `npm.cmd test` | PASS | Sections 3, journeys 24, bundled case studies 4 = 31 tests. |
| `npm.cmd run test:dashboard` | PASS | 2 in-memory editor draft tests; simulated failure messages are expected assertions. No backend writes. |
| `npm.cmd run build:css` | PASS | Authored CSS → regenerated index.compiled.css. |
| `npm.cmd run build` | PASS | Fresh webpack Next build, 85 generated static pages including internal output, supported copy step. |
| `npm.cmd run vite:build` | PASS | Final Vite production bundle, 834 transformed modules. |
| `node frontend/scripts/typography-regression.mjs` from repo root | PASS | Final Vite runtime: **45/45** checks. [Results](vite-targeted-results.json). |
| Same script with `TYPOGRAPHY_ORIGIN=http://127.0.0.1:3016`, `TYPOGRAPHY_MODE=next` | PASS | Final newly built Next output: **45/45**. [Results](next-targeted-results.json). |
| Broad responsive sweep | PASS for captured geometry | **99 URLs, 343 measurements**, no positive page-level horizontal overflow, no runtime exceptions. [Summary](responsive-summary.json), [raw observations](responsive-results.json). |
| Native browser-UI zoom / other engines | NOT RUN | Root-font scaling and responsive reflow are separately labelled; no native zoom claim. |

The 343-measurement sweep occurred after the main remediation and before the final four supporting-tone corrections and funding-ticker refinement. Those final changes have dedicated checks in the final 45-check suite in each entry point. The raw broad sweep intentionally retains its intermediate six contrast candidates for traceability; final measured fixes for those candidates are in the targeted results. No claim is made that its capped contrast scanner is a complete contrast audit.

`dist/` contains the final Vite build because Vite was the last bundle command. Fresh Next output remains separately in `.next-build/` and is the output used for Next browser checks. Nothing was uploaded or deployed.

## Responsive coverage

Broad coverage uses 375/1440 for all observed route templates and seven widths (320,375,430,768,1024,1440,1920) for the expanded representative set. It includes Home, About, L4, L6, Operational/Strategic/Chartered pathways, sector pages, Programmes, Courses, eligibility, testimonials, case details, Contact, booking, FAQ, Knowledge Hub and unauthenticated dashboard shells. Bundled detail URLs and aliases are represented in the raw report.

Measured H1 sizes/weights match the earlier audit in all 343 comparisons. H2 size sets match 341 times; two `/events` observations add the 22.32px empty-state heading after settling instead of the earlier loading shell. See [scale-preservation.json](scale-preservation.json).

## Fonts and production parity

The test suite blocks fonts.googleapis.com/fonts.gstatic.com while checking actual platform glyph faces. Vite and fresh Next both render Poppins and Source Serif 4 custom fonts at 375/768/1440. Hero weight is 900 mobile, 800 desktop; other public mobile headings keep 800. Portal headings and client-routed login also use local brand faces. Campaign quotations select genuine Source Serif italic. The mobile alias is absent and the original local serif asset's hash is unchanged.

The production checks served `.next-build/`, created from final source. They did not rely on the historical audit artifact. No runtime exceptions or hydration-error console messages occurred in the final targeted runs. The static-file server does not implement Apache fallback; dashboard checks therefore enter the existing client router from `/`. Host direct-link rewrite validation remains explicitly separate.

Four cold/warm font observations recorded no remote Google text requests. Observed non-recent-input shift sums:

| Entry | Width | Cold observed sum | Warm observed sum |
|---|---:|---:|---:|
| vite | 375 | 0.01078 | 0.00000 |
| vite | 1440 | 0.00236 | 0.00005 |
| next | 375 | 0.01044 | 0.00000 |
| next | 1440 | 0.00230 | 0.00005 |

These are bounded observations, not full session-window CLS benchmarks or proof that every shift was font-induced. Local asset sizes/requests are recorded in [font-loading-stability.json](font-loading-stability.json); no speculative transfer savings are asserted.

## Contrast and accessibility behavior

- Solid-surface target ratios are recorded in [before/after](TYPOGRAPHY_BEFORE_AFTER.md), including alpha-composited nested panels and placeholders. Contact normal/hover/focus passes; its anchor has no disabled variant.
- WCAG text-spacing overrides pass at 320/375/430/768/1024/1280/1440/1920. The enlarged header remains below its ticker, actions stay readable, and dropdown position follows the measured navigation height.
- L4, L6 and Strategic sticky section navigation remain below the expanded public header.
- Native mobile-menu Escape closes and restores trigger focus. Eligibility dialog restores Check Eligibility focus. Chat Escape restores launcher focus. Focus-visible styling remains present.
- Seven affected campaign/commercial/apprentice heading outlines show no skipped ranks. Valid nested sector heading levels remain unchanged.
- Chat privacy scales 13px → 26px at 200% root size. At 320/375/1440, panel text fits horizontally and the privacy/composer regions remain reachable through scrolling. Welcome/log content remains scrollable. Source/error roles share the corrected CSS; a live AI answer/error/source response was not fabricated.
- At 320px with 200% root text the funding notice's text spans y=8…142.39 within its parent y=0…150.39. No page overflow was observed.
- Learner quote disclosure sets aria-expanded=true and removes clamping. A temporary long-name fixture wraps within a 213px identity region. No source or database fixture was saved.
- Login placeholder readability and password visibility were exercised without sending credentials. Valid password-reset tokens, live form submissions, authorization roles and cross-origin iframe internals were not tested.

## Reproduction

Run the normal Vite server, then the new browser script from the repository root. It writes JSON evidence and screenshots to this directory. For Next, first run the supported build, serve `.next-build/` locally and set the two environment variables above before invoking the same script. External backend traffic is blocked by the browser harness; the script does not submit forms or chat messages.

The broad raw sweep uses temporary inspection tooling and representative screenshot review; it is not a screenshot of every route. See [remaining issues](TYPOGRAPHY_REMAINING_ISSUES.md) for authenticated/live/native-zoom/hosting limitations.
