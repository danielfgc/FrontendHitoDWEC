import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormalityListComponent } from '../../formality-list/formality-list.component';
import { FormalityFormComponent } from '../../formality-form/formality-form.component';
import { ProfileComponent } from '../../profile/profile.component';
import { MainComponent } from '../../main/main.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FormalityListComponent,
    FormalityFormComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
