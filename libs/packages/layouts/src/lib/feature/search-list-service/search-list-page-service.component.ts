import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { SearchList, SearchListConfig } from './model/search-list-service.model';
@Component({
  selector: 'search-list-page-service',
  templateUrl: './search-list-page-service.component.html',
  styleUrls: ['./search-list-page-service.component.scss']
})
export class SearchListPageServiceComponent implements OnInit {


  /**
 * Child Template to be used to display the data for each item in the list of items
 */
  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;

  @Input()
  service: SearchList;

  @Input()
  configuration: SearchListConfig;

  ngOnInit() {

    this.paginationChange.subscribe(
      value => {
        this.updateContent();
      }
    );
    this.updateContent();
  }
  sideNavModel = {
    navigationLinks: []
  }

  page = {
    pageNumber: 1,
    pageSize: 25,
    totalPages: 0
  }
  onSelectChange() {
    this.updateContent();
  }
  top = { id: 'top' };
  bottom = { id: 'bottom' };
  public paginationChange = new BehaviorSubject<object>(this.page);

  items = [];
  public sortField = 'id';




  private updateContent() {
    let result = this.service.getData({ 'page': this.page, sortField: this.sortField });
    this.items = result.items;
    this.page.totalPages = Math.ceil(result.totalItems / this.page.pageSize);
  }
}
