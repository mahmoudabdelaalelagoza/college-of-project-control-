import { programmeById } from '@/data/programmeFacts';

// Source register and editorial limits are recorded in README.md.
function requiredProgramme(id: string) {
  const programme = programmeById(id);
  if (!programme) throw new Error(`Missing About programme: ${id}`);
  return programme;
}

export const aboutProgrammes = [
  {
    programme: requiredProgramme('apm-l4'),
    tag: 'Apprenticeship · Project Management Development',
    body: 'Build essential project management capabilities across planning, delivery, stakeholders, risk and responsible use of digital tools.',
    cta: 'Explore Level 4',
    href: '/associate-project-manager-level-4',
  },
  {
    programme: requiredProgramme('pcp-l6'),
    tag: 'Apprenticeship · Advanced Project Controls',
    body: 'Develop occupational expertise in planning, scheduling, cost, risk, assurance and performance, with Operational, Strategic and Chartered development pathways.',
    cta: 'Explore Level 6',
    href: '/project-controls-professional-level-6',
  },
  {
    programme: requiredProgramme('pmo-l6'),
    tag: 'Standalone Professional Programme · PMO & Governance',
    body: 'Develop knowledge and professional practice in PMO governance, integrated controls, risk, assurance and stakeholder reporting.',
    cta: 'Explore Certified PMO Professional',
    href: '/project-controls-professional/pmo-governance-route',
  },
];

export const pmoRecognition = requiredProgramme('pmo-l6').recognition;
export const apprenticeshipStandards = aboutProgrammes
  .map(({ programme }) => programme)
  .filter(programme => programme.standard);

// Purpose-led narrative: the project does not document a founding date or dated milestones.
export const storyThemes = [
  {
    title: 'The challenge that shapes our work',
    body: 'Projects generate plans, forecasts and reports, but professionals still need to interpret the information, challenge assumptions and decide what needs attention.',
  },
  {
    title: 'A specialist focus within KBC',
    body: 'The College of Project Controls & Management brings a focused home for project capability within Kent Business College, connecting technical knowledge with professional practice.',
  },
  {
    title: 'Our role today',
    body: 'Our offer brings together work-based apprenticeships, standalone professional programmes, specialist courses and employer development, helping people build capability around their responsibilities.',
  },
];

// These are summaries of existing site principles, not newly declared institutional policies.
export const professionalValues = [
  {
    title: 'Work before theory',
    body: 'Learning is connected to real responsibilities, live project information and the decisions professionals are expected to support.',
    icon: 'ri-briefcase-4-line',
  },
  {
    title: 'Clarity before complexity',
    body: 'We organise controls, governance and management concepts so professionals can explain what matters and act with confidence.',
    icon: 'ri-focus-3-line',
  },
  {
    title: 'Evidence before claims',
    body: 'Progress is grounded in applied work and credible evidence. Outcomes, funding and recognition are described with clear limits.',
    icon: 'ri-file-shield-2-line',
  },
  {
    title: 'Accountability in practice',
    body: 'Reliable information, professional judgement and human oversight remain central to recommendations, including when AI and digital tools are used.',
    icon: 'ri-shield-user-line',
  },
];

export const learningSteps = [
  ['01', 'Prepare', 'Understand your responsibilities, development needs and relevant professional challenges.'],
  ['02', 'Learn', 'Explore frameworks, techniques and practical examples through structured teaching and specialist discussion.'],
  ['03', 'Apply', 'Use relevant methods in suitable workplace activities or professional learning scenarios.'],
  ['04', 'Review & Develop', 'Use feedback, reflection and evidence of progress to identify your next development priorities.'],
];

export const collegeApproach = [
  {
    title: 'Focused Expertise',
    body: 'Specialist learning across project management, project controls, PMO, governance and assurance.',
    icon: 'ri-focus-3-line',
  },
  {
    title: 'Professional Relevance',
    body: 'Learning connected to real responsibilities, practical challenges and professional development goals.',
    icon: 'ri-briefcase-4-line',
  },
  {
    title: 'Supported Progression',
    body: 'Structured teaching, practitioner insight and appropriate learning support throughout your agreed programme.',
    icon: 'ri-user-heart-line',
  },
];

export const aiPrinciples = [
  ['Reliable Information', 'Check data quality, understand limitations and protect confidential information.'],
  ['Human Oversight', 'Review AI-generated analysis and maintain clear responsibility for professional recommendations.'],
  ['Transparent Decisions', 'Use appropriate governance, approval and audit arrangements when applying digital tools.'],
];

export const employerPillars = [
  ['Role-Based Development', 'Identify relevant capabilities and learning priorities across project management and project controls functions.'],
  ['Workplace Application', 'Connect appropriate learning activities with live projects, processes and professional responsibilities.'],
  ['Supported Progress', 'Work with learners, managers and coaches to review development and identify further learning needs.'],
  ['Governance & Professional Practice', 'Support stronger understanding of performance, assurance, reporting and organisational decision-making.'],
];

export const locations = [
  {
    title: 'Kent, England',
    label: 'Kent Business College',
    body: 'The College of Project Controls & Management is part of Kent Business College in Kent, England. Speak with our team about programme delivery and any in-person arrangements.',
    icon: 'ri-map-pin-line',
  },
  {
    title: 'Live online learning',
    label: 'Learning alongside your professional role',
    body: 'Tutor-led online sessions connect structured teaching with guided study and relevant workplace application. Delivery arrangements are confirmed for your chosen programme.',
    icon: 'ri-computer-line',
  },
  {
    title: 'Professional study beyond England',
    label: 'Explore the commercial route',
    body: 'Learners outside England can discuss standalone commercial study. Programme availability, entry requirements and study arrangements are agreed individually.',
    icon: 'ri-global-line',
  },
];
