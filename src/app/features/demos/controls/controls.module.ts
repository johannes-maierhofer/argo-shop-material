import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './../../../core/core.module';
import { MaterialModule } from './../../../core/material/material.module';
import { NotifierComponent } from './pages/notifier/notifier.component';

const routes: Routes = [
  { path: '', redirectTo: 'notifier', pathMatch: "full" },
  { path: 'notifier', component: NotifierComponent },
];

@NgModule({
  declarations: [
    NotifierComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ControlsModule { }
