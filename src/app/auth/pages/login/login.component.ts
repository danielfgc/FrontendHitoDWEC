import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  correo:String = "";
  pass: String = "";
  respuesta:string="";
  constructor(private authService: AuthService, private router:Router){}
  ngOnInit(): void {
    
  }
  toggleForm(){
    const container:any = document.querySelector('.container');
    container.classList.toggle('active');
  }
  login(){
    this.authService.login(this.correo, this.pass).subscribe((response:any)=> {
      console.log(response)
      this.respuesta="";
      if(response.error==null){
        this.router.navigate(["/home/formalities"]);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        sessionStorage.setItem("token", response.data.token);
      }
    },()=>{this.respuesta='Email or password are incorrect'});
  }
}
