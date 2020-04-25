import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})

export class SdsAdvancedFiltersService {

  constructor() {}

  convertToCheckboxes(origFields: FormlyFieldConfig[]): FormlyFieldConfig[] {
    const fields: FormlyFieldConfig[] = [];
    origFields.forEach(origField => {
      if (origField.fieldGroup && origField.fieldGroup.length > 1) {
        const field = this.createMulticheckbox(origField);
        fields.push(field);
      } else {
        const field: FormlyFieldConfig = {
          type: 'checkbox',
          key: origField.key,
          defaultValue: !origField.hide,
          templateOptions: {
            hideOptional: true,
            label: origField.templateOptions.label
          }
        };
        fields.push(field);
      }
    });
    return fields;
  }

  // TODO: Should be changed so option has label field instead of key but multicheckbox field type must be updated so default value still works
  createMulticheckbox(origField: FormlyFieldConfig): FormlyFieldConfig {
    const options = [];
    const defaultValue = [];
    origField.fieldGroup.forEach(field => {
      const option = {
        key: field.key,
        value: field.templateOptions['label']
      };
      options.push(option);
      if (!origField.hide && !field.hide) {
        defaultValue.push(field.key);
      }
    });

    const field: FormlyFieldConfig = {
      key: origField.key,
      type: 'multicheckbox',
      defaultValue: origField.hide ? [] : defaultValue,
      templateOptions: {
        hideOptional: true,
        label: origField.templateOptions.label,
        type: 'array',
        options: options
      }
    };
    return field;
  }

  updateFields( selectedFields: object, fields: FormlyFieldConfig[], model: any) {
    fields.forEach((field: FormlyFieldConfig) => {
      const key = field.key;
      const fieldSelected = selectedFields[key];
      if (field.fieldGroup && field.fieldGroup.length > 1) {
        const fieldModel = model[key];
        this.updateFieldGroup(field, fieldSelected, fieldModel);
      } else {
        this.updateSingleField(field, fieldSelected, model);
      }
    });
    return {
      fields: fields,
      model: model
    };
  }

  updateFieldGroup( parentField: FormlyFieldConfig, selectedFields: any, model: object) {
    if (selectedFields) {
      parentField.hide = false;
      parentField.fieldGroup.forEach(field => {
        const key = field.key;
        const fieldSelected = selectedFields.includes(key);
        this.updateSingleField(field, fieldSelected, model);
      });
    } else {
      parentField.hide = true;
      parentField.fieldGroup.forEach(field => {
        this.updateSingleField(field, false, model);
      });
    }
  }

  updateSingleField(
    field: FormlyFieldConfig,
    fieldSelected: boolean,
    model: any
  ) {
    if (fieldSelected) {
      field.hide = false;
    } else {
      field.hide = true;
      field.templateOptions['required'] = false;
      model[field.key] = null;
    }
  }
}
