import {Component, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish/dish.service';

@Component({
  selector: 'app-most-purchased-dishes',
  templateUrl: './most-purchased-dishes.component.html',
  styleUrls: ['./most-purchased-dishes.component.css']
})
export class MostPurchasedDishesComponent implements OnInit {

  mostPurchasedDishes: Dish[] = [];

  constructor(private dishService: DishService) {
  }

  ngOnInit() {
    this.getMostPurchasedDishes();
  }

  getMostPurchasedDishes() {
    this.dishService.getMostPurchasedDishes().subscribe(
      (response) => this.mostPurchasedDishes = response as Dish[]
    );
  }
}
