import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiconsumeServiceService } from 'src/app/service/api-consume-service.service';

@Component({
  selector: 'app-update-center',
  templateUrl: './update-center.component.html',
  styleUrls: ['./update-center.component.css']
})
export class UpdateCenterComponent implements OnInit{
  data= {
    quantity:"",
    date:"",
  }

constructor(private service:ApiconsumeServiceService,private route: ActivatedRoute){}
  ngOnInit(): void {
    
    this.service.getOneBlood(this.route.snapshot.paramMap.get('id')).subscribe((data: any) => {
      this.data = {
        quantity: data.quantity,
        date: data.date,
      };

      // Set form values after fetching data
      this.myForm.patchValue({
        quantity: this.data.quantity,
        date: this.data.date,
      });
    });
  }
  myForm = new FormGroup({
    quantity :new FormControl(this.data.quantity,[Validators.required]),
    date :new FormControl(this.data.date,[Validators.required]),
  })

  onsubmit(){
    this.service.updateOneBlood(this.route.snapshot.paramMap.get('id'),this.myForm.value).subscribe((data:any)=>{
      console.log(data)
    })
    }
}
