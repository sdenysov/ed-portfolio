import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {projects, Project, ProjectId} from "../../components/projects-grid/projects.config";
import {TextArrowButtonComponent, ProjectManagementDesignSystemComponent} from "../../components";
import { PAGES } from '../../models/pages';
import { Location } from '@angular/common';

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
  private previousUrl: string = PAGES.WORK; // Default fallback

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    // Get the previous URL from router state or browser history
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['previousUrl']) {
      this.previousUrl = navigation.extras.state['previousUrl'];
    }
  }

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.project = this.projects.find(p => p.id === projectId) || null;

    // Update back button text based on where user came from
    this.updateBackButtonText();
  }

  private updateBackButtonText() {
    if (this.previousUrl === '/' || this.previousUrl === `/${PAGES.HOME}`) {
      this.backButtonText = 'Back to home';
    } else if (this.previousUrl === `/${PAGES.WORK}`) {
      this.backButtonText = 'All case studies';
    } else {
      this.backButtonText = 'Go back';
    }
  }

  onBackButtonClick() {
    // Try to go back in browser history first
    if (window.history.length > 1) {
      this.location.back();
    } else {
      // Fallback to previous URL or default to work page
      this.router.navigate([this.previousUrl || PAGES.WORK]);
    }
  }
}
