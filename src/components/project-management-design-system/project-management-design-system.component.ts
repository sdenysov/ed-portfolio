import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProblemsComponent} from "./sub-components/problems/problems.component";
import {GoalsComponent} from "./sub-components/goals/goals.component";

interface SubtitleItem {
  text: string;
  value: string;
}

@Component({
  selector: 'app-project-management-design-system',
  standalone: true,
  imports: [CommonModule, ProblemsComponent, GoalsComponent],
  templateUrl: './project-management-design-system.component.html',
  styleUrl: './project-management-design-system.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectManagementDesignSystemComponent {
  projectTitle: string = 'Project Management Design System';
  overviewSubtitleItem: SubtitleItem= {
    text: '(Overview)',
    value: 'As our product scaled across web and mobile, inconsistencies in UI slowed development and impacted user experience. I led the design system effort to create reusable foundations with tokens, accessibility baked in, and clear documentation for adoption.'
  }
  subtitleItems: SubtitleItem[] = [
    { text: '(Industry)', value: 'SaaS' },
    { text: '(Product type)', value: 'Project management app' },
    { text: '(Service)', value: 'Product design, interaction design, branding' },
    { text: '(Year)', value: '2025' }
  ]
  overviewImageSrc: string = 'images/project-management-design-system/project-management-overview.png'
}
