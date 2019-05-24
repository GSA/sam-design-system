import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { SearchListSampleService } from '../../data-access/search-list/search-list-sample.service';
@Component({
  selector: 'search-list-sample',
  templateUrl: './search-list-sample.component.html',
  styleUrls: ['./search-list-sample.component.scss']
})
export class SearchListSampleComponent implements OnInit {

  constructor(private searchListSampleService: SearchListSampleService) { }

  ngOnInit() {

    this.pageChange.subscribe(
      value => {
        this.updatePage();
      }
    );
    this.updatePage();
  }
  sideNavModel = {
    navigationLinks: []
  }

  page = {
    pageNumber: 1,
    pageSize: 25,
    totalPages: 0
  }

  top = { id: 'top' };
  bottom = { id: 'bottom' };
  public pageChange = new BehaviorSubject<object>(this.page);

  items = [
    // { text: 'First', id: 1 },
    // { text: 'Second', id: 2 },
    // { text: 'Third', id: 3 },
    // { text: 'Fourth', id: 4 },
    // { text: 'Fifth', id: 5 }
  ];




  private updatePage() {
    let result = this.searchListSampleService.getData({ 'page': this.page, sortField: '' });
    this.items = result.items;
    this.page.totalPages = Math.ceil(result.totalItems / this.page.pageSize);
  }
}
