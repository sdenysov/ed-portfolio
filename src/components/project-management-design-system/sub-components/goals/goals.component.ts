import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../section-header/section-header.component';
import { SECTION } from '../../../section-header/section-header.config';

interface GoalItem {
  description: string;
}

interface GoalsConfig {
  goals: GoalItem[];
}

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalsComponent {
  SECTION = SECTION;

  config: GoalsConfig = {
    goals: [
      {
        description: "Establish a scalable token-based foundation for colors, typography, spacing, and motion."
      },
      {
        description: "Standardize core components (buttons, inputs, table, cards) with accessibility built in."
      },
      {
        description: "Improve designer–developer collaboration with clear documentation and handoff practices."
      },
      {
        description: "Reduce redundant components, ensuring consistency and faster feature delivery."
      }
    ]
  };
}
