import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
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
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    NotifierComponent
  ]
})
export class CoreModule { }
