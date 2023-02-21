import { Component } from '@angular/core';

@Component({
  selector: 'sds-actions-label',
  templateUrl: './actions-label.component.html',
})
export class ActionsLabelComponent {
  constructor() {}

  menu = {
    label: 'More',
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
}
