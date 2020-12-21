import { Injectable } from "@angular/core";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Injectable()
export class FormlyUtilsService {

  public static setReadonlyMode(readonlyMode: boolean, fields: FormlyFieldConfig[]) {
    fields.forEach(field => {
      this._setReadonlyMode(readonlyMode, field);
    });
  }


  private static _setReadonlyMode(readonlyMode: boolean, field: FormlyFieldConfig) {

    if (field.fieldGroup) {
      field.fieldGroup.forEach(field => {
        this._setReadonlyMode(readonlyMode, field);
      })
    }

    if (field.templateOptions) {
      field.templateOptions.readonlyMode = readonlyMode
    }
  }
} 
