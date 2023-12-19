import { Component, OnInit } from '@angular/core';
import { ApiconsumeServiceService } from 'src/app/service/api-consume-service.service';

@Component({
  selector: 'app-dashbordadmin',
  templateUrl: './dashbordadmin.component.html',
  styleUrls: ['./dashbordadmin.component.css']
})
export class DashbordadminComponent {

  events:any[]=[]
  searchtext:any;
  p:number=1
  constructor(private service:ApiconsumeServiceService){}
  ngOnInit(): void {
    this.service.getAllUsers().subscribe((data:any)=>{
      this.events=data
      console.log(this.events)
    })
  }
}
