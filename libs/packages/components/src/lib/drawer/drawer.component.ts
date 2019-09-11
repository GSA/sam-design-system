import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sds-drawer',
  templateUrl: 'drawer.component.html',
})
export class SdsDrawerComponent {
  @Input() title: string;
  constructor() {}
}
