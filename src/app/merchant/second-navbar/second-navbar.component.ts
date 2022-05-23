import { Component, OnInit } from '@angular/core';
import {Merchant} from '../../model/merchant';
import {MerchantService} from '../../service/merchant/merchant.service';

@Component({
  selector: 'app-second-navbar',
  templateUrl: './second-navbar.component.html',
  styleUrls: ['./second-navbar.component.css']
})
export class SecondNavbarComponent implements OnInit {
  merchant: Merchant = {};
  constructor(private merchantService: MerchantService) { }

  ngOnInit() {
    this.getMerchant();
  }
  getMerchant() {
    this.merchantService.getCurrentUserMerchant().subscribe(
      merchant => {
        this.merchant = merchant;
        console.log(this.merchant);

      }
    );
  }
}
