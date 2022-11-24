import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-with-register',
  templateUrl: './login-with-register.component.html',
  styleUrls: ['./login-with-register.component.css']
})
export class LoginWithRegisterComponent implements OnInit{
  ngOnInit(): void {
    
  }
  toggleForm(){
    const container:any = document.querySelector('.container');
    container.classList.toggle('active');
  }
}
