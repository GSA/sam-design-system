import { Component } from '@angular/core';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';

@Component({
  selector: 'sds-tooltip-content',
  templateUrl: './tooltip-content.component.html'
})
export class TooltipContentComponent {

  hover = NgxPopperjsTriggers.hover;
  bottom = NgxPopperjsPlacements.BOTTOM;

}
