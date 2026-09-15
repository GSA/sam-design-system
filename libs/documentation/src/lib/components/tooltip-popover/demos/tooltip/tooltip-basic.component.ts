import { Component } from '@angular/core';

@Component({
    templateUrl: './tooltip-basic.component.html',
    selector: `sds-tooltip-basic-demo`,
    standalone: false
})
export class TooltipBasic {
  clicked() {
    console.log('clicked');
  }
}
