import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreMoreComponent } from '../explore-more/explore-more.component';
import { ProjectId } from '../projects-grid/projects.config';
import {
  ProjectCaseStudyHeaderComponent,
  ProjectCaseStudyHeaderItem,
  ProjectCaseStudyOverviewItem
} from '../case-studies-common-components/project-case-study-header/project-case-study-header.component';
import { ProjectProblemsComponent } from '../case-studies-common-components/project-problems/project-problems.component';
import { ProjectGoalsComponent } from '../case-studies-common-components/project-goals/project-goals.component';
import { ProjectMyRoleComponent } from '../case-studies-common-components/project-my-role/project-my-role.component';
import { ResearchDiscoveryComponent } from "./sub-components/research-discovery/research-discovery.component";

@Component({
  selector: 'app-routiq',
  standalone: true,
  imports: [
    CommonModule,
    ExploreMoreComponent,
    ProjectCaseStudyHeaderComponent,
    ProjectProblemsComponent,
    ProjectGoalsComponent,
    ProjectMyRoleComponent,
    ResearchDiscoveryComponent
],
  templateUrl: './routiq.component.html',
  styleUrl: './routiq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoutiqComponent {
  currentProjectId = ProjectId.ROUTIQ;
  projectTitle = 'Routiq – algorithm-driven productivity mobile app';

  overviewSubtitleItem: ProjectCaseStudyOverviewItem = {
    text: '(Overview)',
    value:
      'Routiq is a mobile productivity app designed to reduce decision fatigue and help people stay focused throughout the day. Unlike traditional to-do lists, Routiq allows users to create custom tasks and nested subtasks that form logical sequences.\n\nThe app’s algorithm analyzes what the user has completed and intelligently suggests the next best action, helping them maintain flow, clarity, and productivity.'
  };

  subtitleItems: ProjectCaseStudyHeaderItem[] = [
    { text: '(Industry)', value: 'Productivity & Task management' },
    { text: '(Product type)', value: 'Mobile App (iOS)' },
    { text: '(Service)', value: 'Self-management & Daily workflow optimization' },
    { text: '(Tools & AI)', value: 'Figma, ChatGPT & Claude, Stitch' },
    { text: '(Year)', value: '2025' }
  ];

  overviewImageSrc = 'images/routiq/routiq-section.png';
}

