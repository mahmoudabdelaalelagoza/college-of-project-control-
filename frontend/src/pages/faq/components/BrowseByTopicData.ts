
import { articleFaqs as apmChppArticleFaqs } from '../../knowledge-hub/apm-chpp-readiness/sectionData';
import { articleFaqs as commercialRoutesArticleFaqs } from '../../knowledge-hub/commercial-routes-explained/sectionData';
import { articleFaqs as constructionTrainingArticleFaqs } from '../../knowledge-hub/construction-training/sectionData';
import { articleFaqs as employerFundingArticleFaqs } from '../../knowledge-hub/employer-apprenticeship-funding/sectionData';
import { articleFaqs as energyTrainingArticleFaqs } from '../../knowledge-hub/energy-training/sectionData';
import { articleFaqs as fundedPcpEmployerArticleFaqs } from '../../knowledge-hub/funded-pcp-employer-guide/sectionData';
import { articleFaqs as pcpVsPmpArticleFaqs } from '../../knowledge-hub/pcp-vs-pmp/sectionData';
import { articleFaqs as pmoGovernanceArticleFaqs } from '../../knowledge-hub/pmo-governance-training/sectionData';
import { articleFaqs as strategicVsOperationalArticleFaqs } from '../../knowledge-hub/strategic-vs-operational/sectionData';
import { articleFaqs as whatIsPcpArticleFaqs } from '../../knowledge-hub/what-is-pcp-apprenticeship/sectionData';

export interface FaqCategory {
  id: string;
  label: string;
  shortLabel: string;
  icon: string;
  introduction: string;
  items: { question: string; answer: string }[];
}

const fromObjects = (items: readonly { q: string; a: string }[]) => items.map(({ q, a }) => ({ question: q, answer: a }));

