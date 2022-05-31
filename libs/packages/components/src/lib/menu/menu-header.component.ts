import { Component, Input } from '@angular/core';

@Component({
  selector: 'sds-menu-header',
  templateUrl: 'menu-header.component.html',
})
export class SdsMenuHeaderComponent {
  @Input() hideClose = false;
}
