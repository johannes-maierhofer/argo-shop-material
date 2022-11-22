import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'demos', pathMatch: 'full' },
  {
    path: 'demos',
    loadChildren: () => import('./features/demos/controls/controls.module').then(m => m.ControlsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
