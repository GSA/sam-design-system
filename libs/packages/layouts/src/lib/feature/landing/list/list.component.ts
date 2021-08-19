import { Component, Input } from '@angular/core';

@Component({
  selector: 'sds-landing-list',
  templateUrl: 'list.component.html',
})
export class SdsLandingListComponent {
  @Input() list;
}
