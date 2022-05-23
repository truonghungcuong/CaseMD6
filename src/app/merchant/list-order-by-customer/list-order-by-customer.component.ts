import {Component, OnInit} from '@angular/core';
import {Merchant} from '../../model/merchant';
import {MerchantService} from '../../service/merchant/merchant.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Order} from '../../model/order';
import {OrderByQueryDto} from '../../model/order-by-query-dto';

@Component({
  selector: 'app-list-order-by-customer',
  templateUrl: './list-order-by-customer.component.html',
  styleUrls: ['./list-order-by-customer.component.css']
})
export class ListOrderByCustomerComponent implements OnInit {
  merchant: Merchant = {};
  orders: OrderByQueryDto[] = [];
  totalOrder: number;

  constructor(private merchantService: MerchantService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const merchantId = paramMap.get('merchantId');
      const userId = paramMap.get('userId');
      this.getAllOrderByCustomerId(merchantId, userId);
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

  getAllOrderByCustomerId(merchantId, userId) {
    this.merchantService.getAllOrderByCustomerId(merchantId, userId).subscribe(ordersBE => {
      this.orders = ordersBE;
      this.totalOrder = this.orders.length;
    });
  }
}
