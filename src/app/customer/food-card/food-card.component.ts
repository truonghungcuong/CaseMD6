import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dish} from '../../model/dish';
import {Router} from '@angular/router';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent implements OnInit {

  @Input()
  dish: Dish = {};

  @Output()
  redirect = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  redirectToDish(dishId: number) {
    this.router.navigateByUrl(`/home/food/${dishId}`);
  }

  redirectToMerchant(merchantId: number) {
    this.router.navigateByUrl(`/home/merchant/${merchantId}`);
  }

  clickLink() {
    this.redirect.emit('user-clicked-link');
  }

}
