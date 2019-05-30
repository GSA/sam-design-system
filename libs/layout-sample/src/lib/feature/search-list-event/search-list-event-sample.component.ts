import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { SearchListSampleService } from '../../data-access/search-list/search-list-sample.service';
@Component({
  selector: 'search-list-event-sample',
  templateUrl: './search-list-event-sample.component.html',
  styleUrls: ['./search-list-event-sample.component.scss']
})
export class SearchListEventSampleComponent implements OnInit {

  constructor(private searchListSampleService: SearchListSampleService) { }

  ngOnInit() {

    this.upadateChange.subscribe(
      value => {
        this.updateContent(value);
      }
    );
    this.updateContent({ 'page': this.page, sortField: this.sortField });
  }
  page = {
    pageNumber: 1,
    pageSize: 25,
    totalPages: 0
  }

  public upadateChange = new BehaviorSubject<object>({
    "page": {
      pageNumber: 1,
      pageSize: 25,
      totalPages: 0
    }, "sortField": 'id'
  });

  items = [];
  public sortField = 'id';




  private updateContent(item) {
    this.page = item.page;
    this.sortField = item.sortField;
    let result = this.searchListSampleService.getData({ 'page': this.page, sortField: this.sortField });
    this.items = result.items;
    this.page.totalPages = Math.ceil(result.totalItems / this.page.pageSize);
  }
}
