import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-add-weather-card',
  templateUrl: './add-weather-card.component.html',
  styleUrls: ['./add-weather-card.component.scss']
})
export class AddWeatherCardComponent implements OnInit {

  public stateService: StateService;

  constructor(
    stateService: StateService
  ) {
    this.stateService = stateService;
  }

  ngOnInit(): void {
  }

}
