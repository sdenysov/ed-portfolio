import { Component, Renderer2, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  profileImageUrl = 'images/profile.png';
  name = 'Zhenya Dobrovolska';
  greeting = '(Hi there)';
  isMenuOpen = false;

  // Menu configuration
  menuItems = [
    { title: 'Home', number: '(01)' },
    { title: 'Works', number: '(02)' },
    { title: 'About', number: '(03)' },
    { title: 'Contact', number: '(04)' }
  ];

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
