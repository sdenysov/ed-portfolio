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

  configTypography = {
    headerImgSrc: 'images/project-management-design-system/styles-tokens/typography/typography-header-image.png',
    subtitle: "Typography is a core part of the design system, ensuring clear communication, strong hierarchy, and consistency across web and mobile products. We use Inter because it is an open-source font optimized for user interfaces, with excellent readability at small sizes and flexibility across headings, body text, and functional UI labels. Its wide range of weights and OpenType features (like tabular numbers) make it particularly suitable for SaaS products and data-heavy interfaces.",
    typographyItems: [
      {
        name: 'Headlines',
        images: ['images/project-management-design-system/styles-tokens/typography/headlines.png']
      },
      {
        name: 'Body',
        images: ['images/project-management-design-system/styles-tokens/typography/body.png']
      },
      {
        name: 'UI components',
        images: ['images/project-management-design-system/styles-tokens/typography/ui-components.png']
      }
    ]
  };

  configSpacingSystem = {
    headerImgSrc: 'images/project-management-design-system/styles-tokens/spacing-system/spacing-system-header-image.png',
    contentImgSrc: 'images/project-management-design-system/styles-tokens/spacing-system/spacing-system.png',
    subtitle: "To reduce inconsistency and ensure scalable layouts, I introduced a spacing scale based on 4px increments (4, 8, 12, 16, 24, 32, etc.). By standardizing spacing tokens (e.g., space-01, space-02, space-03), we created a predictable rhythm across components and screens. This improved visual harmony, simplified responsive design, and gave developers a single source of truth when applying margins and paddings.",
  };

  configShadows = {
    subtitle: "Previously, shadows were applied inconsistently, with different blur values, opacities, and colors used across the product. This led to a lack of hierarchy and sometimes even accessibility issues. To address this, I introduced a standardized elevation scale (e.g., elevation-1, elevation-2, elevation-3) with predefined shadow tokens. This created a cohesive visual hierarchy, improved clarity, and made it easier for developers to apply consistent elevation across platforms.",
    headerImgSrc: 'images/project-management-design-system/styles-tokens/shadows/shadows-header-image.png',
    contentImgSrc: 'images/project-management-design-system/styles-tokens/shadows/shadows.png'
  };

  configIcons = {
    subtitle: "Previously, the product used mixed icon sets with inconsistent stroke weights, sizes, and styles. This created a fragmented visual language and sometimes led to confusion in meaning. To solve this, I established a unified icon library with consistent grid, stroke weight (2px), and corner radius. Each icon was designed to align to a 24px grid, ensuring crisp rendering across platforms. By standardizing the iconography, we improved clarity, visual harmony, and made it easier for designers and developers to quickly find and apply the right assets.",
    contentImgSrc: 'images/project-management-design-system/styles-tokens/icons.png'
  };

  sectionImgSrc: string = 'images/project-management-design-system/styles-tokens/styles-tokens.png';
  accessibilityImgSrc: string = 'images/project-management-design-system/styles-tokens/accessibility.png';
}
