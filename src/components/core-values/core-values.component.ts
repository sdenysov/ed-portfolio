import { Component, ChangeDetectionStrategy } from '@angular/core';
import {SectionHeaderComponent} from "../section-header/section-header.component";
import {SECTION} from "../section-header/section-header.config";
import { SkillsComponent } from '../skills/skills.component';
import {ScrollAnimationDirective} from "../../directives/scroll-animation.directive";

@Component({
  selector: 'app-core-values',
  standalone: true,
  templateUrl: './core-values.component.html',
  styleUrl: './core-values.component.scss',
  imports: [
    SectionHeaderComponent,
    SkillsComponent,
    ScrollAnimationDirective
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreValuesComponent {
  SECTION = SECTION;
  coreValuesSubtitle = 'My core values define how I work with others, solve problems, and create meaningful, user-centered experiences.';

  coreValueItems = [
    {
      img: 'images/core-values/deadline.svg',
      title: 'Deadline is deadline',
      description: `I treat your timeline like mine. If something's at risk, you'll hear from me early — not after the fact.`
    },
    {
      img: 'images/core-values/transparency.svg',
      title: 'Transparency',
      description: `I value clear communication and honest collaboration. I believe in sharing ideas, feedback, and progress openly to build trust within teams and with clients.`
    },
    {
      img: 'images/core-values/research.svg',
      title: 'Research before pixels',
      description: `I ask why before start designing. Good design solves the right problem, not just the obvious one.`
    },
    {
      img: 'images/core-values/growth.svg',
      title: 'Growth',
      description: `Every project is a chance to grow. I constantly seek feedback, reflect on my process, and look for ways to improve processes.`
    },
    {
      img: 'images/core-values/teamwork.svg',
      title: 'Teamwork',
      description: `I thrive in cross-functional teams where ideas are shared, voices are heard, and collaboration leads to better outcomes for users and businesses alike.`
    },
    {
      img: 'images/core-values/excellence.svg',
      title: 'Excellence',
      description: `I care deeply about the details — from interaction design to accessibility. I strive to create work that not only meets expectations, but exceeds them.`
    },
  ];
}
