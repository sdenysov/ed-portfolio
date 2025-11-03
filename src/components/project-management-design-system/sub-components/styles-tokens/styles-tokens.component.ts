import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../section-header/section-header.component';
import { SECTION } from '../../../section-header/section-header.config';

@Component({
  selector: 'app-styles-tokens',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './styles-tokens.component.html',
  styleUrl: './styles-tokens.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StylesTokensComponent {
  SECTION = SECTION;

  configColors = {
    headerImgSrc: 'images/project-management-design-system/styles-tokens/colors/colors-header-image.png',
    subtitle: 'Our color system is built around three key categories — neutrals, brand, and status colors — to ensure clarity, consistency, and accessibility across the product.',
    description: "Each color is defined with a token, role, and usage example, allowing for consistent application across UI components. Background, text, border, and hover states are included to ensure flexibility in different contexts (e.g., inline messages, banners, buttons, or icons).",
    colors: [
      {
        name: 'Neutral Colors',
        images: [
          'images/project-management-design-system/styles-tokens/colors/neutral-colors.png'
        ]
      },
      {
        name: 'Brand Colors',
        images: [
          'images/project-management-design-system/styles-tokens/colors/brand-colors.png'
        ]
      },
      {
        name: 'Status Colors',
        images: [
          'images/project-management-design-system/styles-tokens/colors/status-colors-1.png',
          'images/project-management-design-system/styles-tokens/colors/status-colors-2.png',
          'images/project-management-design-system/styles-tokens/colors/status-colors-3.png',
          'images/project-management-design-system/styles-tokens/colors/status-colors-4.png',
        ]
      }
    ]

  };

  sectionImgSrc: string = 'images/project-management-design-system/styles-tokens/styles-tokens.png';
}
