import { FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export function autocompleteMaxLengthValidator(
  value,
  field: FormlyFieldConfig
): ValidationErrors {
  let maxLengthValue = field.templateOptions.maxLength;
  if (value && maxLengthValue && value.length > 0) {
    return value.length > maxLengthValue ? { maxLength: true } : null;
  }
}

export function autocompleteMinLengthValidator(
  value,
  field: FormlyFieldConfig
): ValidationErrors {
  let minLengthValue = field.templateOptions.minLength;
  if (value && minLengthValue && value.length > 0) {
    let toReturn = value.length < minLengthValue ? { minLength: true } : null;
    return toReturn;
  }
}

export function autocompleteMinValidator(
  value,
  field: FormlyFieldConfig
): ValidationErrors {
  let minValue = field.templateOptions.min;
  if (value && minValue && value.length > 0 && !isNaN(value)) {
    return value < minValue ? { min: true } : null;
  }
}

export function autocompleteMaxValidator(
  value,
  field: FormlyFieldConfig
): ValidationErrors {
  let maxValue = field.templateOptions.max;
  if (value && maxValue && value.length > 0 && !isNaN(value)) {
    return value > maxValue ? { max: true } : null;
  }
}

export function autocompleteAgeValidator(
  value,
  field: FormlyFieldConfig
): ValidationErrors {
  let minAgeValue = field.templateOptions.minAge;
  let maxAgeValue = field.templateOptions.maxAge;
  if (value && minAgeValue && maxAgeValue && value.length > 0) {
    return value < minAgeValue || value > maxAgeValue ? { age: true } : null;
  }
}

export function autocompletePatternValidator(
  value,
  field: FormlyFieldConfig
): ValidationErrors {
  let regex = new RegExp(field.templateOptions.autoPattern);
  if (value && regex && value.length > 0) {
    return !regex.test(value) ? { autoPattern: true } : null;
  }
}
