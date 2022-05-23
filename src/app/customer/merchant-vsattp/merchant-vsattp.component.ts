import {Component, Input, OnInit} from '@angular/core';
import {Merchant} from '../../model/merchant';

@Component({
  selector: 'app-merchant-vsattp',
  templateUrl: './merchant-vsattp.component.html',
  styleUrls: ['./merchant-vsattp.component.css']
})
export class MerchantVsattpComponent implements OnInit {

  @Input()
  merchant: Merchant;

  constructor() {
  }

  ngOnInit() {
  }

}
