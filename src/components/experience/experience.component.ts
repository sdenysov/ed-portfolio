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
}
