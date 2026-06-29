import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../section-header/section-header.component';
import { SECTION } from '../../section-header/section-header.config';
import { ProjectId } from '../../projects-grid/projects.config';

interface GoalItem {
  description: string;
}

interface GoalsConfig {
  goals?: GoalItem[];
  paragraphs?: string[];
}

@Component({
  selector: 'app-project-goals',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './project-goals.component.html',
  styleUrl: './project-goals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectGoalsComponent {
  @Input({ required: true }) projectId!: ProjectId;

  SECTION = SECTION;
  ProjectId = ProjectId;

  private readonly goalsConfig: Record<ProjectId, GoalsConfig> = {
    [ProjectId.PROJECT_MANAGEMENT]: {
      goals: [
        {
          description: 'Establish a scalable token-based foundation for colors, typography, spacing, and motion.'
        },
        {
          description: 'Standardize core components (buttons, inputs, table, cards) with accessibility built in.'
        },
        {
          description: 'Improve designer–developer collaboration with clear documentation and handoff practices.'
        },
        {
          description: 'Reduce redundant components, ensuring consistency and faster feature delivery.'
        }
      ]
    },
    [ProjectId.ROUTIQ]: {
      paragraphs: [
        'The goal of the app is to help people make faster decisions about what to do next, stay focused, and work more efficiently. Instead of manually choosing tasks, users receive dynamic suggestions based on their flows, habits, and behavior. This reduces decision fatigue and helps them maintain momentum without overthinking.'
      ]
    },
    [ProjectId.ESPORT_TRACKER]: {}
  };

  get config(): GoalsConfig {
    return this.goalsConfig[this.projectId];
  }
}

// Made with Bob
