import {
  Component,
  Input,
  Output,
  EventEmitter,
  Optional,
  OnInit,
  ChangeDetectorRef,
  HostListener
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as qs from 'qs';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'sds-filters',
  templateUrl: './sds-filters.component.html'
})
export class SdsFiltersComponent implements OnInit {
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
   *    Options for the form.
   */
  @Input() public options: FormlyFormOptions = {};

  /**
   *  Emit results when model updated
   * To enable History Tracking
   *  If advanced filters dialog should be displayed -- defaults to false
   */
  @Input() advancedFilters: boolean = false;

  /**
   * Timer id for the timer awaiting the service call for more typeing
   */
  @Input() public isHistoryEnable: boolean = true;

  /**
   * To get clean model without null and empty
   */
  @Input() public getCleanModel: boolean = false;

  /**
   *  Emit results when model updated
   */
  // TODO: check type -- Formly models are typically objects
  @Output() filterChange = new EventEmitter<object[]>();

  _isObj = (obj: any): boolean => typeof obj === 'object' && obj !== null;
  _isEmpty = (obj: any): boolean => Object.keys(obj).length === 0;
  overwrite = (baseObj: any, newObj: any) => {
    const result = {};
    for (const key in baseObj) {
      if (Array.isArray(baseObj[key])) {
        result[key] = newObj[key] || null;
      } else if (baseObj[key] instanceof Date) {
        result[key] = newObj[key] === undefined ? null : new Date(newObj[key]);
      } else if (this._isObj(baseObj[key])) {
        result[key] = this.overwrite(baseObj[key], newObj[key] || {});
      } else {
        result[key] = newObj[key] || null;
      }
    }
    return result;
  };

  constructor(
    @Optional()
    public formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  @HostListener('window:popstate', ['$event'])
  onpopstate(event) {
    const queryString = window.location.search.substring(1);
    const params = this.getUrlParams(queryString);
    const updatedFormValue = this.overwrite(
      this.form.getRawValue(),
      this.convertToModel(params)
    );
    this.form.setValue(updatedFormValue);
    this.updateChange(updatedFormValue);
  }
  ngOnInit(): void {
    if (this.isHistoryEnable) {
      if (this._isEmpty(this.form.getRawValue())) {
        const queryString = window.location.search.substring(1);
        const params: any = this.getUrlParams(queryString);
        const paramModel: any = this.convertToModel(params);
        this.checkForHide();
        setTimeout(() => {
          this.form.patchValue({
            ...this.model,
            ...paramModel.sfm
          });
        });
        this.cdr.detectChanges();
      }
    }
  }
  /**
   * This is for getting the model which has a value.
   */
  checkForHide() {
    let fieldWithValue = this.convertToParam(this.model);
    let keys = [];
    Object.keys(fieldWithValue).map(key => {
      keys.push(key.replace(/\[/g, '.').replace(/\]/g, ''));
    });
    keys.forEach(key => {
      const [lastKey] = key.split('.').slice(-1);
      this.fields.forEach(field => {
        if (key.includes(field.key)) {
          let hiddenField;
          if (field.fieldGroup) {
            hiddenField = field.fieldGroup.find(item => item.key === lastKey);
          } else {
            hiddenField = field;
          }
          if (hiddenField.hide) {
            hiddenField.hide = false;
          }
        }
      });
    });
  }

  onModelChange(change: any) {
    if (this.isHistoryEnable) {
      const queryString = window.location.search.substring(1);
      let queryObj = qs.parse(queryString, { allowPrototypes: true });
      if (queryObj.hasOwnProperty('sfm')) {
        queryObj.sfm = {};
      }
      queryObj['sfm'] = change;
      const params = this.convertToParam(queryObj);
      this.router.navigate(['.'], {
        relativeTo: this.route,
        queryParams: params,
        // TODO: Need this for future use case
        // queryParamsHandling: 'merge'
      });
    }
    this.updateChange(change);
  }
  updateChange(change) {
    const updatedModel = this.getCleanModel
      ? this.convertToModel(change)
      : change;
    this.filterChange.emit([updatedModel]);
    if (this.formlyUpdateComunicationService) {
      this.formlyUpdateComunicationService.updateFilter(updatedModel);
    }
    this.cdr.detectChanges();
  }

  convertToParam(filters) {
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false,
      filter: this.shortFormatDate
    });
    if (encodedValues) {
      return this.getUrlParams(encodedValues);
    } else {
      return '';
    }
  }
  getUrlParams(queryString) {
    const target = {};
    queryString.split('&').forEach(pair => {
      if (pair !== '') {
        const splitpair = pair.split('=');
        target[splitpair[0]] =
          splitpair[1] === '' || splitpair[1] === 'false' ? null : splitpair[1];
      }
    });
    return target;
  }

  shortFormatDate(prefix, value) {
    const fixDigit = val => {
      return val.toString().length === 1 ? '0' + val : val;
    };
    const getFormattedDate = date =>
      `${fixDigit(
        date.getMonth() + 1
      )}/${date.getDate()}/${date.getFullYear()}`;
    if (value instanceof Date) {
      value = getFormattedDate(new Date(value));
    }
    return value;
  }

  isDate(_date) {
    const _regExp = new RegExp(
      '^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$'
    );
    return _regExp.test(_date);
  }
  convertToModel(filters) {
    let obj = {};
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false,
      filter: this.longFormatDate
    });
    obj = qs.parse(encodedValues);
    return obj;
  }

  longFormatDate(prefix, value) {
    const val = decodeURIComponent(value);
    const isDate = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(val);
    if (isDate) {
      value = new Date(val).toISOString();
    }
    return value;
  }
}
