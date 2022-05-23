import {Component, OnInit} from '@angular/core';
import {ShipperRegister} from '../../../model/shipper-register';
import {ShipperRegisterService} from '../../../service/shipper-register/shipper-register.service';
import {MerchantRegister} from '../../../model/merchant-register';
import {NotificationService} from '../../../service/notification/notification.service';

@Component({
  selector: 'app-shipper-register-list',
  templateUrl: './shipper-register-list.component.html',
  styleUrls: ['./shipper-register-list.component.css']
})
export class ShipperRegisterListComponent implements OnInit {
  shipperRegisters: ShipperRegister[] = [];

  constructor(private shipperRegisterService: ShipperRegisterService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getAllShipperRegisterRequest()
  }

  getAllShipperRegisterRequest() {
    this.shipperRegisterService.getAllShipperRequest().subscribe((shipperRegisterFromBE) => {
      this.shipperRegisters = shipperRegisterFromBE;
      console.log(this.shipperRegisters);
    });
  }

  submitAcceptShipperRegisterRequest(shipperRegister: ShipperRegister) {
    shipperRegister.user;
    this.shipperRegisterService.acceptShipperRegisterRequest(shipperRegister.id, shipperRegister).subscribe(() => {
      this.notificationService.showTopRightMessage('success','Duyệt thành công')
      this.getAllShipperRegisterRequest();
    });
  }

  submitRefuseShipperRegisterRequest(shipperRegister: ShipperRegister) {
    shipperRegister.user;
    this.shipperRegisterService.refuseShipperRegisterRequest(shipperRegister.id, shipperRegister).subscribe(() => {
      this.notificationService.showTopRightMessage('success','Đã từ chối')
      this.getAllShipperRegisterRequest();
    });
  }
}
