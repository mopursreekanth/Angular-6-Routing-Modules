import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignstudiohomeComponent } from './designstudiohome/designstudiohome.component';
import { ProjectComponent } from './designstudiohome/project/project.component';
import { PipelineviewComponent } from './designstudiohome/pipelineview/pipelineview.component';
import { PipelinedesignerComponent } from './designstudiohome/pipelinedesigner/pipelinedesigner.component';
import { LogsComponent } from './designstudiohome/logs/logs.component';


const routes: Routes = [
  {
    path: '',
    component: DesignstudiohomeComponent,
    children: [
      {
        path: 'project',
        component: ProjectComponent
      },
      {
        path: 'pipelineview',
        component: PipelineviewComponent
      },
      {
        path: 'pipelinedesigner',
        component: PipelinedesignerComponent
      },
      {
        path: 'logs',
        component: LogsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignstudioRoutingModule { }
