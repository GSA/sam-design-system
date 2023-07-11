import { Component } from '@angular/core';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';

@Component({
  selector: 'sds-popover-content',
  templateUrl: './popover-content.component.html',
})
export class PopoverContentComponent {
  click = NgxPopperjsTriggers.click;
  bottom = NgxPopperjsPlacements.BOTTOM;
}
