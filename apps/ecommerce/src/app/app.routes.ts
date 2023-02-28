import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', loadComponent: () => import('@ecommerce-b2b-and-b2c/auth/features').then(m => m.AuthComponent) },
];
