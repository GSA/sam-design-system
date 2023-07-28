import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActionMenuModel, ActionMenuMode } from '@gsa-sam/components';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  templateUrl: 'actions-action-mode.component.html',
  selector: `sds-actions-action-mode-demo`,
})
export class ActionsMenuActionMode {
  constructor() {}

  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'mode',
      type: 'select',
      templateOptions: {
        label: 'Choose Action menu mode ',
        options: [
          { label: 'Hide', value: ActionMenuMode.HIDDEN },
          { label: 'Disable', value: ActionMenuMode.DISABLED },
          { label: 'Shown', value: ActionMenuMode.SHOWN },
        ],
      },
    },
  ];

  menu: ActionMenuModel = {
    trigger: {
      type: 'plain', // plain | primary
      shadow: true,
    },
    actions: [
      { id: 'DownloadBtn', text: 'Download' },
      { id: 'FollowBtn', text: 'Follow' },
      { id: 'ShareBtn', text: 'Share', mode: ActionMenuMode.DISABLED },
    ],
  };

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

  updateMenu() {
    this.menu.actions[0].mode = this.model.mode;
  }
}
