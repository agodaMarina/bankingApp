import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [

  {path:'',component:HomeComponent, 
    children:[
      {path:'dashboard', component:DashboardComponent},
      {path:'profile', component:ProfileComponent},
      {path:'edit-profile', component:EditProfileComponent},
      {path:'listUsers', component:UserlistComponent},
      {path:'', redirectTo:'dashboard', pathMatch:'full'}

  ]},
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
