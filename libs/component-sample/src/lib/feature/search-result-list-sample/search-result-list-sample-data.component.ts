import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'search-result-list-sample-data',
  templateUrl: 'search-result-list-sample-data.component.html'
})

export class SearchResultListSampleDataComponent {

  constructor(private change: ChangeDetectorRef) { }

  @Input() model;
  @Input() dualDisplay;

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
