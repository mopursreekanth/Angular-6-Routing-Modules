import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApigatewaysRoutingModule } from './apigateways-routing.module';
import { ApihomeComponent } from './apihome/apihome.component';
import { ApiadminComponent } from './apihome/apiadmin/apiadmin.component';
import { MyservicesComponent } from './apihome/myservices/myservices.component';
import { ServicesComponent } from './apihome/services/services.component';
import { ApimetricsComponent } from './apihome/apimetrics/apimetrics.component';


@NgModule({
  declarations: [ApihomeComponent, ApiadminComponent, MyservicesComponent, ServicesComponent, ApimetricsComponent],
  imports: [
    CommonModule,
    ApigatewaysRoutingModule
  ]
})
export class ApigatewaysModule { }
