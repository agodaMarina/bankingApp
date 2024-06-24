import { Component, OnInit } from '@angular/core';
import { UpdateProfilRequest, User } from 'src/app/apiservices/models';
import { AuthenticationControllerService } from 'src/app/apiservices/services';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{

  user?:User;
  userUpdate: UpdateProfilRequest = { email: '', firstName: '', lastName: '', telephone: ''};

  constructor(private profile:AuthenticationControllerService) { }
  ngOnInit(): void {
    this.getProfile();
  }



  getProfile() {
    this.profile.getProfile().subscribe((data: User) => {
      this.user = data;
    });
  }

  updateProfile() {
    this.profile.updateProfile({ body: this.userUpdate }).subscribe((data: string) => {
      console.log(data);
    });
  }

}
