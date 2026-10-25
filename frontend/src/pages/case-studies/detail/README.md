# Case Study Detail

The `/case-studies/:slug` route loads the five supplied editorial learner stories directly from `src/data/pcpCaseStudies.json`. Other published case studies continue to use the existing CMS service.

- `LearnerCaseStudyDetail`: College-branded editorial reading layout with learner identity, original quotation, professional context, learning application, reported development, practical examples and source date. The programme panel scrolls normally on mobile and is sticky below the measured public header on desktop. Only supplied portraits are used; other learners have initials.
- `CaseStudyDetailHero` and `CaseStudyDetailBody`: Existing CMS story presentation.
- `CaseStudyDetailStatus`: Loading and unavailable-story states.

Professional output examples describe what each learner reports; no results, qualifications, promotions or numerical improvements are invented. The original survey PDFs remain outside public assets.
