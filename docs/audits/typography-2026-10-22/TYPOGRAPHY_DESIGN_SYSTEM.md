# Proposed typography design system

Date: 22 October 2026. **Proposal only. No application styles or fonts were changed.**

## Preserve the existing identity

Keep **Poppins** for prose, controls and labels and **Source Serif 4** for editorial headings. Retain petrol/ivory/warm-accent branding, compact desktop navigation, deliberately smaller footer headings and the approved heavier public mobile headings. Standardization should make roles predictable, not make every text element identical.

### Font contract

| Role | Family/fallback | Required normal weights | Additional style |
|---|---|---|---|
| Body/UI/labels | Poppins, system-ui, sans-serif | 400,500,600,700,800; retain 300 where the existing decorative credit figure needs it | No blanket italic body requirement |
| Editorial headings | Source Serif 4, Georgia, serif | 400–900 variable range, including the current 800/900 mobile treatment | Genuine italic where campaign quotes retain italic styling |
| Code/structured authoring | Existing platform monospace stack | Regular/bold as needed | Intentional dashboard-only exception |
| Icon glyphs | Existing remixicon / current SVG system | Not a prose family | Preserve text alternatives and SVG controls |

Both Vite and Next must load the same approved families. Prefer a shared CSS/font ownership model with explicit licensed assets; the existing local serif asset is usable evidence, but the Poppins files are not currently locally bundled. Acquiring or changing assets is future implementation work requiring approval. Using a Next loader in one entry point without addressing Vite would repeat the current split.

Do not use a different font as a workaround for T01. A computed family name does not prove availability; acceptance requires actual glyph-face inspection at desktop, mobile and portal content. Avoid disabling font synthesis globally until all retained styles/weights have a supplied face.

## Current scale to migrate carefully

The existing Tailwind scale is deliberately customized:

| Utility | Authored current size | Default line height |
|---|---|---|
| display | clamp(2.25rem,1.5rem + 3vw,4rem) | 1.08 |
| xs | .875rem (14px at 16px root) | 1.6 |
| sm | .9375rem (15px) | 1.65 |
| base | 1rem (16px) | 1.7 |
| lg | 1.125rem (18px) | 1.6 |
| xl | 1.25rem (20px) | 1.45 |
| 2xl | 1.55rem (24.8px) | 1.3 |
| 3xl | 2rem (32px) | 1.18 |
| 4xl | clamp(2.25rem,4vw,3.25rem) | 1.1 |
| 5xl | clamp(2.65rem,5vw,4rem) | 1.07 |
| 6xl | clamp(3rem,6vw,4.75rem) | 1.04 |
| 7xl | clamp(3.2rem,7vw,5.35rem) | 1.02 |

A separate plugin applies an optical .9 multiplier to selected H2 utilities under #main-content. Preserve its intended optical result during migration, but encode that choice in role tokens rather than a hidden tag/ID override.

## Recommended role scale

Numbers below are **proposed review targets**, not applied changes. Existing justified archetypes should be retained.

| Role | Mobile target | Tablet/desktop target | Family/weight | Line height / tracking |
|---|---|---|---|---|
| Full promotional hero title | 2.25rem (36px) | Fluid up to 4.75rem (76px) | Serif, 900 mobile / 800 desktop | 1.08; zero tracking |
| Compact page title | 1.875–2.25rem | 2.5–3rem, context-dependent | Serif, 800 mobile / 700–800 desktop | 1.12–1.2 |
| Editorial section title | ~1.5rem | Fluid ~2.5–3rem | Serif, 800 mobile / 700 desktop | 1.15–1.25 |
| Section/card subsection | 1.25rem | 1.25–1.5rem | Serif, 800 mobile / 700 desktop | 1.3–1.45 |
| Small UI/card heading | 1rem | 1–1.125rem | Existing serif or explicit UI sans role | 1.4–1.5 |
| Body | 1rem | 1rem | Poppins 400 | 1.65–1.7; normal tracking |
| Lead | 1–1.125rem | 1.125rem | Poppins 400 | 1.65–1.8 |
| Supporting text | .9375rem | .9375rem | Poppins 400 | 1.6–1.75 |
| Caption / metadata | .75–.875rem | .75–.875rem | Poppins 400–600 | 1.5–1.7; limited tracking |
| Eyebrow | .75–.875rem | .75–.875rem | Poppins 600–700 | 1.5–1.6; uppercase .08–.12em only where needed |
| Button | .9375–1rem | .9375–1rem; header .8125rem remains a deliberate exception | Poppins 600–700 | 1.4–1.5; no decorative letter spacing |
| Primary navigation | 1rem mobile | .8125–.875rem desktop | Poppins 500–700 | 1.5–1.65; responsive fit must tolerate overrides |
| Subnavigation / tabs | .875rem | .875–.9375rem | Poppins 600 | 1.5–1.65 |
| Form control / placeholder | 1rem | 1rem | Poppins 400 | 1.5–1.7; explicit accessible placeholder tone |
| Field label | .875–.9375rem | .875–.9375rem | Poppins 600 | 1.5–1.65 |
| Table header/cell | .875–.9375rem | .875–.9375rem | Poppins 600 / 400; preserve intentional serif headers | 1.5–1.65; tabular figures for numeric comparisons |
| Modal title | 1.25rem | 1.25–1.5rem | Serif 700–800 | 1.3–1.45; permit wrapping |
| Alerts/toasts/empty states | .875–1rem body; 1.25rem title | Same role family | Poppins body / appropriate semantic title | 1.5–1.7 |
| Breadcrumb / back link | .8125–.9375rem | .8125–.9375rem | Poppins 600 | 1.5 |
| Dashboard metric | Context-specific 1.5–2.5rem | Same role, responsive | Poppins 600–700; tabular figures | ~1.2; do not inherit editorial hero styling |
| Footer title/link | Preserve 1–1.125rem / .875–.9375rem | Same | Current brand family/weight role | 1.5–1.65 |

