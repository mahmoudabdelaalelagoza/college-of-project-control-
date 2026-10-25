import importedExperiences from './pcpLearnerExperiences.json';

export interface LearnerExperience {
  id: string;
  name: string;
  organisation: string;
  programme: string;
  programme_label: string;
  review: string;
  photo_url: string;
  employer_logo_url: string;
  employer_logo_alt: string;
  date: string;
  tags: string[];
  detailed: boolean;
  source_url: string;
  story_url: string;
  linkedin_url: string;
}

export const pcpLearnerExperiences: LearnerExperience[] = importedExperiences;

export const experienceGroups = [
  { id: 'workplace', label: 'Workplace application', description: 'Connecting professional learning with project responsibilities and everyday decisions.' },
  { id: 'support', label: 'Coaching & support', description: 'Feedback, guidance and support throughout the learning journey.' },
  { id: 'development', label: 'Professional development', description: 'Building confidence, professional understanding and a clearer direction.' },
  { id: 'community', label: 'Community & events', description: 'Learning with peers, meeting practitioners and sharing perspectives.' },
  { id: 'teaching', label: 'Teaching & learning', description: 'Experiences of teaching sessions, resources and practical learning.' },
  { id: 'reflections', label: 'Learner reflections', description: 'Further published observations about the programme and learning experience.' },
] as const;
export type ExperienceGroupId = typeof experienceGroups[number]['id'];

export function experienceGroup(experience: LearnerExperience): ExperienceGroupId {
  // Andrew's published account describes workplace delivery; its source tag is Community.
  if (experience.name === 'Andrew Raslan' || experience.tags.includes('Workplace impact')) return 'workplace';
  if (experience.tags.includes('Coaching')) return 'support';
  if (experience.tags.includes('Confidence')) return 'development';
  if (experience.tags.includes('Community')) return 'community';
  if (experience.tags.includes('Teaching')) return 'teaching';
  return 'reflections';
}

export function experienceMonth(date: string): string {
  if (!date) return '';
  const value = new Date(`${date.length === 7 ? `${date}-01` : date}T12:00:00Z`);
  return Number.isNaN(value.getTime()) ? '' : value.toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

const featuredNames = ['Marson Kwan', 'Leigh Pullan', 'Andrew Raslan'];
export const featuredPcpExperiences = featuredNames
  .map(name => pcpLearnerExperiences.find(experience => experience.name === name))
  .filter((experience): experience is LearnerExperience => Boolean(experience));
