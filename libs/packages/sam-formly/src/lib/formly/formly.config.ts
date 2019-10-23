
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
import { FormlyFieldDateRangePickerComponent } from './types/daterangepicker';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormControl, ValidationErrors } from '@angular/forms';
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
  FormlyFieldDateRangePickerComponent,
  FormlyFormFieldFilterWrapperComponent
];
import { maxDateRangeValidator, minDateRangeValidator } from './formly.validators';

export const FORMLY_CONFIG: ConfigOption = {
  types: [
    {
      name: 'input',
      component: FormlyFieldInputComponent,
      wrappers: ['form-field'],
    },
    {
      name: 'checkbox',
      component: FormlyFieldCheckboxComponent,
      wrappers: ['form-field'],
    },
    {
      name: 'radio',
      component: FormlyFieldRadioComponent,
      wrappers: ['form-field'],
    },
    {
      name: 'select',
      component: FormlyFieldSelectComponent,
      wrappers: ['form-field'],
    },
    {
      name: 'textarea',
      component: FormlyFieldTextAreaComponent,
      wrappers: ['form-field'],
    },
    {
      name: 'multicheckbox',
      component: FormlyFieldMultiCheckboxComponent,
      wrappers: ['form-field'],
    },
    {
      name: 'autocomplete',
      component: FormlyFieldAutoCompleteComponent,
      wrappers: ['form-field'],
    },
    {
      name: 'datepicker',
      component: FormlyFieldDatePickerComponent,
      wrappers: ['form-field']
    },
    {
      name: 'daterangepicker',
      component: FormlyFieldDateRangePickerComponent,
      wrappers: ['form-field'],
      defaultOptions: {

        wrappers: ['form-field'],
        fieldGroup: [
          {
            key: 'fromDate',
            // , expressionProperties: {
            //   'templateOptions.fromMaxDate': maxDateTemplateOptionExpression
            // }
            templateOptions:{required:true},
            wrappers: ['form-field'],
            validators: {
              maxDate: {
                expression: maxDateInline,
                message: maxDateMessageInline,
              },

              minDate: {
                expression: minDateInline,
                message: minDateMessageInline,
              },
            }
            // validators: {
            //   validation: [maxDateRangeValidator, minDateRangeValidator],
            // }
          },
          {
            key: 'toDate',
            // , expressionProperties: {
            //   'templateOptions.toMinDate': minDateTemplateOptionExpression
            // }
            templateOptions:{required:true},
            wrappers: ['form-field'],
            validators: {
              maxDate: {
                expression: maxDateInline,
                message: maxDateMessageInline,
              },

              minDate: {
                expression: minDateInline,
                message: minDateMessageInline,
              },
            }
          }

        ]
      }
    },

  ],
  wrappers: [
    { name: 'form-field', component: FormlyWrapperFormFieldComponent },
    { name: 'accordionwrapper', component: FormlyAccordianFormFieldComponent },
    { name: 'filterwrapper', component: FormlyFormFieldFilterWrapperComponent },
  ],

};

export function minDateTemplateOptionExpression(model: any, formState: any, field: FormlyFieldConfig) {
  let date = null;
  if (model) {
    if (model.fromDate) {
      date = model.fromDate;
    }
  }
  return date;
}

export function maxDateTemplateOptionExpression(model: any, formState: any, field: FormlyFieldConfig) {
  let date = null;
  if (model) {
    if (model.toDate) {
      date = model.toDate;
    }
  }
  return date;
}

export function minDateInline(control: FormControl, field: FormlyFieldConfig) {
  let toReturn = true;
  let minDateField = field.templateOptions.toMinDate;
  let value = control.value;
  if (value && minDateField) {
    if (value instanceof Date && minDateField instanceof Date) {
      if (value < minDateField) {
        console.log(minDateField);
        console.log(value);
        toReturn = false;
      }
    }
  }

  return toReturn;
}


export function maxDateInline(control: FormControl, field: FormlyFieldConfig) {
  let toReturn = true;
  let maxDateField = field.templateOptions.fromMaxDate;
  let value = control.value;
  if (value && maxDateField) {
    if (value instanceof Date && maxDateField instanceof Date) {
      if (value > maxDateField) {
        console.log(maxDateField);
        console.log(value);
        toReturn = false;
      }
    }
  }

  return toReturn;
}


export function maxDateMessageInline(error, field: FormlyFieldConfig) { 'Date off MAX' }
export function minDateMessageInline(error, field: FormlyFieldConfig) { 'Date off MIN' }