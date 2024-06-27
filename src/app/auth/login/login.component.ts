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
    this.authService.loginuser(this.authRequest).subscribe({
      next: (res) => {
        console.log('Response from API:', res);  // Log la réponse pour vérifier la structure
        if (res.token) {
          console.log('Token received:', res.token);
          this.tokenService.token = res.token as string;
          this.router.navigate(['/home/dashboard']);
        } else {
          this.errorMsg.push('Token is missing in the response');
        }
      },
      error: (err) => {
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error);
        }
      }
    });
  }

}
