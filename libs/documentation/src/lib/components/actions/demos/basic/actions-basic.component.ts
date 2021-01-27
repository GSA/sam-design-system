import { Component } from '@angular/core';

@Component({
  templateUrl: 'actions-basic.component.html',
  selector: `sds-actions-basic-demo`,
})
export class ActionsBasic {
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
