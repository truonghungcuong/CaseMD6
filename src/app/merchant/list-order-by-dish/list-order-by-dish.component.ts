import {Component, OnInit} from '@angular/core';
import {Merchant} from '../../model/merchant';
import {Order} from '../../model/order';
import {MerchantService} from '../../service/merchant/merchant.service';
import {AuthService} from '../../service/auth/auth.service';
import {Dish} from '../../model/dish';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {DishService} from '../../service/dish/dish.service';

@Component({
  selector: 'app-list-order-by-dish',
  templateUrl: './list-order-by-dish.component.html',
  styleUrls: ['./list-order-by-dish.component.css']
})
export class ListOrderByDishComponent implements OnInit {
  merchant: Merchant = {};
  orders: Order[] = [];
  dish: Dish = {};

  totalOrder: number;
  constructor(private merchantService: MerchantService,
              private activatedRoute: ActivatedRoute,
              private dishService:DishService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.getAllOrderByDish(id);
      this.getDishById(id)
    });
  }

  ngOnInit() {
    this.getMerchant();
  }
  getMerchant() {
    this.merchantService.getCurrentUserMerchant().subscribe(
      merchant => this.merchant = merchant
    );
  }

  getDishById(id){
    this.dishService.getById(id).subscribe(dishBE => {
      this.dish = dishBE;
    })
  }

  getAllOrderByDish(id) {
    this.merchantService.getAllOrderByDishId(id).subscribe(ordersBE => {
      this.orders = ordersBE;
      this.totalOrder = this.orders.length;
    });
  }
}
