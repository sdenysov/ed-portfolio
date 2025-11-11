import {Component, ChangeDetectionStrategy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionHeaderComponent} from '../section-header/section-header.component';
import {ProjectsGridComponent} from '../projects-grid/projects-grid.component';
import {SECTION} from '../section-header/section-header.config';
import { Router } from '@angular/router';
import { PAGES } from '../../models/pages';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ProjectsGridComponent, ScrollAnimationDirective],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorksComponent {
  SECTION = SECTION;

  constructor(private router: Router) {}

  onViewAllProjectsClick() {
    this.router.navigate([PAGES.WORK]);
  }
}
