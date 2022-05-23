import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MerchantModule} from './merchant/merchant.module';
import {SharedModule} from '../shared/shared.module';
import {MerchantRegisterModule} from './merchant-register/merchant-register.module';
import { ShipperListComponent } from './shipper/shipper-list/shipper-list.component';
import {ShipperModule} from './shipper/shipper.module';
import { ShipperRegisterListComponent } from './shipper-register/shipper-register-list/shipper-register-list.component';
import {ShipperRegisterModule} from './shipper-register/shipper-register.module';


@NgModule({
  declarations: [AdminComponent],
  exports: [
    AdminComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MerchantModule,
    MerchantRegisterModule,
    ShipperModule,
    ShipperRegisterModule
  ]
})
export class AdminModule { }
