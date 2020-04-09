import { Component } from '@angular/core';
import { WeatherCondition } from '../weather-icons/weather-icons.component';
import { CityWeatherModel } from '../../models/city-weather/city-weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  public cityWeatherModel: CityWeatherModel;

  constructor(cityWeatherModel: CityWeatherModel) {
    this.cityWeatherModel = cityWeatherModel;
  }
}
