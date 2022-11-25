import { Component, OnInit } from '@angular/core';
import { Formality } from 'src/models/formality';
import { MainServicesService } from '../services/main-services.service';

@Component({
  selector: 'app-formality-list',
  templateUrl: './formality-list.component.html',
  styleUrls: ['./formality-list.component.css']
})
export class FormalityListComponent implements OnInit{
  formalities:Formality[] | any;

  constructor(private authService: MainServicesService){}
  getFormalities(){
    this.authService.getFormalities().subscribe((response)=>{
      this.formalities = response;
      console.log(this.formalities);
    });
  }
  ngOnInit(): void {
    this.getFormalities();
  }

}
