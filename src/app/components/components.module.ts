import { NgModule } from '@angular/core';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    SidemenuComponent
  ],
  exports: [
    SidemenuComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
