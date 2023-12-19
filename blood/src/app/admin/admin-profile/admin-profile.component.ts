import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { ApiconsumeServiceService } from 'src/app/service/api-consume-service.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent  implements OnInit {

  data= {
    nom:"",
    prenom:"",
    email:"",
    password:""
  }



  constructor(private service:ApiconsumeServiceService,private route: ActivatedRoute){}
  myForm = new FormGroup({
    nom :new FormControl(this.data.nom,[Validators.required]),
    prenom :new FormControl(this.data.prenom,[Validators.required]),
    email :new FormControl(this.data.email,[Validators.required,Validators.email]),
    password :new FormControl(this.data.password,[Validators.required])
  })
  ngOnInit(): void {
    
    this.service.getOneUser(this.route.snapshot.paramMap.get('id')).subscribe((data: any) => {
      this.data = {
        nom: data.nom,
        prenom: data.prenom,
        email: data.email,
        password: data.password
      };

      // Set form values after fetching data
      this.myForm.patchValue({
        nom: this.data.nom,
        prenom: this.data.prenom,
        email: this.data.email,
        password: this.data.password
      });
    });
  }
  onsubmit(){
    this.service.updateOneUser(this.route.snapshot.paramMap.get('id'),this.myForm.value).subscribe((data:any)=>{
      console.log(data)
    })
  }
}
