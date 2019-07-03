import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'search-result-list-sample-data',
  templateUrl: 'search-result-list-sample-data.component.html'
})

export class SearchResultListSampleDataComponent {

  constructor(private change: ChangeDetectorRef) { }

  @Input() model;

}
export class SubheaderSampleComponent {

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

}
