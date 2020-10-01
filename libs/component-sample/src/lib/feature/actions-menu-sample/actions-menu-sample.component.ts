import { Component } from '@angular/core';

@Component({
  selector: 'sds-actions-menu-sample',
  templateUrl: 'actions-menu-sample.component.html'
})
export class ActionsMenuSampleComponent {
  constructor() {}

  menu = {
    trigger: {
      type: 'plain', // plain | primary
      shadow: true
    },
    actions: [
      { id: 'DownloadBtn', text: 'Download' },
      { id: 'FollowBtn', text: 'Follow' },
      { id: 'ShareBtn', text: 'Share' }
    ]
  };

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
