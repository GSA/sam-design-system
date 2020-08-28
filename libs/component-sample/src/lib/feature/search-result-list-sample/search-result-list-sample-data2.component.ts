import { Component, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'search-result-list-sample-data2',
  templateUrl: 'search-result-list-sample-data2.component.html'
})

export class SearchResultListSampleData2Component {

  constructor(private change: ChangeDetectorRef) { }

  @Input() model;

}
