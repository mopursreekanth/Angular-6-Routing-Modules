import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminstrationRoutingModule } from './adminstration-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { OrganizationComponent } from './adminhome/organization/organization.component';
import { UnitsComponent } from './adminhome/units/units.component';
import { TemplatesComponent } from './adminhome/templates/templates.component';
import { ConfigrationComponent } from './adminhome/configration/configration.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [AdminhomeComponent, OrganizationComponent, UnitsComponent, TemplatesComponent, ConfigrationComponent],
  imports: [
    CommonModule,
    AdminstrationRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class AdminstrationModule { }
