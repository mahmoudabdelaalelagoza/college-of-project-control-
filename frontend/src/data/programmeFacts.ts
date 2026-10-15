/**
 * Single source of truth for programme facts.
 *
 * Audit P0 gate "Programme facts" (KBC audit v2.0, REVIEW 13) requires one
 * approved master record per programme. Child pages (pathways, sector pages,
 * comparison tables) import from here instead of retyping facts, so a change
 * to duration or status propagates everywhere.
 *
 * Every claim carries an evidence source and a last-verified date. Anything
 * without a verified source is deliberately not stated on the site.
 *
 * Evidence keys refer to the audit source register:
 *   [O01] Skills England: Associate Project Manager ST0310 v1.5
 *   [O02] Skills England: Project Controls Professional ST0845 v1.1
 *   [O03] GOV.UK: Apprenticeship funding rules 2026/27 (v3)
 *   [O07] APM: ChPP recognised assessments
 *   [O08] PMI: PMP certification requirements
 *   [K03] KBC: Project Controls Professional Level 6
 *   [K04] KBC: Associate Project Manager Level 4
 *   [K05] KBC: Certified PMO Professional Level 6
 */

export const OFFER_TYPE = {
  apprenticeship: 'apprenticeship',
  professional: 'professional-programme',
} as const;

export type OfferType = (typeof OFFER_TYPE)[keyof typeof OFFER_TYPE];

export interface ProgrammeFacts {
  /** Stable internal identifier — do not change without a content review. */
  id: string;
  /** Official offer title, exactly as published. */
  officialTitle: string;
  /**
   * Short display label for cards, tables and navigation. This is the only
   * label components should render — never a retyped title.
   */
  shortTitle: string;
  /** URL slug. */
  slug: string;
  /**
   * Canonical in-site URL. Alias of `slug`, exposed separately so UI code never
   * has to guess which field carries the link.
   */
  url: string;
  /** Single taxonomy label used by navigation, cards and selectors alike. */
  offerType: OfferType;
  offerTypeLabel: string;
  /**
   * Occupational standard reference, where one exists. `code` is the definitive
   * link between this programme and its standard — never infer it from `level`.
   */
  standard?: {
    code: string;
    version: string;
    issuingBody: string;
  };
  level: number;
  /** One-sentence description used on cards and at the top of programme pages. */
  description: string;
  /** Human-readable summary of who the offer is for. */
  purpose: string;
  /**
   * What this role actually does day to day. Drives the "role focus" row of the
   * comparison so a visitor can self-select without reading a module list.
   */
  roleFit: string;
  /**
   * How the learning is organised, distinct from the assessment method. Drives
   * the "learning approach" comparison row.
   */
  learningApproach: string;
  /**
   * The work this role is normally expected to carry, described in occupational
   * terms rather than as a module list. Drives the "typical responsibilities"
   * comparison row.
   */
  responsibilities: string;
  /** Concise wording for the side-by-side apprenticeship comparison. */
  comparison?: {
    bestSuitedTo: string;
    responsibilities: string;
    learningApproach: string;
    assessment: string;
  };
  /** Facts shown on cards and comparison tables. */
  facts: {
    /** Planned duration, or an explicit statement that it varies. */
    duration: string;
    /** Minimum off-job training commitment, where verified. */
    offJobHours?: string;
    delivery: string;
    assessment: string;
    /** Entry requirements as published — do not embellish. */
    entry: string;
  };
  /**
   * Maximum DfE apprenticeship funding band for this programme's standard, in
   * whole pounds. This is a REGULATORY figure and is the only place it may be
   * declared. Render it with `formatGBP` from apprenticeshipFundingPolicy; never
   * re-type "£27,000" in a component.
   *
   * Note this is NOT the same as a package of combined support (for example an
   * Institute of Project Controls support package). Those are separate figures
   * with their own basis and must not be presented as the funding band.
   */
  fundingBandMaximum?: number;
  /** Funding wording. Conditional by design: never a bare "fully funded". */
  fundingNote: string;
  /** Recognition wording. Kept precise about issuer and what it covers. */
  recognition?: {
    body: string;
    statement: string;
    source: string;
  };
  /**
   * Routes internal to this programme. These are emphases within one
   * occupational standard — NOT separate qualification levels.
   */
  internalPathways?: {
    name: string;
    href: string;
    emphasis: string;
  }[];
  /** Date this record was last checked against its evidence sources. */
  lastVerified: string;
  /** Keys into the audit source register that support these facts. */
  evidence: string[];
}

