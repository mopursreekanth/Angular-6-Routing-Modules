import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardsComponent } from './dash-boards/dash-boards.component';


const routes: Routes = [{
    path: 'dashboard',
    component: DashBoardsComponent
  },
  {
    path: 'loginpage',
    loadChildren: './loginpage/loginpage.module#LoginpageModule'
  },
  // {
  //   path: 'loginpage',
  //   loadChildren: './loginpage/loginpage.module#loginpageModule'
  // },
  {
    path: 'adminstration',
    loadChildren: './adminstration/adminstration.module#AdminstrationModule'
  },
  {
    path: 'analytics',
    loadChildren: './analytics/analytics.module#AnalyticsModule'
  },
  {
    path: 'designstudio',
    loadChildren: './designstudio/designstudio.module#DesignstudioModule'
  },
  {
    path: 'apigateways',
    loadChildren: './apigateways/apigateways.module#ApigatewaysModule'
  },
  {
    path: 'search',
    loadChildren: './search/search.module#SearchModule'
  },
  {
    path: 'graphes',
    loadChildren: './graphes/graphes.module#GraphesModule'
  },
  { path: '**', redirectTo: 'loginpage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
