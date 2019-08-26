import { Component } from '@angular/core';

@Component({
  selector: 'sds-actions-menu-sample',
  templateUrl: 'actions-menu-sample.component.html'
})
export class ActionsMenuSampleComponent {
  constructor() {}

  menu = [
    { id: 'DownloadBtn', icon: 'bars', text: 'Download' },
    { id: 'FollowBtn', icon: 'bars', text: 'Follow' },
    { id: 'ShareBtn', icon: 'bars', text: 'Share' }
  ];

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
