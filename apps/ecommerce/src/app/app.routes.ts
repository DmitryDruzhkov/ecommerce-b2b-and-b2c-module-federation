import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', loadComponent: () => import('@ecommerce-b2b-and-b2c/auth/features').then(m => m.AuthComponent) },
  /* { path: 'profile', loadChildren: () => import('@ecommerce-b2b-and-b2c/profile').then(m => m.AppModule) } */
  /* {
    path: 'cart',
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4204/remoteEntry.js',
        exposedModule: './Component'
      })
      .then(m => m.AppModule)
  } */
  { path: 'cart', loadChildren: () => import('cart/Module').then(m => m.AppModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledNonBlocking',
      anchorScrolling: 'enabled',
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}