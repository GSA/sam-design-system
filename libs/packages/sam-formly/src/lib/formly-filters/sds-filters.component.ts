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
  ViewChild,
  TemplateRef,
} from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import * as qs from 'qs';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';
import { SDSFormlyUpdateModelService } from './service/sds-filter-model-update.service';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormlyUtilsService, ReadonlyDataType } from '../formly/services/formly-utils.service';
import { SdsFormlyTypes } from '../formly/models/formly-types';
import { SdsDialogRef, SdsDialogService, SDS_DIALOG_DATA } from '@gsa-sam/components';
import { cloneDeep } from 'lodash-es';
@Component({
  selector: 'sds-filters',
  templateUrl: './sds-filters.component.html',
})
export class SdsFiltersComponent implements OnInit, OnChanges {

  @ViewChild('horizontalFiltersDialog') horizontalFiltersDialogTemplate: TemplateRef<any>;

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
   * Default values to reset form to when reset is done
   * If not passed in, then default values will be values
   * assigned to the model input during component init
   * or defaultValue provided in formly config
   */
  @Input() defaultModel: any;

  /**
   * Toggle layout for filters - when horizontal is toggled,
   * the reset and more filters are placed in top right corner
   */
  @Input() horizontal = false;

  /**
   * Toggle displaying chips for selected filter values. By default this is toggled off
   * in normal situations. When horizontal setting is turned on, then chip display is
   * also toggled on by default
   */
  @Input() displayChips: boolean;

  /**
   * Switch to show/hide the reset all button
   * @default true
   */
  @Input() showReset: boolean = true;
  /**
   *  Emit results when model updated
   */
  // TODO: check type -- Formly models are typically objects
  @Output() filterChange = new EventEmitter<object>();
  @Output() showInactiveFiltersChange = new EventEmitter<boolean>();

  chips: ReadonlyDataType[] = [];
  dialogRef: SdsDialogRef<any>;

  // Snapshot of model before filter dialog opens during horizontal responsive format
  _modelSnapshot: any;

