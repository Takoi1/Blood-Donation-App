import { Component, OnInit } from '@angular/core';
import { ApiconsumeServiceService } from 'src/app/service/api-consume-service.service';
@Component({
  selector: 'app-displaycentre-donor',
  templateUrl: './displaycentre-donor.component.html',
  styleUrls: ['./displaycentre-donor.component.css']
})
export class DisplaycentreDonorComponent implements OnInit{
  id:any=""
  token:any=""
  decodetoken:any=""
  arr:any[]=[]
  constructor(private service:ApiconsumeServiceService){}

  ngOnInit(): void {
    this.token=localStorage.getItem("token")
    // this.decodetoken=jwtDecode(this.token)
    this.id=this.decodetoken.userId
    this.service.getAllEvents().subscribe((data:any)=>{
      this.arr=data
      console.log(this.arr)
    },((error:any)=>{
      console.log(error)
    }))
  
  }

send(i:any){  
  alert("done")
    // this.service.data=i
    console.log(i._id)
      }



  joining(i:any){
    let index=i._id
     this.service.updateOneUser(this.id,index).subscribe((data:any)=>{
      console.log(data.users.formations)
     })
  }

}

