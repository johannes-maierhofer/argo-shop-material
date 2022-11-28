import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
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
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ControlsModule { }
