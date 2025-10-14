import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
  label = '(Case studies)';
  title = 'Works';
  viewAllText = 'View all projects';

  projects = [
    {
      id: 'project-management',
      title: 'Project management design system',
      image: 'images/project-management-preview.png',
      type: 'design-system'
    },
    {
      id: 'esports-tracker',
      title: 'Esports games tracker web app',
      image: 'images/esports-tracker-preview.png',
      type: 'web-app'
    }
  ];
}
