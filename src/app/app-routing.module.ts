import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginWithRegisterComponent } from './auth/pages/login-with-register/login-with-register.component';
import { FormalityListComponent } from './main/formality-list/formality-list.component';
import { MainComponent } from './main/main/main.component';
import { ProfileComponent } from './main/profile/profile.component';


const routes: Routes = [
  { path: "login", component: LoginWithRegisterComponent },
  {
    path: "home",
    component: MainComponent,
    children: [
      { path: "formalities", component: FormalityListComponent },
      { path: "profile", component: ProfileComponent },
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
