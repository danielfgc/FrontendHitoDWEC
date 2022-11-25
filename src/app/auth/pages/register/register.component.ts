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
  repPass: String = "";
  respuesta:string="";
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    
  }
  register(){
    if(this.pass!=this.repPass){
      this.respuesta="Passwords don't match";
      return;
    }
    this.authService.register(this.correo,this.pass, this.username).subscribe((response:any)=>{
  
        window.alert("registered successful");
        this.respuesta="";
        this.toggleForm();
      
    },(error)=>{
      this.respuesta = `${error.error.message} `;
      console.log(error);
    });
    
  }
  toggleForm(){
    const container:any = document.querySelector('.container');
    container.classList.toggle('active');
  }
}
