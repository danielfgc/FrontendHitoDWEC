import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  correo:String = "";
  pass: String = "";
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    
  }
  toggleForm(){
    const container:any = document.querySelector('.container');
    container.classList.toggle('active');
  }
  login(){
    this.authService.login(this.correo, this.pass).subscribe((response:any)=> {
      console.log(response)
      if(response.error!=null){
        window.location.href="http://localhost:4200/home";
        sessionStorage.setItem("user", response.data.user);
        sessionStorage.setItem("token", response.data.token);
      }
    });
  }
}
