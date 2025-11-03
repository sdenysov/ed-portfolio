import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../section-header/section-header.component';
import { SECTION } from '../../../section-header/section-header.config';

@Component({
  selector: 'app-my-role',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './my-role.component.html',
  styleUrl: './my-role.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyRoleComponent {
  SECTION = SECTION;

  config = {
    roleDescription: "I was responsible for leading the design side of the system initiative:",
    roles: [
      {
        title: '01',
        name: 'Audit & research',
        description: '– conducted a UI inventory and identified inconsistencies and accessibility issues.'
      },
      {
        title: '02',
        name: 'Token architecture',
        description: '– defined and implemented color, typography, and spacing tokens in Figma.'
      },
      {
        title: '03',
        name: 'Component standardization',
        description: '– rebuilt core components (buttons, inputs, forms) with flexible variants and accessibility baked in.'
      },
      {
        title: '04',
        name: 'Cross-functional collaboration',
        description: '– partnered with developers to align Figma libraries with coded components and establish a governance model for contributions.'
      }
    ]
  };
}
