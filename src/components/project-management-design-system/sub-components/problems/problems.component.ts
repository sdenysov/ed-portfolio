import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../section-header/section-header.component';
import { SECTION } from '../../../section-header/section-header.config';

interface ProblemItem {
  title: string;
  description: string;
}

interface ProblemsConfig {
  intro: string;
  problems: ProblemItem[];
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './problems.component.html',
  styleUrl: './problems.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProblemsComponent {
  SECTION = SECTION;

  config: ProblemsConfig = {
    intro: "Before the design system initiative, our product faced several challenges:",
    problems: [
      {
        title: "Inconsistent components",
        description: "buttons, inputs, and navigation patterns were designed differently across squads. This inconsistency created visual fragmentation and slowed down feature development."
      },
      {
        title: "No design tokens",
        description: "colors, typography, and spacing were hard-coded, making it nearly impossible to maintain consistency or scale themes across platforms."
      },
      {
        title: "Accessibility gaps",
        description: "many components failed to meet WCAG contrast requirements and lacked proper states, impacting usability for diverse users."
      },
      {
        title: "Designer–developer misalignment",
        description: "without shared guidelines, designers often delivered components that developers implemented differently, causing rework and frustration on both sides."
      },
      {
        title: "Rigid components",
        description: "some existing elements weren't flexible or adaptive, forcing teams to create one-off solutions instead of reusing patterns."
      }
    ],
    imageSrc: "images/project-management-design-system/problems-before.png",
    imageAlt: "Problems before design system implementation"
  };
}
