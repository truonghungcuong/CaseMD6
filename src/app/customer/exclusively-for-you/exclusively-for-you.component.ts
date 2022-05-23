import {Component, Input, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish/dish.service';

@Component({
  selector: 'app-exclusively-for-you',
  templateUrl: './exclusively-for-you.component.html',
  styleUrls: ['./exclusively-for-you.component.css']
})
export class ExclusivelyForYouComponent implements OnInit {

  NUMBERS = 4;

  @Input()
  id: number;

  dishesForYou: Dish[] = [];

  constructor(private dishService: DishService) {
  }

  ngOnInit() {
    this.getDishesForYou();
  }

  getDishesForYou() {
    this.dishService.findDishesWithSameCategoryWith(this.id, this.NUMBERS).subscribe(
      dishes => {
        this.dishesForYou = dishes;
        console.log(this.dishesForYou);
      }
    );
  }

}
