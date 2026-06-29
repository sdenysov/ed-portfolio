import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../section-header/section-header.component';
import { SECTION } from '../../../section-header/section-header.config';

@Component({
  selector: 'app-research-discovery',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './research-discovery.component.html',
  styleUrl: './research-discovery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResearchDiscoveryComponent {
  SECTION = SECTION;
  
  introText = {
    paragraph1: 'I started by researching how people currently plan their tasks and what existing apps do well (and where they fall short). I combined competitor analysis with a user survey and several interviews to understand real habits and frustrations.',
    paragraph2: 'Using these insights, I created personas and shaped the app\'s structure, core features, and experience direction.'
  };

  competitorAnalysis = {
    subtitle: 'Current tools excel at parts of the problem: Todoist and Notion for structure, Motion for scheduling, Habit app for routines. But none combines a mobile-first flow editor, a personalized next-step engine, and lightweight personal automation with transparent recommendations. Routiq fills this gap by offering flow-aware, explainable suggestions and a focus-first mobile experience that helps users decide fast and act with clarity.',
    contentImgSrc: 'images/routiq/research-discovery/competitors-image.png'
  };

  survey = {
    subtitle: 'I ran a short 12-question survey to learn how people stay organized and what slows them down. I received feedback from participants, which helped me spot common problems like not knowing what to do next or losing track of subtasks. I used the answers to shape the app direction and build the first user personas.',
    contentImgSrc: 'images/routiq/research-discovery/survey.png',
    contentImgSrc2: 'images/routiq/research-discovery/survey2.png'
  };

  userPersonas = {
    subtitle: 'Based on collected survey data and early user insights, I developed two primary personas representing distinct user groups: individuals seeking simple task guidance and users requiring structured workflows with dependencies. These personas informed feature prioritization and interaction design.',
    contentImgSrc: 'images/routiq/research-discovery/persona1.png',
    contentImgSrc2: 'images/routiq/research-discovery/persona2.png'
  };

  researchInformedDesign = {
    subtitle: 'The research guided several core UX decisions:',
    items: [
      'A unified workflow with smart suggestions and routines.',
      'Algorithmic next-step suggestions tasks and subtasks.',
      'Prioritize subtask structure and automatic dependencies.',
      'Clean UI, lightweight interactions, minimal cognitive load.',
      'Progress dashboards, small wins view.'
    ]
  };
}
