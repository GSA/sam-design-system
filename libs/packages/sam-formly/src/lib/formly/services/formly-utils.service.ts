import { Injectable } from "@angular/core";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { SdsFormlyTypes } from "../models/formly-types";
import { ReadonlyOptions } from "../readonly/readonly-options.model";

@Injectable()
export class FormlyUtilsService {

  public static setReadonlyMode(readonlyMode: boolean, fields: FormlyFieldConfig[]) {
    fields.forEach(field => {
      this._setReadonlyMode(readonlyMode, field);
    });
  }

  public static formlyConfigToReadonlyData(fields: FormlyFieldConfig[], model: any) {
    const readonlyData = [];
    fields.forEach(field => {
      this,this._formlyConfigToReadonlyData(field, model, readonlyData);
    });

    return readonlyData;
  }


  private static _setReadonlyMode(readonlyMode: boolean, field: FormlyFieldConfig) {

    if (field.fieldGroup) {
      field.fieldGroup.forEach(innerField => {
        this._setReadonlyMode(readonlyMode, innerField);
      })
    }

    if (field.templateOptions) {
      field.templateOptions.readonlyMode = readonlyMode
    }
  }

  private static _formlyConfigToReadonlyData(field: FormlyFieldConfig, model: any, readonlyData: any[]) {
    if (field.fieldGroup) {
      const innerModel = field.key ? model[field.key as string] : model;
      field.fieldGroup.forEach(innerField => {
        this._formlyConfigToReadonlyData(innerField, innerModel, readonlyData);
      });
    }

    if (Object.values(SdsFormlyTypes).includes(field.type as any)) {

      const label = field.templateOptions.label;
      const value = model[field.key as string];
      const readonlyOptions: ReadonlyOptions = {
        providedOptions: field.options as any,
        autocompleteOptions: field.templateOptions.configuration,
      };

      if (field.type === SdsFormlyTypes.DATERANGEPICKER) {
        readonlyOptions.daterangepickerOptions = {
          fromDateKey: field.fieldGroup[0].key as string,
          toDateKey: field.fieldGroup[1].key as string
        }
      }

      readonlyData.push({
        formlyType: field.type,
        label,
        value,
        readonlyOptions
      });
    }
  }
} 
