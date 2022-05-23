import {Component, OnInit} from '@angular/core';
import {Merchant} from '../../model/merchant';
import {MerchantService} from '../../service/merchant/merchant.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { CustomerDto } from 'src/app/model/customer-dto';

@Component({
  selector: 'app-count-orders-by-user',
  templateUrl: './count-orders-by-user.component.html',
  styleUrls: ['./count-orders-by-user.component.css']
})
export class CountOrdersByUserComponent implements OnInit {
  merchant: Merchant = {};
  customerDTOs: CustomerDto[] = [];

  constructor(private merchantService: MerchantService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.getAllCustomerDto(id);
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
  getAllCustomerDto(id) {
    this.merchantService.countOrderByUser(id).subscribe(customerBE => {
      this.customerDTOs = customerBE;
    });
  }
}
