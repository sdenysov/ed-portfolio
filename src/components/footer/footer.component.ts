import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import {SECTION} from "../section-header/section-header.config";
import { RouterModule } from '@angular/router';
import { PAGES_CONFIG } from '../../app/app.routes';
import {PAGES} from "../../models/pages";

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

  pages = PAGES_CONFIG.filter(page => page.route !== '/' + PAGES.HOME && page.route !== '/');
}
