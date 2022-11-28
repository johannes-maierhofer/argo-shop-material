import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  {
    path: 'demos',
    loadChildren: () => import('./features/demos/controls/controls.module').then(m => m.ControlsModule)
  },
  {
    path: 'catalog',
    loadChildren: () => import('./features/catalog/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/identity/authentication/authentication.module').then(m => m.AuthenticationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
