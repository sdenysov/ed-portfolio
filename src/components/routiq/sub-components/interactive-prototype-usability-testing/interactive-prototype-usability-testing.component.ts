import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../section-header/section-header.component';
import { SECTION } from '../../../section-header/section-header.config';

@Component({
  selector: 'app-interactive-prototype-usability-testing',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './interactive-prototype-usability-testing.component.html',
  styleUrl: './interactive-prototype-usability-testing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteractivePrototypeUsabilityTestingComponent {
  SECTION = SECTION;

  introText =
    'An interactive prototype was created in Figma to simulate real user interactions and validate the product’s usability before development. The prototype allowed seamless navigation through key flows such as creating productivity routine, add tasks and dependencies and track a progress.';

  image = 'images/routiq/interactive-prototype-usability-testing/prototype.png';
}

// Made with Bob
