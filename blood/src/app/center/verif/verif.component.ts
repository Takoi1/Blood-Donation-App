import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiconsumeServiceService } from 'src/app/service/api-consume-service.service';
import { NgOptimizedImage } from '@angular/common'


@Component({
  selector: 'app-verif',
  templateUrl: './verif.component.html',
  styleUrls: ['./verif.component.css']
})
export class VerifComponent {






  
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
  accepted(data:any){
    alert("done")
    console.log(data)
    const user = {nom:data.nom,prenom:data.prenom,date:data.date,email:data.email,telephone:data.telephone,password:data.password,codepostal:data.codepostal,typedesang:data.typedesang,pdfPath:data.pdfPath,role:data.role,isAdminAccepted:true}
    this.service.updateOneUser(data._id,user).subscribe((data:any)=>{
      console.log("tbadel saye")
    },((err:any)=>{
      console.log(err)
    }))
  }
  deleteteacher(data:any){
    console.log(data)
    const user = {nom:data.nom,prenom:data.prenom,date:data.date,email:data.email,telephone:data.telephone,password:data.password,codepostal:data.codepostal,typedesang:data.typedesang,pdfPath:data.pdfPath,role:data.role,isAdminAccepted:false}
    this.service.updateOneUser(data._id,user).subscribe((data:any)=>{
      console.log("tbadel saye lil false")
    },((err:any)=>{
      console.log(err)
    }))
  }



  


}
