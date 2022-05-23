import {Component, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish/dish.service';
import {User} from '../../model/user';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  dishes: Dish[] = [];
  user: User = {};
  userId: number;

  constructor(private dishService: DishService,
              private authService: AuthService) {
    this.authService.currentUser.subscribe(value => this.user = value);
  }

  ngOnInit() {
    this.getAllMerchantDishes();
  }

  getAllMerchantDishes() {
    this.userId = this.authService.getCurrentUserId();
    this.dishService.getAllMerchantDishesByOwnerId(this.userId).subscribe(dishesFromBE => {
      this.dishes = dishesFromBE as Dish[];
    });
  }

}
