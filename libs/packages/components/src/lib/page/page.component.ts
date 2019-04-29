import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sds-page',
  template: `
    <div class="grid-container margin-top-3"><ng-content></ng-content></div>
  `
})
export class SdsPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: 'sds-page-options',
  template: `
    <ng-content></ng-content>
  `
})
export class SdsPageOptionsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
