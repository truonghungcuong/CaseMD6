import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ShipperRegisterService} from '../../../service/shipper-register/shipper-register.service';
import {CustomValidatorService} from '../../../service/custom-validator.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../../service/notification/notification.service';

@Component({
  selector: 'app-shipper-register',
  templateUrl: './shipper-register.component.html',
  styleUrls: ['./shipper-register.component.css']
})
export class ShipperRegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
      user: new FormControl(),
      name: new FormControl('', Validators.required),
      licensePlates: new FormControl('', Validators.required),
      carName: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern
      ('^[0](\\+\\d{1,3}\\s?)?((\\(\\d{3}\\)\\s?)|(\\d{3})(\\s|-?))(\\d{3}(\\s|-?))(\\d{3})(\\s?(([E|e]xt[:|.|]?)|x|X)(\\s?\\d+))?')]),
    }
  );

  constructor(private shipperRequestService: ShipperRegisterService,
              private customValidator: CustomValidatorService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  submitForm(){
    const currentUser = JSON.parse(sessionStorage.getItem('user'));
    const userId = currentUser.id;
    if (this.registerForm.valid) {
      const shipperRequest = {
        user: {
          id: userId
        },
        name: this.registerForm.get('name').value,
        licensePlates: this.registerForm.get('licensePlates').value,
        carName: this.registerForm.get('carName').value,
        phone: this.registerForm.get('phone').value,
      };
      this.shipperRequestService.saveShipperRequest(shipperRequest).subscribe(() => {
        this.notificationService.showMessage('success', 'Đã gửi yêu cầu, vui lòng chờ xét duyệt');
        this.router.navigateByUrl('/home');
      }, error => {
        console.log(error);
        this.notificationService.showMessage('error', error.error.message);
      });
    } else {
      this.notificationService.showMessage('error', 'Bạn chưa điền đầy đủ thông tin ');
    }
  }

  get userControl() {
    return this.registerForm.get('id');
  }

  get nameControl() {
    return this.registerForm.get('name');
  }

  get licensePlatesControl() {
    return this.registerForm.get('licensePlates');
  }

  get carNameControl() {
    return this.registerForm.get('carName');
  }

  get phoneControl() {
    return this.registerForm.get('phone');
  }


}
