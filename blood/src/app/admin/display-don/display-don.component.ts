import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiconsumeServiceService } from 'src/app/service/api-consume-service.service';

@Component({
  selector: 'app-display-don',
  templateUrl: './display-don.component.html',
  styleUrls: ['./display-don.component.css']
})
export class DisplayDonComponent implements OnInit {
  constructor(private service:ApiconsumeServiceService){}

  bloodCenter:any=new Observable()

  searchtext:any;
  p:number=1
  ngOnInit(): void {
    this.service.getAllUsers().subscribe((data:any)=>{
      this.bloodCenter=data
      console.log(this.bloodCenter)
    })
  }
  deleteUser(index:any){
    console.log(index)
    this.service.deleteUser(index._id).subscribe((data:any)=>{
      alert(data.message)
    })
  }
}