A 12px-equivalent caption floor here is a **design/readability recommendation**, not a WCAG minimum-size rule.

## Suggested token ownership

The following is documentation of an architecture proposal, **not a CSS change**:

```css
:root {
  --font-body: 'Poppins', system-ui, sans-serif;
  --font-label: var(--font-body);
  --font-heading: 'Source Serif 4', Georgia, serif;
  --font-code: ui-monospace, SFMono-Regular, Consolas, monospace;

  --type-body: 1rem;
  --type-support: .9375rem;
  --type-caption: .8125rem;
  --type-label: .875rem;
  --type-control: 1rem;
  --type-navigation: .875rem;
  --type-display: clamp(2.25rem, 1.1rem + 4.5vw, 4.75rem);
  --type-section-title: clamp(1.5rem, 1.1rem + 2vw, 3rem);
  --type-card-title: 1.25rem;
  --type-dialog-title: 1.25rem;

  --leading-body: 1.7;
  --leading-support: 1.6;
  --leading-title: 1.15;
  --leading-control: 1.5;
  --tracking-label: .1em;
  --weight-body: 400;
  --weight-label: 600;
  --weight-title: 700;
  --weight-hero: 800;
  --weight-mobile-title: 800;
  --weight-mobile-hero: 900;
}
```

Keep color roles separate from type size. Define accessible **text-on-light**, **text-on-dark**, **muted-on-light**, **muted-on-dark**, **warm-ink-on-light** and **placeholder** roles. The existing pale signal colors remain useful on dark surfaces and as decoration.

Map these values to the existing Tailwind theme and shared CSS. Do not add a new typography package or rewrite every component. A lightweight role class or existing SectionHeading variant is enough. The final values should be agreed after reference-page review.

## Semantics are independent of size

- A document title uses h1; major content sections use h2; direct subsections/cards under those sections normally use h3.
- Card eyebrow/status text should not become h4 solely to obtain smaller typography.
- Nested sector-pathway h3→h4→h5 structure is not inherently wrong.
- Footer headings can be visually small h2 elements without being a main section title role.
- Modal title rank/family should be explicit and work equally in portals.
- Keep field labels, legends, table header scopes, descriptive errors and disclosure labels intact.
- Do not add headings merely to make text bold.

## Readability and layout contract

Use line length around 60–75 characters for long prose where content permits; avoid treating it as a hard rule for cards or tables. Preserve paragraph rhythm with role-level spacing, not incidental combinations of unrelated utilities. Long names, emails and technical titles must wrap without reducing text to tiny sizes.

Keep CTA labels as complete readable words. The header needs a fit fallback before its booking label collapses. Table/section-chip horizontal scrolling remains acceptable where it preserves comprehension; page-wide horizontal scrolling should not be the default response to larger text.

Native browser zoom and user text spacing must remain available. Font sizes should principally use rem and suitable fluid role clamps. Icons and purely decorative artwork can retain pixel sizing.

## Validation reference

Require the [W3C normal/large text contrast thresholds](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [user text-spacing tolerance](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html) and [reflow behavior](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Validate actual font faces, not family declarations alone. Preserve the user's approved mobile weight treatment throughout.
