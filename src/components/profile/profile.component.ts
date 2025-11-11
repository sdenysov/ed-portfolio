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
  profileMobileImageUrl = 'images/profile/profile-mobile.png';
  profileInfoText = 'Hi, I’m Zhenya — product designer with a passion for solving complex problems through thoughtful, user-centered design. With 5 years of experience in the digital space, I focus on creating functional, accessible, and visually engaging experiences that drive real impact.';
  SECTION = SECTION;
  isMobile = window.innerWidth <= 767;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 767;
  }
}
