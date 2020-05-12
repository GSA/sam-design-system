import { ConfigOption, FormlyFieldConfig } from '@ngx-formly/core';

import { FormlyCustomWrapperComponent } from './wrappers/custom-wrapper';
import { FormlyWrapperFormFieldComponent } from './wrappers/form-field.wrapper';
import { FormlyAccordianFormFieldComponent } from './wrappers/form-field.accordian';
import { FormlyFormFieldFilterWrapperComponent } from './wrappers/form-field.filterwrapper';
import { FormlyFieldInputComponent } from './types/input';
import { FormlyFieldSelectComponent } from './types/select';
import { FormlyFieldRadioComponent } from './types/radio';
import { FormlyFieldCheckboxComponent } from './types/checkbox';
import { FormlyFieldMultiCheckboxComponent } from './types/multicheckbox';
import { FormlyFieldTextAreaComponent } from './types/textarea';
import { FormlyFieldAutoCompleteComponent } from './types/autocomplete';
import { FormlyFieldDatePickerComponent } from './types/datepicker';
import { FormlyFieldButtonComponent } from './types/button';
import { FormlyFieldTextComponent } from './types/text';

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
  FormlyFieldTextComponent,
  FormlyGroupWrapperComponent,
  FormlyFieldSearchComponent

];
import { maxDateValidator, minDateValidator } from './formly.validators';
import { sdsWrappers, sdsGroupWrapper } from './sds-formly-options';
import { FormlyLabelWrapperComponent } from './wrappers/label.wrapper';
import { FormlyDescriptionWrapperComponent } from './wrappers/description.wrapper';
import { FormlyValidationWrapperComponent } from './wrappers/validation.wrapper';
import { FormlyGroupWrapperComponent } from './wrappers/group.wrapper';
import { FormlyFieldSearchComponent } from './types/search';

export const FORMLY_WRAPPERS: any = [
  {
    name: 'form-field',
    component: FormlyWrapperFormFieldComponent,
    componentName: 'FormlyWrapperFormFieldComponent'
  },
  {
    name: 'accordionwrapper',
    component: FormlyAccordianFormFieldComponent,
    componentName: 'FormlyAccordianFormFieldComponent'
  },
  {
    name: 'filterwrapper',
    component: FormlyFormFieldFilterWrapperComponent,
    componentName: 'FormlyFormFieldFilterWrapperComponent'
  }
];

export const FORMLY_CONFIG: ConfigOption = {
  types: [
    {
      name: 'formly-group',
      wrappers: sdsGroupWrapper
    },
    {
      name: 'button',
      component: FormlyFieldButtonComponent,
    },
    {
      name: 'customtext',
      component: FormlyFieldTextComponent,
      wrappers: ['form-field']
    },
    {
      name: 'input',
      component: FormlyFieldInputComponent,
      wrappers: sdsWrappers,
    },
    {
      name: 'checkbox',
      component: FormlyFieldCheckboxComponent,
      wrappers: sdsWrappers,
    },
    {
      name: 'radio',
      component: FormlyFieldRadioComponent,
      wrappers: sdsWrappers,
    },
    {
      name: 'select',
      component: FormlyFieldSelectComponent,
      wrappers: sdsWrappers,
    },
    {
      name: 'textarea',
      component: FormlyFieldTextAreaComponent,
      wrappers: sdsWrappers,
    },
    {
      name: 'multicheckbox',
      component: FormlyFieldMultiCheckboxComponent,
      wrappers: sdsWrappers,
    },
    {
      name: 'autocomplete',
      component: FormlyFieldAutoCompleteComponent,
      wrappers: sdsWrappers,
    },
    {
      name: 'datepicker',
      component: FormlyFieldDatePickerComponent,
      wrappers: sdsWrappers,
      defaultOptions: {
        validators: {
          validation: [maxDateValidator, minDateValidator]
        }
      }
    },
    {
      name: 'daterangepicker',
      extends: 'formly-group',
      wrappers: sdsWrappers,
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
              'templateOptions.maxDate': maxDateFromDateRangePicker
            }
          },
          {
            type: 'datepicker',
            key: 'toDate',
            templateOptions: {
              label: 'To'
            },
            expressionProperties: {
              'templateOptions.minDate': minDateToDateRangePicker,
              'templateOptions.maxDate': maxDateToDateRangePicker
            }
          }
        ]
      }
    },
    {
      name: 'search',
      component: FormlyFieldSearchComponent,
      wrappers: sdsWrappers,
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
