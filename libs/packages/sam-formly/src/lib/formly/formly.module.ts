import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormlyModule,
  FormlyFieldConfig,
  ConfigOption,
} from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  MatDateFormats,
  MatNativeDateModule,
  MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  SdsAccordionModule,
  SdsAutocompleteModule,
  SdsDialogModule,
  SdsTextModule,
  SdsSearchModule,
  SdsCollapseModule,
} from '@gsa-sam/components';

import { FIELD_TYPE_COMPONENTS, FORMLY_CONFIG } from './formly.config';
import {
  maxDateValidator,
  minDateValidator,
  dateRangeValidator,
} from './formly.validators';
import { AnimationWrapperComponent } from './wrappers/form-field.animation';
import { SdsReadonlyModule } from './readonly/readonly.module';

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
  const dateFormat =
    dt.getMonth() + 1 + '/' + dt.getDate() + '/' + dt.getFullYear();
  return `Date must be after ${dateFormat}`;
}

export function maxDateValidationMessage(err, field: FormlyFieldConfig) {
  const dt = field.templateOptions.maxDate;
  const dateFormat =
    dt.getMonth() + 1 + '/' + dt.getDate() + '/' + dt.getFullYear();
  return `Date must be before ${dateFormat}`;
}

export function betweenDateValidationMessage(err, field: FormlyFieldConfig) {
  const dtnmax = field.templateOptions.maxDate;
  const dateMaxFormat =
    dtnmax.getMonth() + 1 + '/' + dtnmax.getDate() + '/' + dtnmax.getFullYear();
  const dtmin = field.templateOptions.minDate;
  const dateMinFormat =
    dtmin.getMonth() + 1 + '/' + dtmin.getDate() + '/' + dtmin.getFullYear();
  return `Date must be between ${dateMinFormat} and ${dateMaxFormat} `;
}

export function invalidDateFormatValidationMessage(
  err,
  field: FormlyFieldConfig
) {
  return `Valid date format required (ex: MM/DD/YYYY)`;
}

export function matDatepickerMinValidationMessage(
  err,
  field: FormlyFieldConfig
) {
  const fieldWithMinDate = field.templateOptions.minDate ? field : field.parent;
  if (!fieldWithMinDate) {
    return `Please enter a valid date`;
  }

  return minDateValidationMessage(err, fieldWithMinDate);
}

export function matDatepickerMaxValidationMessage(
  err,
  field: FormlyFieldConfig
) {
  const fieldWithMaxDate = field.templateOptions.minDate ? field : field.parent;
  if (!fieldWithMaxDate) {
    return `Please enter a valid date`;
  }

  return maxDateValidationMessage(err, fieldWithMaxDate);
}

export function matDateInBetweenValidationMessage(
  err,
  field: FormlyFieldConfig
) {
  const fieldWithMinDate = field.templateOptions.minDate ? field : field.parent;
  const fieldWithMaxDate = field.templateOptions.maxDate ? field : field.parent;

  if (fieldWithMinDate && !fieldWithMaxDate) {
    return minDateValidationMessage(err, fieldWithMinDate);
  } else if (fieldWithMaxDate && !fieldWithMinDate) {
    return maxDateValidationMessage(err, fieldWithMaxDate);
  } else if (fieldWithMaxDate && fieldWithMinDate) {
    return betweenDateValidationMessage(err, fieldWithMaxDate);
  }

  return `Please enter a valid date`;
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
export {
  maxDateValidator,
  minDateValidator,
  dateRangeValidator,
} from './formly.validators';

export const DATE_FORMAT: MatDateFormats = {
  ...MAT_NATIVE_DATE_FORMATS,
  display: {
    ...MAT_NATIVE_DATE_FORMATS.display,
    dateInput: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    } as Intl.DateTimeFormatOptions,
  },
};

@NgModule({
  declarations: [FIELD_TYPE_COMPONENTS, AnimationWrapperComponent],
  imports: [
    CommonModule,
    SdsAccordionModule,
    SdsAutocompleteModule,
    SdsDialogModule,
    SdsSearchModule,
    SdsTextModule,
    SdsCollapseModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormlySelectModule,
    SdsReadonlyModule,
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
        {
          name: 'matDatepickerParse',
          message: invalidDateFormatValidationMessage,
        }, // Comes from the datepicker
        {
          name: 'matDatepickerMin',
          message: matDatepickerMinValidationMessage,
        }, // Comes from the datepicker
        {
          name: 'matStartDateInvalid',
          message: matDateInBetweenValidationMessage,
        }, // Comes from the datepicker
        {
          name: 'matDatepickerMax',
          message: matDatepickerMaxValidationMessage,
        }, // Comes from the datepicker
      ],
      validators: [
        { name: 'minDate', validation: minDateValidator },
        { name: 'maxDate', validation: maxDateValidator },
        { name: 'dateRangeValidator', validation: dateRangeValidator },
      ],
      wrappers: [{ name: 'animation', component: AnimationWrapperComponent }],
      extensions: [
        { name: 'animation', extension: { onPopulate: animationExtension } },
      ],
    }),
  ],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT }],
})
export class SdsFormlyModule {
  public static forChild(
    config: ConfigOption = {}
  ): ModuleWithProviders<SdsFormlyModule> {
    return {
      ngModule: SdsFormlyModule,
      providers: [...FormlyModule.forChild(config).providers],
    };
  }
}
