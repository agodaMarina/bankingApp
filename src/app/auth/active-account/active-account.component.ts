import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { skipUntil } from 'rxjs';
import { AuthenticationControllerService } from 'src/app/apiservices/services';
AuthenticationControllerService


@Component({
  selector: 'app-active-account',
  templateUrl: './active-account.component.html',
  styleUrls: ['./active-account.component.css'],

})
export class ActiveAccountComponent {
  message = '';
  isOkay = true;
  submitted = false;

  constructor(
    private router: Router,
    private authService: AuthenticationControllerService
  ) {}

  private confirmAccount(token: string) {
    this.authService.activeAccount({
      token
    }).subscribe({
      next: () => {
        this.message = 'Votre compte a été bien activé.\nMaintenant vous pouvez vous connecter';
        this.submitted = true;
      },
      error: () => {
        this.message = 'le Token a expiré ou est invalide. Veuillez réessayer';
        this.submitted = true;
        this.isOkay = false;
      }
    });
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }

  protected readonly skipUntil = skipUntil;

}
