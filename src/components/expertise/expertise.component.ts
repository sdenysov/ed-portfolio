import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { SECTION } from '../section-header/section-header.config';
import { Router } from '@angular/router';
import { PAGES } from '../../models/pages';
import {ScrollAnimationDirective} from "../../directives/scroll-animation.directive";

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollAnimationDirective],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpertiseComponent {
  SECTION = SECTION;

  constructor(private router: Router) {}

  expertise = [
    {
      id: 'ui-ux-design',
      title: 'Product & UI/UX design',
      description: "From early concept to final handoff — I design interfaces that are intuitive, accessible, and visually polished. Whether you're building from scratch or redesigning an existing product, I translate your goals into experiences users actually enjoy.",
      descriptionPoints: [
        'Wireframes & prototypes',
        'User flows & interaction design',
        'Responsive UI for web and mobile',
        'Figma handoff ready for development'
      ],
      img: 'images/expertise/product.png'
    },
    {
      id: 'design-development',
      title: 'Design system development',
      description: 'A good design system means your team ships faster, stays consistent, and spends less time reinventing components. I build scalable, well-documented design systems that grow with your product — not against it.',
      descriptionPoints:  [
        'Token architecture (color, typography, spacing)',
        'Component library in Figma',
        'Usage guidelines & documentation',
        'Accessibility baked in from the start'
      ],
      img: 'images/expertise/design.png'
    },
    {
      id: 'research',
      title: 'User research & strategy',
      description: 'I help to understand users, identify friction points, and make design decisions backed by real insight — not assumptions.',
      descriptionPoints:  [
        'User interviews & usability testing',
        'Competitive analysis',
        'Journey mapping & personas',
        'Research synthesis & actionable recommendations'
      ],
      img: 'images/expertise/research.svg'
    },
    {
      id: 'brand-design',
      title: 'Visual & brand design',
      description: "Your product's visual identity shapes how users feel the moment they land on it. I help businesses build a cohesive visual language — from color palette to UI style that feels consistent everywhere it shows up.",
      descriptionPoints:  [
        'Brand identity & visual direction',
        'Color, typography & iconography systems',
        'UI style guides',
        'Marketing and product visual consistency'
      ],
      img: 'images/expertise/brand-design.png'
    },
    {
      id: 'design-audit',
      title: 'Design & UX audit',
      description: "Already have a product or website but something isn't working? I review your existing experience through the lens of usability, accessibility, and conversion — and give you a clear, prioritized list of what to fix and why.",
      descriptionPoints:  [
        'Full UX & UI review',
        'Accessibility check (WCAG)',
        'Conversion friction analysis',
        'Prioritized recommendations report'
      ],
      img: 'images/expertise/audit.svg'
    },
  ];

  subtitleHeader: string = '(My services)';
  subtitleText: string = "Whether you need a product designed from scratch, a design system that brings order to chaos, or a fresh eye on what's not working — I bring structure, clarity, and craft to every project. No bloated processes, no guesswork. Just thoughtful design that solves real problems.";
  whatsIncludedLabel: string = "What's included:";

  onLearnMoreClick() {
    this.router.navigate([PAGES.ABOUT]);
  }
}
