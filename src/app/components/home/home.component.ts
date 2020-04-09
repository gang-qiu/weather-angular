import { Component, OnInit } from '@angular/core';
import { CityWeatherModel } from '../../models/city-weather/city-weather.model';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public weatherModels: CityWeatherModel[] = [];
  private apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  public addCity(cityName: string) {
    this.apiService.getCurrentWeather(cityName).then(weatherModel => {
      this.weatherModels.push(weatherModel);
    });
  }
}
