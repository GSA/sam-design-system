import { Component, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'card-item-sample',
  templateUrl: './card-item.component.html'
})

export class ResultListCardItemSampleComponent {

  constructor(private change: ChangeDetectorRef) { }

  @Input() model;

  menu = {
    trigger: 'primary',
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' },
      { id: 'FollowBtn', icon: 'bars', text: 'Follow' },
      { id: 'ShareBtn', icon: 'bars', text: 'Share' }
    ]
  };

  log(value) {
    console.log(`%cLog: ${value} clicked in result item ${this.model.id}`, 'color: blue; font-weight: bold');
  }

}
