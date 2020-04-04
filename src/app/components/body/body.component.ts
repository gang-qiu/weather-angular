import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  public stateService: StateService;

  constructor(stateService: StateService) {
    this.stateService = stateService;
  }
}
