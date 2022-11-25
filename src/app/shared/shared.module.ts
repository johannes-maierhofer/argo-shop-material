import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { WordWrapPipe } from './pipes/word-wrap.pipe';



@NgModule({
  declarations: [
    TitleComponent,
    WordWrapPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WordWrapPipe
  ]
})
export class SharedModule { }
