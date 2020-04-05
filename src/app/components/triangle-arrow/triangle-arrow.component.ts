import { Component, Input } from '@angular/core';

export type ArrowDirection = 'up' | 'down';

@Component({
  selector: 'app-triangle-arrow',
  templateUrl: './triangle-arrow.component.html',
})
export class TriangleArrowComponent {
  @Input() arrowDirection: ArrowDirection;
}
