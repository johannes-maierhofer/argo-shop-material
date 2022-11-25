import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/core/services/header.service';
import { environment } from 'src/environments/environment.prod';
import { ProductService } from '../../services/product.service';
import { NotifierService } from './../../../../../core/notifications/notifier.service';
import { ProductDetailsItem } from './../../models/product-details-item';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: string = '';
  product!: ProductDetailsItem;
  quantity: number = 0;
  imagesUrl: string = environment.imagesUrl;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private header: HeaderService,
    private notifier: NotifierService,
    // private orders: OrderService,
    // private lineItems: LineItemService,
    // private cart: CartService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getDetails({ id })
      .subscribe(result => {
        this.product = result;
      });
    this.header.setHeaderButtonsVisibility(true);
  }

  addItemToCart() {

  }

  setQuantity(no: number) {
    this.quantity = no;
  }

  goBack() {
    this.location.back();
  }

  private showSuccessSnackBar() {
    this.snackBar.open('Item successfully added to cart.', 'Close', { duration: 8000 });
  }

  private showErrorSnackBar() {
    this.snackBar.open('Failed to add your item to the cart.', 'Close', { duration: 8000 });
  }
}
