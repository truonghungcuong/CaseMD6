import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MerchantListComponent} from './merchant-list/merchant-list.component';
import {MerchantViewComponent} from './merchant-view/merchant-view.component';


const routes: Routes = [
  {
    path: '',
    component: MerchantListComponent
  },
  {
    path:'view/:id',
    component: MerchantViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
