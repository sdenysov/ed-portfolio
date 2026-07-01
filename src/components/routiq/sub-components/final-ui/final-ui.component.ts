import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentItemComponent } from '../../../case-studies-common-components/content-item/content-item.component';
import { SectionHeaderComponent } from '../../../section-header/section-header.component';
import { SECTION } from '../../../section-header/section-header.config';

@Component({
  selector: 'app-final-ui',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ContentItemComponent],
  templateUrl: './final-ui.component.html',
  styleUrl: './final-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinalUiComponent {
  SECTION = SECTION;

  introText =
    'The UI design phase focused on creating a calm, structured, and lightweight productivity experience that supports focus without overwhelming users. The interface combines native mobile interaction patterns with custom workflow components designed specifically for Routiq’s guided task experience.';

  signUpPersonalizedOnboarding = {
    subtitle:
      'The goal of this flow is gathering lightweight behavioral information to personalize the experience from the beginning.',
    contentItems: [
      {
        name: 'Sign up',
        images: [
          'images/routiq/final-ui/sign-up.png'
        ]
      },
      {
        name: 'Personalized onboarding',
        images: [
          'images/routiq/final-ui/onboarding.png'
        ]
      }
    ]
  };
  todayRoutiq = {
    subtitle:
      'The Today tab acts as the main workspace and central overview of the Routiq experience. The screen combines personalized task recommendations, upcoming priorities, and routine progress into a lightweight and easy-to-scan layout designed to reduce decision fatigue and support daily focus.',
    image: 'images/routiq/final-ui/today.png'
  };
  routineOverviewRoutiq = {
    subtitle:
      'The routine overview page provides users with a detailed view of their workflow structure, progress, and connected tasks. The screen was designed to help users understand where they are within a process, what steps are completed, and which actions should be prioritized next.',
    image: 'images/routiq/final-ui/routine-overview.png'
  };
  createRoutineFlowRoutiq = {
    subtitle:
      'The routine creation flow was designed to simplify the process of building structured workflows without overwhelming users. The experience guides users through defining goals, adding workflow steps, and optionally connecting task dependencies to create more intentional and guided progression paths.',
    description:
      'By breaking the setup process into smaller stages, the flow helps users organize complex routines in a more intuitive way while supporting flexibility for different planning styles and productivity needs.',
    images: [
      'images/routiq/final-ui/create-flow1.png',
      'images/routiq/final-ui/create-flow2.png'
    ]
  };
}

