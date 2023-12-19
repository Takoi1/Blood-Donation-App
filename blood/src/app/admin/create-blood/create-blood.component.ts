import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiconsumeServiceService } from 'src/app/service/api-consume-service.service';

@Component({
  selector: 'app-create-blood',
  templateUrl: './create-blood.component.html',
  styleUrls: ['./create-blood.component.css']
})
export class CreateBloodComponent implements OnInit {
  constructor(private service:ApiconsumeServiceService){}
  arr:any[]=[]
  error=""
  success=""
  ngOnInit(): void {
    this.service.getAllEvents().subscribe((data:any)=>{
      this.arr=data
      console.log(this.arr ,"events ")
    })
  }
  myForm = new FormGroup({
    date :new FormControl("",[Validators.required]),
    quantity :new FormControl("",[Validators.required]),
    
  })
  
    
  onsubmit(){
    this.service.createBlood(this.myForm.value).subscribe((data)=>{
      console.log("Event created successfully",data)
      this.success=data.message    }
      ,(error:any)=>{
      this.error=error.error.error
    })
console.log(this.myForm.value)
  
  }
}

