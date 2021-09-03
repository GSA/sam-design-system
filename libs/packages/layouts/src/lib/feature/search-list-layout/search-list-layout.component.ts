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
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import * as qs from 'qs';
import {
  SearchListInterface,
  SearchListConfiguration,
  ResultsModel,
} from './model/search-list-layout.model';
import {
  SDSFormlyUpdateComunicationService,
  SDSFormlyUpdateModelService,
} from '@gsa-sam/sam-formly';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash-es';
import { Location } from '@angular/common';

@Component({
  selector: 'search-list-layout',
  templateUrl: './search-list-layout.component.html',
  styleUrls: ['./search-list-layout.component.scss'],
})
export class SearchListLayoutComponent implements OnInit {
  /**
   * Child Template to be used to display the data for each item in the list of items
   */
  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    @Optional()
    private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,
    private filterUpdateModelService: SDSFormlyUpdateModelService,
    private loc: Location
  ) { }

  /**
   * Input service to be called when items change
   */
  @Input() service: SearchListInterface;

  /**
   * Allow to insert a customized template for no results to use
   */
  @Input() customResultsTemplate: TemplateRef<any>;

  @Input() isHistoryEnabled = true;
  /**
   * configuration
   */
  @Input() configuration: SearchListConfiguration;

  @Input() enableApiCall: boolean = true;

  @Output() sortFieldChange = new EventEmitter<string>();

  /**
   * Set to true when either filter is empty or filter is equal to default model
   */
  isDefaultModel: boolean = true;

  /**
   * Filter information
   */
  private filterData: any;

  /**
   * Total number of items
   */
  totalItems: number;
  private formlySubscription: Subscription;

  /**
   * Default Page setttings
   */
  page = {
    pageNumber: 1,
    pageSize: 25,
    totalPages: 0,
    default: true,
  };

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
   * Value to track whether API call in progress for purpose of showing loading
   * template
   */
  loading = false;

  /**
   * Used in ngFor to create multiple copies of the same loading row.
   */
  loadingArray = Array(25);

  /**
   * Used to track whether update resulting in navigation is as the result of a
   * popstate. in order to apply correct navigation logic
   */
  private triggeredByPopState: boolean = false;

  @HostListener('window:popstate', ['$event'])
  onpopstate(event) {
    this.triggeredByPopState = true;
    if (this.isHistoryEnabled) {
      this.getHistoryModel();
    }
  }

  ngOnInit() {
    if (this.isHistoryEnabled) {
      this.getHistoryModel();
    }
    this.sortField = this.sortField != null ? this.sortField : this.configuration.defaultSortValue;
    this.paginationChange.subscribe(() => {
      this.updateContent();
    });
    if (this.formlyUpdateComunicationService) {
      this.formlySubscription = this.formlyUpdateComunicationService.filterUpdate.subscribe(
        (filter) => {
          this.updateFilter(filter);
        }
      );
    }
  }

  ngOnDestroy() {
    // Reset filter Model in update service
    this.filterUpdateModelService.updateModel(null);

    if (this.formlySubscription) {
      this.formlySubscription.unsubscribe();
    }
  }

  getHistoryModel() {
    const queryString = window.location.search.substring(1);
    const params: any = this.getUrlParams(queryString);
    const paramModel: any = this.convertToModel(params);

    this.page.default = true;
    this.page.pageNumber = paramModel['page'] ? +paramModel['page'] : 1;
    this.page.pageSize = paramModel['pageSize'] ? Number.parseInt(paramModel['pageSize']) : this.configuration.pageSize;

    this.sortField = paramModel['sort'];
    if (this.filterUpdateModelService) {
      if (paramModel && paramModel['sfm']) {
        this.filterUpdateModelService.updateModel(paramModel['sfm']);
      } else if (!this.triggeredByPopState) {
        this.filterUpdateModelService.updateModel(
          this.configuration.defaultFilterValue
        );
      }
    }
  }

  /**
   * updates the filter and set the page number to 1 and calls imported service
   * @param filter - the updated filter model
   */
  public updateFilter(filter: any) {
    this.filterData = filter;
    this.page.pageNumber = this.page.default ? this.page.pageNumber : 1;
    this.page.default = filter ? false : true;
    this.isDefaultFilter(filter);
    if (this.isDefaultModel) {
      this.items = [];
    }
    this.updateContent(true);
  }

  isDefaultFilter(filter) {
    const cleanModel = this.flatten(filter);
    const op = this.flatten(this.configuration.defaultFilterValue);
    this.isDefaultModel = _.isEqual(cleanModel, op);
  }

  flatten(input, reference?, output?) {
    output = output || {};
    for (var key in input) {
      var value = input[key];
      if (value) {
        key = reference ? reference + '.' + key : key;
        if (typeof value === 'object' && value !== null) {
          this.flatten(value, key, output);
        } else {
          // Treat true string as boolean value & ignore value of string 'false'
          if (value === 'true') {
            output[key] = true;
          } else if (value != 'false') {
            output[key] = value;
          }
        }
      }
    }
    return output;
  }

  updateNavigation(triggeredByFilter = false) {
    const queryString = window.location.search.substring(1);
    let queryObj = qs.parse(queryString, { allowPrototypes: true });

    let skipHistoryOnNav = false;

    if (queryObj.hasOwnProperty('sfm')) {
      queryObj['sfm'] = {};
    }

    // Prevent recursive navigation when adding default page to search
    if (!queryObj.page || !queryObj.pageSize) {
      skipHistoryOnNav = true;
    }

    queryObj['page'] = this.page.pageNumber
    ? this.page.pageNumber.toString()
    : '1';
    queryObj['pageSize'] = this.page.pageSize
      ? this.page.pageSize.toString()
      : '25';

    queryObj['sort'] = this.sortField ? this.sortField.toString() : '';
    queryObj['sfm'] = this.filterData;
    const params = this.convertToParam(queryObj);
    /**
     * loc.go updates URL but also updates history stack so that upon clicking
     * back, the state which clicking forward would move user to is deleted by
     * loc.go This state is preserved by router.navigate, so use router.navigate
     * where we state needs to be preserved or we want the page jumped to the top.
     * use loc.go only where we need the page to remain in place, and would normally
     * overwrite the top of the history stack
     */
    if (!triggeredByFilter || this.triggeredByPopState) {
      this.triggeredByPopState = false;
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: params,
        queryParamsHandling: this.configuration.queryParamsHandling,
        fragment: window.location.hash?.length > 1 ? window.location.hash.substring(1) : undefined,
        replaceUrl: skipHistoryOnNav,
      });
    } else {
      const urlTree = this.router.parseUrl(this.loc.path());
      urlTree.queryParams = params;
      urlTree.fragment = window.location.hash?.length > 1 ? window.location.hash.substring(1) : undefined
      this.loc.go(urlTree.toString());
    }
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
  getUrlParams(queryString) {
    const target = {};
    queryString.split('&').forEach((pair) => {
      if (pair !== '') {
        const splitpair = pair.split('=');
        if (splitpair[1] != '' && splitpair[1] != 'false') {
          target[splitpair[0]] = splitpair[1]
        }
      }
    });
    return target;
  }

  shortFormatDate(prefix, value) {
    const fixDigit = (val) => {
      return val.toString().length === 1 ? '0' + val : val;
    };
    const getFormattedDate = (date) =>
      `${fixDigit(
        date.getMonth() + 1
      )}/${date.getDate()}/${date.getFullYear()}`;
    if (value instanceof Date) {
      value = getFormattedDate(new Date(value));
    }
    return value;
  }

  convertToModel(filters) {
    let obj = {};
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false,
      filter: this.longFormatDate,
    });
    obj = qs.parse(encodedValues, { decoder: this.convertToModelParser });
    return obj;
  }

  /**
   * Decoder for qs.parse to convert true / false strings to boolean values
   */
  convertToModelParser(str: string, decoder: qs.defaultDecoder, charset: string, type: 'key' | 'value') {
    if (type === 'key') {
      return decoder(str, decoder, charset);
    }

    if (str === 'true' || str === 'false') {
      return str === 'true' ? true : false;
    }

    return decoder(str, decoder, charset);
  }

  longFormatDate(prefix, value) {
    const val = Date.parse(value);
    if (!isNaN(val) && isNaN(value)) {
      value = new Date(val).toISOString();
    }
    return value;
  }

  /**
   * Sorty by change event
   */
  onSelectChange() {
    this.page.pageNumber = 1;
    this.updateContent();
    this.sortFieldChange.emit(this.sortField);
  }

  /**
   * calls service when updated
   */
  private updateContent(triggeredByFilter = false) {
    if (this.isHistoryEnabled) {
      this.updateNavigation(triggeredByFilter);
    }

    if (
      this.filterData &&
      this.service &&
      this.enableApiCall &&
      !this.isDefaultModel
    ) {
      this.loading = true;

      setTimeout(() => {
        this.service
          .getData({
            page: this.page,
            sortField: this.sortField,
            filter: this.filterData,
          })
          .subscribe((result) => {
            this.loading = false;
            this.items = result.items;
            this.page.totalPages = Math.ceil(
              result.totalItems / this.page.pageSize
            );
            this.totalItems = result.totalItems;
          },
            (error) => this.loading = false,
            () => this.loading = false
          );
      });
    }
  }

  public updateSearchResultsModel(historyModel: ResultsModel) {
    this.filterData = historyModel.filterModel;
    this.page.default = historyModel.page || historyModel.sort ? true : false;
    this.page.pageNumber = historyModel.page ? historyModel.page : 1;
    this.sortField = historyModel.sort ? historyModel.sort : this.sortField;
    if (this.filterUpdateModelService) {
      if (historyModel && historyModel.filterModel) {
        this.filterUpdateModelService.updateModel(historyModel.filterModel);
      } else {
        this.filterUpdateModelService.updateModel({});
      }
    }
  }
}
