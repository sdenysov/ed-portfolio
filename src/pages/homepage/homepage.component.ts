import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from '../../components/overview/overview.component';
import { WorksComponent } from '../../components/works/works.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, OverviewComponent, WorksComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
