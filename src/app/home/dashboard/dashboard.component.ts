import { Component, OnInit } from '@angular/core';
import { Facture, User } from 'src/app/apiservices/models';
import { AuthenticationControllerService, FactureControllerService } from 'src/app/apiservices/services';
import { AdminService } from 'src/app/apiservices/services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

user:User={};
factures:Array<Facture>=[];
  total: number | undefined;
  totalUsers: number | undefined;
constructor(private profile:AuthenticationControllerService, private facture:FactureControllerService, private service:AdminService){
  
}

  ngOnInit(): void {
    this.getProfile();
    this.getAllFactures();
    this.getAllUsers();
  }

  getProfile():User {
    
    this.profile.getProfileuser().subscribe((data: User) => {
      console.log(data);
      this.user = data;

    });
    return this.user;
    
  }

  getAllFactures(): Facture[] {
    this.facture.getAllFactures().subscribe(
      (value:Array<Facture>)=>{
        this.factures=value;
        for (let i = 0; i < this.factures.length; i++) {
          this.total = this.factures[i].totalttc;
         
       }
      },
      (error:String)=>{
  
      },
      ()=>{}
    );
      return this.factures;
  }

  getAllUsers()  {
    this.service.getUsers().subscribe(
      (value:Array<User>)=>{
        this.totalUsers=value.length;
      },
      (error:String)=>{
  
      },
      ()=>{}
    );
  }
  
 

}
