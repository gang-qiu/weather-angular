import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityWeatherModel } from '../../models/city-weather/city-weather.model';

const OPEN_WEATHER_MAP_API_KEY = '6a229404215b40606483ced33611e29d';
const OPEN_WEATHER_MAP_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getCurrentWeather(city: string): Promise<CityWeatherModel> {
    const url = OPEN_WEATHER_MAP_BASE_URL + `?q=${city}&APPID=${OPEN_WEATHER_MAP_API_KEY}`;
    return new Promise((resolve, reject) => {
      this.http.get<any>(url).subscribe(data => {
          resolve(new CityWeatherModel({
            cityName: data.name,
            maxTemp: data.main.temp_max,
            minTemp: data.main.temp_min,
            weatherCondition: data.weather[0].main.toLowerCase(),
            currentTemp: data.main.temp,
          }));
        }, err => {
          reject(err);
        }
      );
    });
  }
}

