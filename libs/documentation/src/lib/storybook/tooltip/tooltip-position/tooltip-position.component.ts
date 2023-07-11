import { Component } from '@angular/core';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';

@Component({
  selector: 'sds-tooltip-position',
  templateUrl: './tooltip-position.component.html',
  styleUrls: ['./tooltip-position.component.scss'],
})
export class TooltipPositionComponent {
  hover = NgxPopperjsTriggers.hover;

  getPlacement(placement: string): NgxPopperjsPlacements {
    switch (placement) {
      case 'top':
        return NgxPopperjsPlacements.TOP;
      case 'left':
        return NgxPopperjsPlacements.LEFT;
      case 'right':
        return NgxPopperjsPlacements.RIGHT;
      case 'bottom':
        return NgxPopperjsPlacements.BOTTOM;
      default:
        return NgxPopperjsPlacements.RIGHT;
    }
  }

  constructor() {}
}
