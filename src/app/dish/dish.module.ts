import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishRoutingModule } from './dish-routing.module';
import { ListDishComponent } from './list-dish/list-dish.component';
import { DishCreateComponent } from './dish-create/dish-create.component';
import { DishEditComponent } from './dish-edit/dish-edit.component';
import { DishDeleteComponent } from './dish-delete/dish-delete.component';


@NgModule({
  declarations: [ListDishComponent, DishCreateComponent, DishEditComponent, DishDeleteComponent],
  imports: [
    CommonModule,
    DishRoutingModule
  ]
})
export class DishModule { }
