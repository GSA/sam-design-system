import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActionMenModel, ActionMenuMode } from './action-menu.model';

@Component({
  selector: 'sds-actions-menu',
  templateUrl: 'actions-menu.component.html',
})
export class SdsActionsMenuComponent {
  actionModes = ActionMenuMode;
  @Input() model: ActionMenModel;
  @Input() size: string;
  @Output() clicks = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {
    if (this.model.actions.length) {
      this.model.actions.forEach((menuItem) => {
        if (!menuItem.mode) menuItem.mode = this.actionModes.SHOWN;
      });
    }
  }

  getDisabled(mode) {
    return (mode = this.actionModes.DISABLED) ? true : false;
  }
}
