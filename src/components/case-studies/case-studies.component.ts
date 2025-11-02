import {Component, ChangeDetectionStrategy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionHeaderComponent} from '../section-header/section-header.component';
import {ProjectsGridComponent} from '../projects-grid/projects-grid.component';
import {SECTION} from '../section-header/section-header.config';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ProjectsGridComponent],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaseStudiesComponent {
  SECTION = SECTION;
}