const pageLocalFaqs = [
  {
    question: 'Which programme is right for me?',
    answer: 'Start with your current responsibilities and the capability you want to strengthen. Project Controls Professional Level 6 suits professionals across planning, scheduling, cost, risk, controls and PMO. Associate Project Manager Level 4 suits professionals developing broader project-management and delivery responsibility. Certified PMO Professional Level 6 suits experienced professionals developing strategic PMO governance.',
  },
  {
    question: 'What is the difference between Project Controls Professional Level 6 and Associate Project Manager Level 4?',
    answer: 'Project Controls Professional Level 6 focuses on advanced Project Controls capability, while Associate Project Manager Level 4 builds broader project-management and delivery responsibility at Level 4. The right programme depends on your role and the level of responsibility you hold.',
  },
  {
    question: 'Who is Certified PMO Professional Level 6 designed for?',
    answer: 'Experienced PMO, Project Controls and project professionals developing strategic governance, integrated controls, assurance and PMO leadership capability.',
  },
  {
    question: 'What is the difference between a programme and a specialist module?',
    answer: 'A complete programme provides structured development across a broader professional capability. A specialist module focuses on one specific Project Controls subject, which can be taken individually or combined with others.',
  },
  {
    question: 'Can I take individual Project Controls modules?',
    answer: 'Yes. Specialist Project Controls modules can be taken individually, allowing you to target one specific capability rather than a complete programme.',
  },
  {
    question: 'Can my employer support my development?',
    answer: 'Yes. Employers can support development for an individual, a team or a wider Project Controls function, either directly or through structured employer development.',
  },
  {
    question: 'Can organisations enrol multiple employees?',
    answer: 'Yes. Organisations can build capability across roles, teams, PMOs or functions through structured employer development.',
  },
  {
    question: 'How does workplace application work?',
    answer: 'Development is designed to connect specialist learning directly to live projects, systems and responsibilities, so you can apply what you learn in real work.',
  },
  {
    question: 'What professional pathways are connected to the programmes?',
    answer: 'Selected programmes connect with relevant professional qualifications, assessments, memberships and progression pathways. These remain subject to the requirements of the relevant professional body.',
  },
  {
    question: 'How involved does the employer need to be?',
    answer: 'Employer involvement is an important part of work-based training. This includes supporting workplace learning, attending progress reviews, providing feedback and helping the employee access suitable development opportunities.',
  },
  {
    question: 'How often will we review progress?',
    answer: 'KBC normally uses structured tripartite progress reviews involving the learner, employer and coach approximately every 10 weeks.',
  },
  {
    question: 'Can training be aligned with our business priorities?',
    answer: "Yes. Where the programme allows it, KBC works with the employer and learner to connect learning, workplace evidence and development activities with the employee's real responsibilities and organisational context.",
  },
  {
    question: 'How much will the programme cost us?',
    answer: 'The funding position varies by programme, employee and employer. KBC confirms the applicable route before enrolment.',
  },
  {
    question: 'Do employees need to leave work to study?',
    answer: 'Programmes are designed around employed learners and combine structured learning with workplace application. The employer must support the learning commitment required by the relevant programme.',
  },
  {
    question: 'Can you help us decide which employee or programme is the right fit?',
    answer: 'Yes. The discussion can start with the role, current capability and development objective before a programme is selected.',
  },
  {
    question: 'How much does it cost me personally?',
    answer: 'Apprentices must not be asked to contribute to eligible apprenticeship training costs. Whether a place is funded depends on employer support, learner eligibility and the funding rules that apply on the start date. We confirm this before enrolment.',
  },
  {
    question: 'How long does the programme take?',
    answer: 'For apprenticeships, typically 18-26 months depending on your level and pace. You will be learning while working, so the programme fits around your job. Standalone professional courses follow their own schedule, which is confirmed before enrolment.',
  },
  {
    question: 'What certification will I achieve?',
    answer: 'Depending on your pathway, you can achieve APM PMQ, PMI CAPM, or progress towards chartered status. Certification is integrated into the programme.',
  },
  {
    question: 'Can I study while working full-time?',
    answer: 'Yes. The programme is designed for working professionals. Live sessions are in the evenings, and workplace assignments count as your evidence.',
  },
  {
    question: 'What is the Institute of Project Controls?',
    answer: 'IPC is a professional body focused on advancing project controls capability, standards, professional development and recognition.',
  },
  {
    question: 'How does IPC connect with College programmes?',
    answer: 'Relevant College programmes combine structured learning and workplace application with IPC-aligned professional development. The exact support and recognition route is confirmed for each programme and learner.',
  },
  {
    question: 'Which disciplines sit within project controls?',
    answer: 'Project controls commonly connects planning, scheduling, cost, risk, change, earned value, reporting, governance, PMO and data-informed decision support.',
  },
  {
    question: 'How quickly will I hear back?',
    answer: 'Our team reviews enquiries within 24 hours on working days and will follow up by email or phone with your next step.',
  },
  {
    question: 'Is there any obligation to enrol?',
    answer: 'None. Getting in touch is simply the start of a conversation to understand your role, goals and the most relevant option.',
  },
  {
    question: 'What if I am enquiring on behalf of my employer?',
    answer: 'Tell us your organisation and role, then describe your team development needs in the message field.',
  },
  {
    question: 'Can I speak to someone instead of emailing?',
    answer: 'Yes. Request an adviser call using the consultation form. Our team will contact you to agree the next step.',
  },
  {
    question: 'How long does the application take?',
    answer: 'The first enquiry takes a few minutes. The full timeline depends on funding checks, employer engagement and cohort availability.',
  },
  {
    question: 'Do I need my employer to be involved?',
    answer: 'For apprenticeship-funded routes, yes. Other professional routes can be discussed without the same employer process.',
  },
  {
    question: 'Can I apply if I am not sure which pathway fits?',
    answer: 'Yes. The admissions conversation can help you compare Operational, Strategic, PMO, Chartered and sector-specific routes.',
  },
  {
    question: 'When is funding confirmed?',
    answer: 'Funding is reviewed before enrolment and confirmed with the learner and, where relevant, the employer.',
  },
  {
    question: 'What is a short course?',
    answer: 'A short course develops one focused area of project controls through live teaching, structured learning and workplace application.',
  },
  {
    question: 'Can short courses be combined into a pathway?',
    answer: 'Yes. Individual courses can support a wider professional route when the combination fits your role, goals and evidence base.',
  },
  {
    question: 'Do all courses lead to an external certification?',
    answer: 'Some prepare you for professional body certifications. Final awards remain subject to the relevant body, exam and eligibility requirements.',
  },
  {
    question: 'How do I choose the right course?',
    answer: 'Start with the capability you need at work. The College team can help match the right course to your responsibilities and development plan.',
  },
];

