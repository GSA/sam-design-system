import { Component } from '@angular/core';

@Component({
  selector: 'sds-actions-size',
  templateUrl: './actions-size.component.html',
})
export class ActionsSizeComponent {
  constructor() {}

  menu = {
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