export const PROGRAMMES: ProgrammeFacts[] = [
  {
    id: 'apm-l4',
    officialTitle: 'Associate Project Manager Level 4 Apprenticeship',
    shortTitle: 'Associate Project Manager Level 4',
    slug: '/associate-project-manager-level-4',
    url: '/associate-project-manager-level-4',
    offerType: OFFER_TYPE.apprenticeship,
    offerTypeLabel: 'Apprenticeship',
    standard: {
      code: 'ST0310',
      version: 'v1.5',
      issuingBody: 'Skills England',
    },
    level: 4,
    fundingBandMaximum: 7000,
    description:
      'Develop practical project management skills to plan activities, coordinate teams, manage stakeholders and support successful project delivery.',
    purpose:
      'Build practical capability to plan activities, work with stakeholders and support successful project delivery, through teaching, guided application and feedback connected to your role.',
    roleFit:
      'Planning and coordinating project activities, managing stakeholders, monitoring progress and supporting delivery from initiation to completion.',
    learningApproach:
      'Live online teaching, PMP preparation and applied AI learning, supported by coaching and workplace application.',
    comparison: {
      bestSuitedTo: 'Professionals coordinating project activities, managing stakeholders and supporting project delivery.',
      responsibilities: 'Plan activities, coordinate teams, manage stakeholders, monitor progress and support delivery through to completion.',
      learningApproach: 'Work-based learning with live teaching, guided application and feedback on your progress.',
      assessment: 'Independent assessment against the Level 4 occupational standard, following the applicable assessment plan.',
    },
    responsibilities:
      'Plan activities, manage stakeholders and information, track progress against the plan, and support delivery through to close.',
    facts: {
      duration: 'Planned over the apprenticeship period agreed in your written offer',
      offJobHours:
        'A minimum off-job training commitment applies — confirmed in your offer',
      delivery: 'Work-based, with taught learning and applied evidence from your role',
      assessment:
        'Independent end-point assessment against the occupational standard, following the applicable assessment plan.',
      entry:
        'Suitable employment and development needs are assessed individually. Ask about the work available to develop, not only current competence.',
    },
    fundingNote:
      'Apprenticeship funding depends on your age, whether your employer is levy-paying, and the funding rules in force when you start. We confirm what applies to you before you commit.',
    lastVerified: '2026-09-27',
    evidence: ['[K04]', '[O01]', '[O03]', '[O08]'],
  },

  {
    id: 'pcp-l6',
    officialTitle: 'Project Controls Professional Level 6 Apprenticeship',
    shortTitle: 'Project Controls Professional Level 6',
    slug: '/project-controls-professional-level-6',
    url: '/project-controls-professional-level-6',
    offerType: OFFER_TYPE.apprenticeship,
    offerTypeLabel: 'Apprenticeship',
    standard: {
      code: 'ST0845',
      version: 'v1.1',
      issuingBody: 'Skills England',
    },
    level: 6,
    fundingBandMaximum: 27000,
    description:
      'Turn schedule, cost, risk and performance data into reliable insights and recommendations for better project decisions.',
    purpose:
      'Develop the technical and leadership capability to integrate schedules, cost, risk and performance information so a project team can make and defend control decisions.',
    roleFit:
      'Integrating project controls information, assuring data quality, analysing performance and recommending actions to support effective project delivery.',
    learningApproach:
      'Work-based learning with live teaching, practical application and an employer-agreed learning pathway.',
    comparison: {
      bestSuitedTo: 'Professionals responsible for integrating and assuring project controls information across complex projects.',
      responsibilities: 'Integrate schedules, costs, risks and performance information, assess project health and recommend corrective actions.',
      learningApproach: 'Work-based learning combining live teaching, applied project evidence and an agreed Operational, Strategic or Chartered development pathway.',
      assessment: 'Independent assessment against the Level 6 occupational standard, following the applicable assessment plan.',
    },
    responsibilities:
      'Build and maintain the project baseline, forecast cost and time to complete, manage risk and change, and report performance so control decisions can be defended.',
    facts: {
      duration: 'Planned over the apprenticeship period agreed in your written offer',
      offJobHours:
        'A minimum off-job training commitment applies — confirmed in your offer',
      delivery: 'Work-based, with taught learning and applied evidence from your role',
      assessment: 'Independent end-point assessment against the occupational standard, following the applicable assessment plan.',
      entry:
        'Suitable employment, prior learning and development needs are assessed individually.',
    },
    fundingNote:
      'Apprenticeship funding depends on your age, whether your employer is levy-paying, and the funding rules in force when you start. We confirm what applies to you before you commit.',
    internalPathways: [
      {
        name: 'Operational',
        href: '/project-controls-professional/operational-route',
        emphasis:
          'Delivery-side control: schedule, cost and progress evidence on live projects.',
      },
      {
        name: 'Strategic',
        href: '/project-controls-professional/strategic-route',
        emphasis:
          'Programme and portfolio-level control: cross-project assurance and strategy.',
      },
      {
        name: 'Chartered',
        href: '/project-controls-professional/chartered-pmo-pathway',
        emphasis:
          'The chartered route, which involves a separate professional-body application.',
      },
    ],
    lastVerified: '2026-09-27',
    evidence: ['[K03]', '[O02]', '[O03]', '[O07]'],
  },
];

