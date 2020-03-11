import { ConfigOption } from '@ngx-formly/core';
import { FormlyWrapperFormFieldComponent } from './wrappers/form-field.wrapper';
import { FormlyFieldInputComponent } from './types/input';
import { FormlyFieldSelectComponent } from './types/select';
import { FormlyFieldRadioComponent } from './types/radio';
import { FormlyFieldCheckboxComponent } from './types/checkbox';
import { FormlyFieldMultiCheckboxComponent } from './types/multicheckbox';
import { FormlyFieldTextAreaComponent } from './types/textarea';
import { FormlyAccordianFormFieldComponent } from './wrappers/form-field.accordian';
import { FormlyFieldAutoCompleteComponent } from './types/autocomplete';
import { FormlyFormFieldFilterWrapperComponent } from './wrappers/form-field.filterwrapper';
import { FormlyFieldDatePickerComponent } from './types/datepicker';
import { FormlyFieldButtonComponent } from './types/button';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyCustomWrapperComponent } from './wrappers/custom-wrapper';

export const FIELD_TYPE_COMPONENTS = [
  FormlyFieldInputComponent,
  FormlyFieldCheckboxComponent,
  FormlyFieldRadioComponent,
  FormlyFieldSelectComponent,
  FormlyFieldTextAreaComponent,
  FormlyFieldMultiCheckboxComponent,
  FormlyWrapperFormFieldComponent,
  FormlyAccordianFormFieldComponent,
  FormlyFieldAutoCompleteComponent,
  FormlyFieldDatePickerComponent,
  FormlyFormFieldFilterWrapperComponent,
  FormlyFieldButtonComponent,
  FormlyCustomWrapperComponent,
  FormlyLabelWrapperComponent,
  FormlyDescriptionWrapperComponent,
  FormlyValidationWrapperComponent,
  FormlyGroupWrapperComponent

];
import { maxDateValidator, minDateValidator } from './formly.validators';
import { sdsFieldWrapper } from './sds-formly-options';
import { FormlyLabelWrapperComponent } from './wrappers/label.wrapper';
import { FormlyDescriptionWrapperComponent } from './wrappers/description.wrapper';
import { FormlyValidationWrapperComponent } from './wrappers/validation.wrapper';
import { FormlyGroupWrapperComponent } from './wrappers/group.wrapper';

export const FORMLY_CONFIG: ConfigOption = {
  types: [
    {
      name: 'button',
      component: FormlyFieldButtonComponent,
    },
    {
      name: 'input',
      component: FormlyFieldInputComponent,
      wrappers: [...sdsFieldWrapper],
    },
    {
      name: 'checkbox',
      component: FormlyFieldCheckboxComponent,
      wrappers: [...sdsFieldWrapper],
    },
    {
      name: 'radio',
      component: FormlyFieldRadioComponent,
      wrappers: [...sdsFieldWrapper],
    },
    {
      name: 'select',
      component: FormlyFieldSelectComponent,
      wrappers: [...sdsFieldWrapper],
    },
    {
      name: 'textarea',
      component: FormlyFieldTextAreaComponent,
      wrappers: [...sdsFieldWrapper],
    },
    {
      name: 'multicheckbox',
      component: FormlyFieldMultiCheckboxComponent,
      wrappers: [...sdsFieldWrapper],
    },
    {
      name: 'autocomplete',
      component: FormlyFieldAutoCompleteComponent,
      wrappers: [...sdsFieldWrapper],
    },
    {
      name: 'datepicker',
      component: FormlyFieldDatePickerComponent,
      wrappers: [...sdsFieldWrapper],
      defaultOptions: {
        validators: {
          validation: [maxDateValidator, minDateValidator],
        }
      }
    },
    {
      name: 'daterangepicker',
      extends: 'formly-group',
      wrappers: ['filterwrapper'],
      defaultOptions: {
        fieldGroup: [
          {
            type: 'datepicker',
            key: 'fromDate',
            templateOptions: {
              label: 'From'
            },
            expressionProperties: {
              'templateOptions.minDate': minDateFromDateRangePicker,
              'templateOptions.maxDate': maxDateFromDateRangePicker,
            },
          },
          {
            type: 'datepicker',
            key: 'toDate',
            templateOptions: {
              label: 'To'
            },
            expressionProperties: {
              'templateOptions.minDate': minDateToDateRangePicker,
              'templateOptions.maxDate': maxDateToDateRangePicker,
            },
          }
        ]
      }
    },
  ],
  wrappers: [
    { name: 'label', component: FormlyLabelWrapperComponent },
    { name: 'description', component: FormlyDescriptionWrapperComponent },
    { name: 'validation', component: FormlyValidationWrapperComponent },
    { name: 'group', component: FormlyGroupWrapperComponent },
    { name: 'form-field', component: FormlyWrapperFormFieldComponent },
    { name: 'accordionwrapper', component: FormlyAccordianFormFieldComponent },
    { name: 'filterwrapper', component: FormlyFormFieldFilterWrapperComponent },
    { name: 'customwrapper', component: FormlyCustomWrapperComponent }
  ],

};

export function minDateToDateRangePicker(model: any, formState: any, field: FormlyFieldConfig) {
  let date = null;
  //Setting a minumn date for the date range picker
  if (field.parent.templateOptions.minDate) {
    date = new Date(field.parent.templateOptions.minDate.getTime());
  }
  if (model) {
    if (model.fromDate) {
      date = model.fromDate;
    }
  }

  return date;
}

export function minDateFromDateRangePicker(model: any, formState: any, field: FormlyFieldConfig) {
  let date = null;
  //Setting a minumn date for the date range picker
  if (field.parent.templateOptions.minDate) {
    date = new Date(field.parent.templateOptions.minDate.getTime());
  }
  return date;
}

export function maxDateToDateRangePicker(model: any, formState: any, field: FormlyFieldConfig) {
  let date = null;
  //Setting a max date for the date range picker 
  if (field.parent.templateOptions.maxDate) {
    date = new Date(field.parent.templateOptions.maxDate.getTime());
  }
  return date;
}

export function maxDateFromDateRangePicker(model: any, formState: any, field: FormlyFieldConfig) {
  let date = null;
  //Setting a max date for the date range picker
  if (field.parent.templateOptions.maxDate) {
    date = new Date(field.parent.templateOptions.maxDate);
  }
  if (model) {
    if (model.toDate) {
      date = model.toDate;
    }
  }
  return date;
}
