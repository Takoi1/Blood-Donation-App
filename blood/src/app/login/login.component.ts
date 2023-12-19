import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ApiconsumeServiceService } from '../service/api-consume-service.service';
import {jwtDecode} from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  role:any
  jwt :any = ""
  error=""

  constructor(private formBuilder: FormBuilder, private authService: AuthService,   private router: Router,private service:ApiconsumeServiceService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    
    });
  }

  login(): void {
    


    this.authService.login(this.loginForm.value).subscribe((data:any)=>{
        const userRole = data.role

        if(data.role==="admin") {
          this.router.navigate(['/Dashbordadmin']);
        }
        if(data.role==="donor") {
          this.router.navigate(['/DisplaycentreDonor']);
        }
        if(data.role==="center") {
          this.router.navigate(['/CentreD']);
        }
        this.jwt = jwtDecode(data.token)
        console.log(this.jwt)
        this.service.updateUserRole(userRole);
        this.service.updateUsertoken(this.jwt);
    },((error:any)=>{
      this.error = error.error.message;
    }));
  }
}
