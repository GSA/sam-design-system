import {
  Component,
  Input,
  Output,
  EventEmitter,
  Optional,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as qs from 'qs';
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
        if(newObj[key]){
        result[key] = newObj[key];
      } else {
        result[key] =[];
      }
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.isHistoryEnable) {
      this.route.queryParams.subscribe(params => {
        if (this._isEmpty(this.form.getRawValue())) {
          const paramModel = this.convertToModel(params);
          this.updateChange(paramModel);
          setTimeout(() => {
            this.form.patchValue({
              ...this.model, ...paramModel
            }, { emitEvent: false })
          });

        } else {
          if(this._isEmpty(params)){
         
            console.log('empty', this.model);
          }
          const updatedFormValue = this.overwrite(
            this.form.getRawValue(),
            this.convertToModel(params)
          );

          console.log(this.form.controls, 'controles')
          this.form.setValue(updatedFormValue);

          this.updateChange(updatedFormValue);
        }
      });
    }
    this.cdr.detectChanges();
  }

  onModelChange(change: any) {
    if (this.isHistoryEnable) {
      const params = this.convertToParam(change);
      this.router.navigate([], {
        queryParams: params,
         queryParamsHandling: 'merge'
      });
    }
    this.updateChange(change);
    this.cdr.detectChanges();
  }

  updateChange(change) {
    this.filterChange.emit(change);
    if (this.formlyUpdateComunicationService) {
      this.formlyUpdateComunicationService.updateFilter(change);
    }
  }

  convertToParam(filters) {
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false
    });
    if (encodedValues) {
      const target = {};
      encodedValues.split('&').forEach(pair => {
        if (pair !== '') {
          const splitpair = pair.split('=');
          target[splitpair[0]] = splitpair[1];
        }
      });
      return target;
    } else {
      return '';
    }
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
