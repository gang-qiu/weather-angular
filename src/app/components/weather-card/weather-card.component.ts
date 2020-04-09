import { Component, Input } from '@angular/core';
import { CityWeatherModel } from '../../models/city-weather/city-weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() cityWeatherModel: CityWeatherModel;
}
