import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';


const routes: Routes = [
  {
    path: 'merchant',
    loadChildren: () => import('./merchant/merchant.module').then(module => module.MerchantModule)
  },
  {
    path: 'shipper',
    loadChildren: () => import('./shipper/shipper.module').then(module => module.ShipperModule)
  },
  {
    path: 'merchant-register',
    loadChildren: () => import('./merchant-register/merchant-register.module').then(module => module.MerchantRegisterModule)
  },
  {
    path: 'shipper-register',
    loadChildren: () => import('./shipper-register/shipper-register.module').then(module => module.ShipperRegisterModule)
  },
  {
    path: '',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
