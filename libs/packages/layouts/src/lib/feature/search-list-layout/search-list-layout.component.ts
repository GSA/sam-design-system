import {
  Component,
  Input,
  ContentChild,
  TemplateRef,
  Optional,
  OnChanges,
  SimpleChanges,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  SearchListInterface,
  SearchListConfiguration,
} from './model/search-list-layout.model';
import { SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';
import { Router, ActivatedRoute } from '@angular/router';

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
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    @Optional()
    private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService
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

  ngOnInit() {
    this.page.pageSize = this.configuration.pageSize;
    this.sortField = this.configuration.defaultSortValue;
    this.paginationChange.subscribe(() => {
      this.updateContent();
    });
    if (this.formlyUpdateComunicationService) {
      this.formlyUpdateComunicationService.filterUpdate.subscribe((filter) => {
        this.updateFilter(filter);
      });
    }
  }

  /**
   * Default Page setttings
   */
  page = {
    pageNumber: 1,
    pageSize: 25,
    totalPages: 0,
  };

  /**
   * updates the filter and set the page number to 1 and calls imported service
   * @param filter
   */
  public updateFilter(filter: any) {
    this.filterData = filter;
    this.page.pageNumber = 1;
    this.updateContent();
  }

  updateNavigation() {
    const queryString = window.location.search.substring(1);
    let queryObj = qs.parse(queryString, { allowPrototypes: true });
    if (queryObj.hasOwnProperty('sfm')) {
      queryObj = {};
    }
    queryObj['sfm'] = this.filterData;
    queryObj['pageNumber'] = this.page.pageNumber.toString();
    queryObj['sorting'] = this.sortField.toString();

    const params = this.convertToParam(queryObj);
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: params,
      // TODO: Need this for future use case
      // queryParamsHandling: 'merge'
    });
  }

  convertToParam(filters) {
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false,
      filter: this.shortFormatDate,
    });
    if (encodedValues) {
      return this.getUrlParams(encodedValues);
    } else {
      return '';
    }
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
