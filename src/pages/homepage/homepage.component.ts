import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from '../../components/overview/overview.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, OverviewComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
