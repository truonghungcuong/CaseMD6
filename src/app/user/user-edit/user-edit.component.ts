import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UseService} from '../../service/use/use.service';
import {AuthService} from '../../service/auth/auth.service';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {NotificationService} from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  currentUser: User = {};
  loggedIn: boolean;

  userForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    phone: new FormControl('', [Validators.pattern('^[0](\\+\\d{1,3}\\s?)?((\\(\\d{3}\\)\\s?)|(\\d{3})(\\s|-?))(\\d{3}(\\s|-?))(\\d{3})(\\s?(([E|e]xt[:|.|]?)|x|X)(\\s?\\d+))?')]),
    fullName: new FormControl('', Validators.required),
    address: new FormControl(''),
    username: new FormControl(''),
    image: new FormControl('')
  });

  constructor(private userService: UseService,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private notificationService: NotificationService) {
  }

  get email() {
    return this.userForm.get('email');
  }

  get username() {
    return this.userForm.get('username');
  }

  get fullName() {
    return this.userForm.get('fullName');
  }

  get address() {
    return this.userForm.get('address');
  }

  get password() {
    return this.userForm.get('password');
  }

  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }

  get phone() {
    return this.userForm.get('phone');
  }

  get image() {
    return this.userForm.get('image');
  }

  ngOnInit() {
    this.checkLoginAndGetInfo();
  }

  checkLoginAndGetInfo() {
    this.loggedIn = this.authService.isLoggedIn();
    if (this.loggedIn) {
      this.currentUser = this.authService.getCurrentUser();
      this.userService.viewUserInfo(this.currentUser.id).subscribe(userBE => {
        this.currentUser = userBE;
        this.email.setValue(this.currentUser.email);
        this.phone.setValue(this.currentUser.phone);
        this.fullName.setValue(this.currentUser.fullName);
        this.address.setValue(this.currentUser.address);
        this.username.setValue(this.currentUser.username);
      });
    }
  }

  updateUser() {
    if (this.userForm.valid) {
      let user = new FormData();
      user.append('email', this.currentUser.email);
      user.append('phone', this.userForm.value.phone);
      user.append('fullName', this.userForm.value.fullName);
      user.append('address', this.userForm.value.address);
      user.append('username', this.currentUser.username);
      const files = (document.getElementById('image') as HTMLInputElement).files;
      if (files.length > 0) {
        user.append('image', files[0]);
      }
      this.userService.updateUser(this.currentUser.id, user).subscribe(() => {
        this.notificationService.showMessage('success', 'Cập nhật thành công');
        this.router.navigateByUrl(`/users/${this.currentUser.id}`);
      }, error => {
        this.notificationService.showMessage('error', error.error.message);
      });
    }
  }
}
