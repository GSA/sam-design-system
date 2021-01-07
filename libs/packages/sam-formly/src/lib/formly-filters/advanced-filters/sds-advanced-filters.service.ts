import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class SdsAdvancedFiltersService {
  constructor() { }

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
            hideOptional: true
          }
        };

        if (origField.templateOptions && origField.templateOptions.label) {
          field.templateOptions.label = origField.templateOptions.label;
        }
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
      const label =
        field.templateOptions && field.templateOptions.label
          ? field.templateOptions.label
          : null;
      const option = {
        key: field.key,
        value: label,
        tagText: field.templateOptions.tagText,
        tagClass: field.templateOptions.tagClass,
      };
      options.push(option);
      if (!origField.hide && !field.hide) {
        defaultValue.push(field.key);
      }
    });

    const field: FormlyFieldConfig = {
      key: origField.key,
      type: 'multicheckbox',
      templateOptions: {
        hideOptional: true,
        selectAllOption: true,
        type: 'array',
        options: options
      }
    };

    if (origField.templateOptions && origField.templateOptions.label) {
      field.templateOptions.label = origField.templateOptions.label;
    }

    if (!origField.hide) {
      field.defaultValue = defaultValue;
    }
    return field;
  }

  updateFields(selectedFields: any, fields: FormlyFieldConfig[], model: any) {
    fields.forEach((field: any) => {
      const key = field.key;
      const selectedField = selectedFields['filterToggle']['filters'][key];
      if (field.fieldGroup && field.fieldGroup.length > 1) {
        const fieldModel = model[key];
        this.updateFieldGroup(field, selectedField, fieldModel);
      } else {
        this.updateSingleField(field, selectedField, model);
      }
    });
    return {
      fields: fields,
      model: model
    };
  }

  updateFieldGroup(
    parentField: FormlyFieldConfig,
    selectedFields: any,
    model: object
  ) {
    if (selectedFields && selectedFields.length) {
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

  updateSingleField(field: any, fieldSelected: boolean, model: any) {
    if (fieldSelected) {
      field.hide = false;
    } else {
      field.hide = true;
      field.templateOptions['required'] = false;
      model[field.key] = null;
    }
  }
}