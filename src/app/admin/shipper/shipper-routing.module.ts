import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShipperListComponent} from './shipper-list/shipper-list.component';


const routes: Routes = [
  {
    path:'list-shipper',
    component: ShipperListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipperRoutingModule { }
