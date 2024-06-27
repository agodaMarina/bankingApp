import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/TokenServices/token.service';
import { User } from 'src/app/apiservices/models/user';
import { AuthenticationControllerService } from 'src/app/apiservices/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  user: User={};

  constructor(private service: AuthenticationControllerService, private tokenService:TokenService, private router:Router) { }
  ngOnInit(): void {
    this.getProfile();
  }

  getProfile():User {
    
    this.service.getProfileuser().subscribe((data: User) => {
      console.log(data);
      this.user = data;

    });
    return this.user;
    
  }
  logout() {
    this.service.logout().subscribe({
      next: () => {
        this.tokenService.logout();
        this.router.navigate(['/auth/']);
      },
      error: (err) => {
        console.error('Error logging out:', err);
      }
    });
  }

}
