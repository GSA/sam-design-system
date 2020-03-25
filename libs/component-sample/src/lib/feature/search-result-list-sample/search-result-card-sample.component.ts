import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'gsa-sam-search-result-card-sample',
  templateUrl: './search-result-card-sample.component.html'
})
export class SearchResultCardSampleComponent  {

  constructor(private change: ChangeDetectorRef) { }

  items = [
    { iconlib : 'sds', icon: "bell", text: 'First', id: 1 },
    { iconlib : 'sds', icon: 'book', text: 'Second', id: 2 },
    { iconlib : 'sds', icon: 'download', text: 'Third', id: 3 },
    { iconlib : 'fas', icon: 'comment', text: 'Fourth', id: 4 },
    { iconlib : 'sds', icon: 'arrow-left', text: 'Fifth', id: 5 , hasNewerData:true},

  ];

  emptyItems = [];

}
