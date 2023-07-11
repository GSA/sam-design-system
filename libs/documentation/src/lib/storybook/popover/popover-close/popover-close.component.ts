import { Component } from '@angular/core';
import { NgxPopperjsTriggers } from 'ngx-popperjs';

@Component({
  selector: 'sds-popover-close',
  templateUrl: './popover-close.component.html',
})
export class PopoverCloseComponent {
  click = NgxPopperjsTriggers.click;

}
