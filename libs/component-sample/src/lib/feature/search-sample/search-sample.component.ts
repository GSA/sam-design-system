import { Component, OnInit } from '@angular/core';
import { SdsSearchDataConfigurationData, SdsSearchDataConfigurationData1 } from './search-sample-data/search-sample-data';

@Component({
  selector: 'sds-search-sample',
  templateUrl: 'search-sample.component.html'
})
export class SearchSampleComponent implements OnInit {
  constructor() {}

  searchConfiguration = SdsSearchDataConfigurationData;
  searchConfiguration1 = SdsSearchDataConfigurationData1;


  ngOnInit() {}

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
