import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { HeaderService } from 'src/app/core/services/header.service';
import { environment } from 'src/environments/environment';
import { ProductListItem } from '../../models/product-list-item';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  cols = 4;

  length = 0;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20];

  imagesUrl: string = environment.imagesUrl;

  products: ProductListItem[] = [];
  private subscriptions = new Subscription();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private productService: ProductService,
    private header: HeaderService)
  { }

  ngOnInit() {
    this.getProducts(1, this.pageSize);
    this.header.setHeaderButtonsVisibility(true);

    this.subscriptions.add(this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints['(max-width: 599.98px) and (orientation: portrait)'] || result.breakpoints['(max-width: 599.98px) and (orientation: landscape)']) {
          this.cols = 1;
        }
        else if (result.breakpoints['(min-width: 1280px) and (orientation: portrait)'] || result.breakpoints['(min-width: 1280px) and (orientation: landscape)']) {
          this.cols = 4;
        } else {
          this.cols = 3;
        }
      }
    }));
  }

  private getProducts(page: number, pageSize: number) {
    console.log('product-list.getProducts()');
    this.productService.getList({
      page,
      pageSize
    }).subscribe(result => {
      console.log(`received ${result.totalItemCount} products.`);
      this.products = result.items;
      this.length = result.totalItemCount;
    });
  }

  loadPage(event: PageEvent) {
    this.getProducts(event.pageIndex + 1, event.pageSize);
  }

  trackProduct(index: number, item: ProductListItem) {
    return `${item.id}-${index}`;
  }
}
