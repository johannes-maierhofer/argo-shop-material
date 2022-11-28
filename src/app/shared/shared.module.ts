import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { WordWrapPipe } from './pipes/word-wrap.pipe';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const materialModules = [
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatToolbarModule,
  MatBadgeModule,
  MatPaginatorModule,
  MatGridListModule,
  MatCardModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    TitleComponent,
    WordWrapPipe
  ],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    CommonModule,
    WordWrapPipe,
    ...materialModules
  ]
})
export class SharedModule { }
