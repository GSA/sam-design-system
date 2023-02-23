import { UntypedFormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

/**
 *
 * @param control
 * @param field
 */
export function minDateValidator(control: UntypedFormControl, field: FormlyFieldConfig): ValidationErrors {
  let toReturn = null;
  let minDateField = field.templateOptions.minDate;
  let value = control.value;
  if (value && minDateField) {
    if (value instanceof Date && minDateField instanceof Date) {
      if (value < minDateField) {
        if (!field.templateOptions.maxDate && !(field.templateOptions.maxDate instanceof Date)) {
          toReturn = {
            minDate: true,
          };
        } else {
          toReturn = {
            betweenDate: true,
          };
        }
      }
    }
  }

  return toReturn;
}

/**
 * Usage:
 *  Override the required validator to allow autocompletes to behave more like
 *  the other inputs regarding error messages
 *
 // In the formly config
 {
      type: 'autocomplete',
      templateOptions: {
        required: true,
      },
      validators: {
        required: autocompleteRequired
      },
 */
export function autocompleteRequired(control: UntypedFormControl): ValidationErrors {
  return control.value && control.value.items && control.value.length ? { required: true } : null;
}

/**
 * Usage:
 *  Override the required validator to allow multicheckbox to behave more like required atleast one item is selected
 *  the other inputs regarding error messages
 *
 // In the formly config
 {
      type: 'multicheckbox',
      templateOptions: {
        required: true,
      },
      validators: {
        required: multiCheckboxRequired
      },
 */
export function multiCheckboxRequired(control: UntypedFormControl): ValidationErrors {
  const hasTrueKeys = Object.keys(control.value).some((k) => control.value[k]);
  return hasTrueKeys ? { required: true } : null;
}
/**
 *
 * @param control
 * @param field
 */
export function maxDateValidator(control: UntypedFormControl, field: FormlyFieldConfig): ValidationErrors {
  let toReturn = null;
  let maxDateField = field.templateOptions.maxDate;
  let value = control.value;
  if (value && maxDateField) {
    if (value instanceof Date && maxDateField instanceof Date) {
      if (value > maxDateField) {
        if (!field.templateOptions.minDate && !(field.templateOptions.minDate instanceof Date)) {
          toReturn = {
            maxDate: true,
          };
        } else {
          toReturn = {
            betweenDate: true,
          };
        }
      }
    }
  }
  return toReturn;
}

export function dateRangeValidator(control: UntypedFormControl, field: FormlyFieldConfig): ValidationErrors {
  if (field.formControl.invalid && field.formControl.errors) {
    return field.formControl.errors;
  }

  const innerFieldGroup: FormlyFieldConfig = field.fieldGroup.find(
    (field) => field.formControl.invalid && field.formControl.errors
  );

  if (!innerFieldGroup) {
    return null;
  }
  return innerFieldGroup.formControl.errors;
}
