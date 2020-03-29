import {
  Component, Input, Output,
  ChangeDetectionStrategy, ChangeDetectorRef,
  EventEmitter, Optional, OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';
import { pairwise } from 'rxjs/operators';
import { Router, ActivatedRoute, } from '@angular/router';
import * as qs from 'qs';

@Component({
  selector: 'sds-filters',
  template: `
      <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>`,
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
 
  constructor(
    @Optional()
    private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const _isObj = (obj: any): boolean => typeof obj === 'object' && obj !== null;
    const _isEmpty = (obj: any): boolean => Object.keys(obj).length === 0;
    const overwrite = (baseObj: any, newObj: any) => {
      const result = {};
      for (const key in baseObj) {
        if (_isObj(baseObj[key])) {
          result[key] = overwrite(baseObj[key], newObj[key] || {});
        } else {
          result[key] = newObj[key] || null;
        }
      }
      return result;
    };

    this.route.queryParams.subscribe(params => {
      if (_isEmpty(this.form.getRawValue())) {
        this.model = this.convertToModel(params);
        this.form.patchValue({
          ...this.model
        });
      } else {
        const updatedFormValue = overwrite(
          this.form.getRawValue(),
          this.convertToModel(params)
        );
        this.form.setValue(updatedFormValue);
      }
    });

    this.form.valueChanges
      .pipe(pairwise())
      .subscribe(([prev, next]: [any, any]) => {
        const params = this.convertToParam(next);
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: params,
          queryParamsHandling: 'merge'
        });
        this.filterChange.emit(next);
        if (this.formlyUpdateComunicationService) {
          this.formlyUpdateComunicationService.updateFilter(next);
        }
      });
  }

  convertToParam(filters) {
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false
    });
    const target = {};
    encodedValues.split('&').forEach(pair => {
      if (pair !== '') {
        const splitpair = pair.split('=');
        target[ splitpair[0]] = splitpair[1];
      }
    });
    return target;
  }

  convertToModel(filters) {
    let obj = {};
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false
    });
    obj = qs.parse(encodedValues);
    return obj;
  }
}
