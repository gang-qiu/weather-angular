import { NgModule } from '@angular/core';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RadioSwitchComponent } from './radio-switch/radio-switch.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidemenuComponent,
    HeaderComponent,
    RadioSwitchComponent,
    FooterComponent,
    BodyComponent
  ],
  exports: [
    SidemenuComponent,
    HeaderComponent,
    RadioSwitchComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class ComponentsModule { }
