import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from '../../components/overview/overview.component';
import { WorksComponent } from '../../components/works/works.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ExpertiseComponent } from '../../components/expertise/expertise.component';
import { SectionHeaderConfig } from '../../models/section-header-config';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, OverviewComponent, WorksComponent, ExperienceComponent, ExpertiseComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  worksHeaderConfig: SectionHeaderConfig = {
    label: '(Case studies)',
    title: 'Works',
    textButton: 'View all projects'
  };

  experienceHeaderConfig: SectionHeaderConfig = {
    label: '(From 2021)',
    title: 'Experience',
    textButton: 'Download resume'
  };

  expertiseHeaderConfig: SectionHeaderConfig = {
    label: '(4)',
    title: 'Expertise',
    textButton: 'Learn more',
    subtitle: 'I specialize in creating intuitive, accessible digital experiences and enjoy building scalable design systems that bring clarity and consistency to complex products. With a strong focus on user-centered design, I collaborate closely with Agile teams and leverage AI-enhanced workflows to deliver thoughtful, seamless solutions.',
    subtitleHeader: '(My services)'
  };
}
