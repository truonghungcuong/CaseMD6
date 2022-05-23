import {Component, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {MerchantService} from '../../service/merchant/merchant.service';
import {Merchant} from '../../model/merchant';
import {DishDto} from '../../model/dish-dto';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-count-orders-by-dish',
  templateUrl: './count-orders-by-dish.component.html',
  styleUrls: ['./count-orders-by-dish.component.css']
})
export class CountOrdersByDishComponent implements OnInit {
  merchant: Merchant = {};
  dishDTOs: DishDto[] = [];

  constructor(private merchantService: MerchantService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.getAllDishDto(id);
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

  getAllDishDto(id) {
    this.merchantService.countMerchantByDish(id).subscribe(dishBE => {
      this.dishDTOs = dishBE;
    });
  }
}
