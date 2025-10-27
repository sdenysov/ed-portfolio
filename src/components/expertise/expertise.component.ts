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
      title: 'UI/UX Design',
      description: 'User interface and user experience design',
      level: 'Expert'
    },
    {
      id: 'frontend-development',
      title: 'Frontend Development',
      description: 'React, Angular, Vue.js development',
      level: 'Advanced'
    },
    {
      id: 'design-systems',
      title: 'Design Systems',
      description: 'Creating scalable design systems',
      level: 'Expert'
    },
    {
      id: 'prototyping',
      title: 'Prototyping',
      description: 'Interactive prototypes and wireframing',
      level: 'Advanced'
    }
  ];
}
