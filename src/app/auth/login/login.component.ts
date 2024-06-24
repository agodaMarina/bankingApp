import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationControllerService } from 'src/app/apiservices/services';
import { AuthenticateRequest } from 'src/app/apiservices/models';
import { TokenService } from 'src/app/TokenServices/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authRequest: AuthenticateRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationControllerService,
    private tokenService: TokenService
  ) {
  }

  login() {
    this.errorMsg = [];
    this.authService.login({body:this.authRequest}).subscribe({
      next: (res) => {
        
        this.tokenService.token = res.token as string;
        this.router.navigate(['/home/dashboard']);
      },
      error: (err) => {
        console.log(this.authRequest);
        
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error);
        }
      }
    });
  }

  register() {
    this.router.navigate(['register']);
  }

}
