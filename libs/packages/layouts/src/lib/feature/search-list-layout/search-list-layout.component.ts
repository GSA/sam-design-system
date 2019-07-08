import { Component, OnInit, Input, ContentChild, TemplateRef, Optional } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { SearchListInterface, SearchListConfiguration } from './model/search-list-layout.model';
import { SearchListComunicationService } from '@gsa-sam/components';
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

  constructor(@Optional() private searchListComunicationService: SearchListComunicationService) { }

  /**
   * Input service to be called when items change
   */
  @Input()
  service: SearchListInterface;

  /**
   * configuration
   */
  @Input()
  configuration: SearchListConfiguration;

  private filterData: any;

  ngOnInit() {
    this.page.pageSize = this.configuration.pageSize;
    this.sortField = this.configuration.defaultSortValue;
    this.paginationChange.subscribe(
      () => {
        this.updateContent();
      }
    );
    if (this.searchListComunicationService) {
      this.searchListComunicationService.filterChange.subscribe(
        (filter) => {
          console.log('Search List Layout Component Filter Subscription');
          this.filterData = filter;
          this.updateContent();
        }
      )

    }
  }

  /**
   * Default Page setttings
   */
  page = {
    pageNumber: 1,
    pageSize: 25,
    totalPages: 0
  }

  /**
   * Sorty by change event
   */
  onSelectChange() {
    this.page.pageNumber = 1;
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
   * Page event listener
   */
  public paginationChange = new BehaviorSubject<object>(this.page);

  /**
   * List of items to be displayed
   */
  items = [];

  /**
   * sort value 
   */
  public sortField = '';

  /**
   * calls service when updated
   */
  private updateContent() {
    this.service.getData({ 'page': this.page, sortField: this.sortField, filter: this.filterData }).subscribe(
      (result) => {
        this.items = result.items;
        this.page.totalPages = Math.ceil(result.totalItems / this.page.pageSize);
      }
    );
  }
}
