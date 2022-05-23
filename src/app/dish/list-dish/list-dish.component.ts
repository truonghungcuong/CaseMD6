import {Component, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish/dish.service';

@Component({
  selector: 'app-list-dish',
  templateUrl: './list-dish.component.html',
  styleUrls: ['./list-dish.component.css']
})
export class ListDishComponent implements OnInit {
  dishes: Dish[] = [];

  constructor(private dishService: DishService) {
  }

  ngOnInit() {
    this.getAllDishes();
  }

  getAllDishes() {
    this.dishService.getAll().subscribe(listDish => {
      this.dishes = listDish;
    });
  }
}
