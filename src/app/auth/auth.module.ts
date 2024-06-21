import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeInputModule } from 'angular-code-input';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ActiveAccountComponent } from './active-account/active-account.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ActiveAccountComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CodeInputModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
