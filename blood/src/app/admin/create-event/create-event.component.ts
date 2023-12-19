import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiconsumeServiceService } from 'src/app/service/api-consume-service.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  error=""
  success=""
  picture=""
  token:any
constructor(private service: ApiconsumeServiceService){}
  ngOnInit(): void {
    this.service.usertoken$.subscribe((data:any) =>{
      this.token = data.userId
      console.log(this.token);
    })
  }

  myForm = new FormGroup({
    name :new FormControl("",[Validators.required]),
    datedebut :new FormControl("",[Validators.required]),
    datefin :new FormControl("",[Validators.required]),
    lieu :new FormControl("",[Validators.required]),
    parrainer :new FormControl("",[Validators.required]),
    userId :new FormControl("",[Validators.required]),
  })
  
  
  onsubmit(){
    this.myForm.value.userId=this.token
    this.service.createEvent(this.myForm.value).subscribe((data)=>{
      console.log("Event created successfully",data)
      this.success=data.message
    },(error:any)=>{
      this.error=error.error.error
    })
  
  }
 
  }
