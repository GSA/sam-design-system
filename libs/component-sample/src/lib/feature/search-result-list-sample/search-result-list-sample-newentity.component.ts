import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'search-result-list-sample-newentity',
  templateUrl: './search-result-list-sample-newentity.component.html',
  styleUrls: ['./search-result-list-sample-newentity.component.scss']
})
export class SearchResultListSampleNewentityComponent {

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

}
