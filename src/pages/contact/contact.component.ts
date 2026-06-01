import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SECTION } from '../../components/section-header/section-header.config';
import {ScrollAnimationDirective} from "../../directives/scroll-animation.directive";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ContactFormComponent, ScrollAnimationDirective],
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
    items: [
      {
        icon: 'contact/e-mail.svg',
        text: 'yevheniia.dobrovolska@gmail.com',
        alt: 'Email icon'
      },
      {
        icon: 'contact/phone.svg',
        text: '+1 (825) 945 9390',
        alt: 'Phone icon'
      },
      {
        icon: 'contact/location.svg',
        text: 'Calgary, AB, Canada',
        alt: 'Location icon'
      }
    ]
  };

  workHoursContent = {
    title: 'Work Hours',
    days: 'Monday — Friday',
    hours: '8AM — 5PM'
  };
}
