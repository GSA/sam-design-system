import {
  Component, Input, Output,
  ChangeDetectionStrategy,
  EventEmitter, Optional, OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';
import { pairwise } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sds-filters',
  template: `
      <formly-form [form]="form" (modelChange)="modelChange.next($event)" [fields]="fields" [model]="model"></formly-form>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SdsFiltersComponent implements OnInit {
  /**
     * Timer id for the timer awaiting the service call for more typeing
     */
  private timeoutNumber: number;

  /**
   * debounce time for current page input
   */
  @Input() debounceTime = 0;
  private queryParams = {};

  ngOnInit(): void {

    // Dynamic approach + nested filters
    /* this.route.queryParams.subscribe(params => {
      for (const key in this.form.value) {
        if (this.form.value.hasOwnProperty(key)) {
          for (const subkey in this.form.value[key]) {
            if (this.form.value[key].hasOwnProperty(subkey)) {
              this.form.patchValue({
                [key]: {
                  [subkey]: key + "[" + subkey + "]" in params ? params[key + "[" + subkey + "]"] : null
                }
              });
            }
          }
        }
      }
    });*/


    // Hard coding approach + key value pair filters
    this.route.queryParams.subscribe(params => {
      this.form.patchValue({
        searchKeyword: {
          keyword: params['keyword']
        },
        keyword: {
          searchkeyword: params['searchkeyword']
        },
        searchEntity: {
          legalBusinessName: params['legalBusinessName'],
          uniqueEntityIdSam: params['uniqueEntityIdSam'],
          cageNcge: params['cageNcge'],
          uniqueEntityIdDuns: params['uniqueEntityIdDuns']
        },
        status: {
          statusCheckbox: params['statusCheckbox'] ? this.getAllStatus(params['statusCheckbox']) : null
        },
        expirationDate: {
          expirationDateOption: params['expirationDateOption']
        },
        addressUpdate: {
          addressUpdateOption: params['addressUpdateOption']
        },
        entityType: {
          entityType: params['entityType']
        }
      })
      });
    
    this.form.valueChanges
      .pipe(pairwise())
      .subscribe(([prev, next]: [any, any]) => {
        this.queryParams = this.getKeyValueFilters(next);
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: this.queryParams,
          queryParamsHandling: 'merge',
          // skipLocationChange: true
        });
        this.filterChange.emit(next);
        if (this.formlyUpdateComunicationService) {
          this.formlyUpdateComunicationService.updateFilter(next);
        }
      });
  }

  getAllStatus(allStatus) {
    const status = {};
    if (Array.isArray(allStatus)) {
      allStatus.forEach(element => {
        status[element] = true;
      });
    } else {
      status[allStatus] = true;
    }
    return status;
  }

  getKeyValueFilters(filters) {

    // Dynamic approach + Nested filters
    /*let result = {};
    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        for (const subKey in filters[key]) {
          if (filters[key].hasOwnProperty(subKey)) {
            if (filters[key][subKey] === "") {
              filters[key][subKey] = null;
            }
            result[key + "[" + subKey + "]"] = filters[key][subKey];
          }
        }
      }
    }
    return result;*/
 
    // Hard coding approach + key value pair filters
    let parameters = {};
    const status = [];
    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        parameters = Object.assign(parameters, ...filters[key]);
      }
    }
    Object.keys(parameters).forEach(key => {
      if (parameters[key] === "") {
        parameters[key] = null;
      } else if (parameters[key] instanceof Date) {
        parameters[key] = parameters[key].toLocaleDateString();
      }
      else if (parameters[key] !== null && typeof (parameters[key]) === 'object') {
        Object.keys(parameters[key]).forEach(k => {
          if (parameters[key][k] instanceof Date) {
            parameters[key][k] = parameters[key][k].toLocaleDateString();
            parameters = Object.assign(parameters, ...parameters[key]);
          } else {
            console.log(Object.keys(parameters[key]).filter(item => parameters[key][item]));
          }
          // if (parameters[key][k]) {
          //   status.concat(k + ',');
          // }
        });
        parameters[key] = key.includes('Checkbox') ? status : null;
      }
    });
    return parameters;
  }

  constructor(@Optional() private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,
    private router: Router, private route: ActivatedRoute) { }

  /**
   * Modeal update
   */
  modelChange = new Subject<any>();

  /**
   * Pass in a Form Group for ReactiveForms Support
   */
  @Input() public form: FormGroup;

  /**
   *  Fields are used to configure the UI components 
   */
  @Input() public fields: FormlyFieldConfig[];

  /**
   *  Model used to display the filter values.
   */
  @Input() public model: any;

  /**
   *  Accordion Label used to display the Accordion header text.
   */
  @Input() accordionLabel: string = 'Filters';

  /**
   *  Emit results when model updated
   */
  @Output() filterChange = new EventEmitter<object[]>();

}
