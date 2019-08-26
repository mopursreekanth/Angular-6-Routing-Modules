import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { OrganizationComponent } from './adminhome/organization/organization.component';
import { UnitsComponent } from './adminhome/units/units.component';
import { ConfigrationComponent } from './adminhome/configration/configration.component';
import { TemplatesComponent } from './adminhome/templates/templates.component';


const routes: Routes = [
  {
    path: '',
    component: AdminhomeComponent,
    children: [
      {
        path: 'organization',
        component: OrganizationComponent
      },
      {
        path: 'units',
        component: UnitsComponent
      },
      {
        path: 'configration',
        component: ConfigrationComponent
      },
      {
        path: 'templates',
        component: TemplatesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminstrationRoutingModule { }
