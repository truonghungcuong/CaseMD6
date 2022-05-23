import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {CartDetail} from '../../model/cart-detail';
import {CartService} from '../../service/cart/cart.service';
import {Cart} from '../../model/cart';

@Component({
  selector: 'app-navbar-customer',
  templateUrl: './navbar-customer.component.html',
  styleUrls: ['./navbar-customer.component.css']
})
export class NavbarCustomerComponent implements OnInit, OnChanges {

  @Input() refreshNum;

  currentUser: any;
  loggedIn: boolean;
  carts: Cart[] = [];

  isMerchant: boolean;

  constructor(private authService: AuthService,
              private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.checkLoginAndGetInfo();
  }

  checkLoginAndGetInfo() {
    this.loggedIn = this.authService.isLoggedIn();
    this.isMerchant = this.authService.isMerchant();
    if (this.loggedIn) {
      this.currentUser = this.authService.getCurrentUser();
      this.getCarts();
    }
  }

  logout() {
    this.authService.logout();
    this.loggedIn = false;
  }

  getCarts() {
    this.cartService.getCurrentUserCarts().subscribe(
      (response) => {
        this.carts = (response as Cart[]);
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.getCarts();
  }
}
