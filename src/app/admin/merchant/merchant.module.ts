import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MerchantRoutingModule} from './merchant-routing.module';
import {MerchantListComponent} from './merchant-list/merchant-list.component';
import {SharedModule} from '../../shared/shared.module';
import {CustomerModule} from '../../customer/customer.module';
import { MerchantViewComponent } from './merchant-view/merchant-view.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        MerchantListComponent,
        MerchantViewComponent
    ],
    exports: [
        MerchantListComponent
    ],

    imports: [
        SharedModule,
        CommonModule,
        MerchantRoutingModule,
        CustomerModule,
        ReactiveFormsModule,
    ]
})
export class MerchantModule {
}
