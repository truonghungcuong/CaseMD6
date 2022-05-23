import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';
import {UseService} from '../../service/use/use.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    fullName: new FormControl('', Validators.required),
    address: new FormControl(''),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
  });

  constructor(private userService: UseService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  get email() {
    return this.registerForm.get('email');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get fullName() {
    return this.registerForm.get('fullName');
  }
  get address() {
    return this.registerForm.get('address');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  ngOnInit() {
  }

  register() {
    if (this.registerForm.valid) {
      const user = {
        email: this.registerForm.value.email,
        username: this.registerForm.value.username,
        fullName: this.registerForm.value.fullName,
        address: this.registerForm.value.address,
        password: this.registerForm.value.password,
        confirmPassword: this.registerForm.value.confirmPassword
      };
      this.userService.register(user).subscribe(() => {
        this.registerForm.reset();
        this.notificationService.showTopRightMessage('success', 'Đăng ký thành công');
        this.router.navigateByUrl('/login');
      }, error => {
        console.log(error);
        this.notificationService.showMessage('error', error.error.message);
      });
    }
  }
}
