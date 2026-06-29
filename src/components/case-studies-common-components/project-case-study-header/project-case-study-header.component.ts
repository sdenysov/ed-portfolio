import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProjectCaseStudyHeaderItem {
  text: string;
  value: string;
}

export interface ProjectCaseStudyOverviewItem {
  text: string;
  value: string;
}

@Component({
  selector: 'app-project-case-study-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-case-study-header.component.html',
  styleUrl: './project-case-study-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCaseStudyHeaderComponent {
  @Input({ required: true }) projectTitle = '';
  @Input({ required: true }) overviewItem!: ProjectCaseStudyOverviewItem;
  @Input({ required: true }) subtitleItems: ProjectCaseStudyHeaderItem[] = [];
}