export const PROFESSIONAL_PROGRAMMES: ProgrammeFacts[] = [
  {
    id: 'pmo-l6',
    officialTitle: 'Certified PMO Professional — Level 6 professional programme',
    shortTitle: 'Certified PMO Professional (Level 6)',
    slug: '/pmo-pcp',
    url: '/pmo-pcp',
    offerType: OFFER_TYPE.professional,
    offerTypeLabel: 'Professional programme',
    level: 6,
    description:
      'Develop advanced PMO capabilities in governance, integrated project controls, risk management and evidence-based reporting through practical, professionally focused learning.',
    purpose:
      'Develop the knowledge and practical evidence to strengthen a project management office, and understand how this professional programme relates to the Chartered development pathway within Project Controls Professional Level 6.',
    roleFit:
      'Professional development for project management office practice. Not a distinct qualification level or a third apprenticeship.',
    learningApproach:
      'Structured professional study across four modules, assessed separately from the apprenticeship.',
    responsibilities:
      'Professional development for project management office practice. This is not a distinct qualification level and not a third apprenticeship.',
    facts: {
      duration: '16 months',
      delivery:
        'Four modules · Live online learning',
      assessment: 'Assessed separately from the full apprenticeship',
      entry:
        'Professional study entry conditions apply. This is not a separate apprenticeship and does not carry its own funding entitlement.',
    },
    fundingNote:
      'The programme can be studied independently or included within an agreed Level 6 apprenticeship learning plan. It is not a separate apprenticeship, and its assessments do not replace the apprenticeship’s end-point assessment. Fees and funding arrangements depend on your route and are confirmed in your written offer.',
    recognition: {
      body: 'Association for Project Management (APM)',
      statement:
        'APM recognises KBC’s Certified PMO Professional (Level 6) assessment for the technical-knowledge requirement of Chartered Project Professional (ChPP) Pathway 2. Chartered status requires a separate application and assessment by APM.',
      source: '[O07]',
    },
    lastVerified: '2026-09-27',
    evidence: ['[K05]', '[O07]'],
  },
];

/** The two apprenticeships. Never mixed with professional study. */
export const APPRENTICESHIPS = PROGRAMMES.filter(
  (programme) => programme.offerType === OFFER_TYPE.apprenticeship,
);

/** Professional study. Published separately, outside the apprenticeship comparison. */
export const PROFESSIONAL_STUDY = PROFESSIONAL_PROGRAMMES.filter(
  (programme) => programme.offerType === OFFER_TYPE.professional,
);

export function programmeById(id: string): ProgrammeFacts | undefined {
  return [...PROGRAMMES, ...PROFESSIONAL_PROGRAMMES].find(
    (programme) => programme.id === id,
  );
}

export function programmesByLevel(level: number): ProgrammeFacts[] {
  return PROGRAMMES.filter((programme) => programme.level === level);
}

export const APM_L4 = programmeById('apm-l4');
export const PCP_L6 = programmeById('pcp-l6');
export const PMO_L6 = programmeById('pmo-l6');

/**
 * The comparison columns, in a fixed display order, resolved by id.
 *
 * A plain array spread would reintroduce the original defect: the moment a
 * record is inserted, removed or reordered, headings and data drift apart.
 * Here the order is written as ids and each id is resolved by lookup, so a
 * missing record fails at module load instead of mislabelling a column.
 */
