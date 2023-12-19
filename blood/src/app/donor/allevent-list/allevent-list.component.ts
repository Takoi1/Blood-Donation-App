import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconsumeServiceService } from 'src/app/service/api-consume-service.service';

@Component({
  selector: 'app-allevent-list',
  templateUrl: './allevent-list.component.html',
  styleUrls: ['./allevent-list.component.css']
})
export class AlleventListComponent {
  constructor(private service:ApiconsumeServiceService,private route:Router) {}
  arr:any[]=[]
  userid:any
  ngOnInit(): void {
    this.service.usertoken$.subscribe((data:any)=>{
      this.userid=data.userId
    })
    this.service.getAllEvents().subscribe((data:any)=>{
      this.arr=data
      console.log(data)
    })
  }
  sending(data:any){
    this.route.navigate(["/test/"+data])
  }

}

