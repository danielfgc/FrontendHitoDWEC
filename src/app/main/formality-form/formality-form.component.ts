import { Component, OnInit } from '@angular/core';
import { Formality } from 'src/models/formality';
import { MainServicesService } from '../services/main-services.service';
import { Router } from '@angular/router';

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
  constructor(private authService:MainServicesService, private router: Router){}
  ngOnInit(): void {
    
  }
  saveFormality(){
    const {id} = JSON.parse(this.user); 
    this.authService.createFormality(this.title, this.formalitytype, this.formalitybody, id).subscribe(
      (response:Formality|any)=>{
        this.respuesta= response;
        window.alert("Formality added");
        window.location.reload();
       
      }
    )
  }
}
