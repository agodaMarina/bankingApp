import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/apiservices/models';
import { AdminService } from 'src/app/apiservices/services/admin.service';
declare let alertify: any;
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{


users:Array<User>=[];
 user:User={};
constructor(private service:AdminService) { }


  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): User[] {
    this.service.getUsers().subscribe(
      (value:Array<User>)=>{
        this.users=value;
      },
      (error:String)=>{
  
      },
      ()=>{}
    );
      return this.users;
  }

 
  confirmActivation(user: User) {
    const id = user.id || 0;
    const action = user.accountNonLocked ? 'désactiver' : 'activer';
    alertify.confirm(
      `Confirmation de ${action}`,
      `Voulez-vous vraiment ${action} ce compte?`,
      () => {
        if (user.accountNonLocked) {
          this.desactiveAccount(id);
        } else {
          this.activeAccount(id);
        }
      },
      () => {
        // Revert the checkbox state
        user.accountNonLocked = !user.accountNonLocked;
      }
    ).set('labels', {ok:'Oui', cancel: 'Annuler'}); // Set custom button labels
  }



  desactiveAccount(id:number){
    this.service.desactiveAccount(id).subscribe(
      (value:User)=>{
        this.getAllUsers();
      },
      (error:String)=>{
  
      },
      ()=>{}
    );
  }

  activeAccount(id:number){
    this.service.activeAccount(id).subscribe(
      (value:User)=>{
        this.getAllUsers();
      },
      (error:String)=>{
        console.log(error);
  
      },
      ()=>{}
    );
  }


  getOneUser(id:number): User {
    if (id === undefined) {
      return {}; // or handle the case when id is undefined
    }
    
    this.service.getOneUser(id).subscribe(
      (value:User)=>{
        this.user=value;
      },
      (error:String)=>{
        console.log(error);
      },
      ()=>{}
    );
    return this.user;
  }



}
