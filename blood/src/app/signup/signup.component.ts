// signup.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  file:any
  registrationSuccess = false; // Flag to show/hide success message

  constructor( private authService: AuthService,  private router: Router) { }

  signupForm =new FormGroup({
    nom:  new FormControl(),
    prenom:  new FormControl(),
    dates:  new FormControl(),
    phone:  new FormControl(),
    email:  new FormControl(),
    password:  new FormControl(),
    codepostal:  new FormControl(),
    typedesang: new FormControl (),
    files: new FormControl ()
  });
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.file=file
    
  } 
  onSubmit() {
    const formData = new FormData()
    formData.append("nom",this.signupForm.value.nom)
    formData.append("prenom",this.signupForm.value.prenom)
    formData.append("date",this.signupForm.value.dates)
    formData.append("telephone",this.signupForm.value.phone)
    formData.append("email",this.signupForm.value.email)
    formData.append("password",this.signupForm.value.password)
    formData.append("codepostal",this.signupForm.value.codepostal)
    formData.append("typedesang",this.signupForm.value.typedesang)
    formData.append("pdfFile", this.file);
        this.authService.signup(formData).subscribe((response) => {
      console.log(response)
      this.registrationSuccess = true; 
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000); 
   
      
    });

    //console.log(formData,this.signupForm.value)


  }
}
