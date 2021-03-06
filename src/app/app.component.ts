import { Component } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  stateService: StateService = null;

  constructor(stateService: StateService) {
    this.stateService = stateService;
  }
}
