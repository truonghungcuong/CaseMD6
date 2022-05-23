import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MerchantRegisterRoutingModule} from './merchant-register-routing.module';
import {MerchantRegisterListComponent} from './merchant-register-list/merchant-register-list.component';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MerchantRegisterListComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    MerchantRegisterRoutingModule,
    ReactiveFormsModule,
  ]
})
export class MerchantRegisterModule {
}
