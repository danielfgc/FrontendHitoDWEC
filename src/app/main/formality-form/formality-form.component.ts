import { Component, OnInit } from '@angular/core';
import { Formality } from 'src/models/formality';
import { MainServicesService } from '../services/main-services.service';

@Component({
  selector: 'app-formality-form',
  templateUrl: './formality-form.component.html',
  styleUrls: ['./formality-form.component.css']
})
export class FormalityFormComponent implements OnInit {
  title: string = "";
  formalitytype: string = "";
  formalitybody:string="";
  user:any=sessionStorage.getItem("user");
  respuesta:string="";
  constructor(private authService:MainServicesService){}
  ngOnInit(): void {
    
  }
  saveFormality(){
    this.authService.createFormality(this.title, this.formalitytype, this.formalitybody, 6).subscribe(
      (response:Formality|any)=>{
        this.respuesta= response;
        console.log(this.respuesta);
      }
    )
  }
}
