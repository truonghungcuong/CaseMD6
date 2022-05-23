import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {OrderService} from '../../service/order/order.service';
import {OrderDto} from '../../model/order-dto';
import {Merchant} from '../../model/merchant';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  orderId: number;
  orderDto: OrderDto = {cart: {cartDetails: []}, merchant: {}, deliveryInfo: {}};
  merchant: Merchant = {};
  orderStatus;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.orderId = +paramMap.get('orderId');
    });
  }

  ngOnInit() {
    this.getOrder();
  }

  getOrder() {
    this.orderService.getOrder(this.orderId).subscribe(
      (order) => {
        this.orderDto = order;
        switch (this.orderDto.status) {
          case -1: {
            this.orderStatus = 'Đã hủy';
            break;
          }
          case 1: {
            this.orderStatus = 'Đã xác nhận';
            break;
          }
          case 0:
          default: {
            this.orderStatus = 'Chờ xác nhận';
            break;
          }
        }
      }
    );
  }

}
