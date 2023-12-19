import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { ApiconsumeServiceService } from 'src/app/service/api-consume-service.service';

@Component({
  selector: 'app-display-event',
  templateUrl: './display-event.component.html',
  styleUrls: ['./display-event.component.css']
})
export class DisplayEventComponent implements OnInit {
  constructor(private service:ApiconsumeServiceService,private route:Router){}

  event:any=new Observable()

  searchtext:any;
  p:number=1
  ngOnInit(): void {
    this.service.getAllEvents().subscribe((data:any)=>{
      this.event=data
      console.log(this.event)
    })
  }
  deleteUser(index:any){
    console.log(index)
    this.service.deleteOneEvent(index._id).subscribe((data:any)=>{
      alert(data.message)
    })
  }
  events(i:any){
    this.route.navigate(['/UpdateEvent/'+i._id]);
  }
}

