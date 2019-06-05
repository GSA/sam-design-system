import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { SearchList, SearchListConfiguration } from './model/search-list-layout.model';
@Component({
  selector: 'search-list-layout',
  templateUrl: './search-list-layout.component.html',
  styleUrls: ['./search-list-layout.component.scss']
})
export class SearchListLayoutComponent implements OnInit {

  /**
  * Child Template to be used to display the data for each item in the list of items
  */
  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;

  /**
   * Input service to be called when items change
   */
  @Input()
  service: SearchList;

  /**
   * 
   */
  @Input()
  configuration: SearchListConfiguration;

  ngOnInit() {
    this.page.pageSize = this.configuration.pageSize;
    this.sortField = this.configuration.defaultSortValue;
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
   * Id of the top pagination control
   */
  top = { id: 'topPagination' };

  /**
   * Id of the bottom pagination control
   */
  bottom = { id: 'bottomPagination' };

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
  public sortField = '';

  /**
   * 
   */
  private updateContent() {
    let result = this.service.getData({ 'page': this.page, sortField: this.sortField });
    this.items = result.items;
    this.page.totalPages = Math.ceil(result.totalItems / this.page.pageSize);
  }
}
