import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../section-header/section-header.component';
import { SECTION } from '../../../section-header/section-header.config';

@Component({
  selector: 'app-component-library',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './component-library.component.html',
  styleUrl: './component-library.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentLibraryComponent {
  SECTION = SECTION;

  introText =
    'The Routiq component library combines native mobile patterns with custom components tailored to the product’s workflow-focused experience. Native components help maintain platform familiarity and accessibility, while custom elements support the app’s unique productivity features.';


  buttonsRoutiq = {
    subtitle:
      'Buttons follow mobile interaction patterns to create a familiar and intuitive experience. Primary, secondary, and destructive button variants were designed to support different levels of emphasis while maintaining visual consistency across the app.',
    contentImgSrc: 'images/routiq/component-library/buttons.png'
  };

  inputsRoutiq = {
    subtitle:
      'Input fields are based on native mobile conventions to ensure readability, accessibility, and ease of use.',
    contentImgSrc: 'images/routiq/component-library/inputs.png'
  };

  navigationRoutiq = {
    subtitle:
      'Navigation patterns follow platform-specific guidelines, using native bottom navigation structures and interaction behaviors. This approach helps reduce learning effort and creates a more natural experience for both iOS and Android users.',
    contentImgSrc: 'images/routiq/component-library/navigation.png'
  };

  cardsRoutiq = {
    subtitle:
      'The task card is the core custom component within Routiq. It was designed to present tasks, subtasks, priorities, and progress in a compact and scannable format.',
    contentImgSrc: 'images/routiq/component-library/cards.png'
  };
}

// Made with Bob
