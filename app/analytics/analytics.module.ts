import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticshomeComponent } from './analyticshome/analyticshome.component';
import { DashboardComponent } from './analyticshome/dashboard/dashboard.component';
import { ReportbuilderComponent } from './analyticshome/reportbuilder/reportbuilder.component';
import { NotebookComponent } from './analyticshome/notebook/notebook.component';
import { TransactionmetricsComponent } from './analyticshome/transactionmetrics/transactionmetrics.component';


@NgModule({
  declarations: [AnalyticshomeComponent, DashboardComponent, ReportbuilderComponent, NotebookComponent, TransactionmetricsComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule
  ]
})
export class AnalyticsModule { }
