import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SerachhomeComponent } from './serachhome/serachhome.component';
import { SearchuserComponent } from './serachhome/searchuser/searchuser.component';
import { SearcroleComponent } from './serachhome/searcrole/searcrole.component';
import { SearchpipelinprojectsComponent } from './serachhome/searchpipelinprojects/searchpipelinprojects.component';


@NgModule({
  declarations: [SerachhomeComponent, SearchuserComponent, SearcroleComponent, SearchpipelinprojectsComponent],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
