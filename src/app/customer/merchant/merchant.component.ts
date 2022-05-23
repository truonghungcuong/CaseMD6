import {Component, OnInit} from '@angular/core';
import {Merchant} from '../../model/merchant';
import {DishService} from '../../service/dish/dish.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {MerchantService} from '../../service/merchant/merchant.service';
import {Dish} from '../../model/dish';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

  id: number;
  merchant: Merchant = {};
  dishes: Dish[] = [];

  countChanges = 0;

  constructor(private dishService: DishService,
              private merchantService: MerchantService,
              private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit() {
    this.getMerchant();
    this.getDishes();
    document.getElementById('app-merchant-banner').scrollIntoView(true);

  }

  getMerchant() {
    this.merchantService.viewMerchantInfo(this.id).subscribe(
      merchant => {
        this.merchant = merchant;
      }
    );
  }

  getDishes() {
    this.dishService.getAllMerchantDishesByMerchantId(this.id).subscribe(
      dishes => this.dishes = dishes
    );
  }

}
