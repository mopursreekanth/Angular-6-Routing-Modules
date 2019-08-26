import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './grapheshome/graph/graph.component';
import { GrapheshomeComponent } from './grapheshome/grapheshome.component';


const routes: Routes = [
  {
    path: '',
    component: GrapheshomeComponent,
    children: [
      {
        path: 'graph',
        component: GraphComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphesRoutingModule { }
