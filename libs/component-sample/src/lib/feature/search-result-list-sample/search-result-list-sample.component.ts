import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SearchMessageInfoSampleData, SearchMessageEmptyData } from './result-list-info-message.data';
import { NavigationMode } from '@gsa-sam/components';

@Component({
  selector: 'search-result-list-sample',
  templateUrl: 'search-result-list-sample.component.html',
})

export class SearchResultListSampleComponent {

  constructor(private change: ChangeDetectorRef) { }

  public messageInfoData=SearchMessageInfoSampleData;
  public messageInfoEmptyData=SearchMessageEmptyData;


  items = [
    { text: 'First', id: 1 },
    { text: 'Second', id: 2 },
    { text: 'Third', id: 3 },
    { text: 'Fourth', id: 4 },
    { text: 'Fifth', id: 5 , hasNewerData:true},
  ];

  errorItems =
    [
      {
      "error": {
        "title": "Bad Request",
        "description": "There was an issue with the search request. If you continue to experience this issue, please contact the <a href='https://www.fsd.gov/'>Federal Service Desk</a>",
        "icon": {
          "name": "bell",
          "library": "sds",
          "size": "6x"
        },
        "buttons": [
          {
            "text": "Go Back",
            "className": "usa-button usa-button--primary",
            "mode": NavigationMode.EVENT, // NavigationMode type (see: HeaderComponent)
            "route": "goBack"
          },
          {
            "text": "Start Over",
            "className": "usa-button usa-button--base",
            "mode": NavigationMode.EVENT, // NavigationMode type (see: HeaderComponent)
            "route": "clearAll"
          }
        ]
      }
    }
  ]
  emptyItems = [];

}
