import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserInfoComponent} from './user-info/user-info.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {CustomerModule} from '../customer/customer.module';


@NgModule({
  declarations: [UserInfoComponent, UserEditComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        CustomerModule
    ]
})
export class UserModule { }
