import { NgModule } from '@angular/core';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RadioSwitchComponent } from './radio-switch/radio-switch.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RouterModule } from '@angular/router';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    SidemenuComponent,
    HeaderComponent,
    RadioSwitchComponent,
    FooterComponent,
    BodyComponent,
    WeatherCardComponent,
    HomeComponent
  ],
  exports: [
    SidemenuComponent,
    HeaderComponent,
    RadioSwitchComponent,
    FooterComponent,
    BodyComponent,
    WeatherCardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class ComponentsModule { }
