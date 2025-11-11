import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { SECTION } from '../../components/section-header/section-header.config';
import {ScrollAnimationDirective} from "../../directives/scroll-animation.directive";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollAnimationDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  SECTION = SECTION;

  connectContent = {
    title: 'Let’s connect',
    description: 'I’m always open to new opportunities, meaningful projects, and creative collaborations. Whether you\'re building a product, refining an experience, or looking for a thoughtful designer to join your team — let’s connect and see how we can work together.'
  };

  contactContent = {
    title: 'Contact',
    email: {
      icon: 'contact/e-mail.png',
      text: 'yevheniia.dobrovolska@gmail.com'
    },
    location: {
      icon: 'contact/location.png',
      text: 'Calgary, AB, Canada'
    }
  };

  workHoursContent = {
    title: 'Work Hours',
    days: 'Monday — Friday',
    hours: '8AM — 5PM'
  };
}
