import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FactureComponent } from './facture/facture.component';
import { RapportComponent } from './rapport/rapport.component';
import { CompteComponent } from './compte/compte.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';




@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    UserlistComponent,
    FactureComponent,
    RapportComponent,
    CompteComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
