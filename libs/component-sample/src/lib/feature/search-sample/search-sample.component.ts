import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sds-search-sample',
  templateUrl: 'search-sample.component.html'
})
export class SearchSampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
