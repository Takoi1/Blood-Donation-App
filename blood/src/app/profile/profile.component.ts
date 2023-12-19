import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { jwtDecode } from "jwt-decode";
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRout
import { ApiconsumeServiceService } from '../service/api-consume-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data= {
    nom:"",
    prenom:"",
    email:"",
    typedesang:""
  }



  constructor(private service:ApiconsumeServiceService,private route: ActivatedRoute){}
  myForm = new FormGroup({
    nom :new FormControl(this.data.nom,[Validators.required]),
    prenom :new FormControl(this.data.prenom,[Validators.required]),
    email :new FormControl(this.data.email,[Validators.required,Validators.email]),
    typedesang :new FormControl(this.data.typedesang,[Validators.required])
  })
  ngOnInit(): void {
    
    this.service.getOneUser(this.route.snapshot.paramMap.get('id')).subscribe((data: any) => {
      this.data = {
        nom: data.nom,
        prenom: data.prenom,
        email: data.email,
        typedesang: data.typedesang
      };

      // Set form values after fetching data
      this.myForm.patchValue({
        nom: this.data.nom,
        prenom: this.data.prenom,
        email: this.data.email,
        typedesang: this.data.typedesang
      });
    });
  }



onsubmit(){
this.service.updateOneUser(this.route.snapshot.paramMap.get('id'),this.myForm.value).subscribe((data:any)=>{
  console.log(data)
})

}
}

