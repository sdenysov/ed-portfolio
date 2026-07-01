import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../section-header/section-header.component';
import { SECTION } from '../../../section-header/section-header.config';

@Component({
  selector: 'app-ideation',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './ideation.component.html',
  styleUrl: './ideation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdeationComponent {
  SECTION = SECTION;

  introText = {
    paragraph1:
      'During the ideation phase, I explored different approaches to task management, workflow organization, and decision-support experiences. I mapped out early user flows, task sequences, and dependency logic to better understand how users could move through goals step by step without feeling overwhelmed.',
    paragraph2:
      'The ideation phase also helped identify opportunities to simplify complex workflows into a more intuitive and guided experience.'
  };

  routineBuilderDependencyWorkflow = {
    subtitle:
      'While exploring productivity tools, I noticed that many apps help users store tasks but provide little support for progressing through complex workflows. Routiq was designed to bridge that gap by helping users move through structured sequences with contextual next-step guidance.',
    description:
      'User goal is to build a repeatable workflow with connected steps and guided progression. The main Routiq UX principle is support structured progression without overwhelming users.',
    contentImgSrc: 'images/routiq/ideation/flow.png'
  };
}

// Made with Bob
