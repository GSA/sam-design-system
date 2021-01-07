import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SdsFormlyTypes } from '../models/formly-types';
import { ReadonlyOptions } from '../readonly/readonly-options.model';

interface ReadonlyDataType {
  formlyType: SdsFormlyTypes;
  label: string;
  value: any;
  readonlyOptions: ReadonlyOptions;
}
@Injectable()
export class FormlyUtilsService {
  /**
   * Set readonly mode of a formly field config list. Toggles all field config with defined
   * templateOptions property's readonlyMode to given value
   * @param readonlyMode - if true, readonly mode will be turned on, if false, readonly mode will be turned off
   * @param fields - The list of fields to toggle readonly mode on
   */
  public static setReadonlyMode(
    readonlyMode: boolean,
    fields: FormlyFieldConfig[]
  ) {
    fields.forEach((field) => {
      this._setReadonlyMode(readonlyMode, field);
    });
  }

  /**
   * Parses a formly field config and returns a list of items that readonly container component would accept.
   * This is used when you have field configs and the model, but would like to use components for readonly display
   * rather than formly. templateOptions must be defined for the field in order to convert.
   * @param fields - The list of fields to parse
   * @param model - Contains the values for given fields
   * @param options - Additional cofiguration options
   * options:
   *  convertAll - By default any fields with a type not in SdsFormlyType will be ignored.
   *               Turn this on to include fields with no type or type not in SdsFormlyType.
   */
  public static formlyConfigToReadonlyData(
    fields: FormlyFieldConfig[],
    model: any,
    options = { convertAll: false }
  ): ReadonlyDataType[] {
    const readonlyData = [];
    fields.forEach((field) => {
      this,
        this._formlyConfigToReadonlyData(field, model, readonlyData, options);
    });

    return readonlyData;
  }

  private static _setReadonlyMode(
    readonlyMode: boolean,
    field: FormlyFieldConfig
  ) {
    if (field.fieldGroup) {
      field.fieldGroup.forEach((innerField) => {
        this._setReadonlyMode(readonlyMode, innerField);
      });
    }

    if (field.templateOptions) {
      field.templateOptions.readonlyMode = readonlyMode;
    }
  }

  private static _formlyConfigToReadonlyData(
    field: FormlyFieldConfig,
    model: any,
    readonlyData: any[],
    options: { convertAll: boolean }
  ) {
    if (
      field.templateOptions &&
      (options.convertAll ||
        Object.values(SdsFormlyTypes).includes(field.type as any))
    ) {
      const label = field.templateOptions.label;
      const value = model[field.key as string];
      const readonlyOptions: ReadonlyOptions = {
        providedOptions: field.templateOptions.options as any,
        autocompleteOptions: field.templateOptions.configuration,
      };

      if (field.type === SdsFormlyTypes.DATERANGEPICKER) {
        readonlyOptions.daterangepickerOptions = {
          fromDateKey: field.fieldGroup[0].key as string,
          toDateKey: field.fieldGroup[1].key as string,
        };
      }

      readonlyData.push({
        formlyType: field.type,
        label,
        value,
        readonlyOptions,
      });
    }

    if (field.fieldGroup) {
      const innerModel = field.key ? model[field.key as string] : model;
      field.fieldGroup.forEach((innerField) => {
        this._formlyConfigToReadonlyData(
          innerField,
          innerModel,
          readonlyData,
          options
        );
      });
    }
  }
}
