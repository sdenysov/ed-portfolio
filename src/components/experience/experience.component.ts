import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionHeaderComponent} from '../section-header/section-header.component';
import {SECTION} from '../section-header/section-header.config';
import { saveAs } from 'file-saver';
import {ScrollAnimationDirective} from "../../directives/scroll-animation.directive";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollAnimationDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  SECTION = SECTION;
  resumeLink: string = 'pdf/ed-resume.pdf';

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

  downloadResume() {
    fetch(this.resumeLink)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, 'ed-resume.pdf');
      })
      .catch(error => {
        console.error('Error downloading resume:', error);
        // Fallback to direct link
        window.open(this.resumeLink, '_blank');
      });
  }
}
