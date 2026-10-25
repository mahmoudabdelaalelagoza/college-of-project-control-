# Typography route coverage

Date: **22 October 2026**. Scope: current local source and browser rendering, with live CMS access isolated. **No application source was modified.**

## How to read the counts

- **96 route patterns/aliases**: 78 public entries and 18 dashboard entries (including both catch-all behaviors).
- **22 known concrete detail examples**: 11 course slugs from bundled data, six article slugs from nextStaticRoutes, five bundled PCP case-study slugs.
- **118 coverage rows / 80 unique entry modules** were source-inspected. These are not 118 independent route definitions.
- **102 route/example rows rendered at 99 distinct URLs**; three dynamic pattern samples reuse a concrete detail URL.
- **16 protected dashboard entries** remain static-only (15 content pages plus their protected fallback).
- **391 recorded viewport measurements**: 94 baseline rows at 375/1440px plus 29 expanded rows at the seven specified widths. Repeated aliases and overlap are disclosed rather than counted as separate content templates.
- “Verified” means local rendered/computed-style inspection for the states named here. It is not proof of every CMS string, every authenticated role, every browser or every conditional state.
- “Partially verified” distinguishes a rendered shell/sample from blocked ready-state content.
- “Static inspection only” is used for protected pages without an authorized session.
- No page was silently dropped. Unbounded dynamic-record sets are represented by their route patterns and known bundled/statical slugs; unknown CMS record URLs cannot be enumerated offline.

**Shared public findings:** T01 (production loader), T05 (header under text spacing), T07 (scale ownership), T09 (assistant text) apply through shared source owners; the table's Issues column lists local additions. “Shared findings only” does not mean a clean typography bill of health. Static-only dashboard references are explicitly labelled.

Desktop cells include tablet/laptop widths where expanded (768/1024) and desktop widths (1440/1920). Mobile cells list 320/375/430 when expanded. Menu/dialog checks, text-spacing overrides and proxy-zoom checks are additional to this matrix.

## Complete route matrix

