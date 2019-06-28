import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchListSampleService } from '../../data-access/search-list/search-list-sample.service';
@Component({
  selector: 'search-list-sample',
  templateUrl: './search-list-sample.component.html',
  styleUrls: ['./search-list-sample.component.scss']
})
export class SearchListSampleComponent implements OnInit {
  sideNavModel = { navigationLinks: [] };
  page = { pageNumber: 1, pageSize: 25, totalPages: 0 };
  top = { id: 'top' };
  bottom = { id: 'bottom' };
  items = [];

  public paginationChange = new BehaviorSubject<object>(this.page);
  public sortField = 'id';

  constructor(public searchListSampleService: SearchListSampleService) {}

  ngOnInit() {
    this.paginationChange.subscribe(() => {
      this.updateContent();
    });
    this.updateContent();
  }

  private updateContent() {
    this.searchListSampleService
      .getData({ page: this.page, sortField: this.sortField })
      .subscribe(result => {
        this.items = result.items;
        this.page.totalPages = Math.ceil(
          result.totalItems / this.page.pageSize
        );
      });
  }

  onSelectChange() {
    this.page.pageNumber = 1;
    this.updateContent();
  }
}
