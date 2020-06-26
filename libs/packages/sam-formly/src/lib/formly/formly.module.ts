import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig, ConfigOption } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  SdsAccordionModule, SdsAutocompleteModule, SdsDialogModule, SdsTextModule, SdsSearchModule
} from '@gsa-sam/components';

import { FIELD_TYPE_COMPONENTS, FORMLY_CONFIG } from './formly.config';
import { maxDateValidator, minDateValidator } from './formly.validators';
import { AnimationWrapperComponent } from './wrappers/form-field.animation';

// Validate the min length of the character
export function minlengthValidationMessage(err, field) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

// Validate the max length of the character
export function maxlengthValidationMessage(err, field) {
  return `This value should be less than ${field.templateOptions.maxLength} characters`;
}

// Validate the min value of the character
export function minValidationMessage(err, field: FormlyFieldConfig) {
  return `This value should be more than ${field.templateOptions.min}`;
}

export function minDateValidationMessage(err, field: FormlyFieldConfig) {
  const dt = field.templateOptions.minDate;
  const dateFormat = (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
  return `Date must be after ${dateFormat}`;
}

export function maxDateValidationMessage(err, field: FormlyFieldConfig) {
  const dt = field.templateOptions.maxDate;
  const dateFormat = (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
  return `Date must be before ${dateFormat}`;
}


export function betweenDateValidationMessage(err, field: FormlyFieldConfig) {
  const dtnmax = field.templateOptions.maxDate;
  const dateMaxFormat = (dtnmax.getMonth() + 1) + "/" + dtnmax.getDate() + "/" + dtnmax.getFullYear();
  const dtmin = field.templateOptions.minDate;
  const dateMinFormat = (dtmin.getMonth() + 1) + "/" + dtmin.getDate() + "/" + dtmin.getFullYear();
  return `Date must be between ${dateMinFormat} and ${dateMaxFormat} `;
}

export function invalidDateFormatValidationMessage(err, field: FormlyFieldConfig) {
  return `Valid date format required (ex: MM/DD/YYYY)`;
}

// Validate the max value of the character
export function maxValidationMessage(err, field) {
  return `This value should be less than ${field.templateOptions.max}`;
}
export function animationExtension(field: FormlyFieldConfig) {
  if (field.wrappers && field.wrappers.includes('animation')) {
    return;
  }

  field.wrappers = ['animation', ...(field.wrappers || [])];
}
export { maxDateValidator, minDateValidator } from './formly.validators';


@NgModule({
  declarations: [
    FIELD_TYPE_COMPONENTS,
    AnimationWrapperComponent,
  ],
  imports: [
    CommonModule,
    SdsAccordionModule,
    SdsAutocompleteModule,
    SdsDialogModule,
    SdsSearchModule,
    SdsTextModule,
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
        { name: 'betweenDate', message: betweenDateValidationMessage },
        { name: 'matDatepickerParse', message: invalidDateFormatValidationMessage }// Comes from the datepicker
      ],
      validators: [
        { name: 'minDate', validation: minDateValidator },
        { name: 'maxDate', validation: maxDateValidator }
      ],
      wrappers: [
        { name: 'animation', component: AnimationWrapperComponent },
      ],
      extensions: [
        { name: 'animation', extension: { onPopulate: animationExtension } },
      ],
    })
  ]
})
export class SdsFormlyModule {
  public static forChild(config: ConfigOption = {}): ModuleWithProviders[] {
    return [{ ngModule: SdsFormlyModule, providers: [] }, FormlyModule.forChild(config)];
  }
}
