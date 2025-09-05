import { Component } from '@angular/core';

@Component({
    templateUrl: './collapse-basic.component.html',
    styleUrls: ['./collapse-basic.component.scss'],
    selector: `sds-collapse-basic-demo`,
    standalone: false
})
export class CollapseBasic {
  public isCollapsedContent = true;
}
