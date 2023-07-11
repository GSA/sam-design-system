import { Component } from '@angular/core';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';

@Component({
  templateUrl: './popover-position.component.html',
  selector: `sds-popover-position`,
  styleUrls: ['./popover-position.component.scss']
})
export class PopoverPositionComponent {
  click = NgxPopperjsTriggers.click;

  getPlacement(placement: string): NgxPopperjsPlacements{
    switch(placement){
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
}
