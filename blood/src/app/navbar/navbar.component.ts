// import { Component, Input, OnChanges, OnDestroy, OnInit, inject } from '@angular/core';
// import { Route, Router } from '@angular/router';

// import { compileNgModule } from '@angular/compiler';
// import { ApiconsumeServiceService } from '../service/api-consume-service.service';


import { Component, Input, OnChanges, OnDestroy, OnInit, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
// import jwt_decode from 'jwt-decode';
// import { RoleService } from '../role.service';
import { compileNgModule } from '@angular/compiler';
import { ApiconsumeServiceService } from '../service/api-consume-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css',


  "../../plugins/icofont/icofont.min.css",
  ]
})

export class NavbarComponent implements OnInit  {
  userRole: string | null = null;
  token:any=localStorage.getItem("token")
  tokens :  any | null = null;

  id:any=""
  iduser:any
  constructor(private route:Router,private service:ApiconsumeServiceService){
}
  ngOnInit(): void {
    this.service.userRole$.subscribe((role:any)=>{
      this.userRole=role
    })
    this.service.usertoken$.subscribe((token)=>{
      this.tokens=token
     })
     console.log(this.tokens.userId)
    
  }
  
  logged(){
    
  }
  
  logout(){
     this.userRole=null
     this.tokens=null
     this.route.navigate(["/login"])
  }


  
}



















// export class NavbarComponent implements OnInit  {
//   userRole: string | null = null;
//   token:any=localStorage.getItem("token")
//   tokens :  any | null = null;

//   id:any=""
//   iduser:any
//   constructor(private route:Router,private service:ApiconsumeServiceService){
// }
//   ngOnInit(): void {
//     this.service.userRole$.subscribe((role:any)=>{
//       this.userRole=role
//     })
//     this.service.usertoken$.subscribe((token)=>{
//       this.tokens=token
//      })
//      console.log(this.tokens.userId)
    
//   }
// }
