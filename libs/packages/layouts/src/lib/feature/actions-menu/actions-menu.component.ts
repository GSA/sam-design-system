import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sds-actions-menu',
  templateUrl: 'actions-menu.component.html'
})
export class SdsActionsMenuComponent {
  @Input() model;
  @Input() size: string;
  @Output() clicks = new EventEmitter<string>();
  constructor() {
    console.warn('The action menu you are currently using is deprecated. Please instead import SdsActionsMenuModule from @gsa-sam/components')
  }
}
