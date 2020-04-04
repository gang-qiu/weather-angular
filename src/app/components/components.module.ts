import { NgModule } from '@angular/core';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RadioSwitchComponent } from './radio-switch/radio-switch.component';

@NgModule({
  declarations: [
    SidemenuComponent,
    HeaderComponent,
    RadioSwitchComponent
  ],
  exports: [
    SidemenuComponent,
    HeaderComponent,
    RadioSwitchComponent
  ],
  imports: [
    CommonModule
  ],
})
export class ComponentsModule { }
