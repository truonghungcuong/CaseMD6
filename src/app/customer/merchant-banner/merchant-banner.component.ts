import {Component, Input, OnInit} from '@angular/core';
import {Merchant} from '../../model/merchant';

@Component({
  selector: 'app-merchant-banner',
  templateUrl: './merchant-banner.component.html',
  styleUrls: ['./merchant-banner.component.css']
})
export class MerchantBannerComponent implements OnInit {

  @Input()
  merchant: Merchant = {};

  constructor() { }

  ngOnInit() {
  }

}
