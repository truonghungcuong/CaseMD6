import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerComponent} from './customer.component';
import {FooterComponent} from './shared/footer/footer.component';
import {SharedModule} from '../shared/shared.module';
import {MerchantRegisterComponent} from './merchant-register/merchant-register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MostPurchasedDishesComponent} from './most-purchased-dishes/most-purchased-dishes.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {DetailFoodComponent} from './detail-food/detail-food.component';
import {MerchantBannerComponent} from './merchant-banner/merchant-banner.component';
import {MerchantSecondNavbarComponent} from './merchant-second-navbar/merchant-second-navbar.component';
import {CartsTableComponent} from './carts-table/carts-table.component';
import {MerchantVsattpComponent} from './merchant-vsattp/merchant-vsattp.component';
import {PeopleAlsoLikeComponent} from './people-also-like/people-also-like.component';
import {ExclusivelyForYouComponent} from './exclusively-for-you/exclusively-for-you.component';
import {OrderSuccessComponent} from './order-success/order-success.component';
import {TrackOrderComponent} from './track-order/track-order.component';
import {CartTableCheckoutComponent} from './cart-table-checkout/cart-table-checkout.component';
import {ShipperRegisterComponent} from './shipper-register/shipper-register/shipper-register.component';
import {MerchantComponent} from './merchant/merchant.component';
import {FoodCardComponent} from './food-card/food-card.component';
import {JoinUsComponent} from './join-us/join-us.component';

@NgModule({
  declarations: [CustomerComponent, FooterComponent, MerchantRegisterComponent,
    MostPurchasedDishesComponent, CheckoutComponent, DetailFoodComponent, MerchantBannerComponent,
    MerchantSecondNavbarComponent, CartsTableComponent, MerchantVsattpComponent,
    PeopleAlsoLikeComponent, ExclusivelyForYouComponent, OrderSuccessComponent,
    TrackOrderComponent, CartTableCheckoutComponent,
    ShipperRegisterComponent, MerchantComponent, FoodCardComponent, JoinUsComponent],
  exports: [
    FooterComponent
  ],

  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CustomerModule {
}
