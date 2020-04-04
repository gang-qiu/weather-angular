import {Component} from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
  stateService: StateService;

  constructor(stateService: StateService) {
    this.stateService = stateService;
  }

  public toggleMenu = () => {
    this.stateService.showSideMenu = !this.stateService.showSideMenu;
  }
}
