import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShipperRegisterListComponent} from './shipper-register-list/shipper-register-list.component';


const routes: Routes = [
  {
    path: 'list-register',
    component: ShipperRegisterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipperRegisterRoutingModule {
}
