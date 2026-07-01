import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../section-header/section-header.component';
import { SECTION } from '../../section-header/section-header.config';
import { ProjectId } from '../../projects-grid/projects.config';

interface ProblemItem {
  title: string;
  description: string;
}

interface ProblemsConfig {
  intro?: string;
  problems?: ProblemItem[];
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

@Component({
  selector: 'app-project-problems',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './project-problems.component.html',
  styleUrl: './project-problems.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectProblemsComponent {
  @Input({ required: true }) projectId!: ProjectId;

  SECTION = SECTION;
  ProjectId = ProjectId;

  private readonly problemsConfig: Record<ProjectId, ProblemsConfig> = {
    [ProjectId.PROJECT_MANAGEMENT]: {
      intro: 'Before the design system initiative, our product faced several challenges:',
      problems: [
        {
          title: 'Inconsistent components',
          description:
            'buttons, inputs, and navigation patterns were designed differently across squads. This inconsistency created visual fragmentation and slowed down feature development.'
        },
        {
          title: 'No design tokens',
          description:
            'colors, typography, and spacing were hard-coded, making it nearly impossible to maintain consistency or scale themes across platforms.'
        },
        {
          title: 'Accessibility gaps',
          description:
            'many components failed to meet WCAG contrast requirements and lacked proper states, impacting usability for diverse users.'
        },
        {
          title: 'Designer–developer misalignment',
          description:
            'without shared guidelines, designers often delivered components that developers implemented differently, causing rework and frustration on both sides.'
        },
        {
          title: 'Rigid components',
          description:
            'some existing elements weren’t flexible or adaptive, forcing teams to create one-off solutions instead of reusing patterns.'
        }
      ],
      imageSrc: 'images/project-management-design-system/problems-before.png',
      imageAlt: 'Problems before design system implementation'
    },
    [ProjectId.ROUTIQ]: {
      paragraphs: [
        'People waste time deciding what to do next. Complex tasks, routines, and personal goals often break down because users lack a clear sequence and spend too much time planning instead of doing.',
        'Routiq helps users make fast decisions, stay focused, and work efficiently. By breaking tasks into flows and suggesting the next best action based on behavior and context, Routiq reduces decision fatigue and builds consistent routines.'
      ]
    },
    [ProjectId.ESPORT_TRACKER]: {
      intro: '',
      problems: []
    }
  };

  get config(): ProblemsConfig {
    return this.problemsConfig[this.projectId];
  }
}
