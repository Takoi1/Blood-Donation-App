import { Component, OnInit } from '@angular/core';
import { ApiconsumeServiceService } from 'src/app/service/api-consume-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent {

  data= {
    name:"",
    datedebut:"",
    datefin:"",
    lieu:"",
    parrainer:"",
  }

constructor(private service:ApiconsumeServiceService,private route: ActivatedRoute){}
  ngOnInit(): void {
    
    this.service.getOneEvent(this.route.snapshot.paramMap.get('id')).subscribe((data: any) => {
      this.data = {
        name: data.name,
        datedebut: data.datedebut,
        datefin: data.datefin,
        lieu: data.lieu,
        parrainer: data.parrainer
      };

      // Set form values after fetching data
      this.myForm.patchValue({
        name: this.data.name,
        datedebut: this.extractDate(this.data.datedebut),
        datefin: this.extractDate(this.data.datefin),
        lieu: this.data.lieu,
        parrainer : this.data.parrainer,
      });
    });
  }
  myForm = new FormGroup({
    name :new FormControl(this.data.name,[Validators.required]),
    datedebut :new FormControl(this.data.datedebut,[Validators.required]),
    datefin :new FormControl(this.data.datefin,[Validators.required,Validators.email]),
    lieu :new FormControl(this.data.lieu,[Validators.required]),
    parrainer:new FormControl(this.data.parrainer,[Validators.required])
  })

  onsubmit(){
    alert("done")
    this.service.updateOneEvent(this.route.snapshot.paramMap.get('id'),this.myForm.value).subscribe((data:any)=>{
      console.log(data)
    })
    }
    private extractDate(dateTimeString: string): string {
      // Assuming dateTimeString is in ISO format
      const dateOnly = dateTimeString.slice(0, 10); // or use substring(0, 10)
      return dateOnly;
    }
}


