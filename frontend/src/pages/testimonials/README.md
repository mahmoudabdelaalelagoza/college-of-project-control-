# Testimonials and PCP learner experiences

Route: `/testimonials`. Composition stays in [page.tsx](page.tsx).

| Section | Component | Ownership |
| --- | --- | --- |
| Real experiences. Practical impact. | [ProfessionalEmployerExperiences.tsx](components/ProfessionalEmployerExperiences.tsx) | Directory introduction and counts from the PCP import |
| Published PCP learner experiences | [ProfessionalExperience.tsx](components/ProfessionalExperience.tsx) | Topic groups, live search, group sorting, expandable quotations and short reflections |
| More professional & employer experiences | [CollegeCommunityReviews.tsx](components/CollegeCommunityReviews.tsx) | Existing [TestimonialsSection.tsx](../../components/feature/TestimonialsSection.tsx), approved/consented Supabase reviews, audience selection and submission CTA |

## Imported KBC collection

[pcpLearnerExperiences.json](../../data/pcpLearnerExperiences.json) contains the 68 records published with KBC's `pcp6` programme key at [the source directory](https://kentbusinesscollege.com/testimonials/), imported on 21 October 2026. Original names, published wording, organisations, dates and source links are retained. Source `data-confirmed` separates 24 featured accounts from 44 additional reflections; it is not a rating or an independently verified outcome. Marketing, Associate Project Manager and PMP-only source entries are excluded.

[learnerExperiences.ts](../../data/learnerExperiences.ts) owns topic assignment and featured selection. Topics use published tags, with Andrew Raslan's workplace-focused account placed under workplace application. It does not infer a learner's sector or place them on an unconfirmed pathway. The homepage features Marson Kwan, Leigh Pullan and Andrew Raslan, all with actual source portraits.

The import includes 11 available personal portraits and employer logos. These are stored locally under `public/assets/learner-experiences/kbc/`; the [source manifest](../../../../docs/content/kbc-pcp-experiences-import-2026-10-21.json) records original URLs, local paths and file hashes. No photographs are invented or taken from other learners. Missing or failed photographs use initials.

## Shared display and filtering

[LearnerExperienceCard.tsx](../../components/feature/LearnerExperienceCard.tsx) and [learner-experiences.css](../../components/feature/learner-experiences.css) are shared by this directory and the canonical homepage [LearnerExperiences.tsx](../../components/feature/LearnerExperiences.tsx). Homepage, About and programme placements therefore use the same cards and featured records. Topic filters scroll horizontally on phones; cards use one, two or three columns. The `learner` URL parameter opens the directory with the named learner selected, including links from the shared featured section.

The imported collection is versioned site content. Existing reviews submitted directly to the College remain dashboard-managed and obey the existing approval and consent filters. The import does not write to Supabase, assert new consent, change policies or bypass moderation. New submissions still use the existing contact/review flow. Card source links point back to each original KBC account.
