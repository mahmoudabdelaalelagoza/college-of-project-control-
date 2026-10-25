import records from './pcpCaseStudies.json';
import type { CaseStudyDetail } from '@/services/caseStudiesApi';

/** Published editorial case studies from the five supplied learner reflections. */
export const pcpCaseStudies: CaseStudyDetail[] = records;
export const pcpCaseStudyBySlug = new Map(pcpCaseStudies.map(item => [item.slug, item]));
