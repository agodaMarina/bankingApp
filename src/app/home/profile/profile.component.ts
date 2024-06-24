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
  user!: User;

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.authenticationControllerService.getProfile().subscribe((data: User) => {
      this.user = data;
    });
  }

  updateProfile() {
    this.authenticationControllerService.updateProfile({ body: this.userUpdate }).subscribe((data: string) => {
      console.log(data);
    });
  }

}
