import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesTokensComponent } from './sub-components/styles-tokens/styles-tokens.component';
import { ComponentsComponent } from './sub-components/components-section/components.component';
import { OutcomesComponent } from './sub-components/outcomes/outcomes.component';
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

@Component({
  selector: 'app-project-management-design-system',
  standalone: true,
  imports: [
    CommonModule,
    StylesTokensComponent,
    ComponentsComponent,
    OutcomesComponent,
    ExploreMoreComponent,
    ProjectCaseStudyHeaderComponent,
    ProjectProblemsComponent,
    ProjectGoalsComponent,
    ProjectMyRoleComponent
  ],
  templateUrl: './project-management-design-system.component.html',
  styleUrl: './project-management-design-system.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectManagementDesignSystemComponent {
  currentProjectId = ProjectId.PROJECT_MANAGEMENT;
  projectTitle: string = 'SaaS platform design system';
  overviewSubtitleItem: ProjectCaseStudyOverviewItem = {
    text: '(Overview)',
    value: 'As our product scaled across web and mobile, inconsistencies in UI slowed development and impacted user experience. I led the design system effort to create reusable foundations with tokens, accessibility baked in, and clear documentation for adoption.'
  }
  subtitleItems: ProjectCaseStudyHeaderItem[] = [
    { text: '(Industry)', value: 'SaaS' },
    { text: '(Product type)', value: 'Project management app' },
    { text: '(Service)', value: 'Product design, interaction design, branding' },
    { text: '(Tools & AI)', value: 'Figma, ChatGPT & Claude' },
    { text: '(Year)', value: '2025' }
  ]
  overviewImageSrc: string = 'images/project-management-design-system/project-management-overview.png'
}
