import {Component, Renderer2, Inject, ChangeDetectionStrategy, ChangeDetectorRef, HostListener} from '@angular/core';
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
  greeting = '(Hey there)';
  isMenuOpen = false;
  isHomePage = true;
  isScrolled = false;

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

  @HostListener('window:scroll')
  onWindowScroll() {
    // Only track scroll on homepage
    if (this.isHomePage) {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const newScrollState = scrollPosition > 0;
      
      if (this.isScrolled !== newScrollState) {
        this.isScrolled = newScrollState;
        this.cdr.detectChanges();
      }
    }
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
