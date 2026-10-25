# Apprenticeship eligibility checker (popup)

There is no standalone page. Every "Check eligibility" link or button opens the shared popup:

- [EligibilityCheckerHost.tsx](../../components/feature/EligibilityCheckerHost.tsx) is mounted once in the app shell; call `openEligibilityChecker()` from [eligibilityChecker.ts](../../components/feature/eligibilityChecker.ts) to open it.
- [SiteLink.tsx](../../components/base/SiteLink.tsx) turns any link to `/apprenticeship-eligibility-checker` or `/eligibility-checker` into a popup trigger.
- The old URLs redirect to `/?check-eligibility`, which opens the popup on the homepage.
- [EligibilityCheckerModal.tsx](../../components/feature/EligibilityCheckerModal.tsx) renders [ApprenticeshipEligibilityChecker.tsx](components/ApprenticeshipEligibilityChecker.tsx).

## Four-step questionnaire

`checkerData.ts` owns the 12 required questions in this order: Basic eligibility; Residency & right to work; Employment & funding; Employer & apprenticeship details. The final dropdown lists the Level 4 and Level 6 apprenticeships and an unsure option.

`eligibilityEngine.ts` calculates an initial indication from these questions. Residency exceptions, part-time hours, overlapping funded training, employer registration and uncertain/missing answers go to admissions review. Explicit route blockers take precedence.

The popup keeps its outcome-specific actions: `Book info session` (opens the Microsoft Bookings information-session page) for a likely-suitable result and `Explore IPC Scholarships` for a currently unsuitable result. Review results offer a single `Request a consultation` action that opens the Microsoft Bookings page; there is no Contact Admissions button. `Explore IPC Scholarships` opens instituteofprojectcontrols.com. These links close the popup on navigation.

The funding-rule reference for individual checks is [Apprenticeship funding rules 2026 to 2027](https://www.gov.uk/government/publications/apprenticeship-funding-rules-and-assessment-plan-guidance-2026-to-2027). This short questionnaire does not replace the full admissions assessment. Decision and required-answer regressions run with `npm run test:journeys`.