const APPRENTICESHIP_COMPARISON_ORDER = ['apm-l4', 'pcp-l6'] as const;

export const APPRENTICESHIP_COMPARISON_COLUMNS: readonly ProgrammeFacts[] =
  APPRENTICESHIP_COMPARISON_ORDER.map((id) => {
    const programme = programmeById(id);
    if (!programme) {
      throw new Error(
        `programmeFacts: comparison column "${id}" is not defined. Fix the id rather than reordering the data.`,
      );
    }
    return programme;
  });

/**
 * The apprenticeship names, in a deliberate display order, as one line.
 *
 * Exists so summary copy (hero micro-line, SEO text, breadcrumb copy) cannot
 * drift from the card titles. Order is explicit rather than inherited from the
 * array, and each name still comes from the record it belongs to.
 */
export function apprenticeshipNames(separator = ' · '): string {
  const order = [APM_L4, PCP_L6].filter(
    (programme): programme is ProgrammeFacts => programme !== undefined,
  );
  return order.map((programme) => programme.shortTitle).join(separator);
}

/**
 * One row of the apprenticeship comparison.
 *
 * `valueById` is keyed by `ProgrammeFacts.id`, never by array position. An
 * index-keyed structure allowed the Level 4 and Level 6 columns to be swapped
 * silently, which is how ST0310 and ST0845 ended up under the wrong headings.
 * A missing id now fails visibly at render time instead of mislabelling data.
 */
export interface ComparisonRow {
  /** Column heading, e.g. "Role focus". */
  label: string;
  /** One short line of supporting context, shown under the label. */
  hint?: string;
  valueById: Readonly<Record<string, string>>;
}

/** Resolve comparison copy by programme id without changing the card wording. */
function comparisonValue(
  id: (typeof APPRENTICESHIP_COMPARISON_ORDER)[number],
  field: keyof NonNullable<ProgrammeFacts['comparison']>,
): string {
  const comparison = programmeById(id)?.comparison;
  if (!comparison) {
    throw new Error(`programmeFacts: comparison copy is missing for "${id}".`);
  }
  return comparison[field];
}

/** Standard code and level always come from the same programme record. */
function comparisonStandard(id: (typeof APPRENTICESHIP_COMPARISON_ORDER)[number]): string {
  const programme = programmeById(id)!;
  return `${standardCode(programme)} — Level ${programme.level}`;
}

/** Shared comparison rows, in display order and keyed by programme id. */
export const APPRENTICESHIP_COMPARISON: readonly ComparisonRow[] = [
  {
    label: 'Best suited to',
    valueById: {
      'apm-l4': comparisonValue('apm-l4', 'bestSuitedTo'),
      'pcp-l6': comparisonValue('pcp-l6', 'bestSuitedTo'),
    },
  },
  {
    label: 'Core responsibilities',
    valueById: {
      'apm-l4': comparisonValue('apm-l4', 'responsibilities'),
      'pcp-l6': comparisonValue('pcp-l6', 'responsibilities'),
    },
  },
  {
    label: 'Learning approach',
    valueById: {
      'apm-l4': comparisonValue('apm-l4', 'learningApproach'),
      'pcp-l6': comparisonValue('pcp-l6', 'learningApproach'),
    },
  },
  {
    label: 'Apprenticeship standard',
    valueById: {
      'apm-l4': comparisonStandard('apm-l4'),
      'pcp-l6': comparisonStandard('pcp-l6'),
    },
  },
  {
    label: 'Assessment',
    valueById: {
      'apm-l4': comparisonValue('apm-l4', 'assessment'),
      'pcp-l6': comparisonValue('pcp-l6', 'assessment'),
    },
  },
];

/** Standard reference line, e.g. "ST0310 v1.5 — Skills England". */
export function standardLabel(programme: ProgrammeFacts): string {
  if (!programme.standard) return '';
  return `${programme.standard.code} ${programme.standard.version} — ${programme.standard.issuingBody}`;
}

/**
 * The bare standard code for compact headings, e.g. "ST0310".
 *
 * Returns an em dash rather than an empty string when a programme has no
 * standard, so a heading can never render as a blank line. It is derived from
 * the record, never hardcoded — that is what keeps a code from drifting onto
 * the wrong programme's column.
 */
export function standardCode(programme: ProgrammeFacts): string {
  return programme.standard?.code ?? '—';
}
