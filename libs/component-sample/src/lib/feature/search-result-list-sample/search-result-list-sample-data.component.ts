import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'search-result-list-sample-data',
  templateUrl: 'search-result-list-sample-data.component.html'
})

export class SearchResultListSampleDataComponent {

  constructor(private change: ChangeDetectorRef) { }

@Input() model;

}