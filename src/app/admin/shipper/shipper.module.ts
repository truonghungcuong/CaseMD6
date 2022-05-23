import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipperRoutingModule } from './shipper-routing.module';
import {ShipperListComponent} from './shipper-list/shipper-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    ShipperListComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ShipperRoutingModule,
    ReactiveFormsModule
  ]
})
export class ShipperModule { }
