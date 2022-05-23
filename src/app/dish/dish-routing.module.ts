import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDishComponent} from './list-dish/list-dish.component';
import {DishCreateComponent} from './dish-create/dish-create.component';
import {DishEditComponent} from './dish-edit/dish-edit.component';
import {DishDeleteComponent} from './dish-delete/dish-delete.component';


const routes: Routes = [
  {
    path: '',
    component: ListDishComponent
  },
  {
    path: 'create',
    component: DishCreateComponent
  },
  {
    path: 'edit/:id',
    component: DishEditComponent
  },
  {
    path: 'delete/:id',
    component: DishDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishRoutingModule { }
