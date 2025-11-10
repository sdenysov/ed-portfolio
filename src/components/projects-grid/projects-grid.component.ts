import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PAGES } from '../../models/pages';
import {Project, projects} from './projects.config';

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-grid.component.html',
  styleUrl: './projects-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsGridComponent {
  projects: Project[] = projects;

  constructor(private router: Router) {}

  onProjectClick(project: Project) {
    // Pass the current URL as state to the project detail page
    this.router.navigate([PAGES.WORK, project.id], {
      state: { previousUrl: this.router.url }
    });
  }
}
