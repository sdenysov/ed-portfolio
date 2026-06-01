import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsGridComponent } from '../projects-grid/projects-grid.component';
import { ProjectId } from '../projects-grid/projects.config';

@Component({
  selector: 'app-explore-more',
  standalone: true,
  imports: [CommonModule, ProjectsGridComponent],
  templateUrl: './explore-more.component.html',
  styleUrl: './explore-more.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExploreMoreComponent {
  @Input() currentProjectId: ProjectId = ProjectId.PROJECT_MANAGEMENT;
}
