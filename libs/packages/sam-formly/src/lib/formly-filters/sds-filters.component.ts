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
import * as qs from 'qs';
@Component({
  selector: 'sds-filters',
  template: `
      <formly-form [form]="form" (modelChange)="modelChange.next($event)" [fields]="fields" [model]="model"></formly-form>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SdsFiltersComponent implements OnInit {

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
   *  Emit results when model updated
   */
  @Output() filterChange = new EventEmitter<object[]>();


  /**
   * debounce time for current page input
   */
  @Input() debounceTime = 0;
  private queryParams = {};
  label = [];

  constructor(@Optional() private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.route.queryParams.subscribe(params => {
    //   console.log(params);
    //   for (const key in params) {
    //     // if (key) {
    //     const arr = key.replace(']', '').split('[');
    //     //console.log(arr, 'array');
    //     this.model[arr[0]] = { [arr[1]]: JSON.parse(params[key]) };
    //     // } 
    //   }
    //   setTimeout(() => {
    //     this.form.patchValue({
    //       ...this.model
    //     })
    //   });
    // });
    this.form.valueChanges
      .pipe(pairwise())
      .subscribe(([prev, next]: [any, any]) => {
        console.log(this.form.value);
        this.queryParams = this.convertToParam(next);
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: this.queryParams,
          queryParamsHandling: 'merge',
        });
        this.filterChange.emit(next);
        if (this.formlyUpdateComunicationService) {
          this.formlyUpdateComunicationService.updateFilter(next);
        }
      });
  }
  convertToParam(filters) {
    const encodedValues = qs.stringify(
     filters,
      { encodeValuesOnly: true }
  );
  
 console.log(encodedValues, 'url');
 return encodedValues;
 }
  // convertToParam1(filters) {
  //   const result = {};
  //   let isDateRange = false;
  //   // tslint:disable-next-line:forin
  //   for (const key in filters) {
      
  //     // tslint:disable-next-line:forin
  //     for (const subKey in filters[key]) {
  //       // if (filters[key].hasOwnProperty(subKey)) {
  //       if (filters[key][subKey] === "") {
  //         console.log('i am called');
  //         filters[key][subKey] = null;
  //       }
  //       if (filters[key][subKey]) {
  //         const filterSubKey = filters[key][subKey];
  //         if (filterSubKey.constructor.name == 'Object') {
  //           for (const sKey in filterSubKey) {
  //             if (filterSubKey[sKey] instanceof Date || sKey.includes('Date')) {
  //               isDateRange = true;
  //               if (filterSubKey[sKey])
  //                 result[`${key}[${subKey}][${sKey}]`] = JSON.stringify(this.datepipe.transform(filters[key][subKey][sKey], 'MM/dd/yyyy'));
  //             } else {
  //               result[`${key}[${subKey}]`] = JSON.stringify(filters[key][subKey]);
  //             }
  //           }
  //           if (isDateRange) {
  //             delete result[`${key}[${subKey}]`];
  //           }
  //         } else {
  //           if (filters[key][subKey] instanceof Date) {
  //             result[`${key}[${subKey}]`] = JSON.stringify(this.datepipe.transform(filters[key][subKey], 'MM/dd/yyyy'));
  //           } else {
  //             result[`${key}[${subKey}]`] = JSON.stringify(filters[key][subKey]);
  //           }

  //         }

  //       }
  //       // }
  //     }
  //     // }
  //   }
  //   return result;
  // }
}
