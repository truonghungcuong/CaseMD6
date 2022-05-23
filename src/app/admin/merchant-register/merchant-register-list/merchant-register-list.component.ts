import {Component, OnInit} from '@angular/core';
import {MerchantRegister} from '../../../model/merchant-register';
import {MerchantRegisterService} from '../../../service/merchant-register/merchant-register.service';
import {NotificationService} from '../../../service/notification/notification.service';

@Component({
  selector: 'app-merchant-register-list',
  templateUrl: './merchant-register-list.component.html',
  styleUrls: ['./merchant-register-list.component.css']
})
export class MerchantRegisterListComponent implements OnInit {
  merchantRegisters: MerchantRegister[] = [];

  constructor(private merchantRegisterService: MerchantRegisterService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getAllMerchantRegisterRequest();
  }


  submitAcceptRegisterRequest(merchantRegister: MerchantRegister) {
    merchantRegister.user;
    this.merchantRegisterService.acceptRegisterRequest(merchantRegister.id, merchantRegister).subscribe(() => {
      this.notificationService.showTopRightMessage('success','Duyệt thành công')
      this.getAllMerchantRegisterRequest();
    });
  }

  submitRefuseRegisterRequest(merchantRegister: MerchantRegister) {
    merchantRegister.user;
    this.merchantRegisterService.refuseRegisterRequest(merchantRegister.id, merchantRegister).subscribe(() => {
      this.notificationService.showTopRightMessage('success','Đã từ chối')
      this.getAllMerchantRegisterRequest();
    });
  }

  getAllMerchantRegisterRequest() {
    this.merchantRegisterService.getAllMerchantRequest().subscribe((merchantRegisterFromBE) => {
      this.merchantRegisters = merchantRegisterFromBE;
      console.log(this.merchantRegisters);
    });
  }
}
