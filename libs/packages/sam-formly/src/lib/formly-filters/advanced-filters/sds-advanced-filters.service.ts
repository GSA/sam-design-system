import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root',
})
export class SdsAdvancedFiltersService {
  constructor() {}

  convertToCheckboxes(origFields: FormlyFieldConfig[], hideChildrenGroups = false): FormlyFieldConfig[] {
    const fields: FormlyFieldConfig[] = [];
    const defaultValue = [];
    origFields.forEach((origField) => {
      if (origField.fieldGroup?.length && !hideChildrenGroups && !origField.props?.hideChildrenGroups) {
        const field = this.createMulticheckbox(origField, defaultValue);
        fields.push(field);
        // this.convertToCheckboxes(origField.fieldGroup, hideChildrenGroups);
      } else {
        if (origField.key) {
          const field: FormlyFieldConfig = {
            type: 'checkbox',
            key: origField.key,
            defaultValue: !origField.hide,
            props: {
              hideOptional: true,
            },
          };

          if (origField.props && origField.props.label) {
            field.props.label = origField.props.label;
          }
          fields.push(field);
        }
      }
    });
    return fields;
  }

  // TODO: Should be changed so option has label field instead of key but multicheckbox field type must be updated so default value still works
  createMulticheckbox(origField: FormlyFieldConfig, defaultValue: any[]): FormlyFieldConfig {
    const options = [];
    if (origField.fieldGroup?.length && origField.key) {
      origField.fieldGroup.forEach((field) => {
        if (field.fieldGroup?.length) {
          options.push(this.createMulticheckbox(field, defaultValue));
        } else {
          const label = field.props && field.props.label ? field.props.label : null;
          const option = {
            value: field.key,
            label: label,
            tagText: field.props.tagText,
            tagClass: field.props.tagClass,
          };
          options.push(option);
          if (!origField.hide && !field.hide) {
            defaultValue.push(field.key);
            defaultValue.push(origField.key);
          }
        }
      });
    }

    const field: FormlyFieldConfig = {
      key: origField.key,
      type: 'multicheckbox',
      props: {
        hideOptional: true,
        selectAllOption: true,
        type: 'array',
        options: options,
      },
    };

    if (origField.props && origField.props.label) {
      field.props.label = origField.props.label;
    }

    if (!origField.hide) {
      field.defaultValue = defaultValue;
    }
    return field;
  }

  updateFields(selectedFields: any, fields: FormlyFieldConfig[], model: any) {
    fields.forEach((field) => {
      const key = field.key as string;
      let selectedField = selectedFields['filterToggle']['filters'][key];
      if (field.fieldGroup && field.fieldGroup.length > 1) {
        const fieldModel = model[key];
        this.updateFieldGroup(field, selectedField, fieldModel);
      } else {
        if (Array.isArray(selectedField)) {
          if (selectedField.length > 0) {
            this.updateSingleField(field, true, model);
          } else {
            this.updateSingleField(field, false, model);
          }
        } else {
          this.updateSingleField(field, selectedField, model);
        }
      }
    });
    return {
      fields: fields,
      model: model,
    };
  }

  updateFieldGroup(parentField: FormlyFieldConfig, selectedFields: any, model: object) {
    if (selectedFields && (selectedFields.length || typeof selectedFields === 'boolean')) {
      parentField.hide = false;
      if (selectedFields === true || selectedFields.length) {
        parentField.fieldGroup.forEach((field) => {
          const key = field.key;
          const fieldSelected = selectedFields.length ? selectedFields.includes(key) : field;
          this.updateSingleField(field, fieldSelected, model);
          if (field.fieldGroup && field.fieldGroup.length > 1) {
            this.updateFieldGroup(field, selectedFields, model);
          }
        });
      }
    } else {
      parentField.hide = true;
      parentField.fieldGroup.forEach((field) => {
        this.updateSingleField(field, false, model);
      });
    }
  }

  updateSingleField(field: any, fieldSelected: boolean, model: any) {
    if (fieldSelected) {
      field.hide = false;
    } else {
      field.hide = true;
      field.props = {
        ...field.props,
        required: false,
      };
      if (field.formControl) {
        field.formControl.reset();
      } else {
        model[field.key] = null;
      }
    }
  }
}
