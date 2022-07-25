import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sds-page',
  template: ` <div class="grid-container"><ng-content></ng-content></div> `,
})
export class SdsPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: 'sds-page-options',
  template: `
    <div class="grid-row position-relative"><ng-content></ng-content></div>
  `,
})
export class SdsPageOptionsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
