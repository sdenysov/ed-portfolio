import { Component, ChangeDetectionStrategy } from '@angular/core';
import {SectionHeaderComponent} from "../section-header/section-header.component";
import {SECTION} from "../section-header/section-header.config";
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-core-values',
  standalone: true,
  templateUrl: './core-values.component.html',
  styleUrl: './core-values.component.scss',
  imports: [
    SectionHeaderComponent,
    SkillsComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreValuesComponent {
  SECTION = SECTION;
  coreValuesSubtitle = 'My core values define how I work with others, solve problems, and create meaningful, user-centered experiences.';

  coreValueItems = [
    {
      img: 'images/core-values/hard-work.png',
      title: 'Hard work',
      description: `I approach every project with dedication, focus, and a strong sense of responsibility — always aiming to deliver thoughtful and high-quality design solutions.`
    },
    {
      img: 'images/core-values/transparency.png',
      title: 'Transparency',
      description: `I value clear communication and honest collaboration. I believe in sharing ideas, feedback, and progress openly to build trust within teams and with clients.`
    },
    {
      img: 'images/core-values/innovation.png',
      title: 'Innovation',
      description: `I'm always exploring new tools, technologies, and design methods. I enjoy pushing creative boundaries to craft smarter, more effective user experiences.`
    },
    {
      img: 'images/core-values/growth.png',
      title: 'Growth',
      description: `Every project is a chance to grow. I constantly seek feedback, reflect on my process, and look for ways to improve — both personally and professionally.`
    },
    {
      img: 'images/core-values/teamwork.png',
      title: 'Teamwork',
      description: `I thrive in cross-functional teams where ideas are shared, voices are heard, and collaboration leads to better outcomes for users and businesses alike.`
    },
    {
      img: 'images/core-values/excellence.png',
      title: 'Excellence',
      description: `I care deeply about the details — from interaction design to accessibility. I strive to create work that not only meets expectations, but exceeds them.`
    },
  ];
}
