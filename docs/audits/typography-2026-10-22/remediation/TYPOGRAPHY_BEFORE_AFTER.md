# Typography before / after

22 October 2026. Before values come from the approved audit, with an additional current-source baseline capture. After values come from the final browser runs. Ratios include composited solid backgrounds. Photographs/gradients and cross-origin content are not certified by these calculations.

| Issue | Before | After | Evidence | Verification status |
|---|---|---|---|---|
| T01 | Historical Next desktop: Georgia/Segoe UI; mobile body fallback. | Fresh Next and Vite use actual custom Poppins and Source Serif 4 glyphs at 375/768/1440; mobile hero 900 and desktop 800. | [Next desktop](evidence/next-font-parity-1440.png), [Next mobile](evidence/next-font-parity-375.png), [actual-face results](next-targeted-results.json) | Verified in both entry points, portal and client-routed login. |
| T02 | Contact outline action 1.38:1; color inherited despite text-white. | Explicit on-dark text; 20.36:1 in normal/hover/focus. Same conflict fixed in Knowledge Hub. | [Before](../evidence/contact-cta-375.png), [after](evidence/vite-contact-375.png) | Verified; disabled state N/A for navigation anchors. |
| T03 | Shared light-surface label 2.17–2.32:1; engineering 1.40:1. | Warm text ink: catalogue 7.17:1; engineering/programme 7.65:1. Dark campaign badge tones checked on their actual surfaces. | [Before](../evidence/accent-label-375.png), [catalogue after](evidence/vite-shared-warm-label.png), [engineering after](evidence/vite-engineering-eyebrow.png) | Verified; pale hero signals preserved. |
| T04 | Funding note 3.33:1; renewal 3.69:1; campaign secondary copy ~4.21:1. | Funding/legal 6.68:1; renewal 7.79:1; nested recognition terms 4.53:1. Further workflow/chart/support failures from the broad sweep corrected and retested. | [Final numeric evidence](vite-targeted-results.json) | Verified for measured solid-surface cases. |
| T05 | Audit booking width 92.38px, height 261.59px, top −38.80px under user spacing. Current baseline also reproduced wrapping (129.73 × 105.59px). | Readable booking action and controlled header wrapping; dropdown and sticky offsets follow header height. Funding notice expands at 200% root text. | [Before](../evidence/text-spacing-header-1280.png), [after](evidence/next-header-spacing-1280.png), [notice at enlarged root size](evidence/next-ticker-root-200-320.png) | Eight spacing widths, menu focus, three sticky routes and enlarged notice pass. |
| T06 | H2→H4 direct card/subsection jumps. | Appropriate H3 subsections preserve previous visual size. | [Final outlines](vite-targeted-results.json) | Seven affected page outlines pass. Valid nested sector ranks are retained. |
| T07 | Tag/ID plugin silently multiplied H2 utility sizes by .9. | Explicit section role values/utilities own the same sizes. All 343 measured H1 size/weight pairs preserved; 341 H2 size sets match, with two different event loading/empty states. | [Exact migration](section-role-migration.json), [scale comparison](scale-preservation.json) | Verified values; the event state difference is disclosed. |
| T08 | Programme/provenance, sector/theme/context text commonly 11px. | Shared metadata role .8125rem = 13px; improved wrapping. Long learner name fits 213px without horizontal overflow. | [Before](../evidence/learner-metadata-375.png), [after](evidence/vite-learner-metadata-375.png) | Disclosure remains expandable; no permanent fixture data. |
| T09 | Chat privacy 10px fixed; messages 13px; support/actions 11–12px. | Privacy/captions 13px; message 15px; prompts 14px; mobile composer 16px. Privacy becomes 26px at 200% root size; panel/composer/privacy remain scroll-accessible. | [Before](../evidence/chat-microcopy-375.png), [normal after](evidence/vite-chat-375.png), [scaled after](evidence/vite-chat-root-200-320.png) | 320/375/1440 scaling checks pass; root override is not native zoom. |
| T10 | Learner placeholder 2.38:1; login placeholder 2.54:1. | Learner search 5.97:1; login 7.59:1; persistent labels retained. | [Numeric evidence](vite-targeted-results.json) | Readability and login password-visibility interaction pass without submission. |
| T11 | Italic quote used a synthesized regular serif face. | Genuine local variable italic selected for campaign quote glyphs. | [Actual italic face](next-targeted-results.json) | Verified custom italic PostScript face in both entry points. |
| T12 | Remote serif plus separate CPCM Mobile Heading alias. | One Source Serif 4 family with normal/italic subsets; original local normal file retained unchanged. | [Font ownership/stability](font-loading-stability.json), [asset manifest](../../../../frontend/public/assets/fonts/source-manifest.json) | Single logical family and zero Google text-font requests in recorded probes. No unmeasured byte-saving claim. |

## Exact final header measurement

At `/about`, 1280×900, with line-height 1.5, letter-spacing .12em, word-spacing .16em and paragraph margin 2em:

- Booking width: **206.91px**; height: **52px**; top: **146px**.
- Header bottom: **207px**; page overflow: **0px**.
- Dropdown top: **205.96px**, at header bottom **207px**.

The primary booking label remains on readable words. The header takes an additional row when necessary. This behavior is limited to fitting content and preserves the navigation destinations/order.

## Contrast values from final Vite run

| Target | Font size | Ratio |
|---|---|---|
| T03/T04 shared warm label | 14px | 7.17:1 |
| T03/T04 engineering eyebrow | 14px | 7.65:1 |
| T03/T04 programme label | 14px | 7.65:1 |
| T03/T04 community label | 14px | 7.17:1 |
| T03/T04 recognition conditions | 15px | 4.53:1 |
| T03/T04 board renewal | 14px | 7.79:1 |
| T03/T04 funding conditions | 14px | 6.68:1 |
| T03/T04 legal support | 14px | 6.68:1 |
| T03/T04 hub outline action | 15px | 18.22:1 |
| T03/T04 apprentice support | 14px | 16.53:1 |
| T03/T04 chart labels | 15px | 7.13:1 |
| T03/T04 workflow labels | 14px | 10.67:1 |
| T10 login placeholder and password visibility | 15px | 7.59:1 |
