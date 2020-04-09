import { Component, EventEmitter, Output } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-add-weather-card',
  templateUrl: './add-weather-card.component.html',
  styleUrls: ['./add-weather-card.component.scss']
})
export class AddWeatherCardComponent {
  public isAddingCity: boolean;
  public stateService: StateService;
  public newCityName: string;
  @Output() addNewCity: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    stateService: StateService
  ) {
    this.stateService = stateService;
  }

  public onClickAddCity() {
    this.isAddingCity = !this.isAddingCity;
  }

  public addCity() {
    this.addNewCity.emit(this.newCityName);
    this.newCityName = null;
    this.isAddingCity = false;
  }

}
