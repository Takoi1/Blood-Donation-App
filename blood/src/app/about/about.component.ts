import { Component, OnInit } from '@angular/core';
import { ApiconsumeServiceService } from '../service/api-consume-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  role:any=""
  constructor(private service:ApiconsumeServiceService ){}
  ngOnInit(): void {
    this.service.userRole$.subscribe((data:any)=>{
      this.role=data
      console.log("hethy role mil component ekher about",this.role);
    })
  }


}
