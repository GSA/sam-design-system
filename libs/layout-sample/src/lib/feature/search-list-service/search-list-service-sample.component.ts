import { Component } from '@angular/core';
import { SearchListSampleService } from '../../data-access/search-list/search-list-sample.service';

@Component({
  selector: 'search-list-service-sample',
  templateUrl: './search-list-service-sample.component.html',
  styleUrls: ['./search-list-service-sample.component.scss']
})
export class SearchListServiceSampleComponent {

  constructor(private searchListSampleService: SearchListSampleService) { }


}
