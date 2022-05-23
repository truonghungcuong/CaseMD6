import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MerchantRegisterListComponent} from './merchant-register-list/merchant-register-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: MerchantRegisterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRegisterRoutingModule { }
