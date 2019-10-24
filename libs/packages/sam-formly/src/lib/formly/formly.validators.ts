import { FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';


/**
 * 
 * @param control 
 * @param field 
 */
export function minDateValidator(control: FormControl, field: FormlyFieldConfig): ValidationErrors {
    let toReturn = null;
    let minDateField = field.templateOptions.minDate;
    let value = control.value;
    if (value && minDateField) {
        if (value instanceof Date && minDateField instanceof Date) {
            if (value < minDateField) {
                console.log(minDateField);
                console.log(value);
                toReturn = {
                    'minDate': true
                };
            }
        }
    }

    return toReturn;
}


/**
 * 
 * @param control 
 * @param field 
 */
export function maxDateValidator(control: FormControl, field: FormlyFieldConfig): ValidationErrors {
    let toReturn = null;
    let maxDateField = field.templateOptions.maxDate;
    let value = control.value;
    if (value && maxDateField) {
        if (value instanceof Date && maxDateField instanceof Date) {
            if (value > maxDateField) {
                console.log(maxDateField);
                console.log(value);
                toReturn = {
                    'maxDate': true
                };
            }
        }
    }
    return toReturn;
}

