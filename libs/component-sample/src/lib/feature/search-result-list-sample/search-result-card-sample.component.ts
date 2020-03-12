import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'gsa-sam-search-result-card-sample',
  templateUrl: './search-result-card-sample.component.html'
})
export class SearchResultCardSampleComponent  {

  constructor(private change: ChangeDetectorRef) { }

  items = [
    { text: 'First', id: 1 },
    { text: 'Second', id: 2 },
    { text: 'Third', id: 3 },
    { text: 'Fourth', id: 4 },
    { text: 'Fifth', id: 5 , hasNewerData:true},

  ];

  emptyItems = [];

}
