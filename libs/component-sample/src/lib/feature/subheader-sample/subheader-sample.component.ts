import { Component } from '@angular/core';

@Component({
  selector: 'sds-subheader-sample',
  templateUrl: 'subheader-sample.component.html',
  styleUrls: ['./subheader-sample.component.scss'],
})
export class SubheaderSampleComponent {

  public isDrawerOpen = 0;
  subheader = {
    buttons: [
      { id: 'FirstButton', text: 'Button', class: 'usa-button--secondary' },
      { id: 'SecondButton', text: 'Button', class: 'usa-button--primary' }
    ],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' },
      { id: 'FollowBtn', icon: 'bars', text: 'Follow' },
      { id: 'ShareBtn', icon: 'bars', text: 'Share' }
    ]
  };

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
