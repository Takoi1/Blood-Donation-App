import { Component } from '@angular/core';
import { ApiconsumeServiceService } from 'src/app/service/api-consume-service.service';

@Component({
  selector: 'app-display-centre',
  templateUrl: './display-centre.component.html',
  styleUrls: ['./display-centre.component.css']
})
export class DisplayCentreComponent {
  teacher:any[]=[]
  searchtext:any;
  p:number=1
  constructor(private service:ApiconsumeServiceService){}
  ngOnInit(): void {
    this.service.getAllUsers().subscribe((data:any)=>{
      this.teacher=data
      console.log(this.teacher)
    })
  }
  deleteteacher(index:any){
    console.log(index)
    this.service.deleteUser(index._id).subscribe((data:any)=>{
      alert(data.message)
    })
  }
}
