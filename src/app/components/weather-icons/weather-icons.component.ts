import { Component, Input } from '@angular/core';

export type WeatherCondition = 'clouds' | 'rain' | 'drizzle' | 'storm' | 'sunny' | 'clear' | 'fog';

@Component({
  selector: 'app-weather-icons',
  templateUrl: './weather-icons.component.html',
  styleUrls: ['./weather-icons.component.scss']
})
export class WeatherIconsComponent {
  @Input() condition: WeatherCondition;
}

