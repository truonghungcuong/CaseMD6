import {Component, Input, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish/dish.service';

@Component({
  selector: 'app-people-also-like',
  templateUrl: './people-also-like.component.html',
  styleUrls: ['./people-also-like.component.css']
})
export class PeopleAlsoLikeComponent implements OnInit {

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
      }
    );
  }

}
