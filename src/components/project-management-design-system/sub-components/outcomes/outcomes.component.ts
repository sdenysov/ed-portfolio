import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../section-header/section-header.component';
import { SECTION } from '../../../section-header/section-header.config';

interface OutcomeItem {
  title: string;
  description: string;
}

interface OutcomesConfig {
  title: string;
  subTitle: string;
  intro: string;
  outcomes: OutcomeItem[];
}

@Component({
  selector: 'app-outcomes',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './outcomes.component.html',
  styleUrl: './outcomes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutcomesComponent {
  SECTION = SECTION;
  outcomesConfig = {
    title: '“The new design system not only made our product feel unified, it also gave our teams a shared language and toolkit to deliver features faster and with higher quality.”',
    subTitle: 'Internal team feedback',
    intro: "The introduction of the design system delivered measurable improvements across design and development workflows:",
    outcomes: [
      {
        title: "Faster design & development cycles",
        description: "cut design-to-development handoff time by ~25% by aligning Figma components with coded libraries."
      },
      {
        title: "Stronger designer–developer alignment",
        description: "eliminated frequent rework by establishing shared naming conventions, design tokens, and clear documentation."
      },
      {
        title: "Improved accessibility",
        description: "achieved WCAG AA compliance for all core components, ensuring consistent color contrast, keyboard navigation, and clear focus states."
      },
      {
        title: "Higher adoption",
        description: "within 3 months, all squads transitioned to using the system, reporting increased consistency and confidence in design outputs."
      }
    ]
  };
}
