import { Component, OnInit } from '@angular/core';
import { ApiconsumeServiceService } from './service/api-consume-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  role:any
  constructor(private service:ApiconsumeServiceService){
  }

  ngOnInit(): void {
    this.service.userRole$.subscribe((role:any)=>{
      this.role = role;
    })
  }


  title = 'blood';
}
