import { programmeById, standardCode } from '@/data/programmeFacts';

const comparisonOrder = ['apm-l4', 'pcp-l6', 'pmo-l6'] as const;
type ComparisonProgrammeId = typeof comparisonOrder[number];

// Keep each heading and its values tied to the same canonical programme id.
// This page compares both offer types; the homepage apprenticeship comparison stays separate.
export const PROGRAMME_COMPARISON_COLUMNS = comparisonOrder.map(id => {
  const programme = programmeById(id);
  if (!programme) throw new Error(`Missing comparison programme: ${id}`);
  return { ...programme, id, comparisonTitle: programme.shortTitle.replace(/[()]/g, '') };
});

interface ProgrammeComparisonRow {
  label: string;
  valueById: Record<ComparisonProgrammeId, string>;
}

function occupationalStandard(id: 'apm-l4' | 'pcp-l6') {
  const programme = programmeById(id);
  if (!programme?.standard) throw new Error(`Missing occupational standard: ${id}`);
  return `${standardCode(programme)} — Level ${programme.level} Occupational Standard`;
}

export const PROGRAMME_COMPARISON: readonly ProgrammeComparisonRow[] = [
  {
    "label": "Programme type",
    "valueById": {
      "apm-l4": "Apprenticeship",
      "pcp-l6": "Apprenticeship",
      "pmo-l6": "Standalone professional programme"
    }
  },
  {
    "label": "Best suited to",
    "valueById": {
      "apm-l4": "Professionals managing project activities, teams and stakeholders.",
      "pcp-l6": "Professionals integrating and assuring project controls information across complex projects.",
      "pmo-l6": "Experienced PMO, project and programme professionals strengthening governance and professional practice."
    }
  },
  {
    "label": "Core focus",
    "valueById": {
      "apm-l4": "Project planning, coordination, stakeholder management and delivery.",
      "pcp-l6": "Integrated project controls, forecasting, cost, risk and performance assurance.",
      "pmo-l6": "PMO governance, integrated controls, risk, quality and strategic reporting."
    }
  },
  {
    "label": "Learning approach",
    "valueById": {
      "apm-l4": "Work-based learning with guided teaching, workplace application and professional feedback.",
      "pcp-l6": "Work-based learning with Operational, Strategic or Chartered development pathways.",
      "pmo-l6": "Four-module professional programme combining taught learning, knowledge assessments and applied professional evidence."
    }
  },
  {
    "label": "Standard or recognition",
    "valueById": {
      "apm-l4": occupationalStandard('apm-l4'),
      "pcp-l6": occupationalStandard('pcp-l6'),
      "pmo-l6": "KBC professional programme with an APM-recognised assessment for ChPP Pathway 2 technical knowledge."
    }
  },
  {
    "label": "Assessment",
    "valueById": {
      "apm-l4": "Independent apprenticeship assessment following the applicable assessment plan.",
      "pcp-l6": "Independent apprenticeship assessment following the applicable assessment plan.",
      "pmo-l6": "Programme knowledge assessments and professional practice portfolios. External Chartered assessment remains separate."
    }
  },
  {
    "label": "Funding arrangements",
    "valueById": {
      "apm-l4": "Apprenticeship funding may be available, subject to eligibility.",
      "pcp-l6": "Apprenticeship funding may be available, subject to eligibility.",
      "pmo-l6": "Commercial professional study with separate fees and any agreed support."
    }
  }
];
