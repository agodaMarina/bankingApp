import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/apiservices/models';
import {
  AdminControllerService,
  AuthenticationControllerService,
} from 'src/app/apiservices/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: User = {};

  total: number | undefined;
  totalUsers: number | undefined;
  constructor(
    private profile: AuthenticationControllerService,
    private service: AdminControllerService
  ) {}

  ngOnInit(): void {
    this.getProfile();
    this.getAllUsers();
  }

  getProfile(): User {
    this.profile.getProfileuser().subscribe((data: User) => {
      console.log(data);
      this.user = data;
    });
    return this.user;
  }

  getAllUsers() {
    this.service.getUsers().subscribe(
      (value: Array<User>) => {
        this.totalUsers = value.length;
      },
      (error: String) => {},
      () => {}
    );
  }
}
