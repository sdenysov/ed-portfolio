export enum ProjectId {
  PROJECT_MANAGEMENT = 'project-management',
  ESPORT_TRACKER = 'esports-tracker'
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
    title: 'Project management design system',
    image: 'images/project-management-preview.png',
    type: 'design-system'
  },
  {
    id: ProjectId.ESPORT_TRACKER,
    title: 'Esports games tracker web app',
    image: 'images/esports-tracker-preview.png',
    type: 'web-app'
  }
];
