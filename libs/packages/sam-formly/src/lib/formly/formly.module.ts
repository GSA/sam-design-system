import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FIELD_TYPE_COMPONENTS, FORMLY_CONFIG } from './formly.config';
import {
  SdsAccordionModule, SdsAutocompleteModule
} from '@gsa-sam/components';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { maxDateValidator, minDateValidator } from './formly.validators';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Validate the min length of the charecter
export function minlengthValidationMessage(err, field) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

// Validate the max length of the charecter
export function maxlengthValidationMessage(err, field) {
  return `This value should be less than ${field.templateOptions.maxLength} characters`;
}

// Validate the min value of the charecter
export function minValidationMessage(err, field) {
  return `This value should be more than ${field.templateOptions.min}`;
}

export function minDateValidationMessage(err, field) {
  let dt = field.templateOptions.minDate;
  let dateFormat = (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
  return `This value should be more than ${dateFormat}`;
}

export function maxDateValidationMessage(err, field) {
  let dt = field.templateOptions.maxDate;
  let dateFormat = (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
  return `This value should be less than ${dateFormat}`;
}

export function minDateRangeValidationMessage(err, field) {
  // let dt = field.templateOptions.minDate;
  // let dateFormat = (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
  return `This value should be more than from value`;
}

export function maxDateRangeValidationMessage(err, field) {
  // let dt = field.templateOptions.maxDate;
  // let dateFormat = (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
  return `This value should be less than to value`;
}



// Validate the max value of the charecter
export function maxValidationMessage(err, field) {
  return `This value should be less than ${field.templateOptions.max}`;
}

export { maxDateValidator, minDateValidator } from './formly.validators';


@NgModule({
  declarations: [
    FIELD_TYPE_COMPONENTS,
  ],
  imports: [
    CommonModule,
    SdsAccordionModule,
    SdsAutocompleteModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule.forChild(FORMLY_CONFIG),
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: 'minDate', message: minDateValidationMessage },
        { name: 'maxDate', message: maxDateValidationMessage },
        { name: 'minDateRange', message: minDateRangeValidationMessage },
        { name: 'maxDateRange', message: maxDateRangeValidationMessage },
      ],
      validators: [
        { name: 'minDate', validation: minDateValidator },
        { name: 'maxDate', validation: maxDateValidator }
     
      ]
    })
  ]
})
export class SdsFormlyModule { }