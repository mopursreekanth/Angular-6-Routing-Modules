import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './analyticshome/dashboard/dashboard.component';
import { AnalyticshomeComponent } from './analyticshome/analyticshome.component';
import { NotebookComponent } from './analyticshome/notebook/notebook.component';
import { ReportbuilderComponent } from './analyticshome/reportbuilder/reportbuilder.component';
import { TransactionmetricsComponent } from './analyticshome/transactionmetrics/transactionmetrics.component';


const routes: Routes = [
  {
    path: '',
    component: AnalyticshomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'notebook',
        component: NotebookComponent
      },
      {
        path: 'reportbuilder',
        component: ReportbuilderComponent
      },
      {
        path: 'transactionmetrics',
        component: TransactionmetricsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
