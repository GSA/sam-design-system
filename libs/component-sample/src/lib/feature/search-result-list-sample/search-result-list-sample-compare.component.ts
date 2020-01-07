import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'search-result-list-sample-compare',
  templateUrl: './search-result-list-sample-compare.component.html'
})
export class SearchResultListSampleCompareComponent {

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
