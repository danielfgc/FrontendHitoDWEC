import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginWithRegisterComponent } from './auth/pages/login-with-register/login-with-register.component';


const routes: Routes = [{path: "home", component:LoginWithRegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
