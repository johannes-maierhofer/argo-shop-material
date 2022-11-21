import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { concat, Subscription } from 'rxjs';
import { HeaderService } from '../../services/header.service';

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
    // private session: SessionService,
    private snackBar: MatSnackBar,
    // private cart: CartService,
    private header: HeaderService,
    // private auth: AuthenticationService
  ) { }

  ngOnInit() {
    // this.session.isCustomerLoggedIn()
    //   .subscribe(
    //     () => {
    //       this.isLoggedIn = true;
    //       this.session.setLoggedInStatus(true);
    //     }
    //   );

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
    concat(
      // this.session.logout(),
      // this.auth.getClientSession()
    ).subscribe(
      () => {
        this.snackBar.open('You have been logged out.', 'Close', { duration: 4000 });
        // this.session.setLoggedInStatus(false);
      },
      err => this.snackBar.open('There was a problem logging you out.', 'Close', { duration: 4000 })
    );
  }
}
