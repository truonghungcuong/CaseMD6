import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MerchantRegisterService} from '../../service/merchant-register/merchant-register.service';
import {CustomValidatorService} from '../../service/custom-validator.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-merchant-register',
  templateUrl: './merchant-register.component.html',
  styleUrls: ['./merchant-register.component.css']
})
export class MerchantRegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
      user: new FormControl(),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern
      ('^[0](\\+\\d{1,3}\\s?)?((\\(\\d{3}\\)\\s?)|(\\d{3})(\\s|-?))(\\d{3}(\\s|-?))(\\d{3})(\\s?(([E|e]xt[:|.|]?)|x|X)(\\s?\\d+))?')]),
      openTime: new FormControl(''),
      closeTime: new FormControl(''),
    }
  );

  constructor(private merchantRequestService: MerchantRegisterService,
              private customValidator: CustomValidatorService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  submitForm() {
    const currentUser = JSON.parse(sessionStorage.getItem('user'));
    const userId = currentUser.id;
    if (this.registerForm.valid) {
      const merchantRequest = {
        user: {
          id: userId
        },
        name: this.registerForm.get('name').value,
        description: this.registerForm.get('description').value,
        address: this.registerForm.get('address').value,
        phone: this.registerForm.get('phone').value,
        openTime: this.registerForm.get('openTime').value,
        closeTime: this.registerForm.get('closeTime').value,
      };
      this.merchantRequestService.saveMerchantRequest(merchantRequest).subscribe(() => {
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

  get descriptionControl() {
    return this.registerForm.get('description');
  }

  get addressControl() {
    return this.registerForm.get('address');
  }

  get phoneControl() {
    return this.registerForm.get('phone');
  }

  get openTime() {
    return this.registerForm.get('openTime');
  }

  get closeTime() {
    return this.registerForm.get('closeTime');
  }




}
