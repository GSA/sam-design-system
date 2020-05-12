import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  EventEmitter,
  Optional,
  OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import * as qs from 'qs';
import { Md5 } from 'ts-md5/dist/md5';
import { HostListener } from '@angular/core';

@Component({
  selector: 'sds-filters',
  template: `
    <formly-form
      [form]="form"
      [fields]="fields"
      [options]="options"
      (modelChange)="modelChange.next($event)" 
      [model]="model"
    ></formly-form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
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
   *    Options for the form.
   */
  @Input() public options: FormlyFormOptions;

  /**
   * To enable History Tracking
   */
  @Input() public isHistoryEnable: boolean = true;

  /**
   *  Emit results when model updated
   */
  @Output() filterChange = new EventEmitter<object[]>();

  /**
   * Timer id for the timer awaiting the service call for more typeing
   */
  private timeoutNumber: number;

  /**
   * debounce time for current page input
   */
  @Input() debounceTime = 0;

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
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  @HostListener('window:popstate', ['$event'])
  onpopstate(event) {
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
    if (this.isHistoryEnable) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const initialRef = urlParams.get('ref');
      if (initialRef) {
        const updatedFormValue = JSON.parse(localStorage.getItem(initialRef));
        setTimeout(() => {
          this.model = { ...this.model, ...updatedFormValue }
          this.filterChange.emit([updatedFormValue]);
          if (this.formlyUpdateComunicationService) {
            this.formlyUpdateComunicationService.updateFilter(updatedFormValue);
          }
          this.cdr.detectChanges();
        }, 0);
      } else {
       // this.options.resetModel(this.model)
        console.log(this.model);
       // this.clearStorage();
      }
    }
    this.cdr.detectChanges();
    this.modelChange.subscribe((change) => {
      window.clearTimeout(this.timeoutNumber);
      this.timeoutNumber = window.setTimeout(() => {
        if (this.isHistoryEnable) {
          const md5 = new Md5();
          const hashCode = md5.appendStr(qs.stringify(change)).end();
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { ref: hashCode },
            queryParamsHandling: 'merge'
          });
          this.addToStorageList(hashCode)
          localStorage.setItem(hashCode.toString(), JSON.stringify(change));
        }
        this.filterChange.emit(change);
        if (this.formlyUpdateComunicationService) {
          this.formlyUpdateComunicationService.updateFilter(change);
        }
      }, 150);
    })
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
