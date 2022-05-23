import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DishesComponent} from './dishes/dishes.component';
import {InfoComponent} from './info/info.component';
import {ListOrderByDishComponent} from './list-order-by-dish/list-order-by-dish.component';
import {DishEditComponent} from './dish-edit/dish-edit.component';
import {DishCreateComponent} from './dish-create/dish-create.component';
import {OrderListComponent} from './order-list/order-list.component';
import {CountOrdersByDishComponent} from './count-orders-by-dish/count-orders-by-dish.component';
import {CountOrdersByUserComponent} from './count-orders-by-user/count-orders-by-user.component';
import {ListOrderByCustomerComponent} from './list-order-by-customer/list-order-by-customer.component';
import {OrderViewComponent} from './order-view/order-view.component';
import {RevenueComponent} from './revenue/revenue.component';
import {BannedComponent} from './banned/banned.component';

const routes: Routes = [

  {
    path: '',
    component: DishesComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'dishes/:id/orders',
    component: ListOrderByDishComponent
  },
  {
    path: 'dish/create',
    component: DishCreateComponent
  },
  {
    path: 'orders',
    component: OrderListComponent
  },
  {
    path: ':id/orders/dishes',
    component: CountOrdersByDishComponent
  },
  {
    path: ':id/orders/users',
    component: CountOrdersByUserComponent
  },
  {
    path: ':merchantId/users/:userId/orders',
    component: ListOrderByCustomerComponent
  },
  {
    path: 'dish/edit/:id',
    component: DishEditComponent
  },
  {
    path: 'orders/view/:orderId',
    component: OrderViewComponent
  },
  {
    path: ':id/revenue',
    component: RevenueComponent
  },
  {
    path: 'dish/create1',
    component: DishCreateComponent
  },
  {
    path: 'banned',
    component: BannedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule {
}
