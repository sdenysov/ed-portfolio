import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import {SECTION} from "../section-header/section-header.config";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  SECTION = SECTION;

  footerContent = {
    name: 'Zhenya Dobrovolska',
    rights: '© All rights reserved'
  }

  socials = [
    {
      name: 'LinkedIn',
      icon: 'linkedin.png',
      link: 'https://www.linkedin.com/in/zhenyadobrovolska/'
    },
    {
      name: 'Behance',
      icon: 'behance.png',
      link: 'https://www.behance.net/zhenyadobrovolska'
    },
    {
      name: 'Dribbble',
      icon: 'dribbble.png',
      link: 'https://dribbble.com/zhenyadobrovolska'
    }
  ];

  pages = [
    { name: 'Work', route: '/work' },
    { name: 'About', route: '/about' },
    { name: 'Contact', route: '/contact' }
  ];
}
