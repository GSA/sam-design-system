import {
  Component,
  Input,
  ContentChild,
  TemplateRef,
  Optional,
  OnChanges,
  SimpleChanges,
  OnInit,
  HostListener,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  SearchListInterface,
  SearchListConfiguration,
} from './model/search-list-layout.model';
import { SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'search-list-layout',
  templateUrl: './search-list-layout.component.html',
  styleUrls: ['./search-list-layout.component.scss'],
})
export class SearchListLayoutComponent implements OnChanges, OnInit {
  /**
   * Child Template to be used to display the data for each item in the list of items
   */
  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;
  constructor(
    @Optional()
    private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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

  /**
   * Default Page setttings
   */
  page = {
    pageNumber: 1,
    pageSize: 25,
    totalPages: 0,
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes.configuration.currentValue) {
      this.configuration = changes.configuration.currentValue;
      this.sortField = this.configuration.defaultSortValue;
      this.onSelectChange();
    }
  }
  /**
   * Filter information
   */
  private filterData: any;

  /**
   * Total number of items
   */
  totalItems: number;

  @HostListener('window:popstate', ['$event'])
  onpopstate(event) {
    const queryString = window.location.search.substring(1);
    const params = this.getUrlParams(queryString);
    this.page.pageSize = ++params['pageSize'];
    this.page.pageNumber = ++params['pageNumber'];
    this.sortField = params['sortValue'];
    this.onSelectChange();
  }

  getUrlParams(queryString) {
    const target = {};
    queryString.split('&').forEach((pair) => {
      if (pair !== '') {
        const splitpair = pair.split('=');
        target[splitpair[0]] =
          splitpair[1] === '' || splitpair[1] === 'false' ? null : splitpair[1];
      }
    });
    return target;
  }

  ngOnInit() {
    const queryString = window.location.search.substring(1);
    const params: any = this.getUrlParams(queryString);
    this.page.pageSize = params['pageSize']
      ? params['pageSize']
      : this.configuration.pageSize;
    this.sortField = params.sortValue
      ? params.sortValue
      : this.configuration.defaultSortValue;
    this.page.pageNumber = params['pageNumber'] ? params['pageNumber'] : 1;
    this.paginationChange.subscribe(() => {
      this.updateContent();
      this.updateRoute();
    });

    if (this.formlyUpdateComunicationService) {
      this.formlyUpdateComunicationService.filterUpdate.subscribe((filter) => {
        this.updateFilter(filter);
      });
    }
  }

  /**
   * updates the filter and set the page number to 1 and calls imported service
   * @param filter
   */
  public updateFilter(filter: any) {
    this.filterData = filter;
    // this.page.pageNumber = 1;
    this.updateContent();
  }

  /**
   * Sorty by change event
   */
  onSelectChange() {
    this.page.pageNumber = 1;
    this.updateContent();
    this.updateRoute();
  }

  updateRoute() {
    const params = {
      pageNumber: this.page.pageNumber,
      sortValue: this.sortField,
    };

    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
    });
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

  // public configurationChange = new BehaviorSubject<object>(this.configuration);

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
    if (this.filterData) {
      setTimeout(() => {
        this.service
          .getData({
            page: this.page,
            sortField: this.sortField,
            filter: this.filterData,
          })
          .subscribe((result) => {
            this.items = result.items;
            this.page.totalPages = Math.ceil(
              result.totalItems / this.page.pageSize
            );
            this.totalItems = result.totalItems;
          });
      });
    }
  }
}
