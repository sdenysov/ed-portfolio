import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PAGES } from '../../models/pages';
import {Project, projects, ProjectId} from './projects.config';

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-grid.component.html',
  styleUrl: './projects-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsGridComponent {
  @Input() excludeProjectId?: ProjectId;
  
  get projects(): Project[] {
    if (this.excludeProjectId) {
      return projects.filter(project => project.id !== this.excludeProjectId);
    }
    return projects;
  }

  constructor(private router: Router) {}

  onProjectClick(project: Project) {
    // Pass the current URL as state to the project detail page
    this.router.navigate([PAGES.WORK, project.id], {
      state: { previousUrl: this.router.url }
    });
  }
}
