import { PCP_L6 } from '@/data/programmeFacts';
import { formatGBP, fundingWindowPhrase } from '@/data/apprenticeshipFundingPolicy';
import { ipcSupportPackageMaximum } from './programmeData';

/** Page-specific copy supplied for the Level 6 apprenticeship page. */
export const level6Copy = {
  "hero": {
    "eyebrow": "Kent Business College | College of Project Controls & Management",
    "title": "Project Controls Professional Level 6",
    "intro": "Build advanced project controls capability by integrating planning, cost, risk and performance information into reliable forecasts and recommendations. Apply your learning to real workplace challenges through an apprenticeship pathway agreed with your employer.",
    "note": "Apprenticeship funding and programme suitability are assessed individually before enrolment.",
    "rolesTitle": "For professionals working across",
    "roles": "Project Controls · Planning & Scheduling · Cost · Risk · Performance Reporting · Governance & Assurance",
    "pathwaysTitle": "Three development pathways",
    "pathways": "Operational · Strategic · Chartered",
    "pathwayDescription": "Choose from three development pathways within the same Level 6 apprenticeship standard (ST0845). Your six-credit KBC learning plan is agreed around your responsibilities, prior learning and employer needs.",
    "catalogueLabel": "Download programme catalogue →"
  },
  "glance": {
    "tag": "Programme at a glance",
    "title": "Explore upcoming Level 6 intakes",
    "intro": [
      "Explore upcoming intake windows and register your interest. Your start date, learning pathway and individual training plan are confirmed following a review of your role, prior learning and employer requirements."
    ],
    "cards": [
      {
        "title": "27-month planned learning route",
        "body": [
          "One-month soft start, 24 months of teaching and two months of closing workshops, followed by a separate apprenticeship assessment period. Individual duration is subject to approval."
        ]
      },
      {
        "title": "6 KBC learning credits",
        "body": [
          "Each standard credit represents four months of teaching. Your six-credit combination is agreed with KBC and your employer."
        ]
      },
      {
        "title": "3 development pathways",
        "body": [
          "Operational · Strategic · Chartered Three professional development options within the same Level 6 apprenticeship standard."
        ]
      },
      {
        "title": "Funding and professional support",
        "body": [
          `Up to ${formatGBP(PCP_L6!.fundingBandMaximum!)} apprenticeship funding-band maximum, plus a separate ${formatGBP(ipcSupportPackageMaximum)} IPC professional-support package, subject to eligibility and your written offer.`
        ]
      }
    ],
    "intakesTitle": "Upcoming intake windows",
    "intakes": [
      "January 2027 — Register your interest",
      "Spring 2027 — Register your interest",
      "September 2027 — Register your interest"
    ],
    "note": "Intake availability and exact start dates are confirmed by Kent Business College."
  },
  "register": {
    "tag": "Next Steps",
    "title": "Take the next step towards Project Controls Professional Level 6",
    "intro": [
      "Speak with our admissions team to explore upcoming intakes, discuss your current responsibilities and understand your apprenticeship options. We'll help you review initial eligibility, potential funding arrangements and the development pathway that may best suit your role and employer needs."
    ],
    "cta": "Book a programme consultation →",
    "note": "Programme suitability, funding and enrolment are subject to a full review."
  },
  "overview": {
    "tag": "Programme overview",
    "title": "Turn project information into confident decisions",
    "intro": [
      "Develop the expertise to integrate project schedules, costs, risks and performance data into reliable forecasts, early warnings and evidence-based recommendations that support better project decisions."
    ],
    "cards": [
      {
        "title": "Strengthen project controls expertise",
        "body": [
          "Develop technical judgement in planning, scheduling, cost forecasting, risk analysis and performance assurance to support effective project control and decision-making."
        ]
      },
      {
        "title": "Apply learning to real projects",
        "body": [
          "Put your learning into practice through your workplace responsibilities, using project data, reports and controls activities to develop practical skills and authentic evidence of your work."
        ]
      },
      {
        "title": "Explore professional recognition",
        "body": [
          "Depending on your chosen pathway, explore professional development and recognition opportunities linked to the Institute of Project Controls (IPC), Controls & Skills Authority (CaSA) and Association for Project Management (APM)."
        ]
      }
    ],
    "note": "Professional memberships, examinations, Fellowship, Incorporated Cost Engineer and Chartered Project Professional status are subject to the relevant professional body's eligibility and assessment requirements."
  },
  "audience": {
    "tag": "Who it's for",
    "title": "For professionals who shape and assure project performance",
    "intro": [
      "Designed for professionals responsible for planning, integrating and assuring project controls information, analysing performance and providing recommendations that support effective project delivery. The apprenticeship can suit professionals across engineering, construction, infrastructure, energy, consultancy and other project-driven environments, where their responsibilities align with the Level 6 occupational standard."
    ],
    "cards": [
      {
        "title": "Project Controls & Performance Professionals",
        "itemsHeading": "Typical roles",
        "items": [
          "Project Controls Manager · Project Controller · Planning Lead · Scheduler · Cost Engineering Lead · Cost Controller · Risk & Performance Specialist"
        ],
        "body": [
          "For professionals responsible for reliable project baselines, cost and schedule forecasts, risk analysis, performance reporting and integrated project controls."
        ]
      },
      {
        "title": "Engineering & Project Delivery Professionals",
        "itemsHeading": "Typical roles",
        "items": [
          "Project Engineer · Site Engineer · Delivery Lead · Project Manager · Programme Manager · Project Assurance Specialist"
        ],
        "body": [
          "For professionals whose roles involve substantial project controls responsibilities, including analysing delivery information, challenging assumptions and supporting corrective decisions."
        ]
      },
      {
        "title": "PMO, Governance & Controls Leaders",
        "itemsHeading": "Typical roles",
        "items": [
          "Head of Project Controls · PMO Controls Lead · Portfolio Assurance Lead · Senior Planning Lead · Risk Management Lead · Project Controls Governance Specialist"
        ],
        "body": [
          "For professionals developing or leading project controls frameworks, assuring performance information and providing evidence-based recommendations for complex project and programme decisions."
        ]
      }
    ],
    "role": {
      "title": "Your responsibilities matter more than your job title",
      "body": [
        "Programme suitability depends on your current duties, prior learning, employer support and opportunities to develop and demonstrate the full Level 6 occupational standard. Kent Business College reviews these factors with you and your employer before confirming the appropriate development pathway."
      ]
    },
    "cta": "Discuss your role →"
  },
  "structure": {
    "tag": "Programme structure",
    "title": "Your Level 6 learning journey: six credits over 27 planned months",
    "intro": [
      "Kent Business College's planned learning route combines induction, six teaching credits and closing workshops, followed by a separate end-point assessment period. A standard KBC learning credit represents four months of teaching. PMP Preparation takes two credits over eight months. These are KBC pathway credits, not transferable academic credits."
    ],
    "cards": [
      {
        "subtitle": "Phase 1 · Month 1",
        "title": "Your one-month soft start",
        "body": [
          "Begin with induction, an initial assessment of your role and prior learning, and engagement with your employer to agree your development needs. Confirm programme suitability and funding arrangements, access your learning platform and agree your development pathway."
        ]
      },
      {
        "subtitle": "Phase 2 · Months 2–25",
        "title": "Six credits over 24 months",
        "body": [
          "Follow an agreed Operational, Strategic or Chartered pathway, or a tailored six-credit combination aligned with your responsibilities and employer priorities. Combine taught learning with practical workplace application, evidence development, coaching and regular progress reviews."
        ]
      },
      {
        "subtitle": "Phase 3 · Months 26–27",
        "title": "Two-month closing workshops",
        "body": [
          "Consolidate your learning and workplace evidence, review progress with your employer and prepare for the assessment requirements of your apprenticeship. Your readiness for end-point assessment is reviewed against the applicable assessment plan."
        ]
      }
    ],
    "epa": {
      "title": "Independent End-Point Assessment (EPA)",
      "subtitle": "After gateway",
      "body": [
        "Complete the required independent apprenticeship assessment following confirmation of gateway readiness."
      ]
    },
    "note": "The 27-month structure is KBC's planned pre-assessment learning route. The national standard publishes a typical duration of 48 months, excluding assessment. Your individual training duration and required hours are confirmed following initial assessment and in accordance with the applicable funding rules.",
    "optional": {
      "subtitle": "Optional additional professional development",
      "title": "OTHM Level 7 Diploma in Strategic Management and Leadership",
      "body": [
        "Access to additional Level 7 study may be available through your agreed professional development package.",
        "18 months · 6 modules · Saturday live sessions, 9:00–11:00 UK time",
        "Explore strategic management, leadership, people, finance, marketing and business research alongside your wider professional development.",
        "This is separate from the Project Controls Professional Level 6 apprenticeship and does not count towards its six KBC learning credits. Diploma enrolment, assessment, award requirements and included support are subject to separate arrangements confirmed in your written offer."
      ]
    },
    "cta": "Explore Level 7 professional development →"
  },
  "pathways": {
    "tag": "Level 6 Development Pathways",
    "title": "Choose a pathway that reflects your role",
    "intro": [
      "Explore three development pathways within the Project Controls Professional Level 6 apprenticeship. Each offers a different professional focus, with a six-credit learning plan agreed around your responsibilities, prior learning and employer needs."
    ],
    "note": "All pathways follow the same Level 6 occupational standard (ST0845). Module options are indicative; your agreed programme totals six KBC learning credits.",
    "cards": [
      {
        "title": "Operational Pathway",
        "subtitle": "01 — Practical project controls",
        "body": [
          "For planners, schedulers, cost specialists and project controls practitioners responsible for planning, monitoring and assuring project performance."
        ],
        "tableTitle": "Available module options",
        "modules": [
          {
            "title": "PMP Preparation",
            "credits": 2
          },
          {
            "title": "AI in Project Controls & Management",
            "credits": 1
          },
          {
            "title": "APM Risk Management",
            "credits": 1
          },
          {
            "title": "Project Planning & Control",
            "credits": 1
          },
          {
            "title": "Earned Value Management (EVM)",
            "credits": 1
          },
          {
            "title": "PMI Scheduling Professional (PMI-SP) Preparation",
            "credits": 1
          }
        ],
        "selectionNote": "Select an agreed combination totalling 6 credits.",
        "developsTitle": "What it develops",
        "develops": [
          "Strengthen your ability to integrate planning, cost, risk and performance information, develop reliable forecasts and support effective project control."
        ],
        "cta": "Explore Operational Pathway →"
      },
      {
        "title": "Strategic Pathway",
        "subtitle": "02 — Leadership and governance",
        "body": [
          "For experienced project controls, PMO, programme and portfolio professionals involved in governance, performance assurance and complex delivery decisions."
        ],
        "tableTitle": "Available module options",
        "modules": [
          {
            "title": "PMP Preparation",
            "credits": 2
          },
          {
            "title": "AI in Project Controls & Management",
            "credits": 1
          },
          {
            "title": "APM Risk Management",
            "credits": 1
          },
          {
            "title": "PMI PMO Certified Professional (PMI-PMOCP) Preparation",
            "credits": 1
          },
          {
            "title": "Managing Portfolios",
            "credits": 1
          },
          {
            "title": "Managing Successful Programmes (MSP)",
            "credits": 1
          }
        ],
        "selectionNote": "Select an agreed combination totalling 6 credits.",
        "developsTitle": "What it develops",
        "develops": [
          "Strengthen your ability to connect project controls information with programme and portfolio priorities, supporting governance, assurance and evidence-based strategic decisions."
        ],
        "cta": "Explore Strategic Pathway →"
      },
      {
        "title": "Chartered Pathway",
        "subtitle": "03 — Chartered professional development",
        "body": [
          "For experienced professionals seeking to develop advanced PMO and project controls expertise, alongside technical knowledge relevant to APM Chartered Project Professional (ChPP) Pathway 2."
        ],
        "tableTitle": "Six-credit learning structure",
        "modules": [
          {
            "title": "Certified PMO Professional (Level 6)",
            "credits": 4
          },
          {
            "title": "AI in Project Controls & Management",
            "credits": 1
          },
          {
            "title": "Earned Value Management or Managing Portfolios",
            "credits": 1
          },
          {
            "title": "Total",
            "credits": 6
          }
        ],
        "selectionNote": "",
        "developsTitle": "What it develops",
        "develops": [
          "Develop advanced professional knowledge in PMO governance, integrated project controls, risk and reporting, with structured preparation for professional recognition. APM recognises KBC's Certified PMO Professional (Level 6) assessment for the technical-knowledge requirement of ChPP Pathway 2. Successful completion of the recognised assessment does not automatically confer Chartered status. APM independently assesses the remaining eligibility and professional practice requirements."
        ],
        "cta": "Explore Chartered Pathway →"
      }
    ],
    "tailored": {
      "title": "Need a different module combination?",
      "body": [
        "Your six-credit learning plan can be shaped around your current responsibilities, prior learning, employer priorities and opportunities to demonstrate the full Level 6 occupational standard."
      ]
    },
    "cta": "Discuss your development pathway →"
  },
  "orientation": {
    "tag": "Sector-informed learning",
    "title": "Learning shaped by your project environment",
    "intro": [
      "Connect your learning with the projects and challenges you encounter at work. Where appropriate, case studies, exercises and learning resources can be adapted to reflect your sector, while maintaining the requirements of the same Level 6 apprenticeship standard."
    ],
    "cards": [
      {
        "title": "Engineering, Construction & Infrastructure",
        "body": [
          "For professionals involved in construction, infrastructure, manufacturing, engineering delivery, cost engineering and major capital projects. Learning examples may focus on technical project dependencies, scheduling, cost forecasting, change control and risk across complex delivery environments. Construction · Infrastructure · Manufacturing · Engineering · Sustainability"
        ]
      },
      {
        "title": "Business, Digital & Professional Services",
        "body": [
          "For professionals working in consultancy, digital transformation, financial services, business change and other service environments with substantial project controls responsibilities. Learning examples may explore project planning, performance reporting, cost and risk analysis, governance and control of complex transformation projects. Consultancy · Digital Transformation · Financial Services · Business Change · IT Delivery"
        ]
      }
    ],
    "note": "Sector-informed learning does not change the apprenticeship standard or its assessment requirements. Your programme suitability and workplace learning opportunities are reviewed individually."
  },
  "outputs": {
    "tag": "Capability & Workplace Outputs",
    "title": "Turn learning into practical project controls outputs",
    "intro": [
      "Apply your learning to real project controls activities and develop evidence of your skills through plans, forecasts, performance reports, dashboards and recommendations relevant to your role."
    ],
    "cards": [
      {
        "title": "Planning, Scheduling & Cost Controls",
        "body": [],
        "items": [
          "Integrated project baseline",
          "Project schedule and critical path analysis",
          "Earned value performance report",
          "Cost forecast and variance analysis"
        ]
      },
      {
        "title": "Risk, Change & Assurance",
        "body": [],
        "items": [
          "Risk register",
          "Issue register",
          "Change control procedures",
          "Data assurance and performance analysis"
        ]
      },
      {
        "title": "Performance Reporting & Governance",
        "body": [],
        "items": [
          "Executive project dashboard",
          "Stakeholder engagement plan",
          "PMO operating model",
          "Programme and portfolio governance packs"
        ]
      },
      {
        "title": "Digital Tools & Professional Evidence",
        "body": [],
        "items": [
          "AI-supported project controls workflows",
          "AI-enabled reporting and dashboards",
          "Apprenticeship evidence portfolio"
        ]
      }
    ],
    "evidence": {
      "title": "Evidence connected to your responsibilities",
      "body": [
        "These are examples of potential workplace outputs, not a mandatory checklist. The evidence you develop will depend on your responsibilities, selected pathway and available workplace opportunities. Your evidence must demonstrate your own contribution and support the knowledge, skills and behaviours required by the Level 6 occupational standard. The apprenticeship evidence portfolio supports the end-point professional discussion. Separate assessment requirements apply to the technical work-based assignment."
      ]
    }
  },
  "delivery": {
    "tag": "Delivery & Assessment",
    "title": "Live learning, practical application and independent assessment",
    "intro": [
      "Develop your project controls expertise through live tutor-led learning, workplace application and structured feedback. Prepare before each session, explore new techniques, apply them in relevant project situations and reflect on your professional development."
    ],
    "cards": [
      {
        "title": "Prepare",
        "body": [
          "Build your understanding before each session through guided reading, short learning activities and questions connected to your workplace responsibilities.",
          "Guided reading · Diagnostic questions · Workplace preparation"
        ]
      },
      {
        "title": "Explore",
        "body": [
          "Learn with experienced tutors through interactive online classes, worked examples, case studies and practical discussions that connect theory with professional practice.",
          "Live teaching · Case studies · Practical workshops · Professional discussion"
        ]
      },
      {
        "title": "Apply",
        "body": [
          "Put new techniques into practice through relevant workplace activities and employer-approved project controls tasks. Use practical exercises and simulated scenarios where appropriate to support learning.",
          "Workplace application · Project controls activities · Practical exercises"
        ]
      },
      {
        "title": "Reflect",
        "body": [
          "Review the quality and impact of your work, consider feedback, strengthen your professional judgement and identify opportunities to improve.",
          "Learning reflection · Coaching feedback · Continuous improvement"
        ]
      }
    ],
    "assessment": {
      "title": "Assessment & EPA Preparation",
      "body": [
        "Develop your knowledge, skills and behaviours throughout the programme through learning activities, assignments, coaching and workplace application. Your coach will support you in preparing relevant evidence of your own work and understanding the requirements for the apprenticeship's independent End-Point Assessment."
      ],
      "listTitle": "The current Level 6 assessment plan includes:",
      "cards": [
        {
          "title": "Technical Work-based Assignment",
          "body": [
            "A work-based technical assignment completed after gateway, including a written report, presentation and questioning."
          ]
        },
        {
          "title": "Professional Discussion",
          "body": [
            "An independent professional discussion supported by a portfolio of authentic workplace evidence."
          ]
        }
      ],
      "note": "Learning reflections and practice activities support your development but are not substitutes for the formal EPA evidence and assessment requirements."
    },
    "employer": {
      "title": "Employer Involvement",
      "body": [
        "Your employer plays an important role in connecting learning with workplace responsibilities and supporting your development throughout the apprenticeship."
      ],
      "cards": [
        {
          "title": "Agree relevant responsibilities",
          "body": [
            "Confirm that your role provides suitable opportunities to develop the required occupational knowledge and skills."
          ]
        },
        {
          "title": "Support workplace application",
          "body": [
            "Help identify appropriate project activities, evidence opportunities and access to relevant workplace information."
          ]
        },
        {
          "title": "Protect learning time",
          "body": [
            "Support the paid off-the-job training arrangements agreed in your individual training plan."
          ]
        },
        {
          "title": "Review progress",
          "body": [
            "Participate in progress reviews, provide workplace feedback and help identify further development priorities."
          ]
        },
        {
          "title": "Support assessment readiness",
          "body": [
            "Work with KBC to review progress, with your employer confirming occupational readiness for the EPA gateway."
          ]
        }
      ]
    }
  },
  "workload": {
    "tag": "Expected Workload",
    "title": "A practical study rhythm alongside your role",
    "intro": [
      "Our Level 6 apprenticeship combines live online teaching, guided study, applied workplace assignments and regular coaching. Your learning plan is agreed with you and your employer, including the time needed to develop new skills and meet the apprenticeship's off-the-job training requirements."
    ],
    "cards": [
      {
        "title": "Live Online Teaching",
        "subtitle": "2 hours per teaching week",
        "body": [
          "Join interactive, tutor-led sessions covering project controls concepts, worked examples, case studies and practical professional discussions."
        ]
      },
      {
        "title": "Guided Independent Learning",
        "subtitle": "2–3 hours per week",
        "body": [
          "Build your understanding through reading, videos, podcasts, preparation activities and learning checks available through the learning platform."
        ]
      },
      {
        "title": "Applied Learning & Assignments",
        "subtitle": "7 hours per month",
        "body": [
          "Apply new concepts to relevant project controls activities, explain your analysis and professional decisions, and develop appropriate evidence of your work."
        ]
      }
    ],
    "submissionsTitle": "Monthly Submissions",
    "submissions": [
      {
        "title": "Learning Activities",
        "body": [
          "Complete your assigned learning activities, including guided reading, online resources and knowledge checks."
        ]
      },
      {
        "title": "Applied Assignments & Evidence",
        "body": [
          "Submit relevant workplace assignments and authorised supporting evidence, demonstrating how you have developed and applied new knowledge and skills."
        ]
      }
    ],
    "reviewsTitle": "Coaching & Progress Reviews",
    "reviews": [
      {
        "title": "Monthly Coaching · 1 hour",
        "body": [
          "Meet with your coach to discuss your developing knowledge, skills and behaviours, review feedback and agree priorities for your next learning activities."
        ]
      },
      {
        "title": "Employer Progress Review · Every 10 weeks, 1 hour",
        "body": [
          "Review progress with your coach and line manager, discuss workplace application and identify development opportunities and support needs."
        ]
      }
    ],
    "offjob": {
      "title": "Off-the-job Training Requirements",
      "body": [
        "The published minimum for Project Controls Professional Level 6 (ST0845) is 835 hours of eligible off-the-job training, before any permitted adjustment for prior learning. Your individual training plan confirms the required hours, eligible activities and protected learning time agreed with your employer. Weekly study commitments and eligible off-the-job training hours are not necessarily the same. Routine work, progress reviews and administrative portfolio compilation do not count towards the minimum training requirement."
      ]
    },
    "confidentiality": {
      "title": "Workplace Evidence & Confidentiality",
      "body": [
        "All workplace evidence must be authentic, relevant and based on your own contribution. Employer, client and commercially sensitive information must be protected through appropriate permissions, anonymisation or redaction."
      ]
    },
    "note": "Confirm your individual learning plan before enrolment."
  },
  "benefits": {
    "tag": "Programme Benefits",
    "title": "More than the core apprenticeship",
    "intro": [
      "Your Project Controls Professional Level 6 journey can include additional wellbeing services, career development tools, professional memberships and networking opportunities through Kent Business College and the Institute of Project Controls."
    ],
    "cards": [
      {
        "title": "Wellbeing & Learning Resources",
        "body": [
          "Support your wellbeing and access resources that help you get more from your learning experience."
        ],
        "items": [
          "Optional Benenden Health membership",
          "Mental wellbeing resources and self-assessment tools",
          "Optional learning-needs and accessibility support assessments",
          "Digital learning resources and progress dashboards",
          "Printed and digital study materials"
        ]
      },
      {
        "title": "Career Insight & Development",
        "body": [
          "Explore your professional interests, strengths and development priorities with tools designed to support informed career planning."
        ],
        "items": [
          "Optional personality and RIASEC career-interest assessments",
          "Career-interest and job-fit reflection tools",
          "Personal development planning and dashboards",
          "Guidance on pathway and specialist module selection"
        ]
      },
      {
        "title": "Professional Membership & Community",
        "body": [
          "Connect with professional organisations, industry practitioners and wider development opportunities."
        ],
        "items": [
          "Two years of Institute of Project Controls (IPC) membership",
          "Relevant professional-body memberships, where included",
          "Optional London Masterclasses",
          "Professional clubs, workshops and networking events",
          "KBC-funded graduation ceremony"
        ]
      }
    ],
    "note": "Additional benefits depend on your agreed programme package and written offer. Optional assessments support personal reflection and learning needs; they are not diagnostic or substitutes for professional advice. Memberships, events and external professional recognition are subject to the relevant provider's terms and eligibility requirements."
  },
  "eligibility": {
    "tag": "Apprenticeship Eligibility",
    "title": "Check if Project Controls Professional Level 6 is right for you",
    "intro": [
      "Take our quick eligibility check to explore whether your employment, experience and circumstances could support a Level 6 apprenticeship. Our team will then review your role, prior learning, employer support and funding eligibility to help you understand your options."
    ],
    "checkCta": "Check Your Eligibility →",
    "teamCta": "Speak to Our Team →",
    "initialNote": "Initial indication only. Final eligibility, funding and programme suitability are confirmed following a full review.",
    "checklistTitle": "What should you check before applying?",
    "cards": [
      {
        "title": "Residency & Right to Work",
        "body": [
          "Do you meet the applicable residency and right-to-work requirements, with sufficient permission to complete the apprenticeship and its assessment?"
        ]
      },
      {
        "title": "Relevant Employment",
        "body": [
          "Are you employed in a role involving project controls responsibilities, such as planning, scheduling, cost, risk, performance analysis or project assurance?"
        ]
      },
      {
        "title": "Workplace Development Opportunities",
        "body": [
          "Does your role provide opportunities to develop and demonstrate the knowledge, skills and behaviours required by the Level 6 occupational standard?"
        ]
      },
      {
        "title": "Working Location",
        "body": [
          "Will you spend at least 50% of your working hours in England throughout the apprenticeship, unless an exemption applies?"
        ]
      },
      {
        "title": "Employer Support",
        "body": [
          "Can your employer support your apprenticeship, including the required training arrangements, protected learning time and workplace development opportunities?"
        ]
      },
      {
        "title": "Prior Learning & Existing Study",
        "body": [
          "Have you considered your existing qualifications, professional experience and any current government-funded training that may affect your eligibility or learning plan?"
        ]
      }
    ],
    "note": "Part-time working arrangements, residency exceptions and individual circumstances are reviewed separately. Your job title alone does not determine your suitability for the apprenticeship."
  },
  "next": {
    "tag": "Next Steps",
    "title": "Explore the right Level 6 pathway for your role",
    "intro": [
      "Speak with our team about your current responsibilities, employer support and professional development goals. We'll help you explore the available pathways, potential funding arrangements and next steps towards enrolment."
    ],
    "consultCta": "Request a consultation",
    "eventsCta": "Explore upcoming events",
    "emailCta": "Have a question? Email our admissions team",
    "note": "Programme suitability and funding eligibility are subject to individual assessment."
  }
} as const;
