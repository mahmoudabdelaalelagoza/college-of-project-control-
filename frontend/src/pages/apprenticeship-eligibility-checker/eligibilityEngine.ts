import type { CheckerAnswers,CheckerStep } from './checkerData';

export type EligibilityStatus = 'likely' | 'review' | 'not_suitable';

export interface EligibilityResult {
  status: EligibilityStatus;
  label: string;
  message: string;
  factors: string[];
  nextStep: string;
}

export function validateStep(step: CheckerStep, answers: CheckerAnswers) {
  return step.questions.filter(question => question.required && !answers[question.id]?.trim()).map(question => question.id);
}

// Funding checks are indicative. Residency exceptions, part-time duration and
// overlapping training need admissions review under the applicable funding rules.
const reviewChecks: readonly { question: string; clearAnswers: readonly string[]; message: string }[] = [
  { question: 'age_16', clearAnswers: ['yes'], message: 'Your age at the planned start date needs confirmation.' },
  { question: 'residency_education', clearAnswers: ['no'], message: 'The purpose of your UK residency needs an individual review.' },
  { question: 'workplace_england', clearAnswers: ['yes'], message: 'The proportion of your working hours spent in England needs confirmation.' },
  { question: 'uk_residency_three_years', clearAnswers: ['yes'], message: 'Your residency history and any applicable exceptions need an individual review.' },
  { question: 'right_to_work', clearAnswers: ['yes'], message: 'Your right to live and work in the UK for the full apprenticeship needs confirmation.' },
  { question: 'residency_status', clearAnswers: ['citizen', 'settled'], message: 'Your immigration status and permission duration need an individual review.' },
  { question: 'employment_situation', clearAnswers: ['employed', 'job_offer'], message: 'Your paid employment arrangements at the planned start date need confirmation.' },
  { question: 'weekly_paid_hours', clearAnswers: ['30_plus'], message: 'Your paid working hours and a realistic training duration need to be agreed.' },
  { question: 'other_funded_training', clearAnswers: ['no'], message: 'Any overlapping apprenticeship or government-funded training needs to be checked.' },
  { question: 'employer_support', clearAnswers: ['yes'], message: 'Employer support needs confirmation.' },
  { question: 'employer_service_registered', clearAnswers: ['yes'], message: 'We need to check Apprenticeship Service registration with your employer.' },
  { question: 'interest_area', clearAnswers: ['apm_level_4', 'pcp_level_6'], message: 'The most suitable apprenticeship area still needs to be identified.' },
];

export function calculateEligibility(answers: CheckerAnswers): EligibilityResult {
  const blockers: string[] = [];
  if (answers.age_16 === 'no') blockers.push('The minimum age condition may not be met.');
  if (answers.workplace_england === 'no') blockers.push('You do not currently expect to spend at least 50% of your working hours in England.');
  if (['unemployed', 'self_employed'].includes(answers.employment_situation)) blockers.push('A supported paid employed role is not currently expected at the planned start date.');
  if (answers.employer_support === 'no') blockers.push('Employer support is not currently in place.');
  if (answers.right_to_work === 'no') blockers.push('The stated right to live and work in the UK does not cover the full apprenticeship.');

  if (blockers.length) return {
    status: 'not_suitable', label: 'Not currently suitable',
    message: 'Based on your answers, this apprenticeship route may not currently be suitable.',
    factors: blockers, nextStep: 'Speak with our team about what would need to change or whether a commercial professional-development route may be more appropriate.',
  };

  // Missing or unrecognised answers also need review; they must never produce
  // a favourable result simply because no explicit blocker was selected.
  const reviews = reviewChecks
    .filter(check => !check.clearAnswers.includes(answers[check.question]))
    .map(check => check.message);

  if (reviews.length) return {
    status: 'review', label: 'Needs further review',
    message: 'We need more information before confirming whether this route is suitable.',
    factors: reviews, nextStep: 'Request a consultation so admissions can review the points above with you.',
  };

  return {
    status: 'likely', label: 'Likely suitable for review',
    message: 'Your answers suggest you may be suitable for an apprenticeship route. The next step is to discuss your circumstances with our team.',
    factors: [
      'Your age and England working-hours answers support an apprenticeship discussion.',
      'Your residency and right-to-work answers support an admissions review.',
      'A paid employed role, employer support and Apprenticeship Service registration appear to be in place.',
      'Your working hours, funding answers and apprenticeship interests can be discussed with our team.',
    ],
    nextStep: 'Request a consultation to confirm programme fit, funding conditions and formal eligibility.',
  };
}
