export enum ProjectId {
  PROJECT_MANAGEMENT = 'project-management',
  ESPORT_TRACKER = 'esports-tracker',
  ROUTIQ = 'routiq'
}

export interface Project {
  id: ProjectId;
  title: string;
  image: string;
  type: string;
}

export const projects: Project[] = [
  {
    id: ProjectId.PROJECT_MANAGEMENT,
    title: 'SaaS platform design system',
    image: 'images/project-management-preview.png',
    type: 'design-system'
  },
  {
    id: ProjectId.ROUTIQ,
    title: 'Routiq — algorithm-driven mobile app',
    image: 'images/routiq-preview.png',
    type: 'mobile-app'
  },
  {
    id: ProjectId.ESPORT_TRACKER,
    title: 'Esports games tracker web app',
    image: 'images/esports-tracker-preview.png',
    type: 'web-app'
  }
];
