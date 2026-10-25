export type AnswerValue = string;
export type CheckerAnswers = Record<string, AnswerValue>;

export interface CheckerOption {
  label: string;
  value: string;
}

export interface CheckerQuestion {
  id: string;
  type: 'radio' | 'select' | 'text' | 'textarea';
  label: string;
  helpText?: string;
  placeholder?: string;
  options?: CheckerOption[];
  required?: boolean;
}

export interface CheckerStep {
  id: string;
  title: string;
  description: string;
  questions: CheckerQuestion[];
}

const yesNo: CheckerOption[] = [{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }];
const yesNoUnsure: CheckerOption[] = [...yesNo, { label: 'Not sure', value: 'not_sure' }];

export const checkerSteps: CheckerStep[] = [
  {
    id: 'basic',
    title: 'Basic eligibility',
    description: "Let's start by checking a few basic requirements for apprenticeships in England.",
    questions: [
      { id: 'age_16', type: 'radio', label: 'Will you be aged 16 or over when your apprenticeship starts?', options: yesNo, required: true },
      { id: 'residency_education', type: 'radio', label: 'Was your residency in the UK in the past 3 years mainly for full-time education?', helpText: 'For example, studying full-time at school, college or university.', options: yesNoUnsure, required: true },
      { id: 'workplace_england', type: 'radio', label: 'Will you spend at least 50% of your working hours in England during your apprenticeship?', helpText: 'This includes working remotely or in a hybrid role.', options: yesNoUnsure, required: true },
    ],
  },
  {
    id: 'residency',
    title: 'Residency & right to work',
    description: "We'll check your residency and right-to-work status to help determine whether you may qualify for apprenticeship funding.",
    questions: [
      { id: 'uk_residency_three_years', type: 'radio', label: 'Have you lived in the UK for the three years immediately before your planned apprenticeship start date?', options: yesNoUnsure, required: true },
      { id: 'right_to_work', type: 'radio', label: 'Do you have the right to live and work in the UK for the full duration of your apprenticeship?', options: yesNoUnsure, required: true },
      { id: 'residency_status', type: 'radio', label: 'Which best describes your current UK immigration status?', options: [
        { label: 'British citizen or person with right of abode', value: 'citizen' },
        { label: 'Indefinite Leave to Remain or settled status', value: 'settled' },
        { label: 'Time-limited permission to live and work in the UK', value: 'visa' },
        { label: 'Other / Not sure', value: 'other' },
      ], required: true },
    ],
  },
  {
    id: 'employment',
    title: 'Employment & funding',
    description: 'Tell us about your employment and any other training you may be undertaking.',
    questions: [
      { id: 'employment_situation', type: 'radio', label: 'Which best describes your employment situation when your apprenticeship starts?', options: [
        { label: 'Employed by an organisation', value: 'employed' },
        { label: 'Starting a new paid job', value: 'job_offer' },
        { label: 'Self-employed', value: 'self_employed' },
        { label: 'Not currently employed', value: 'unemployed' },
        { label: 'Other / Not sure', value: 'other' },
      ], required: true },
      { id: 'weekly_paid_hours', type: 'radio', label: 'How many paid hours per week will you normally work?', options: [
        { label: '30 hours or more', value: '30_plus' },
        { label: '16–29 hours', value: '16_29' },
        { label: 'Fewer than 16 hours', value: 'under_16' },
        { label: 'Not sure', value: 'not_sure' },
      ], required: true },
      { id: 'other_funded_training', type: 'radio', label: 'Will you be enrolled in another apprenticeship or government-funded training programme when this apprenticeship starts?', options: yesNoUnsure, required: true },
    ],
  },
  {
    id: 'programme',
    title: 'Employer & apprenticeship details',
    description: "Finally, let's check a few details about your employer and the apprenticeship you're interested in.",
    questions: [
      { id: 'employer_support', type: 'radio', label: 'Will your employer support you in completing an apprenticeship?', options: yesNoUnsure, required: true },
      { id: 'employer_service_registered', type: 'radio', label: "Is your employer registered with the government's Apprenticeship Service?", helpText: "If you're unsure, we can check this with your employer.", options: yesNoUnsure, required: true },
      { id: 'interest_area', type: 'select', label: 'Which apprenticeship area are you interested in?', placeholder: 'Select an apprenticeship area', options: [
        { label: 'Associate Project Manager Level 4', value: 'apm_level_4' },
        { label: 'Project Controls Professional Level 6', value: 'pcp_level_6' },
        { label: 'Not sure yet', value: 'not_sure' },
      ], required: true },
    ],
  },
];

export const checkerFaqs = [
  ['What is the eligibility checker?', 'It is a short guided assessment that provides an initial indication of whether an apprenticeship discussion may be suitable.'],
  ['Is this a final decision?', 'No. Final eligibility is confirmed by Kent Business College after reviewing your circumstances and the rules that apply at enrolment.'],
  ['How long does it take?', 'Most people can complete the checker in less than five minutes.'],
  ['Do I need an employer?', 'Yes. An apprenticeship is a paid job with structured training, so you need an employer and suitable employment arrangements.'],
  ['What happens after completing the checker?', 'You will see an initial indication and recommended next steps. You can then request a consultation or contact admissions.'],
  ['Can I complete it if I am unsure about funding?', 'Yes. The checker is designed to identify questions that may need further review; it does not require you to know your funding position.'],
] as const;