| Route | Source Inspected | Visually Verified | Desktop | Mobile | Issues | Blockers |
|---|---|---|---|---|---|---|
| /events/:slug | Yes · frontend/src/pages/events/detail/page.tsx | Partially verified: unavailable-state sample | 1440 | 375 | Shared findings only | Sample /events/typography-audit-unavailable; real event content not loaded |
| / | Yes · frontend/src/pages/home/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T03, T08, T12 | Shared CMS-fed variants are not claimed |
| /programmes | Yes · frontend/src/pages/programmes/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T03 | Shared CMS-fed variants are not claimed |
| /short-courses | Yes · frontend/src/pages/short-courses/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T03 | Shared CMS-fed variants are not claimed |
| /sectors | Yes · frontend/src/pages/sectors/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Shared CMS-fed variants are not claimed |
| /short-courses/:slug | Yes · frontend/src/pages/short-courses/page.tsx | Partially verified: bundled-detail sample | 1440 | 375 | Shared findings only | Sample /short-courses/pmp; all 11 known bundled detail URLs covered separately; arbitrary CMS variants not loaded |
| /how-to-apply | Yes · frontend/src/pages/how-to-apply/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03 | Shared CMS-fed variants are not claimed |
| /find-your-best-project-controls-route | Yes · frontend/src/pages/route-finder/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T04 | Shared CMS-fed variants are not claimed |
| /route-finder | Yes · frontend/src/pages/route-finder/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T04 | Shared CMS-fed variants are not claimed |
| /mentors/:id | Yes · frontend/src/pages/mentors/detail/page.tsx | Partially verified: unavailable-profile sample | 1440 | 375 | T03 | Sample /mentors/999999; real mentor record not loaded |
| /about | Yes · frontend/src/pages/about/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T08 | Shared CMS-fed variants are not claimed |
| /institute-of-project-controls | Yes · frontend/src/pages/ipc/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T08 | Shared CMS-fed variants are not claimed |
| /ipc | Yes · frontend/src/pages/ipc/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T08 | Shared CMS-fed variants are not claimed |
| /associate-project-manager-level-4 | Yes · frontend/src/pages/apm-level-4/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T03, T08 | Shared CMS-fed variants are not claimed |
| /employers | Yes · frontend/src/pages/employers/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03 | Shared CMS-fed variants are not claimed |
| /employer-agreement | Yes · frontend/src/pages/employer-agreement/page.tsx | Partially verified: surrounding page | 1440 | 375 | Shared findings only | Cross-origin Zoho iframe content not inspected |
| /governance-board | Yes · frontend/src/pages/governance-board/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T04 | Shared CMS-fed variants are not claimed |
| /events | Yes · frontend/src/pages/events/page.tsx | Partially verified: collection shell/empty state | 1440 | 375 | Shared findings only | Live CMS cards/content intentionally isolated |
| /articles | Yes · frontend/src/pages/articles/page.tsx | Partially verified: collection shell/empty state | 1440 | 375 | Shared findings only | Live CMS cards/content intentionally isolated |
| /articles/:slug | Yes · frontend/src/pages/articles/detail/page.tsx | Partially verified: loading/missing-state shell | 1440 | 375 | Shared findings only | Ready article body requires CMS record; source inspected. Representative missing state also checked. |
| /case-studies | Yes · frontend/src/pages/case-studies/page.tsx | Partially verified: bundled collection rendered | 768, 1024, 1440, 1920 | 320, 375, 430 | T08 | Bundled learner content verified; additional live CMS entries not loaded |
| /case-studies/:slug | Yes · frontend/src/pages/case-studies/detail/page.tsx | Partially verified: bundled-detail sample | 1440 | 375 | T08 | Sample /case-studies/elizabeth-pardoe-pcp; five bundled details covered separately; arbitrary CMS stories not loaded |
| /apprentices | Yes · frontend/src/pages/apprentices/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T06 | Shared CMS-fed variants are not claimed |
| /apprenticeship-eligibility-checker | Yes · frontend/src/pages/apprenticeship-eligibility-checker/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | Shared findings only | Shared CMS-fed variants are not claimed |
| /eligibility-checker | Yes · frontend/src/pages/apprenticeship-eligibility-checker/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Shared CMS-fed variants are not claimed |
| /project-controls-professional-level-6 | Yes · frontend/src/pages/project-controls-professional-level-6/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T03, T08 | Shared CMS-fed variants are not claimed |
| /project-controls-professional/strategic-route | Yes · frontend/src/pages/strategic-pcp/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T03, T08 | Shared CMS-fed variants are not claimed |
| /strategic-pcp | Yes · frontend/src/pages/strategic-pcp/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T08 | Shared CMS-fed variants are not claimed |
| /project-controls-professional/operational-route | Yes · frontend/src/pages/project-controls-professional-operational-route/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T03, T08 | Shared CMS-fed variants are not claimed |
| /project-controls-professional/strategic-operational-route | Yes · frontend/src/pages/strategic-operational-pcp/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T04, T08 | Shared CMS-fed variants are not claimed |
| /strategic-operational-pcp | Yes · frontend/src/pages/strategic-operational-pcp/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T04, T08 | Shared CMS-fed variants are not claimed |
| /project-controls-professional/pmo-governance-route | Yes · frontend/src/pages/pmo-pcp/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T03, T08 | Shared CMS-fed variants are not claimed |
| /pmo-pcp | Yes · frontend/src/pages/pmo-pcp/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T03, T08 | Shared CMS-fed variants are not claimed |
| /project-controls-professional/chartered-pmo-pathway | Yes · frontend/src/pages/chartered-pmo-pathway/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T03, T08 | Shared CMS-fed variants are not claimed |
| /chartered-pmo-pathway | Yes · frontend/src/pages/chartered-pmo-pathway/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T03, T08 | Shared CMS-fed variants are not claimed |
| /project-controls-professional/construction-route | Yes · frontend/src/pages/operational-pcp-construction/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T04 | Shared CMS-fed variants are not claimed |
| /operational-pcp-construction | Yes · frontend/src/pages/operational-pcp-construction/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T04 | Shared CMS-fed variants are not claimed |
| /project-controls-professional/engineering-manufacturing-aerospace-route | Yes · frontend/src/pages/operational-pcp-engineering/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T03, T04 | Shared CMS-fed variants are not claimed |
| /operational-pcp-engineering | Yes · frontend/src/pages/operational-pcp-engineering/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T03, T04 | Shared CMS-fed variants are not claimed |
| /project-controls-professional/public-sector-councils-route | Yes · frontend/src/pages/operational-pcp-public-sector/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | Shared findings only | Shared CMS-fed variants are not claimed |
| /operational-pcp-public-sector | Yes · frontend/src/pages/operational-pcp-public-sector/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Shared CMS-fed variants are not claimed |
| /project-controls-professional/energy-oil-gas-utilities-route | Yes · frontend/src/pages/operational-pcp-energy/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T03 | Shared CMS-fed variants are not claimed |
| /operational-pcp-energy | Yes · frontend/src/pages/operational-pcp-energy/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03 | Shared CMS-fed variants are not claimed |
| /commercial-project-controls-route | Yes · frontend/src/pages/campaign/commercial-route/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T03, T06, T08 | Shared CMS-fed variants are not claimed |
| /campaign/hr-employer | Yes · frontend/src/pages/campaign/hr-employer/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T06 | Shared CMS-fed variants are not claimed |
| /campaign/head-of-pmo | Yes · frontend/src/pages/campaign/head-of-pmo/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T04, T06 | Shared CMS-fed variants are not claimed |
| /campaign/construction | Yes · frontend/src/pages/campaign/construction/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T04, T06, T11 | Shared CMS-fed variants are not claimed |
| /campaign/energy | Yes · frontend/src/pages/campaign/energy/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T04, T06, T11 | Shared CMS-fed variants are not claimed |
| /campaign/public-sector | Yes · frontend/src/pages/campaign/public-sector/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T04, T06, T11 | Shared CMS-fed variants are not claimed |
| /campaign/commercial-route | Yes · frontend/src/pages/campaign/commercial-route/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T06, T08 | Shared CMS-fed variants are not claimed |
| /thank-you/eligibility | Yes · frontend/src/pages/thank-you/eligibility/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Shared CMS-fed variants are not claimed |
| /thank-you/consultation | Yes · frontend/src/pages/thank-you/consultation/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Shared CMS-fed variants are not claimed |
| /thank-you/eventbrite | Yes · frontend/src/pages/thank-you/eventbrite/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Shared CMS-fed variants are not claimed |
| /thank-you/commercial | Yes · frontend/src/pages/thank-you/commercial/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Shared CMS-fed variants are not claimed |
| /thank-you/guide | Yes · frontend/src/pages/thank-you/guide/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Shared CMS-fed variants are not claimed |
| /knowledge-hub | Yes · frontend/src/pages/knowledge-hub/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T03, T04 | Shared CMS-fed variants are not claimed |
| /knowledge-hub/what-is-pcp-apprenticeship | Yes · frontend/src/pages/knowledge-hub/what-is-pcp-apprenticeship/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| /knowledge-hub/fully-funded-project-controls-apprenticeship | Yes · frontend/src/pages/knowledge-hub/funded-pcp-employer-guide/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| /knowledge-hub/funded-pcp-employer-guide | Yes · frontend/src/pages/knowledge-hub/funded-pcp-employer-guide/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| /knowledge-hub/project-controls-level-6-vs-pmp | Yes · frontend/src/pages/knowledge-hub/pcp-vs-pmp/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| /knowledge-hub/pcp-vs-pmp | Yes · frontend/src/pages/knowledge-hub/pcp-vs-pmp/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T04 | Shared CMS-fed variants are not claimed |
| /knowledge-hub/apm-chpp-readiness-support | Yes · frontend/src/pages/knowledge-hub/apm-chpp-readiness/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| /knowledge-hub/apm-chpp-readiness | Yes · frontend/src/pages/knowledge-hub/apm-chpp-readiness/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| /knowledge-hub/strategic-vs-operational | Yes · frontend/src/pages/knowledge-hub/strategic-vs-operational/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| /knowledge-hub/construction-training | Yes · frontend/src/pages/knowledge-hub/construction-training/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| /knowledge-hub/energy-training | Yes · frontend/src/pages/knowledge-hub/energy-training/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| /knowledge-hub/pmo-governance-training | Yes · frontend/src/pages/knowledge-hub/pmo-governance-training/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| /knowledge-hub/employer-apprenticeship-funding | Yes · frontend/src/pages/knowledge-hub/employer-apprenticeship-funding/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| /knowledge-hub/commercial-routes-explained | Yes · frontend/src/pages/knowledge-hub/commercial-routes-explained/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| /testimonials | Yes · frontend/src/pages/testimonials/page.tsx | Partially verified: bundled collection rendered | 768, 1024, 1440, 1920 | 320, 375, 430 | T03, T08, T10 | Bundled learner content verified; additional live CMS entries not loaded |
| /contact | Yes · frontend/src/pages/contact/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T02 | Shared CMS-fed variants are not claimed |
| /book-a-session | Yes · frontend/src/pages/book-a-session/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | Shared findings only | Shared CMS-fed variants are not claimed |
| /faq | Yes · frontend/src/pages/faq/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T04 | Shared CMS-fed variants are not claimed |
| /privacy | Yes · frontend/src/pages/legal/privacy/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| /terms | Yes · frontend/src/pages/legal/terms/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| /accessibility | Yes · frontend/src/pages/legal/accessibility/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| /cookies | Yes · frontend/src/pages/legal/cookies/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T04 | Shared CMS-fed variants are not claimed |
| * | Yes · frontend/src/pages/not-found/page.tsx | Verified: not-found template | 1440 | 375 | Shared findings only | Sample /__typography-audit-not-found |
| /dashboard/login | Yes · frontend/src/dashboard/pages/LoginPage.tsx | Verified: unauthenticated login UI | 768, 1024, 1440, 1920 | 320, 375, 430 | T10 | No login/reset request submitted |
| /dashboard/reset-password | Yes · frontend/src/dashboard/pages/ResetPasswordPage.tsx | Partially verified: no-valid-token state | 768, 1024, 1440, 1920 | 320, 375, 430 | Shared findings only | No valid reset token; no password operation performed |
| /dashboard | Yes · frontend/src/dashboard/pages/OverviewPage.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | No authorized dashboard session; populated/error/edit/role states not rendered |
| /dashboard/mentors | Yes · frontend/src/dashboard/pages/MentorsPage.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | No authorized dashboard session; populated/error/edit/role states not rendered |
| /dashboard/coaches | Yes · frontend/src/dashboard/pages/CoachesPage.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | No authorized dashboard session; populated/error/edit/role states not rendered |
| /dashboard/partners | Yes · frontend/src/dashboard/pages/PartnersPage.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | No authorized dashboard session; populated/error/edit/role states not rendered |
| /dashboard/professional-credentials | Yes · frontend/src/dashboard/pages/ProfessionalCredentialsPage.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | No authorized dashboard session; populated/error/edit/role states not rendered |
| /dashboard/ipc-images | Yes · frontend/src/dashboard/pages/IpcImagesPage.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | No authorized dashboard session; populated/error/edit/role states not rendered |
| /dashboard/sectors | Yes · frontend/src/dashboard/pages/SectorsPage.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | No authorized dashboard session; populated/error/edit/role states not rendered |
| /dashboard/short-courses | Yes · frontend/src/dashboard/pages/ShortCoursesPage.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | No authorized dashboard session; populated/error/edit/role states not rendered |
| /dashboard/articles | Yes · frontend/src/dashboard/pages/ArticlesPage.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | No authorized dashboard session; populated/error/edit/role states not rendered |
| /dashboard/case-studies | Yes · frontend/src/dashboard/pages/CaseStudiesPage.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | No authorized dashboard session; populated/error/edit/role states not rendered |
| /dashboard/testimonials | Yes · frontend/src/dashboard/pages/TestimonialsPage.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | No authorized dashboard session; populated/error/edit/role states not rendered |
| /dashboard/events | Yes · frontend/src/dashboard/pages/EventsManager.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | No authorized dashboard session; populated/error/edit/role states not rendered |
| /dashboard/enquiries | Yes · frontend/src/dashboard/pages/EnquiriesPage.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | No authorized dashboard session; populated/error/edit/role states not rendered |
| /dashboard/maintenance | Yes · frontend/src/dashboard/pages/MaintenancePage.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | No authorized dashboard session; populated/error/edit/role states not rendered |
| /dashboard/users | Yes · frontend/src/dashboard/pages/UsersPage.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | No authorized dashboard session; populated/error/edit/role states not rendered |
| /articles/integrated-project-baseline-practical-guide | Yes · frontend/src/pages/articles/detail/page.tsx | Partially verified: loading/missing-state shell | 1440 | 375 | Shared findings only | Ready article body requires CMS record; source inspected. Representative missing state also checked. |
| /articles/schedule-health-checks-before-trusting-a-finish-date | Yes · frontend/src/pages/articles/detail/page.tsx | Partially verified: loading/missing-state shell | 1440 | 375 | Shared findings only | Ready article body requires CMS record; source inspected. Representative missing state also checked. |
| /articles/earned-value-management-worked-example | Yes · frontend/src/pages/articles/detail/page.tsx | Partially verified: loading/missing-state shell | 1440 | 375 | Shared findings only | Ready article body requires CMS record; source inspected. Representative missing state also checked. |
| /articles/project-risk-register-that-drives-action | Yes · frontend/src/pages/articles/detail/page.tsx | Partially verified: loading/missing-state shell | 1440 | 375 | Shared findings only | Ready article body requires CMS record; source inspected. Representative missing state also checked. |
| /articles/pmo-dashboard-that-supports-decisions | Yes · frontend/src/pages/articles/detail/page.tsx | Partially verified: loading/missing-state shell | 1440 | 375 | Shared findings only | Ready article body requires CMS record; source inspected. Representative missing state also checked. |
| /articles/responsible-ai-project-reporting-workflow | Yes · frontend/src/pages/articles/detail/page.tsx | Partially verified: loading/missing-state shell | 1440 | 375 | Shared findings only | Ready article body requires CMS record; source inspected. Representative missing state also checked. |
| /case-studies/elizabeth-pardoe-pcp | Yes · frontend/src/pages/case-studies/detail/page.tsx | Verified: rendered + computed styles | 768, 1024, 1440, 1920 | 320, 375, 430 | T08 | Bundled case study ready state; CMS extension not represented |
| /case-studies/lucian-moraru-pcp | Yes · frontend/src/pages/case-studies/detail/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T08 | Bundled case study ready state; CMS extension not represented |
| /case-studies/james-molloy-pcp | Yes · frontend/src/pages/case-studies/detail/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T08 | Bundled case study ready state; CMS extension not represented |
| /case-studies/tim-white-pcp | Yes · frontend/src/pages/case-studies/detail/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T08 | Bundled case study ready state; CMS extension not represented |
| /case-studies/roy-hillson-pcp | Yes · frontend/src/pages/case-studies/detail/page.tsx | Verified: rendered + computed styles | 1440 | 375 | T08 | Bundled case study ready state; CMS extension not represented |
| /short-courses/ai-in-project-controls | Yes · frontend/src/pages/short-courses/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Bundled detail ready state; CMS overrides not represented |
| /short-courses/project-planning-control | Yes · frontend/src/pages/short-courses/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Bundled detail ready state; CMS overrides not represented |
| /short-courses/earned-value-management | Yes · frontend/src/pages/short-courses/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Bundled detail ready state; CMS overrides not represented |
| /short-courses/pmi-scheduling-professional | Yes · frontend/src/pages/short-courses/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Bundled detail ready state; CMS overrides not represented |
| /short-courses/apm-risk-management | Yes · frontend/src/pages/short-courses/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Bundled detail ready state; CMS overrides not represented |
| /short-courses/managing-portfolios | Yes · frontend/src/pages/short-courses/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Bundled detail ready state; CMS overrides not represented |
| /short-courses/managing-successful-programmes | Yes · frontend/src/pages/short-courses/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Bundled detail ready state; CMS overrides not represented |
| /short-courses/pmp | Yes · frontend/src/pages/short-courses/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Bundled detail ready state; CMS overrides not represented |
| /short-courses/chartered-project-professional | Yes · frontend/src/pages/short-courses/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Bundled detail ready state; CMS overrides not represented |
| /short-courses/pmi-pmo-certified-professional | Yes · frontend/src/pages/short-courses/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Bundled detail ready state; CMS overrides not represented |
| /short-courses/pmo-level-6 | Yes · frontend/src/pages/short-courses/page.tsx | Verified: rendered + computed styles | 1440 | 375 | Shared findings only | Bundled detail ready state; CMS overrides not represented |
| /dashboard/* | Yes · frontend/src/dashboard/DashboardApp.tsx | Static inspection only | — | — | T01 (shared loader, static), T07 (source ownership) | Protected fallback/redirect; no authenticated session |

## Expanded seven-width coverage

| Route | 320 | 375 | 430 | 768 | 1024 | 1440 | 1920 |
|---|---|---|---|---|---|---|---|
| `/` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/about` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/associate-project-manager-level-4` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/project-controls-professional-level-6` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/project-controls-professional/operational-route` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/project-controls-professional/strategic-route` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/project-controls-professional/chartered-pmo-pathway` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/project-controls-professional/construction-route` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/project-controls-professional/engineering-manufacturing-aerospace-route` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/project-controls-professional/public-sector-councils-route` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/project-controls-professional/energy-oil-gas-utilities-route` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/commercial-project-controls-route` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/programmes` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/short-courses` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/apprenticeship-eligibility-checker` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/testimonials` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/case-studies` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/case-studies/elizabeth-pardoe-pcp` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/contact` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/book-a-session` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/faq` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/knowledge-hub/pcp-vs-pmp` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/dashboard/login` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/dashboard/reset-password` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/project-controls-professional/pmo-governance-route` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/pmo-pcp` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/chartered-pmo-pathway` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/operational-pcp-construction` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |
| `/operational-pcp-engineering` | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered | Rendered |

## Conditional, nested and data-dependent views

| View/state | Review performed | Limits |
|---|---|---|
| Public mobile/tablet menu | Rendered at 320/375/430/768/1024; Professional study opened; regular wrapping/bounds checked; Escape exercised | Backend-managed alternative labels not injected as real production data |
| Desktop Professional study menu | Rendered at 1440/1920; label and panel metrics checked | Other menu sections source-inspected; normal header geometry checked in route sweep |
| Home eligibility popup | Rendered at all seven widths, introductory state | No enrollment or enquiry submission; result copy/fields source-inspected |
| Standalone eligibility route | Rendered at seven widths | All conditional answers/results are not each counted as separate routes |
| Programme assistant | Panel rendered at 375px; relative text-size behavior checked | Existing offline state; no chat message sent; no functioning backend answer asserted |
| Learner quote disclosure | Expanded and aria-expanded=true / no line clamp verified | Preview truncation is intentional and not counted as a defect |
| Long-name stress sample | Temporary browser DOM fixture wrapped within 213px identity region | Fixture was not saved to files or a database |
| Review form, CMS inline editor, dashboard edit/delete dialogs | Source inspected, shared Modal traced | Populated/authorized variants not visually exercised |
| Dashboard login / reset | Unauthenticated UI / no-valid-token state rendered | No authentication, email reset, password change or fabricated token |
| Dashboard editor and role-controlled API outcomes | Route and component/API source traced | No authorized backend role session; static-only |
| Article/event detail unavailable states | Loading states in broad sweep; settled Article not found / Event not available checked separately | Ready live content intentionally not fetched |
| Mentor detail sample | Unavailable-profile shell | Real mentor profile needs CMS record |
| Course details | Eleven bundled slugs rendered | Arbitrary dashboard-managed overrides are outside verified content |
| Case studies and testimonials | Five bundled cases / bundled PCP reflection collection rendered | Additional CMS collections/submissions not loaded |
| Employer agreement | Compact outer header and iframe wrapper | Zoho iframe internals are cross-origin and not reviewed |
| Tables and topic/section strips | Source and visible structure checked | Intentional horizontal scrolling is not treated as page overflow |
| Native tooltips / browser validation | Source context identified | Platform-dependent rendering not certified |

## Explicit non-route source modules

Some files remain in the repository without an active route entry (for example dashboard PagesPage/ChatbotPage and legacy sector components removed from composition). They are part of the automated source scan, but were not invented as navigable pages. The full React Router route configuration and DashboardApp tree, not filenames alone, determine the route inventory.

## Evidence and environment

Local Vite origin: http://127.0.0.1:3001. Browser: Chrome 154.0.8037.98 on Windows. Text-font loading was also compared against the pre-existing .next-build export served read-only; that artifact was not rebuilt or represented as the latest deployment.

Representative PNG evidence is in [evidence/](evidence/). Only a subset of screenshots was manually reviewed; the broader matrix is based on rendered DOM/computed-style measurements. No claim of Safari/Firefox/macOS/iOS or native 200% browser zoom verification is made.

Source preservation: 1,053-file SHA-256 inventory unchanged, digest `734035e2eb9d8bbc69a7c90cfb3a9ef11c7f2b4595f0b037670ef62ff15198ca`. Refer to the audit report for scope, severity and exclusions.
