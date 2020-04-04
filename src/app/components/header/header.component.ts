import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  stateService: StateService = null;

  constructor(stateService: StateService) {
    this.stateService = stateService;
  }

  public toggleMenu = () => {
    this.stateService.showSideMenu = !this.stateService.showSideMenu;
  }

  public toggleDarkModeSwitch = () => {
    this.stateService.darkModeActive = !this.stateService.darkModeActive;
  }
}
