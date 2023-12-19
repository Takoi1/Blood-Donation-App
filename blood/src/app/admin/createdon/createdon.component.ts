import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiconsumeServiceService } from 'src/app/service/api-consume-service.service';
@Component({
  selector: 'app-createdon',
  templateUrl: './createdon.component.html',
  styleUrls: ['./createdon.component.css']
})
export class CreatedonComponent implements OnInit {
  constructor(private service:ApiconsumeServiceService){}
  arr:any[]=[]
  dis=true
  error=""
  success=""
  ngOnInit(): void {
    this.service.getAllEvents().subscribe((data:any)=>{
      this.arr=data
      console.log(this.arr ,"training ")
    })
      }
  myForm = new FormGroup({
    nomadresse :new FormControl("",[Validators.required]),
    emailcenter :new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    role :new FormControl({value:"center",disabled:true},[Validators.required]),
    phonecenter :new FormControl("",[Validators.required]),
    accepted : new FormControl(true,[Validators.required]),
  })
  
    
  onsubmit(){
    this.service.createuser(this.myForm.value).subscribe((data)=>{
      alert("done")
      console.log("formation creer avec success",data)
      this.success="center Added Successfully"
    },(error:any)=>{
      this.error=error.error.error
    })
console.log(this.myForm.value)
  
  }
}

