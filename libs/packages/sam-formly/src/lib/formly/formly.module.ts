import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FIELD_TYPE_COMPONENTS, FORMLY_CONFIG } from './formly.config';
import {
  SdsAccordionModule, SdsAutocompleteModule
} from '@gsa-sam/components';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
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

// Validate the max value of the charecter
export function maxValidationMessage(err, field) {
  return `This value should be less than ${field.templateOptions.max}`;
}


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
      ],
    })
  ],
})
export class SdsFormlyModule { }