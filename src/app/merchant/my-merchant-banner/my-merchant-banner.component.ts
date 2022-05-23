import {Component, Input, OnInit} from '@angular/core';
import {Merchant} from '../../model/merchant';

@Component({
  selector: 'app-my-merchant-banner',
  templateUrl: './my-merchant-banner.component.html',
  styleUrls: ['./my-merchant-banner.component.css']
})
export class MyMerchantBannerComponent implements OnInit {

  @Input()
  merchant: Merchant = {};

  constructor() { }

  ngOnInit() {
  }

}
