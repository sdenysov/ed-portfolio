import { Component, ChangeDetectionStrategy } from '@angular/core';
import {ProfileComponent} from "../../components/profile/profile.component";

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  imports: [
    ProfileComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {}
