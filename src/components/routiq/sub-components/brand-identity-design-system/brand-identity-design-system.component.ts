import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentItemComponent } from '../../../case-studies-common-components/content-item/content-item.component';
import { SectionHeaderComponent } from '../../../section-header/section-header.component';
import { SECTION } from '../../../section-header/section-header.config';

@Component({
  selector: 'app-brand-identity-design-system',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ContentItemComponent],
  templateUrl: './brand-identity-design-system.component.html',
  styleUrl: './brand-identity-design-system.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandIdentityDesignSystemComponent {
  SECTION = SECTION;

  introText =
    'I created a lightweight brand identity and modular design system to ensure consistency across the Routiq experience. The visual language combines energetic accent colors with calm neutral tones to support focus and clarity. Manrope is used as the brand typeface, while native fonts (SF Pro for iOS and Roboto for Android) ensure platform familiarity and accessibility. The design system includes tokens, reusable components, and platform adaptations that support scalable product development.';
  overviewImageSrc = 'images/routiq/brand-identity-design-system/branding.png';

  stylesAndTokens = {
    subtitle:
      'To ensure consistency and scalability across the product, Routiq’s interface is built on a system of reusable styles and design tokens. Foundations such as colors, typography, spacing, radius, and elevation were documented as tokens to support faster iteration and maintain visual consistency.',
  };

  colors = {
    subtitle:
      'Brand colors support the experience by balancing energy (action) with calmness (focus).',
    description: 'Each color is defined with a token, role, and usage example, allowing for consistent application across UI components. Background, text, border, and hover states are included to ensure flexibility in different contexts (e.g., inline messages, banners, buttons, or icons).',
    contentImgSrc: 'images/routiq/brand-identity-design-system/colors.png'
  };

  configTypography = {
    subtitle: "Routiq uses a hybrid typography system. Manrope is used for brand expression such as screen titles and key headings, while native platform fonts — SF Pro for iOS - ensure optimal readability, accessibility, and platform consistency.",
    typographyItems: [
      {
        name: 'Headline',
        images: ['images/routiq/brand-identity-design-system/headline.png']
      },
      {
        name: 'iOS native typography',
        images: ['images/routiq/brand-identity-design-system/typoghraphy.png']
      }
    ]
  };

  spacingSystem = {
    subtitle:
      'To ensure scalable layouts, I introduced a spacing scale based on 4px increments. By standardizing spacing tokens (e.g., space-01, space-02, space-03), we created a predictable rhythm across components and screens.',
    contentImgSrc: 'images/routiq/brand-identity-design-system/spacing.png'
  };

  cornerRadiusSystem = {
    subtitle:
      'Routiq uses a soft corner radius system to create a modern, approachable, and visually calm experience. Rounded corners help reduce visual sharpness and support the app’s focus on clarity and ease of use.',
    contentImgSrc: 'images/routiq/brand-identity-design-system/corner-radius.png'
  };

  iconography = {
    subtitle:
      'Routiq uses a lightweight outline icon system inspired by native platform conventions. Icons prioritize clarity and fast recognition while maintaining a minimal visual language aligned with the product experience.',
    contentImgSrc: 'images/routiq/brand-identity-design-system/icons.png'
  };
}
