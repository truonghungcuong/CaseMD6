import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MerchantService} from '../../service/merchant/merchant.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Merchant} from '../../model/merchant';
import {OrderDto} from '../../model/order-dto';
import {OrderService} from '../../service/order/order.service';
import {Order} from '../../model/order';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  orderId: number;
  orderDto: OrderDto = {cart: {cartDetails: []}, merchant: {}, deliveryInfo: {}};
  merchant: Merchant = {};

  constructor(private merchantService: MerchantService,
              private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private notificationService: NotificationService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.orderId = +paramMap.get('orderId');
    });
  }

  getOrder() {
    this.orderService.getOrder(this.orderId).subscribe(
      (order) => {
        this.orderDto = order;
        });
      }

  ngOnInit() {
    this.getOrder();
  }

  submitAcceptOrderByMerchant() {
    this.merchantService.merchantAcceptOrder(this.orderId).subscribe(() => {
      this.orderDto.status = 1;
      this.notificationService.showTopRightMessage('success', 'Đã xác nhận đơn hàng');
    });
  }
}
