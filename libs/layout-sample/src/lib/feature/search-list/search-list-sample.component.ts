import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { SearchListSampleService } from '../../data-access/search-list/search-list-sample.service';
@Component({
  selector: 'search-list-sample',
  templateUrl: './search-list-sample.component.html',
  styleUrls: ['./search-list-sample.component.scss']
})
export class SearchListSampleComponent implements OnInit {

  constructor(public searchListSampleService: SearchListSampleService) { }

  ngOnInit() {

    this.paginationChange.subscribe(
      value => {
        this.updateContent();
      }
    );
    this.updateContent();
  }

  /**
   * 
   */
  sideNavModel = {
    navigationLinks: []
  }

  /**
   * 
   */
  page = {
    pageNumber: 1,
    pageSize: 25,
    totalPages: 0
  }

  /**
   * 
   */
  onSelectChange() {
    this.updateContent();
  }

  /**
   * 
   */
  top = { id: 'top' };

  /**
   * 
   */
  bottom = { id: 'bottom' };

  /**
   * 
   */
  public paginationChange = new BehaviorSubject<object>(this.page);

  /**
   * 
   */
  items = [];

  /**
   * 
   */
  public sortField = 'id';

  /**
   * 
   */
  private updateContent() {
    let result = this.searchListSampleService.getData({ 'page': this.page, sortField: this.sortField });
    this.items = result.items;
    this.page.totalPages = Math.ceil(result.totalItems / this.page.pageSize);
  }
}