export const categories: FaqCategory[] = [
  {
    id: 'page-local-faqs',
    label: 'General FAQs',
    shortLabel: 'General',
    icon: 'ri-pages-line',
    introduction: '',
    items: pageLocalFaqs,
  },
  {
    id: 'college', label: 'About the College', shortLabel: 'The College', icon: 'ri-building-4-line',
    introduction: 'How the College approaches professional education, delivery and learner support.',
    items: [
      { question: 'What is the College of Project Controls & Management?', answer: 'The College is a specialist professional education provider focused on project controls, project management, PMO, governance and related workplace capability.' },
      { question: 'Who are the programmes designed for?', answer: 'Programmes are designed for working professionals, employers and people developing responsibility across planning, cost, risk, reporting, governance, PMO and project delivery.' },
      { question: 'Is learning practical or mainly academic?', answer: 'The learning model connects taught concepts with workplace application, professional reflection and evidence. The exact balance depends on the selected programme and route.' },
      { question: 'Can I speak to someone before choosing?', answer: 'Yes. Request a consultation to discuss your role, experience, objectives, eligibility and the route that may fit you best.' },
    ],
  },
  {
    id: 'programmes', label: 'Programmes & Levels', shortLabel: 'Programmes', icon: 'ri-graduation-cap-line',
    introduction: 'Choosing between the College’s main professional programmes and levels.',
    items: [
      { question: 'Which main programmes are available?', answer: 'Project Controls Professional Level 6 and Associate Project Manager Level 4 are available as apprenticeships, subject to eligibility, or through IPC funding. Certified PMO Professional Level 6 and our specialist and commercial development options are available as standalone professional programmes or through IPC funding.' },
      { question: 'How do I choose the right level?', answer: 'Start with your current responsibilities, experience and the capability you need to build. Level 4 supports developing project-management practice, while Level 6 routes address more advanced controls and PMO responsibilities.' },
      { question: 'Do I need “Project Manager” in my job title?', answer: 'No. Suitability is based more on what you do than your job title. Planning, reporting, coordination, cost, risk, controls, governance and stakeholder responsibilities may all be relevant.' },
      { question: 'Can a programme reflect my sector?', answer: 'Where appropriate, examples, discussion and workplace application can reflect your sector and professional context while maintaining the programme’s required outcomes.' },
    ],
  },
  {
    id: 'apm-level-4', label: 'APM Level 4', shortLabel: 'APM Level 4', icon: 'ri-briefcase-4-line',
    introduction: 'What the Associate Project Manager Level 4 route develops and who it may suit.',
    items: [
      { question: 'Who is the Level 4 programme suitable for?', answer: 'It may suit professionals who coordinate projects, support delivery, manage stakeholders, report progress or are developing broader project-management responsibility.' },
      { question: 'What capabilities does Level 4 develop?', answer: 'It develops structured practice across planning, governance, communication, risk, stakeholder engagement and delivery coordination.' },
      { question: 'Can Level 4 support progression into project controls?', answer: 'It can provide a strong project-management foundation. A later step may include deeper project controls, PMO or specialist development depending on your role and goals.' },
      { question: 'Is previous project-management experience required?', answer: 'Relevant workplace exposure is helpful, but admissions considers your role, responsibilities, prior learning and ability to apply the programme in practice.' },
    ],
  },
  {
    id: 'pcp-level-6', label: 'PCP Level 6', shortLabel: 'PCP Level 6', icon: 'ri-line-chart-line',
    introduction: 'The structure, pathways and intended outcomes of Project Controls Professional Level 6.',
    items: [
      { question: 'Who is PCP Level 6 for?', answer: 'It is designed for professionals involved in planning, scheduling, cost, risk, change, reporting, governance, PMO and the control of complex projects or programmes.' },
      { question: 'What pathways are available?', answer: 'The College presents Operational, Strategic and Chartered pathways. A tailored combination may also be discussed where duties, evidence opportunities and programme rules allow.' },
      { question: 'How is the programme applied at work?', answer: 'Learners connect learning with relevant responsibilities and build evidence through practical outputs, reflection, coaching and employer-supported progress reviews.' },
    ],
  },
  {
    id: 'funding', label: 'Apprenticeships & Funding', shortLabel: 'Funding', icon: 'ri-money-pound-circle-line',
    introduction: 'Eligibility, employer involvement and alternatives when apprenticeship funding is unavailable.',
    items: [
      { question: 'Is apprenticeship funding automatic?', answer: 'No. Funding depends on the learner, employer, location, prior learning and the rules applying at enrolment. Eligibility must be checked before a funded place is confirmed.' },
      { question: 'Does my employer need to support the apprenticeship?', answer: 'Yes. Work-based delivery normally requires employer agreement, appropriate responsibilities, evidence opportunities and participation in progress reviews.' },
      { question: 'What if I am not eligible for funding?', answer: 'Commercial routes may be available for self-employed professionals, international learners and others unable to access apprenticeship funding. Payment options can be discussed where available.' },
      { question: 'Can prior learning affect my programme?', answer: 'Yes. Admissions reviews relevant prior learning and experience, which can affect eligibility, content, duration or funding in line with applicable rules.' },
    ],
  },
  {
    id: 'recognition', label: 'Professional Recognition', shortLabel: 'Recognition', icon: 'ri-award-line',
    introduction: 'How programmes connect with professional bodies, qualifications and longer-term progression.',
    items: [
      { question: 'What does recognition support mean?', answer: 'It means helping learners understand relevant standards, develop evidence and prepare for applicable assessments or progression routes. Recognition is not awarded automatically.' },
      { question: 'Are professional examinations included?', answer: 'Some routes may include preparation, memberships or related support where specified. Confirm the exact arrangement for your selected programme before enrolling.' },
      { question: 'Can the College help plan my longer-term pathway?', answer: 'Yes. An information session can connect your current role and intended direction with a suitable programme or professional-development route.' },
    ],
  },
  {
    id: 'employers', label: 'Employers & Teams', shortLabel: 'Employers', icon: 'ri-team-line',
    introduction: 'Developing individuals, cohorts and organisational project capability.',
    items: [
      { question: 'Can an employer enrol a group of employees?', answer: 'Yes. Cohort discussions can consider roles, organisational priorities, eligibility and how learning will be applied across the workplace.' },
      { question: 'How are employers involved?', answer: 'Depending on the route, employers may support role alignment, workplace application, evidence opportunities and structured progress reviews.' },
      { question: 'Can learning reflect our project environment?', answer: 'Examples and workplace application can reflect the organisation’s sector, terminology and delivery priorities while preserving required standards.' },
      { question: 'How do we decide which employees fit each route?', answer: 'Map each employee’s actual responsibilities, experience and development needs against programme outcomes. The College can support this through an employer consultation.' },
    ],
  },
  {
    id: 'applications', label: 'Applications & Support', shortLabel: 'Applying', icon: 'ri-customer-service-2-line',
    introduction: 'The first conversation, admissions review and support available during study.',
    items: [
      { question: 'What happens after I request a consultation?', answer: 'The team will contact you to discuss your role, goals, experience, employer support and possible funding route, then agree the next step.' },
      { question: 'What information should I prepare?', answer: 'Be ready to describe your responsibilities, recent project experience, employer situation, previous qualifications and what you want to achieve.' },
      { question: 'What learner support is available?', answer: 'Support may include live teaching, coaching, progress reviews, workplace-evidence guidance and professional-development support according to the programme.' },
      { question: 'When are start dates confirmed?', answer: 'Cohort availability can change. Admissions confirms current intake options and any conditions that must be completed before enrolment.' },
    ],
  },
  {
    id: 'article-guide-faqs',
    label: 'Knowledge Hub FAQs',
    shortLabel: 'Guides',
    icon: 'ri-article-line',
    introduction: 'Questions from the Knowledge Hub guides, consolidated into the central FAQ page.',
    items: [
      ...fromObjects(whatIsPcpArticleFaqs),
      ...fromObjects(strategicVsOperationalArticleFaqs),
      ...fromObjects(pmoGovernanceArticleFaqs),
      ...fromObjects(pcpVsPmpArticleFaqs),
      ...fromObjects(fundedPcpEmployerArticleFaqs),
      ...fromObjects(energyTrainingArticleFaqs),
      ...fromObjects(employerFundingArticleFaqs),
      ...fromObjects(constructionTrainingArticleFaqs),
      ...fromObjects(commercialRoutesArticleFaqs),
      ...fromObjects(apmChppArticleFaqs),
    ],
  },
];
