import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipperRegisterRoutingModule } from './shipper-register-routing.module';
import {ShipperRegisterListComponent} from './shipper-register-list/shipper-register-list.component';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ShipperRegisterListComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ShipperRegisterRoutingModule,
    ReactiveFormsModule
  ]
})
export class ShipperRegisterModule { }
