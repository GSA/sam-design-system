import { Component } from '@angular/core';
import { SearchListSampleService } from '../../data-access/search-list/search-list-sample.service';

@Component({
  selector: 'search-list-layout-sample',
  templateUrl: './search-list-layout-sample.component.html',
  styleUrls: ['./search-list-layout-sample.component.scss']
})
export class SearchListLayoutSampleComponent {


  constructor(public searchListSampleService: SearchListSampleService) { }
  configuration = {
    defaultSortValue: 'id', pageSize: 25, sortList: [{
      text: 'Text',
      value: 'text'

    }, {
      text: 'Id',
      value: 'id'
    }]
  };
}
