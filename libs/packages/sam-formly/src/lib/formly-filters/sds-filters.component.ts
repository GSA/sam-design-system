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
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';
import { pairwise } from 'rxjs/operators';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  NavigationStart
} from '@angular/router';
import * as qs from 'qs';
import { Location } from '@angular/common';
import 'rxjs/add/operator/pairwise';@Component({
  selector: 'sds-filters',
  template: `
    <formly-form
      [form]="form"
      (modelChange)="modelChange.next($event)"
      [fields]="fields"
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
   *  Emit results when model updated
   */
  @Output() filterChange = new EventEmitter<object[]>();

  /**
   * debounce time for current page input
   */
  @Input() debounceTime = 0;
  private queryParams = {};
  label = [];
  constructor(
    @Optional()
    private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const _isObj = (obj: any): boolean => typeof obj === 'object' && obj !== null;
    const _isEmpty = (obj: any): boolean => Object.keys(obj).length === 0;
    const overwrite = (baseObj: any, newObj: any) => {
      let result = {};
      for (let key in baseObj) {
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
        this.model = qs.parse(params);
        this.form.patchValue({
          ...this.model
        });
      } else {
        
        const updatedFormValue = overwrite(
          this.form.getRawValue(),
          qs.parse(params)
        );
        console.log('updatedFormValue ===>', updatedFormValue);
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
        const key =
          splitpair[0].charAt(0).toLowerCase() +
          splitpair[0]
            .slice(1)
            .split(' ')
            .join('');
        target[key] = splitpair[1];
      }
    });
    // console.dir(target);
    // const parse =qs.parse(encodedValues);
    return target;
  }

  convertToModel(str) {
    let obj = {};
    obj = qs.parse(str);
    return obj;
  }
}
