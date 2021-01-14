import {
  Component,
  Input,
  Output,
  EventEmitter,
  Optional,
  OnInit,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as qs from 'qs';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';
import { SDSFormlyUpdateModelService } from './service/sds-filter-model-update.service';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sds-filters',
  templateUrl: './sds-filters.component.html',
})
export class SdsFiltersComponent implements OnInit, OnChanges {
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
   * Sort the filters by alphabetical order
   */
  @Input() sortMoreFilterBy = '';

  /**
   * Show option to include inactive filter values
   */
  @Input() isInactiveValueFieldShown: boolean = false;

  /**
   * Timer id for the timer awaiting the service call for more typeing
   */
  @Input() public isHistoryEnable: boolean = false;

  /**
   * To get clean model without null and empty
   */
  @Input() public getCleanModel: boolean = false;

  /**
   *  Emit results when model updated
   */
  // TODO: check type -- Formly models are typically objects
  @Output() filterChange = new EventEmitter<object>();
  @Output() showInactiveFiltersChange = new EventEmitter<boolean>();
  unsubscribe$ = new Subject<void>();
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
    @Optional()
    private filterUpdateModelService: SDSFormlyUpdateModelService,
    library: FaIconLibrary
  ) {
    library.addIconPacks(fas, sds);
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    if (this.filterUpdateModelService) {
      this.filterUpdateModelService.filterModel
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((filter) => {
          if (filter) {
            const updatedFormValue = this.overwrite(
              this.form.getRawValue(),
              filter
            );
            setTimeout(() => {
              this.form.patchValue(updatedFormValue);
            });
          }
        });
      this.cdr.detectChanges();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.model &&
      changes.model.currentValue != changes.model.previousValue
    ) {
      this.checkForHide();
    }
  }

  /**
   * This is for getting the model which has a value.
   */
  checkForHide() {
    let fieldWithValue = this.convertToParam(this.model);
    let keys = [];
    Object.keys(fieldWithValue).map((key) => {
      keys.push(key.replace(/\[/g, '.').replace(/\]/g, ''));
    });
    keys.forEach((key) => {
      const [lastKey] = key.split('.').slice(-1);
      this.fields.forEach((field) => {
        if (key.includes(field.key)) {
          if (field.fieldGroup) {
            const fieldExists = this.findFieldInFieldGroup(
              field.fieldGroup,
              lastKey
            );
            if (fieldExists) {
              field.hide = false;
            }
          } else {
            field.hide = false;
          }
        }
      });
    });
  }

  /**
   * Recursively iterate over each field as well as potential field groups of the field
   * to find a field with the given key. Returns true if field exists. Also toggles
   * hide value of formly field for the key as well as it's parent fields to false.
   * @param fields - The list of formly fields to search for the given key
   * @param key - The key of the formly field config to search for
   */
  private findFieldInFieldGroup(fields: FormlyFieldConfig[], key: any) {
    let existsInFieldGroup = false;
    fields.forEach((field) => {
      if (field.fieldGroup) {
        existsInFieldGroup =
          existsInFieldGroup ||
          this.findFieldInFieldGroup(field.fieldGroup, key);
        if (existsInFieldGroup) {
          field.hide = false;
        }
      } else if (field.key === key) {
        existsInFieldGroup = true;
        field.hide = false;
      }
    });

    return existsInFieldGroup;
  }

  onModelChange(change: any) {
    this.updateChange(change);
  }
  updateChange(change) {
    const updatedModel = this.getCleanModel
      ? this.convertToModel(change)
      : change;
    this.filterChange.emit(updatedModel);
    if (this.formlyUpdateComunicationService) {
      this.formlyUpdateComunicationService.updateFilter(updatedModel);
    }
    this.cdr.detectChanges();
  }

  convertToParam(filters) {
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false,
      filter: this.shortFormatDate,
    });
    if (encodedValues) {
      return this.getUrlParams(encodedValues);
    } else {
      return '';
    }
  }
  getUrlParams(queryString) {
    const target = {};
    queryString.split('&').forEach((pair) => {
      if (pair !== '') {
        const splitpair = pair.split('=');
        target[splitpair[0]] =
          splitpair[1] === '' || splitpair[1] === 'false' ? null : splitpair[1];
      }
    });
    return target;
  }

  shortFormatDate(prefix, value) {
    const fixDigit = (val) => {
      return val.toString().length === 1 ? '0' + val : val;
    };
    const getFormattedDate = (date) =>
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
      filter: this.longFormatDate,
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

  handleInactiveFilterChange(inactiveFilterValue: boolean) {
    this.showInactiveFiltersChange.emit(inactiveFilterValue);
  }
}