  unsubscribe$ = new Subject<void>();
  _isObj = (obj: any): boolean => typeof obj === 'object' && obj !== null;
  _isEmpty = (obj: any): boolean => Object.keys(obj).length === 0;
  overwrite = (baseObj: any, newObj: any) => {
    const result = {};
    const mergedObj = { ...baseObj, ...newObj };
    for (const key in mergedObj) {
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
    private formlyDialogService: SdsDialogService,
    private cdr: ChangeDetectorRef,
    @Optional()
    private filterUpdateModelService: SDSFormlyUpdateModelService
  ) { }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    // keep display chips to defined value if defined, otherwise, default to false, unless hoirzontal is turned on
    this.displayChips = this.displayChips != undefined ? this.displayChips : this.horizontal;

    if (this.filterUpdateModelService) {
      this.filterUpdateModelService.filterModel
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((filter) => {
          if (filter) {
            const updatedFormValue = this.overwrite(
              this.form.getRawValue(),
              filter
            );
            // Shallow copy to not trigger onChanges from formly side
            Object.keys(updatedFormValue).forEach((key) => {
              this.model[key] = updatedFormValue[key];
            });

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
   * to find a field with the given key. Returns the field if found, otherwise returns null.
   * @param fields - The list of formly fields to search for the given key
   * @param key - The key of the formly field config to search for
   */
  private findFieldInFieldGroup(fields: FormlyFieldConfig[], key: any) {
    let matchingField: FormlyFieldConfig = null;

    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];

      if (field.key === key) {
        matchingField = field;
      } else if (field.fieldGroup) {
        matchingField = this.findFieldInFieldGroup(field.fieldGroup, key);
      } else if (field.fieldArray) {
        matchingField = this.findFieldInFieldGroup([field.fieldArray], key);
      }

      if (matchingField) {
        break;
      }
    }

    return matchingField;
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

    if (this.displayChips) {
      this.generateChips(change, this.fields);
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


  convertToModel(filters) {
    let obj = {};
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false,
      filter: this.longFormatDate,
    });
    obj = qs.parse(encodedValues, { decoder: this.cleanModelParser });
    return obj;
  }

  /**
   * Parser for qs.parse - if input string is true / false, 
   * convert to boolean value, otherwise use default decoder
   */
  cleanModelParser(str: string, decoder: qs.defaultDecoder, charset: string, type: 'key' | 'value') {
    if (type === 'key') {
      return decoder(str, decoder, charset);
    }

    if (str === 'true' || str === 'false') {
      return str === 'true' ? true : false;
    }

    return decoder(str, decoder, charset);
  }

  longFormatDate(prefix, value) {
    const val = Date.parse(value);
    if (!isNaN(val) && isNaN(value)) {
      value = new Date(val).toISOString();
    }
    return value;
  }

  handleInactiveFilterChange(inactiveFilterValue: boolean) {
    if (this.displayChips) {
      this.generateChips(this.model, this.fields);
    }
    this.showInactiveFiltersChange.emit(inactiveFilterValue);
  }

  openDialog() {
    const clonedFields = cloneDeep(this.fields);
    this._modelSnapshot = cloneDeep(this.model);
    this.removePopoverGroup(clonedFields);
    this.dialogRef = this.formlyDialogService.open(this.horizontalFiltersDialogTemplate, {    
      data: {fields: clonedFields, options: {}},  
      height: '100vh',
      width: '100vw',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      displayCloseBtn: false,
      panelClass: ['sds-dialog--full']
    });

    this.dialogRef.afterClosed().toPromise().then((result) => {
      if (result) {
        this.onModelChange(result);
      } else {
        this.model = this._modelSnapshot;
      }
      this.dialogRef = null;
    })
  }

  close() {
    this.dialogRef.close();
  }

  applyDialogFilters() {
    this.dialogRef.close(this.model);
  }

  /**
   * Converts all popover type fields to accordion and unhides any hidden fields
   * so that they can be displayed in filter dialog during resposive mode for
   * horizontal filters
   * @param fields 
   */
  private removePopoverGroup(fields: FormlyFieldConfig[]) {
    fields.forEach(field => {
      if (field.templateOptions && field.templateOptions.group === 'popover') {
        field.templateOptions.group = 'accordion';
      }
      
      if (field.fieldGroup) {
        this.removePopoverGroup(field.fieldGroup);
      }

      if (field.fieldArray) {
        this.removePopoverGroup([field.fieldArray]);
      }

      field.hide = false;
    })
  }

  /**
   * Create chips to display for horizontal filters based on current model
   * and formly field config
   * @param model 
   * @param fields 
   */
  private generateChips(model: any, fields: FormlyFieldConfig[]) {
    const readonlyData = FormlyUtilsService.formlyConfigToReadonlyData(fields, model);
    const chipsWithValue = readonlyData.filter(data => data.value);
    let allChips = [];
    chipsWithValue.forEach(chip => {
      if (typeof chip.value != 'object') {
        allChips.push(chip);
        return;
      }

      if (Array.isArray(chip.value)) {
        const newChips = chip.value.map(chipValue => {
          return { ...chip, value: [chipValue] };
        });
        allChips = allChips.concat(newChips);
        return;
      }

      if (chip.formlyType === SdsFormlyTypes.DATERANGEPICKER || chip.formlyType === SdsFormlyTypes.DATERANGEPICKERV2) {
        const fromDateValue = chip.value[chip.readonlyOptions.daterangepickerOptions.fromDateKey];
        const toDateValue = chip.value[chip.readonlyOptions.daterangepickerOptions.toDateKey];

        if (fromDateValue || toDateValue) {
          allChips.push(chip);
        }

        return;
      }

      Object.keys(chip.value).forEach(key => {
        const value = chip.value[key];

        // Ignore falsey or empty string values
        if (!value || (typeof (value.length) === 'string' && !value.length)) {
          return;
        }

        const newChip = { ...chip, value: { [key]: value } };
        allChips.push(newChip);
      })
    })

    this.chips = allChips;
  }

  /**
   * Removing a certain chip from UI is the same as applying a change to the form, so
   * this should update the form control. We can find the field to update based on the chip's
   * formly key and what values to update to based on values of existing chips with the same key
   * @param chip 
   * @returns 
   */
  removeChip(chip: ReadonlyDataType) {
    const field = this.findFieldInFieldGroup(this.fields, chip.formlyKey);

    if (!field) {
      throw new Error('Error: unable to find field to remove chip')
    }

    // If the form control is not complex, then we can simply reset
    if (typeof field.formControl.value != 'object') {
      field.formControl.reset();
      return;
    }

    if (chip.formlyType === SdsFormlyTypes.DATERANGEPICKER || chip.formlyType === SdsFormlyTypes.DATERANGEPICKERV2) {
      
      const fromDateControl = field.fieldGroup[0].formControl;
      const toDateControl = field.fieldGroup[1].formControl;
      fromDateControl.reset();
      toDateControl.reset();
      return;
    }

    // If the form control contains complex values, such as an object or array, we need to determine what the new
    // value of the form will be after this chip has been removed, and update the form control accordingly
    const chipsWithSameKey = this.chips.filter(exisingChip => chip != exisingChip && chip.formlyKey === exisingChip.formlyKey);
    const existingValues = chipsWithSameKey.map(chipWithSameKey => chipWithSameKey.value);

    if (Array.isArray(field.formControl.value)) {
      let updatedValue = [];
      existingValues.forEach(value => {
        updatedValue = updatedValue.concat(value)
      });
      field.formControl.setValue(updatedValue);
      return;
    }

    const objectValue = {}
    Object.assign(objectValue, ...existingValues)
    field.formControl.setValue(objectValue);
  }
}
