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
      if (origField.fieldGroup?.length && !hideChildrenGroups) {
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
            field.props = {
              ...field.props,
              label: origField.props.label,
            };
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
    if (origField.fieldGroup?.length) {
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
          const item = {
            key: origField.key,
            value: field.key,
          };
          defaultValue.push(item);
          // defaultValue.push(field.key);
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
      field.props = {
        ...field.props,
        label: origField.props.label,
      };
    }

    const dlist = defaultValue.filter((x) => x.key === origField.key);
    let list = [];
    dlist.forEach((x) => {
      list.push(x.value);
    });

    field.defaultValue = list;
    return field;
  }

  updateFields(selectedFields: any, fields: FormlyFieldConfig[], model: any) {
    fields.forEach((field) => {
      const key = field.key as string;
      const selectedField = selectedFields['filterToggle']['filters'][key];
      if (field.fieldGroup && field.fieldGroup.length > 1) {
        const fieldModel = model[key];
        this.updateFieldGroup(field, selectedField, fieldModel, fields);
      } else {
        this.updateSingleField(field, selectedField, model, fields);
      }
    });
    return {
      fields: fields,
      model: model,
    };
  }

  updateFieldGroup(
    parentField: FormlyFieldConfig,
    selectedFields: any,
    model: object,
    originalfields: FormlyFieldConfig[]
  ) {
    if (selectedFields && (selectedFields.length || typeof selectedFields === 'boolean')) {
      parentField.hide = false;
      if (selectedFields === true || selectedFields.length) {
        parentField.fieldGroup.forEach((field) => {
          const key = field.key;
          const fieldSelected = selectedFields.length ? selectedFields.includes(key) : field;
          this.updateSingleField(field, fieldSelected, model, originalfields);
          if (field.fieldGroup && field.fieldGroup.length > 1) {
            this.updateFieldGroup(field, selectedFields, model, originalfields);
          }
        });
      }
    } else {
      parentField.hide = true;
      parentField.fieldGroup.forEach((field) => {
        this.updateSingleField(field, false, model, originalfields);
      });
    }
  }

  updateSingleField(field: any, fieldSelected: boolean, model: any, originalfields: FormlyFieldConfig[]) {
    let key = field.key;
    if (fieldSelected) {
      field.hide = false;
    } else {
      field.hide = true;
      field.props = {
        ...field.props,
        required: false,
      };
      if (field.formControl) {
        field.formControl.reset(null);
      } else {
        model[key] = null;
      }
    }
  }
}
