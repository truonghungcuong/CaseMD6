import { Component, OnInit } from '@angular/core';
import {Merchant} from '../../model/merchant';
import {MerchantService} from '../../service/merchant/merchant.service';
import {Dish} from '../../model/dish';
import {DishService} from '../../service/dish/dish.service';
import {AuthService} from '../../service/auth/auth.service';
import {Order} from '../../model/order';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  merchant: Merchant = {};
  dishes: Dish[] = [];

  constructor(private merchantService: MerchantService,
              private dishService: DishService,
              private authService: AuthService,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.getMerchant();
    this.getAllMerchantDishes();
  }

  getMerchant() {
    this.merchantService.getCurrentUserMerchant().subscribe(
      merchant => {
        this.merchant = merchant;
        if (!merchant.active) {
          this.router.navigateByUrl("/merchant/banned");
        }
      }
    );
  }

  getAllMerchantDishes() {
    const userId = this.authService.getCurrentUserId();
    this.dishService.getAllMerchantDishesByOwnerId(userId).subscribe(dishesFromBE => {
      this.dishes = dishesFromBE as Dish[];
    });
  }
}
