import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionHeaderComponent} from '../section-header/section-header.component';
import {SECTION} from '../section-header/section-header.config';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  SECTION = SECTION;
  @Input() hideHeaderSubtitle: boolean = false;

  experience = [
    {
      id: 'lodgelink',
      title: 'LodgeLink - Calgary, AB, Canada',
      jobTitle: 'UX/UI Designer',
      period: 'April, 2024 - Currently',
    },
    {
      id: 'medicover',
      title: 'Medicover - Warsaw,  Poland',
      jobTitle: 'UX/UI Designer',
      period: 'August, 2022 - March, 2024',
    },
    {
      id: 'university-warsaw',
      title: 'University of Economics and Human Sciences in Warsaw - Warsaw, Poland',
      jobTitle: 'UI/Graphic Designer',
      period: 'April, 2021 - April, 2022'
    }
  ];

  subtitleHeader: string = '(My services)';
  subtitleText: string = 'I specialize in creating intuitive, accessible digital experiences and enjoy building scalable design systems that bring clarity and consistency to complex products. With a strong focus on user-centered design, I collaborate closely with Agile teams and leverage AI-enhanced workflows to deliver thoughtful, seamless solutions.';
}
