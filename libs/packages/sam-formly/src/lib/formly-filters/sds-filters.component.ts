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
  ) {}

  @HostListener('window:popstate', ['$event'])
  onpopstate(event) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const ref = urlParams.get('ref');
    const updatedFormValue =
      ref == null
        ? this.options.resetModel()//this.nullify(this.form.value)
        : JSON.parse(localStorage.getItem(ref));
    console.log(updatedFormValue);
    if (window.location.pathname.includes('formlyInput')) {
      this.form.patchValue(updatedFormValue, { emitEvent: false });
    } else {
      this.form.setValue(updatedFormValue, { emitEvent: false });
    }
    this.filterChange.emit(updatedFormValue);
    if (this.formlyUpdateComunicationService) {
      this.formlyUpdateComunicationService.updateFilter(updatedFormValue);
    }
  }

  ngOnInit(): void {
    if (this._isEmpty(this.form.getRawValue())) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const initialRef = urlParams.get('ref');
      initialRef == null
        ? localStorage.clear()
        : ((this.model = JSON.parse(localStorage.getItem(initialRef))),
          setTimeout(() => {
            this.form.patchValue(
              {
                ...this.model
              },
              { emitEvent: false }
            );
          }));
    }

    this.form.valueChanges
      .pipe(pairwise())
      .subscribe(([prev, next]: [any, any]) => {
        const md5 = new Md5();
        const hashCode = md5.appendStr(qs.stringify(next)).end();         
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { ref: hashCode },
          queryParamsHandling: 'merge'
        });
        localStorage.setItem(hashCode.toString(), JSON.stringify(next));
        this.filterChange.emit(next);
        if (this.formlyUpdateComunicationService) {
          this.formlyUpdateComunicationService.updateFilter(next);
        }
      });
  }
}