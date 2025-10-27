import {Component, ChangeDetectionStrategy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionHeaderComponent} from '../section-header/section-header.component';
import {SECTION} from '../section-header/section-header.config';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorksComponent {
  SECTION = SECTION;

  projects = [
    {
      id: 'project-management',
      title: 'Project management design system',
      image: 'images/project-management-preview.png',
      type: 'design-system'
    },
    {
      id: 'esports-tracker',
      title: 'Esports games tracker web app',
      image: 'images/esports-tracker-preview.png',
      type: 'web-app'
    }
  ];
}
