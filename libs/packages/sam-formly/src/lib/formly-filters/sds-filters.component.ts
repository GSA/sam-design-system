import {
  Component,
  Input,
  Output,
  EventEmitter,
  Optional,
  HostListener,
  OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as qs from 'qs';
import { Md5 } from 'ts-md5/dist/md5';

import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';

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
   *  If advanced filters dialog should be displayed -- defaults to false
   */
  @Input() advancedFilters: boolean = false;

  /**
   *  Emit results when model updated
   */
  // TODO: check type -- Formly models are typically objects
  @Output() filterChange = new EventEmitter<object[]>();

  private timeoutNumber: number;

  sdsFilterHistory = [];

  _isObj = (obj: any): boolean => typeof obj === 'object' && obj !== null;
  _isEmpty = (obj: any): boolean => Object.keys(obj).length === 0;
  overwrite = (baseObj: any, newObj: any) => {
    let result = {};
    for (let key in baseObj) {
      if (Array.isArray(baseObj[key])) {
        result[key] = newObj[key];
      } else if (this._isObj(baseObj[key])) {
        result[key] = this.overwrite(baseObj[key], newObj[key] || {});
      } else {
        result[key] = newObj[key] || null;
      }
    }
    return result;
  };
  nullify = (obj: any) => {
    for (let key in obj) {
      if (this._isObj(obj[key])) {
        obj[key] = this.nullify(obj[key]);
      } else {
        obj[key] = null;
      }
    }
    return obj;
  };

  constructor(
    @Optional()
    private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  @HostListener('window:popstate', ['$event'])
  onpopstate() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const ref = urlParams.get('ref');
    const updatedFormValue =
      ref == null
        ? this.nullify(this.form.value)
        : JSON.parse(localStorage.getItem(ref));
    const updatedValue = this.overwrite(
      this.form.getRawValue(),
      updatedFormValue
    );
    this.form.setValue(updatedValue, { emitEvent: false });
    this.filterChange.emit([updatedValue]);
    if (this.formlyUpdateComunicationService) {
      this.formlyUpdateComunicationService.updateFilter(updatedValue);
    }
  }

  ngOnInit(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const initialRef = urlParams.get('ref');
    if (initialRef) {
      const updatedFormValue = JSON.parse(localStorage.getItem(initialRef));
      setTimeout(() => {
        this.model = { ...this.model, ...updatedFormValue }
      }, 0);
    } else {
      this.clearStorage();
    }
  }

  onModelChange(model: any) {
    window.clearTimeout(this.timeoutNumber);
    this.timeoutNumber = window.setTimeout(() => {
      this.filterChange.emit(model);
      const md5 = new Md5();
      const hashCode = md5.appendStr(qs.stringify(model)).end();
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { ref: hashCode },
        queryParamsHandling: 'merge'
      });
      this.addToStorageList(hashCode)
      localStorage.setItem(hashCode.toString(), JSON.stringify(model));
      if (this.formlyUpdateComunicationService) {
        this.formlyUpdateComunicationService.updateFilter(model);
      }
    }, 150);
  }

  addToStorageList(hashCode) {
    const list = JSON.parse(localStorage.getItem('sdsFilterHistory'));
    this.sdsFilterHistory = (list && list.length > 0) ? list : this.sdsFilterHistory
    this.sdsFilterHistory.push(hashCode);
    localStorage.setItem('sdsFilterHistory', JSON.stringify(this.sdsFilterHistory));
  }

  clearStorage() {
    const list = JSON.parse(localStorage.getItem('sdsFilterHistory'));
    if (list && list.length > 0) {
      const unique = list.filter((item, i, ar) => ar.indexOf(item) === i);
      unique.forEach(item => {
        localStorage.removeItem(item);
      });
    }
  }
}
