import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../components/projects-grid/projects-grid.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailComponent implements OnInit {
  project: Project | null = null;

  // Project data (same as in projects-grid)
  private projects: Project[] = [
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.project = this.projects.find(p => p.id === projectId) || null;
  }
}
