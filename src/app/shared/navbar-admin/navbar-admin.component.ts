import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
  loggedIn: boolean;

  constructor(private authService: AuthService,) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.loggedIn = false;
  }
}
