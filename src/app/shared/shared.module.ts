import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { WordWrapPipe } from './pipes/word-wrap.pipe';



@NgModule({
  declarations: [
    TitleComponent,
    WordWrapPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
