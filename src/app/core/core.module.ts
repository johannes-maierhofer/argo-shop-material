import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { NotifierComponent } from './notifications/components/notifier.component';
import { HeaderComponent } from './ui/components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotifierComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatIconModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    NotifierComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // prevent the module being imported more than once
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
