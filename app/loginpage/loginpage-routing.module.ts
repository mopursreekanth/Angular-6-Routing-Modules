import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { LoginComponent } from './loginhome/login/login.component';
import { ForgotpasswordComponent } from './loginhome/forgotpassword/forgotpassword.component';
import { RegisterComponent } from './loginhome/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: LoginhomeComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'forgotpassword',
        component: ForgotpasswordComponent
      },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginpageRoutingModule { }
