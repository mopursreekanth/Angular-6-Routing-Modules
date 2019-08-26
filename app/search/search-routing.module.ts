import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchpipelinprojectsComponent } from './serachhome/searchpipelinprojects/searchpipelinprojects.component';
import { SearchuserComponent } from './serachhome/searchuser/searchuser.component';
import { SearcroleComponent } from './serachhome/searcrole/searcrole.component';
import { SerachhomeComponent } from './serachhome/serachhome.component';


const routes: Routes = [
  {
    path: '',
    component: SerachhomeComponent,
    children: [
      {
        path: 'searchpipelinprojects',
        component: SearchpipelinprojectsComponent
      },
      {
        path: 'searchuser',
        component: SearchuserComponent
      },
      {
        path: 'searcrole',
        component: SearcroleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
