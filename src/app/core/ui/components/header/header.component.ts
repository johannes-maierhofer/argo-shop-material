import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  cartAmount = 0;

  isLoggedIn: boolean = false;
  showButtons: boolean = true;

  constructor(
    public authService: AuthenticationService,
    private snackBar: MatSnackBar,
    // private cart: CartService,
    private header: HeaderService
  ) { }

  ngOnInit() {
    this.subscriptions.add(this.authService.isLoggedIn$
      .subscribe(value => {
          this.isLoggedIn = value;
        }
      ));

    // this.session.loggedInStatus$.subscribe(status => this.isLoggedIn = status);

    this.subscriptions.add(this.header.showHeaderButtons$
      .subscribe(visible => this.showButtons = visible)
    );

    // this.cart.cartValue.subscribe(cart => this.cartAmount = cart.itemCount);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {
        this.snackBar.open('You have been logged out.', 'Close', { duration: 4000 });
      });
  }
}
