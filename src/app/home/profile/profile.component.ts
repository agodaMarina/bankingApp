import { Component } from '@angular/core';
import { AuthenticationControllerService } from 'src/app/apiservices/services';
import { UpdateProfilRequest, User } from 'src/app/apiservices/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

constructor(private authenticationControllerService: AuthenticationControllerService) { }

  userUpdate: UpdateProfilRequest= { email: '', firstName: '', lastName: '', telephone: ''};
  user:User={};

  ngOnInit() {
    this.getProfile();
  }

  getProfile():User {
    
    this.authenticationControllerService.getProfileuser().subscribe((data: User) => {
      console.log(data);
      this.user = data;

    });
    return this.user;
    
  }

  updateProfile() {
    this.authenticationControllerService.updateProfile({ body: this.userUpdate }).subscribe((data: string) => {
      console.log(data);
    });
  }

}
