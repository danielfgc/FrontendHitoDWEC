import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServicesService } from '../services/main-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user:any= sessionStorage.getItem("user")
  username:string = (JSON.parse(this.user)).username;
  correo:string = (JSON.parse(this.user)).email;;
  respuesta:string="";
  constructor(private mainService: MainServicesService, private router:Router){}
  ngOnInit(): void {
    
  }
  updateProfile(){
    this.mainService.updateUser(this.username,this.correo).subscribe((response:any)=>{
      this.respuesta = response.message;
    })
  }
  deleteProfile(){
    this.mainService.deleteUser().subscribe(()=>{
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      this.router.navigate(["/login"]);
    })
  }

}
