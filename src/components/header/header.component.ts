import {Component, Renderer2, Inject, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { PAGES_CONFIG } from '../../app/app.routes';
import {RouterLink} from "@angular/router";
import { filter, map } from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  profileImageUrl = 'images/profile-header.png';
  name = 'Zhenya Dobrovolska';
  greeting = '(Hi there)';
  isMenuOpen = false;
  isHomePage = true;

  // Menu configuration combined with PAGES_CONFIG
  menuItems = PAGES_CONFIG.map((page, idx) => ({
    title: page.name,
    number: `(0${idx + 1})`,
    route: page.route
  }));

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document
  ) {
    // Listen to route changes to detect home page
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url === '/'),
      untilDestroyed(this)
    ).subscribe(isHome => {
      this.isHomePage = isHome;
      this.cdr.detectChanges();
    });

    // Set initial state
    this.isHomePage = this.router.url === '/';
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Prevent body scroll when menu is open using Renderer2
    this.isMenuOpen
      ? this.renderer.setStyle(this.document.body, 'overflow', 'hidden')
      : this.renderer.removeStyle(this.document.body, 'overflow');
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
