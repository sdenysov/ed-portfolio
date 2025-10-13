import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { HomepageComponent } from '../pages/homepage/homepage.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomepageComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ed-portfolio');
}
