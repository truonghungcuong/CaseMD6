import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './customer.component';
import {MerchantRegisterComponent} from './merchant-register/merchant-register.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {DetailFoodComponent} from './detail-food/detail-food.component';
import {OrderSuccessComponent} from './order-success/order-success.component';
import {TrackOrderComponent} from './track-order/track-order.component';
import {ShipperRegisterComponent} from './shipper-register/shipper-register/shipper-register.component';
import {MerchantComponent} from './merchant/merchant.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerComponent
  },
  {
    path: 'merchant-register',
    component: MerchantRegisterComponent
  },
  {
    path: 'shipper-register',
    component: ShipperRegisterComponent
  },
  {
    path: 'checkout/:merchant-id',
    component: CheckoutComponent
  },
  {
    path: 'food/:id',
    component: DetailFoodComponent,
  },
  {
    path: 'order-success/:orderId',
    component: OrderSuccessComponent
  },
  {
    path: 'track-order/:orderId',
    component: TrackOrderComponent
  },
  {
    path: 'merchant/:id',
    component: MerchantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
