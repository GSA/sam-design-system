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
import { pairwise, filter } from 'rxjs/operators';
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
  @Input() public options: FormlyFormOptions = {};

  /**
   *  Emit results when model updated
   */
  @Output() filterChange = new EventEmitter<object[]>();

  /**
   * debounce time for current page input
   */
  @Input() debounceTime = 0;

  private timeoutNumber: number;

  storageList = [];

  // routeTrigger = '';
  _isObj = (obj: any): boolean => typeof obj === 'object' && obj !== null;
  _isEmpty = (obj: any): boolean => Object.keys(obj).length === 0;
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
  ) { 
    //localStorage.clear();
  }

  @HostListener('window:popstate', ['$event'])
  onpopstate(event) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const ref = urlParams.get('ref');
    if (ref) {
      const updatedFormValue = JSON.parse(localStorage.getItem(ref));
      this.updateForm(updatedFormValue)
      this.filterChange.emit(updatedFormValue);
      if (this.formlyUpdateComunicationService) {
        this.formlyUpdateComunicationService.updateFilter(updatedFormValue);
      }
    } else {
      this.model = {};
      this.filterChange.emit(this.model);
      if (this.formlyUpdateComunicationService) {
        this.formlyUpdateComunicationService.updateFilter(this.model);
      }
    }
  }

  updateForm(updatedFormValue) {
    if (window.location.pathname.includes('formlyInput')) {
      this.form.patchValue(updatedFormValue, { emitEvent: false });
    } else {
      this.form.setValue(updatedFormValue, { emitEvent: false });
    }
  }
  ngOnInit(): void {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const initialRef = urlParams.get('ref');
      if (initialRef) {
        const updatedFormValue = JSON.parse(localStorage.getItem(initialRef));
        setTimeout(() => {
          this.model = {...this.model, ...updatedFormValue}
        },0);
      } else {
       this.clearStorage();
      }

    this.modelChange.subscribe((change) => {
      window.clearTimeout(this.timeoutNumber);
      this.timeoutNumber = window.setTimeout(() => {
        this.filterChange.emit(change);
        const md5 = new Md5();
        const hashCode = md5.appendStr(qs.stringify(change)).end();
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { ref: hashCode },
          queryParamsHandling: 'merge'
        });
        this.addToStorageList(hashCode)
        localStorage.setItem(hashCode.toString(), JSON.stringify(change));
        if (this.formlyUpdateComunicationService) {
          this.formlyUpdateComunicationService.updateFilter(change);
        }
      }, 150);
    })
  }

  addToStorageList(hashCode) {
    this.storageList.push(hashCode);
    localStorage.setItem('storageList', JSON.stringify(this.storageList));
  }
  clearStorage() {
    const list = JSON.parse(localStorage.getItem('storageList'));
    const unique = list.filter((item, i, ar) => ar.indexOf(item) === i);
    unique.forEach(item => {
      localStorage.removeItem(item);
    });
  }
}