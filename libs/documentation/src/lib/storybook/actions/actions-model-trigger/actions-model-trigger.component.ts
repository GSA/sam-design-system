import { Component } from '@angular/core';

@Component({
  selector: 'sds-actions-model-trigger',
  templateUrl: './actions-model-trigger.component.html',
  preserveWhitespaces: true,
  styleUrls: ['./actions-model-trigger.component.scss'],
})
export class ActionsModelTriggerComponent {
  primaryTriggerWithShadow;
  primaryTriggerWithoutShadow;
  plainTriggerWithShadow;
  plainTriggerWithoutShadow;

  constructor() {
    const baseMenu = {
      trigger: {
        type: 'plain', // plain | primary
        shadow: true,
      },
      actions: [
        { id: 'DownloadBtn', text: 'Download' },
        { id: 'FollowBtn', text: 'Follow' },
        { id: 'ShareBtn', text: 'Share' },
      ],
    };

    this.primaryTriggerWithShadow = Object.assign({}, baseMenu, {
      trigger: {
        type: 'primary',
        shadow: true,
      },
    });
    this.primaryTriggerWithoutShadow = Object.assign({}, baseMenu, {
      trigger: {
        type: 'primary',
        shadow: false,
      },
    });
    this.plainTriggerWithShadow = Object.assign({}, baseMenu, {
      trigger: {
        type: 'plain',
        shadow: true,
      },
    });
    this.plainTriggerWithoutShadow = Object.assign({}, baseMenu, {
      trigger: {
        type: 'plain',
        shadow: false,
      },
    });
  }
}
