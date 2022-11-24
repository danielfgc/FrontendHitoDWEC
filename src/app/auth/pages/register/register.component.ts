import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  username:String = "";
  correo:String = "";
  pass: String = "";
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    
  }
  register(){
    this.authService.register(this.correo,this.pass, this.username).subscribe((response)=>{console.log(response)})
  }
  toggleForm(){
    const container:any = document.querySelector('.container');
    container.classList.toggle('active');
  }
}
