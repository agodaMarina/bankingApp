import { Component } from '@angular/core';
import { ImageControllerService } from 'src/app/apiservices/services';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {

  file:File | null = null;

  constructor(private service:ImageControllerService) { }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
    }
  }

loadImage(){
  if (this.file) {
    const formData = new FormData();
    formData.append('image', this.file);
    this.service.uplaodImage( formData ).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
}
