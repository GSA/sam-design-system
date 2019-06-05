import { Component } from '@angular/core';

@Component({
  selector: 'sds-subheader-sample',
  templateUrl: 'subheader-sample.component.html'
})
export class SubheaderSampleComponent {
  searchExpanded: boolean;

  constructor() {}

  SearchExpanded() {
    this.searchExpanded = true;
  }

  SearchCollapsed() {
    this.searchExpanded = false;
  }
}
