import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig, ConfigOption } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { MatDateFormats, MatNativeDateModule, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';
import {
  SdsAutocompleteModule,
  SdsDialogModule,
  SdsTextModule,
  SdsEditorModule,
  SdsSearchModule,
  SdsCollapseModule,
  SdsTooltipModule,
  SdsTabsModule,
  SdsPopoverModule,
  SdsRichTextModule,
  SdsStepArrowModule,
} from '@gsa-sam/components';

import { FIELD_TYPE_COMPONENTS, FORMLY_CONFIG } from './formly.config';
import { maxDateValidator, minDateValidator, dateRangeValidator } from './formly.validators';
import { AnimationWrapperComponent } from './wrappers/form-field.animation';
import { SdsReadonlyModule } from './readonly/readonly.module';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  NgxBootstrapIconsModule,
  caretDownFill,
  caretUpFill,
  filter,
  arrowClockwise,
  chevronDown,
  infoCircleFill,
  calendar,
  x,
} from 'ngx-bootstrap-icons';
import { UsaAccordionModule, UsaFileInputModule } from '@gsa-sam/ngx-uswds';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { MatInputModule } from '@angular/material/input';

// Validate the min length of the character
export function minLengthValidationMessage(err, field) {
  return `Should have at least ${field.props.minLength} characters`;
}

// Validate the max length of the character
export function maxLengthValidationMessage(err, field) {
  return `This value should be less than ${field.props.maxLength} characters`;
}

// Validate the min value of the character
export function minValidationMessage(err, field: FormlyFieldConfig) {
  return `This value should be more than ${field.props.min}`;
}

export function minDateValidationMessage(err, field: FormlyFieldConfig) {
  const dt = field.props.minDate;
  const dateFormat = dt.toLocaleString('en-US', { month: 'short' }) + ', ' + dt.getDate() + ', ' + dt.getFullYear();
  return `Date must be on or after ${dateFormat}`;
}

export function maxDateValidationMessage(err, field: FormlyFieldConfig) {
  const dt = field.props.maxDate;
  const dateFormat = dt.toLocaleString('en-US', { month: 'short' }) + ' ' + dt.getDate() + ', ' + dt.getFullYear();
  return `Date must be on or before ${dateFormat}`;
}

export function betweenDateValidationMessage(err, field: FormlyFieldConfig) {
  const dtnmax = field.props.maxDate;
  const dateMaxFormat =
    dtnmax.toLocaleString('en-US', { month: 'short' }) + ' ' + dtnmax.getDate() + ', ' + dtnmax.getFullYear();
  const dtmin = field.props.minDate;
  const dateMinFormat =
    dtmin.toLocaleString('en-US', { month: 'short' }) + ' ' + dtmin.getDate() + ', ' + dtmin.getFullYear();
  return `Date must be between ${dateMinFormat} and ${dateMaxFormat} `;
}

export function invalidDateFormatValidationMessage(err, field: FormlyFieldConfig) {
  return `Valid date format required (ex: MM/DD/YYYY)`;
}

export function requireOrInvalidDateFormat(err, field: FormlyFieldConfig) {
  if (
    field.type === 'datepicker' &&
    field.props['invalidDateMessage'] &&
    field.formControl?.getError('matDatepickerParse')
  ) {
    return `Valid date format required (ex: MM/DD/YYYY)`;
  } else {
    return 'This field is required';
  }
}

export function matDatepickerMinValidationMessage(err, field: FormlyFieldConfig) {
  const fieldWithMinDate = field.props.minDate ? field : field.parent;
  if (!fieldWithMinDate) {
    return `Please enter a valid date`;
  }

  return minDateValidationMessage(err, fieldWithMinDate);
}

export function matDatepickerMaxValidationMessage(err, field: FormlyFieldConfig) {
  const fieldWithMaxDate = field.props.maxDate ? field : field.parent;
  if (!fieldWithMaxDate) {
    return `Please enter a valid date`;
  }

  return maxDateValidationMessage(err, fieldWithMaxDate);
}

export function matDateInBetweenValidationMessage(err, field: FormlyFieldConfig) {
  const fieldWithMinDate = field.props.minDate ? field : field.parent;
  const fieldWithMaxDate = field.props.maxDate ? field : field.parent;

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
  return `This value should be less than ${field.props.max}`;
}
export function animationExtension(field: FormlyFieldConfig) {
  if (field.wrappers && field.wrappers.includes('animation')) {
    return;
  }

  field.wrappers = ['animation', ...(field.wrappers || [])];
}
export { maxDateValidator, minDateValidator, dateRangeValidator, multiCheckboxRequired } from './formly.validators';

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
    UsaAccordionModule,
    MatExpansionModule,
    SdsAutocompleteModule,
    SdsDialogModule,
    SdsSearchModule,
    SdsTextModule,
    SdsEditorModule,
    SdsCollapseModule,
    MatNativeDateModule,
    MatDatepickerModule,
    SdsTableModule,
    MatInputModule,
    IconModule,
    ReactiveFormsModule,
    FormlySelectModule,
    SdsReadonlyModule,
    FormsModule,
    UsaFileInputModule,
    SdsTooltipModule,
    SdsTableModule,
    SdsTabsModule,
    SdsPopoverModule,
    SdsRichTextModule,
    SdsStepArrowModule,
    NgxBootstrapIconsModule.pick({
      caretDownFill,
      caretUpFill,
      filter,
      arrowClockwise,
      chevronDown,
      infoCircleFill,

      calendar,
      x,
    }),
    FormlyModule.forChild(FORMLY_CONFIG),
    FormlyModule.forRoot({
      extras: {
        checkExpressionOn: 'changeDetectionCheck',
        lazyRender: false,
        resetFieldOnHide: false,
      },

      validationMessages: [
        { name: 'required', message: requireOrInvalidDateFormat },
        { name: 'minLength', message: minLengthValidationMessage },
        { name: 'maxLength', message: maxLengthValidationMessage },
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
        { name: 'requiredTrue', validation: Validators.requiredTrue },
      ],
      wrappers: [{ name: 'animation', component: AnimationWrapperComponent }],
      extensions: [{ name: 'animation', extension: { onPopulate: animationExtension } }],
    }),
  ],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT }],
})
export class SdsFormlyModule {
  public static forChild(config: ConfigOption = {}): ModuleWithProviders<SdsFormlyModule> {
    return {
      ngModule: SdsFormlyModule,
      providers: [...FormlyModule.forChild(config).providers],
    };
  }
}
