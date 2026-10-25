# Case Studies Page

The collection at `/case-studies` combines five supplied PCP learner case studies with other real, published CMS case studies. Search covers the learner, organisation, role, sector, learning themes and professional account; sector selection and search are stored in the URL. Bundled stories render immediately and remain available if the additional CMS collection is unavailable.

- `CaseStudiesHero`: Compact editorial introduction with measured space below the public header.
- `CaseStudiesGrid`: Search, sector filter, result count, accessible empty state and pagination.
- [pcpCaseStudies.json](../../data/pcpCaseStudies.json): Version-controlled editorial content for Elizabeth Pardoe, Lucian Moraru, James Molloy, Tim White and Roy Hillson.
- [caseStudyCollection.ts](../../services/caseStudyCollection.ts): Merge by slug, exclude placeholder records, filter and paginate the combined collection. Bundled editorial slugs take precedence.
- [LearnerCaseStudyCard.tsx](../../components/feature/LearnerCaseStudyCard.tsx): Shared cards used here and immediately before testimonials on the homepage.
- [case-studies.css](../../components/feature/case-studies.css): Scoped styles using the college's typography, colour, radius and spacing tokens.

The five supplied PDFs are private survey exports and are not public downloads. Only the professional accounts and the two supplied portraits are published. Source dates, page references and hashes are recorded in `docs/content/pcp-case-studies-2026-10-21.json`. Personal contact, health, travel and internal form fields are excluded. Roy's separately referenced DOCX was not embedded; his account is based on the professional programme feedback that was supplied. Tim's story retains his statement that there is no specific measured achievement yet.

These five editorial stories are bundled site content, not Supabase inserts. Existing CMS case studies retain their existing dashboard ownership. Each editorial detail path is included in `src/next/staticRoutes.ts` so it also works in the exported production website.
