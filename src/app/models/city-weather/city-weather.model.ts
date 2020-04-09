import { WeatherCondition } from '../../components/weather-icons/weather-icons.component';

export class CityWeatherModel {
  public cityName: string;
  public currentTemp: number;
  public minTemp: number;
  public maxTemp: number;
  public weatherCondition: WeatherCondition;

  constructor(input: any) {
    return Object.assign(this, input);
  }
}
