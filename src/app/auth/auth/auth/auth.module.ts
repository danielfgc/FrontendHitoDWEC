import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from '../../pages/register/register.component';
import { LoginWithRegisterComponent } from '../../pages/login-with-register/login-with-register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginWithRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
