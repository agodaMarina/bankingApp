import { Component } from '@angular/core';
import { ImageControllerService } from 'src/app/apiservices/services';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {

//   file:File | null = null;

//   constructor(private service:ImageControllerService) { }

//   onFileSelected(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length > 0) {
//       this.file = input.files[0];
//     }
//   }


file: File | null = null;
imagePreview: string | ArrayBuffer | null = null;

  constructor(private service: ImageControllerService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.file);
    }
  }

  loadImage(){
    if (this.file) {
      const formData = new FormData();
      formData.append('image', this.file);
      this.service.uplaodImage( formData ).subscribe(
        data => {
          console.log(data);
          this.clearImage();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  
  // loadImage(): void {
  //   if (this.file) {
  //     const formData = new FormData();
  //     formData.append('image', this.file);
  //     this.service.uploadImage(formData).subscribe(
  //       data => {
  //         console.log(data);
  //         this.clearImage();
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     );
  //   }
  // }

  clearImage(): void {
    this.file = null;
    this.imagePreview = null;
  }

}
