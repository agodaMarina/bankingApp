import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/TokenServices/token.service';
import { AuthenticationControllerService } from 'src/app/apiservices/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private service:AuthenticationControllerService, private router:Router,private tokenService:TokenService) { }

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
