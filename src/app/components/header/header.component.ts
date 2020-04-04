import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() showMenu = false;
  @Output() showMenuChange = new EventEmitter<boolean>();
  darkModeActive = false;

  public toggleMenu = () => {
    this.showMenu = !this.showMenu;
    this.showMenuChange.emit(this.showMenu);
  }

  public toggleDarkModeSwitch = () => {
    this.darkModeActive = !this.darkModeActive;
  }
}
