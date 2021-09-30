import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sds-actions-menu',
  templateUrl: 'actions-menu.component.html'
})
export class SdsActionsMenuComponent {
  @Input() model;
  @Input() size: string;
  @Output() clicks = new EventEmitter<string>();
  constructor() {}
}
