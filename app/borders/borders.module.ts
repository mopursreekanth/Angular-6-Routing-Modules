import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BordersRoutingModule } from './borders-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    BordersRoutingModule
  ],
  exports: [HeaderComponent, FooterComponent],
  // entryComponents: [HeaderComponent, FooterComponent]
})
export class BordersModule { }
