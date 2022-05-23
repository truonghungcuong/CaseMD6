import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MerchantService} from '../../../service/merchant/merchant.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-merchant-view',
  templateUrl: './merchant-view.component.html',
  styleUrls: ['./merchant-view.component.css']
})
export class MerchantViewComponent implements OnInit {
  merchantForm: FormGroup;
  id: number;

  constructor(private merchantService: MerchantService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getMerchant(this.id);
    });
  }

  ngOnInit() {
  }

  getMerchant(id: number) {
    return this.merchantService.findById(id).subscribe(merchant => {
      this.merchantForm = new FormGroup({
        name: new FormControl(merchant.name),
        address: new FormControl(merchant.address),
        phone: new FormControl(merchant.phone),
        openTime: new FormControl(merchant.openTime),
        closeTime: new FormControl(merchant.closeTime),
        vsattp: new FormControl(merchant.vsattp),
        user: new FormControl(merchant.user.email),
      });
    });
  }

  submit(){
    this.router.navigateByUrl('admin/merchant');
  }
}
