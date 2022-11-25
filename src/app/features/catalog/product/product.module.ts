import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/core/material/material.module';
import { CoreModule } from './../../../core/core.module';
import { SharedModule } from './../../../shared/shared.module';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: "full" },
  { path: 'products', component: ProductListComponent },
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
