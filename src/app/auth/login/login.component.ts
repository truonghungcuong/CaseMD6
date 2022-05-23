import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth/auth.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';
import {User} from '../../model/user';
import {UserToken} from '../../model/user-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {};
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService,
              private router: Router,
              private notificationService: NotificationService) {
    this.authService.currentUser.subscribe(value => this.user = value);

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe((data) => {
      // this.notificationService.showMessage('success', 'Đăng nhập thành công');
      sessionStorage.setItem('user', JSON.stringify(this.user));
      switch (this.user.roles[0].authority) {
        case 'ROLE_CUSTOMER': {
          this.router.navigateByUrl('/home');
          break;
        }
        case 'ROLE_ADMIN': {
          this.router.navigateByUrl('/admin');
          break;
        }
        case 'ROLE_MERCHANT': {
          this.router.navigateByUrl('/home');
          break;
        }
      }
    }, error => {
      this.notificationService.showMessage('error', error.error.message);
    });
  }
}
