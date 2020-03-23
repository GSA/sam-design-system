import { Component, OnInit } from '@angular/core';
import { SdsSearchDataConfigurationData,
         SdsSearchDataConfigurationData1,
         SdsSearchDataConfigurationData2,
         SdsSearchDataConfigurationData3,
         SdsSearchDataConfigurationData4,
         SdsSearchDataConfigurationData5
        } from './search-sample-data/search-sample-data';

@Component({
  selector: 'sds-search-sample',
  templateUrl: 'search-sample.component.html'
})
export class SearchSampleComponent implements OnInit {
  constructor() {}

  searchConfiguration = SdsSearchDataConfigurationData;
  searchConfiguration1 = SdsSearchDataConfigurationData1;
  searchConfiguration2 = SdsSearchDataConfigurationData2;
  searchConfiguration3 = SdsSearchDataConfigurationData3;
  searchConfiguration4 = SdsSearchDataConfigurationData4;
  searchConfiguration5 = SdsSearchDataConfigurationData5;


  ngOnInit() {}

  log(value) {
    console.log(value);
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
