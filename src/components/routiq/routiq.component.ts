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
import { ResearchDiscoveryComponent } from './sub-components/research-discovery/research-discovery.component';
import { BrandIdentityDesignSystemComponent } from './sub-components/brand-identity-design-system/brand-identity-design-system.component';
import { ComponentLibraryComponent } from './sub-components/component-library/component-library.component';
import { IdeationComponent } from './sub-components/ideation/ideation.component';
import { FinalUiComponent } from './sub-components/final-ui/final-ui.component';
import { InteractivePrototypeUsabilityTestingComponent } from './sub-components/interactive-prototype-usability-testing/interactive-prototype-usability-testing.component';
import { OutcomesComponent, OutcomesConfig } from '../case-studies-common-components/outcomes/outcomes.component';

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
    ResearchDiscoveryComponent,
    BrandIdentityDesignSystemComponent,
    ComponentLibraryComponent,
    IdeationComponent,
    FinalUiComponent,
    InteractivePrototypeUsabilityTestingComponent,
    OutcomesComponent
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

  outcomesConfig: OutcomesConfig = {
    title:
      '“I really liked the workflow structure. It made larger goals feel more manageable and easier to progress through step by step.”',
    subTitle: 'Test User feedback',
    intro:
      'Early concept validation helped evaluate Routiq’s workflow-guided approach and identify opportunities to simplify task organization, reduce cognitive load, and improve progression visibility throughout the experience:',
    outcomes: [
      {
        title: 'Designed a workflow-guided productivity experience',
        description: 'focused on reducing decision fatigue.'
      },
      {
        title: 'Created structured task and routine flows',
        description: 'with dependency-based progression.'
      },
      {
        title: 'Improved clarity and focus',
        description: 'through personalized next-step recommendations.'
      },
      {
        title: 'Explored adaptive onboarding and workflow personalization concepts',
        description: '.'
      }
    ]
  };
}

