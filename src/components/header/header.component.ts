import { Component, Renderer2, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { PAGES_CONFIG } from '../../app/app.routes';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  profileImageUrl = 'images/profile.png';
  name = 'Zhenya Dobrovolska';
  greeting = '(Hi there)';
  isMenuOpen = false;

  // Menu configuration combined with PAGES_CONFIG
  menuItems = PAGES_CONFIG.map((page, idx) => ({
    title: page.name,
    number: `(0${idx + 1})`,
    route: page.route
  }));

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Prevent body scroll when menu is open using Renderer2
    this.isMenuOpen
      ? this.renderer.setStyle(this.document.body, 'overflow', 'hidden')
      : this.renderer.removeStyle(this.document.body, 'overflow');
  }
}
