import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignstudioRoutingModule } from './designstudio-routing.module';
import { DesignstudiohomeComponent } from './designstudiohome/designstudiohome.component';
import { ProjectComponent } from './designstudiohome/project/project.component';
import { PipelinedesignerComponent } from './designstudiohome/pipelinedesigner/pipelinedesigner.component';
import { PipelineviewComponent } from './designstudiohome/pipelineview/pipelineview.component';
import { LogsComponent } from './designstudiohome/logs/logs.component';


@NgModule({
  declarations: [DesignstudiohomeComponent, ProjectComponent, PipelinedesignerComponent, PipelineviewComponent, LogsComponent],
  imports: [
    CommonModule,
    DesignstudioRoutingModule
  ]
})
export class DesignstudioModule { }
