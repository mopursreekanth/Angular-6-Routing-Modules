import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApihomeComponent } from './apihome/apihome.component';
import { ApiadminComponent } from './apihome/apiadmin/apiadmin.component';
import { ApimetricsComponent } from './apihome/apimetrics/apimetrics.component';
import { ServicesComponent } from './apihome/services/services.component';
import { MyservicesComponent } from './apihome/myservices/myservices.component';


const routes: Routes = [
  {
    path: '',
    component: ApihomeComponent,
    children: [
      {
        path: 'myservices',
        component: MyservicesComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'apimetrics',
        component: ApimetricsComponent
      },
      {
        path: 'apiadmin',
        component: ApiadminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApigatewaysRoutingModule { }
