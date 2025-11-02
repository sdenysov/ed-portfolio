import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PAGES } from '../../models/pages';

export interface Project {
  id: string;
  title: string;
  image: string;
  type: string;
}

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-grid.component.html',
  styleUrl: './projects-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsGridComponent {
  @Input() projects: Project[] = [
    {
      id: 'project-management',
      title: 'Project management design system',
      image: 'images/project-management-preview.png',
      type: 'design-system'
    },
    {
      id: 'esports-tracker',
      title: 'Esports games tracker web app',
      image: 'images/esports-tracker-preview.png',
      type: 'web-app'
    }
  ];

  constructor(private router: Router) {}

  onProjectClick(project: Project) {
    this.router.navigate([PAGES.WORK, project.id]);
  }
}
