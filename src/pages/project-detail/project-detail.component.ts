import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {projects, Project, ProjectId} from "../../components/projects-grid/projects.config";
import {TextArrowButtonComponent, ProjectManagementDesignSystemComponent} from "../../components";
import { PAGES } from '../../models/pages';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, TextArrowButtonComponent, ProjectManagementDesignSystemComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailComponent implements OnInit {
  project: Project | null = null;
  backButtonText: string = 'All case studies ';
  ProjectId = ProjectId; // Expose enum to template

  // Project data (same as in projects-grid)
  private projects: Project[] = projects;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.project = this.projects.find(p => p.id === projectId) || null;
  }

  onBackButtonClick() {
    this.router.navigate([PAGES.WORK]);
  }
}
