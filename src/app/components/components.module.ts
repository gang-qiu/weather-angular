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
import { WeatherIconsComponent } from './weather-icons/weather-icons.component';
import { TriangleArrowComponent } from './triangle-arrow/triangle-arrow.component';
import { AddWeatherCardComponent } from './add-weather-card/add-weather-card.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

@NgModule({
  declarations: [
    SidemenuComponent,
    HeaderComponent,
    RadioSwitchComponent,
    FooterComponent,
    BodyComponent,
    WeatherCardComponent,
    HomeComponent,
    WeatherIconsComponent,
    TriangleArrowComponent,
    AddWeatherCardComponent,
    WeatherDetailsComponent
  ],
  exports: [
    SidemenuComponent,
    HeaderComponent,
    RadioSwitchComponent,
    FooterComponent,
    BodyComponent,
    WeatherCardComponent,
    HomeComponent,
    WeatherIconsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class ComponentsModule { }
