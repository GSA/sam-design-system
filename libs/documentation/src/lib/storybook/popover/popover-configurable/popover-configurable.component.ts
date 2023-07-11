import { Component, Input } from '@angular/core';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';

@Component({
  selector: 'sds-popover-configurable',
  templateUrl: './popover-configurable.component.html',
  styleUrls: ['./popover-configurable.component.scss']
})
export class PopoverConfigurableComponent {
  _placement = NgxPopperjsPlacements.TOP;
  trigger = NgxPopperjsTriggers.click;

  @Input('placement')
  set position(position: 'top' | 'bottom' | 'right' | 'left'){
    switch(position){
      case 'top':
        this._placement = NgxPopperjsPlacements.TOP;
        break;
      case 'bottom':
        this._placement = NgxPopperjsPlacements.BOTTOM;
        break;
      case 'left':
        this._placement = NgxPopperjsPlacements.LEFT;
        break;
      case 'right':
        this._placement = NgxPopperjsPlacements.RIGHT;
        break;
      default:
        this._placement = NgxPopperjsPlacements.TOP;
    }
  }

  @Input('popper')
  popper: string;

  @Input('hideOnClickOutside')
  hideOnClickOutside: boolean;

}
