import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { SECTION } from '../section-header/section-header.config';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpertiseComponent {
  SECTION = SECTION;

  expertise = [
    {
      id: 'ui-ux-design',
      title: 'Product & UI/UX design',
      descriptionPoints: [
        'Designing responsive websites, mobile apps, and web applications',
        'Creating user-friendly interfaces, user flows, wireframes, mockups, and high-fidelity prototypes',
        'Conducting usability testing and incorporating user feedback into designs'
      ],
      img: 'images/expertise/product.png'
    },
    {
      id: 'design-development',
      title: 'Design system development',
      descriptionPoints:  [
        'Creating and maintaining cross-platform design systems from scratch',
        'Standardizing components and design assets for multi-team use',
        'Documenting design guidelines and best practices for consistency and scalability'
      ],
      img: 'images/expertise/design.png'
    },
    {
      id: 'research',
      title: 'User research & strategy',
      descriptionPoints:  [
        'Conducting UX research and competitor analysis',
        'Running heuristic evaluations and identifying usability improvements',
        'Collaborating with product and cross-functional teams to align design with user and business goals'
      ],
      img: 'images/expertise/research.png'
    },
    {
      id: 'brand-design',
      title: 'Visual & brand design',
      descriptionPoints:  [
        'Creating branded assets for digital products and marketing materials',
        'Designing presentations, infographics, and visual content for campaigns',
      ],
      img: 'images/expertise/brand-design.png'
    },
  ];

  subtitleHeader: string = '(My services)';
  subtitleText: string = 'I specialize in creating intuitive, accessible digital experiences and enjoy building scalable design systems that bring clarity and consistency to complex products. With a strong focus on user-centered design, I collaborate closely with Agile teams and leverage AI-enhanced workflows to deliver thoughtful, seamless solutions.';
}
