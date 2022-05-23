import {Component, OnInit} from '@angular/core';
import {MerchantService} from '../../../service/merchant/merchant.service';
import {Merchant} from '../../../model/merchant';
import {AuthService} from '../../../service/auth/auth.service';
import {NotificationService} from '../../../service/notification/notification.service';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.css']
})
export class MerchantListComponent implements OnInit {
  merchants: Merchant[] = [];

  constructor(private merchantService: MerchantService
             ) {
  }

  ngOnInit() {
    this.getAllMerchant();
  }

  toggleMerchant(merchant: Merchant) {
    merchant.active = !merchant.active;
    this.merchantService.updateActiveMerchant(merchant.id, merchant).subscribe(() => {
      this.getAllMerchant();
    });
  }


  getAllMerchant() {
    this.merchantService.getAll().subscribe((merchantsFromBE) => {
      this.merchants = merchantsFromBE;
      console.log(this.merchants);
    });
  }
}
