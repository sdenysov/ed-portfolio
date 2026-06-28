import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import {SectionHeaderComponent} from "../section-header/section-header.component";
import { SECTION } from '../section-header/section-header.config';
import {ScrollAnimationDirective} from "../../directives/scroll-animation.directive";

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  imports: [
    SectionHeaderComponent,
    ScrollAnimationDirective
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  profileImageUrl = 'images/profile/profile.png';
  profileInfoText = "Hi, I'm Zhenya. I'm a product designer who's spent 5 years working inside fast-moving teams which means I know exactly what breaks down when design and development aren't aligned. Now I work directly with businesses to fix that.";
  SECTION = SECTION;
  isMobile = window.innerWidth <= 767;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 767;
  }
}
