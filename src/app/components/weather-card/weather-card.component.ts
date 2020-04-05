import { Component } from '@angular/core';
import { WeatherCondition } from '../weather-icons/weather-icons.component';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {

  public weatherCondition: WeatherCondition;

  constructor() {
    this.weatherCondition = 'clouds';
  }
}
