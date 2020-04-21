import { Component, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'item-sample',
  templateUrl: './item.component.html'
})

export class ResultListItemSampleComponent {

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
