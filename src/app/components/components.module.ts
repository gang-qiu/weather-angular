import { NgModule } from '@angular/core';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    SidemenuComponent,
    HeaderComponent
  ],
  exports: [
    SidemenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
