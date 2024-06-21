import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ActiveAccountComponent } from './active-account/active-account.component';


const routes: Routes = [
  {
    path: '', component: AuthComponent, 
    children: [
        {path:'login', component:LoginComponent},
        {path:'register', component:RegisterComponent},
        {path: 'active-account', component:ActiveAccountComponent},
        {path:'', redirectTo:'login', pathMatch:'full'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
