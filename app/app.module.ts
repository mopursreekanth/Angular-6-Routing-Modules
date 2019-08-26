import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BordersModule } from './borders/borders.module';
import { DashBoardsComponent } from './dash-boards/dash-boards.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    AppComponent,
    DashBoardsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BordersModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
