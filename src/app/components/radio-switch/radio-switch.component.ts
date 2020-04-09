import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-switch',
  templateUrl: './radio-switch.component.html',
  styleUrls: ['./radio-switch.component.scss']
})
export class RadioSwitchComponent {
  @Input() isCheckedByDefault = false;
  @Input() isChecked: boolean = this.isCheckedByDefault;
  @Output() clickEvent = new EventEmitter<void>();
}
