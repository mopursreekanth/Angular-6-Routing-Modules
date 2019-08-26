import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphesRoutingModule } from './graphes-routing.module';
import { GrapheshomeComponent } from './grapheshome/grapheshome.component';
import { GraphComponent } from './grapheshome/graph/graph.component';


@NgModule({
  declarations: [GrapheshomeComponent, GraphComponent],
  imports: [
    CommonModule,
    GraphesRoutingModule
  ]
})
export class GraphesModule { }
