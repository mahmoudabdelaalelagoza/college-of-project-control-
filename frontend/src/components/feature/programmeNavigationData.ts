export interface ProgrammeNavigationLink {
  label: string;
  shortLabel: string;
  href: string;
  description: string;
}

export const apprenticeshipNavigation: ProgrammeNavigationLink[] = [
  { label: 'Associate Project Manager Level 4', shortLabel: 'APM Level 4', href: '/associate-project-manager-level-4', description: 'Work-based project management development.' },
  { label: 'Project Controls Professional Level 6', shortLabel: 'PCP Level 6', href: '/project-controls-professional-level-6', description: 'Advanced project controls with Operational, Strategic and Chartered pathways.' },
];

export const professionalStudyNavigation: ProgrammeNavigationLink[] = [
  { label: 'Certified PMO Professional (Level 6)', shortLabel: 'Certified PMO Level 6', href: '/project-controls-professional/pmo-governance-route', description: 'PMO governance and professional development.' },
  { label: 'Commercial Project Controls', shortLabel: 'Commercial Project Controls', href: '/commercial-project-controls-route', description: 'Professional development through the commercial route.' },
  { label: 'Courses', shortLabel: 'Courses', href: '/short-courses', description: 'Specialist courses and modules for your development.' },
];

export const ipcNavigation = { label: 'Institute of Project Controls', href: '/institute-of-project-controls' };
