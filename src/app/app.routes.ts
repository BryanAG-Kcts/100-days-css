import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    async loadComponent() {
      const c = await import('./pages/home/home.component');
      return c.HomeComponent;
    },
  },
];
