import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiconsumeServiceService } from 'src/app/service/api-consume-service.service';
@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  constructor(private service:ApiconsumeServiceService){}

  bloodCenter:any=new Observable()

  searchtext:any;
  p:number=1
  ngOnInit(): void {
    this.service.getAllBlood().subscribe((data:any)=>{
      this.bloodCenter=data
      console.log(this.bloodCenter)
    })
  }
  deleteUser(index:any){
    console.log(index)
    this.service.deleteOneBlood(index._id).subscribe((data:any)=>{
      alert(data.message)
    })
  }
}

