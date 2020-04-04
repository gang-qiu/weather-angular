import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
  @Input() showMenu: boolean;
  @Output() showMenuChange = new EventEmitter<boolean>();

  public toggleMenu = () => {
    this.showMenu = !this.showMenu;
    this.showMenuChange.emit(this.showMenu);
  }
}
