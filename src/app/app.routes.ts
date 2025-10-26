import { Routes } from '@angular/router';
import { PAGES } from '../models/pages';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/homepage/homepage.component').then(m => m.HomepageComponent)
  },
  {
    path: PAGES.CONTACT,
    loadComponent: () => import('../pages/contact/contact.component').then(m => m.ContactComponent)
  }
];
