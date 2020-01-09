import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'search-result-list-sample',
  templateUrl: 'search-result-list-sample.component.html',
})

export class SearchResultListSampleComponent {

  constructor(private change: ChangeDetectorRef) { }

  items = [
    { text: 'First', id: 1 },
    { text: 'Second', id: 2 },
    { text: 'Third', id: 3 },
    { text: 'Fourth', id: 4 },
    { text: 'Fifth', id: 5 },
    { text: 'Sixth', id: 6, isDualRecord: true },
  ];
  emptyItems = [];
}
