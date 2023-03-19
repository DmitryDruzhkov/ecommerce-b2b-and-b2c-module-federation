import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { environment } from '@ecommerce-b2b-and-b2c/shared/environments';

export const appRoutes: Route[] = [
  { path: '', loadComponent: () => import('@ecommerce-b2b-and-b2c/auth/features').then(m => m.AuthComponent) },
  {
    path: 'cart',
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: environment.mfe.cart,
        exposedModule: './Module'
      })
      .then(m => m.AppModule)
  }
  /* {
    path: 'cart',
    loadChildren: () => loadRemoteModule('cart', './Module')
      .then(m => m.AppModule)
  } */
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