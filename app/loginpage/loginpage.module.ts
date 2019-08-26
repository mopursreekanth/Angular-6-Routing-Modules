import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginpageRoutingModule } from './loginpage-routing.module';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { LoginComponent } from './loginhome/login/login.component';
import { RegisterComponent } from './loginhome/register/register.component';
import { ForgotpasswordComponent } from './loginhome/forgotpassword/forgotpassword.component';



@NgModule({
  imports: [
    CommonModule,
    LoginpageRoutingModule
  ],
  declarations: [LoginhomeComponent, LoginComponent, RegisterComponent, ForgotpasswordComponent],
})
export class LoginpageModule { }
