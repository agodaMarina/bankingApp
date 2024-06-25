import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/apiservices/models';
import { AuthenticationControllerService } from 'src/app/apiservices/services';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{
users:Array<User>=[];

constructor(private service:AuthenticationControllerService) { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getAllUsers(): User[] {
    this.service.getAll().subscribe(
      (value:Array<User>)=>{
        this.users=value;
      },
      (error:String)=>{
  
      },
      ()=>{}
    );
      return this.users;
  }

}
