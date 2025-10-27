import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProfileComponent } from '../../components/profile/profile.component';
import { CoreValuesComponent } from '../../components/core-values/core-values.component';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  imports: [
    ProfileComponent,
    CoreValuesComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {}
