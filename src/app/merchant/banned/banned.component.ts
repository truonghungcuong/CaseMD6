import { Component, OnInit } from '@angular/core';
import {Merchant} from '../../model/merchant';
import {MerchantService} from '../../service/merchant/merchant.service';

@Component({
  selector: 'app-banned',
  templateUrl: './banned.component.html',
  styleUrls: ['./banned.component.css']
})
export class BannedComponent implements OnInit {

  merchant: Merchant = {};

  constructor(private merchantService: MerchantService) { }

  ngOnInit() {
    this.getMerchant();
  }

  getMerchant() {
    this.merchantService.getCurrentUserMerchant().subscribe(
      (merchant) => this.merchant = merchant
    )
  }

}
