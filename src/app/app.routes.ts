import { Routes } from '@angular/router';
import { PAGES } from '../models/pages';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/homepage/homepage.component').then(m => m.HomepageComponent)
  },
  {
    path: PAGES.WORK,
    loadComponent: () => import('../pages/work/work.component').then(m => m.WorkComponent)
  },
  {
    path: PAGES.ABOUT,
    loadComponent: () => import('../pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: PAGES.CONTACT,
    loadComponent: () => import('../pages/contact/contact.component').then(m => m.ContactComponent)
  }
];

export const PAGES_CONFIG = [
  { name: 'Home', route: '/' },
  { name: 'Work', route: '/' + PAGES.WORK },
  { name: 'About', route: '/' + PAGES.ABOUT },
  { name: 'Contact', route: '/' + PAGES.CONTACT }
];
