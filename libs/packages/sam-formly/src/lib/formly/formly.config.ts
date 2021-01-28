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
  FormlyFieldFileInfoComponent,
  FormlyFieldRadioComponent,
  FormlyFieldSelectComponent,
  FormlyFieldTextAreaComponent,
  FormlyFieldMultiCheckboxComponent,
  FormlyWrapperFormFieldComponent,
  FormlyAccordianFormFieldComponent,
  FormlyFieldAutoCompleteComponent,
  FormlyFieldDatePickerComponent,
  FormlyFieldDateRangePickerComponent,
  FormlyFormFieldFilterWrapperComponent,
  FormlyFieldButtonComponent,
  FormlyCustomWrapperComponent,
  FormlyLabelWrapperComponent,
  FormlyDescriptionWrapperComponent,
  FormlyValidationWrapperComponent,
  FormlyFieldTextComponent,
  FormlyGroupWrapperComponent,
  FormlyFieldSearchComponent,
  FormlyReadonlyWrapperComponent
];
import {
  dateRangeValidator,
  maxDateValidator,
  minDateValidator
} from './formly.validators';
import { sdsWrappers, sdsGroupWrapper } from './sds-formly-options';
import { FormlyLabelWrapperComponent } from './wrappers/label.wrapper';
import { FormlyDescriptionWrapperComponent } from './wrappers/description.wrapper';
import { FormlyValidationWrapperComponent } from './wrappers/validation.wrapper';
import { FormlyGroupWrapperComponent } from './wrappers/group.wrapper';
import { FormlyFieldSearchComponent } from './types/search';
import { FormlyFieldFileInfoComponent } from './types/fileinfo';
import { FormlyFieldDateRangePickerComponent } from './types/daterangepicker';
import { SdsFormlyTypes } from './models/formly-types';
import { FormlyReadonlyWrapperComponent } from './wrappers/readonly.wrapper';

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
  },

  {
    name: 'label',
    component: FormlyLabelWrapperComponent,
    componentName: 'FormlyLabelWrapperComponent'
  },
  {
    name: 'description',
    component: FormlyDescriptionWrapperComponent,
    componentName: 'FormlyDescriptionWrapperComponent'
  },
  {
    name: 'validation',
    component: FormlyValidationWrapperComponent,
    componentName: 'FormlyValidationWrapperComponent'
  },
  {
    name: 'group',
    component: FormlyGroupWrapperComponent,
    componentName: 'FormlyGroupWrapperComponent'
  },

  {
    name: 'customwrapper',
    component: FormlyCustomWrapperComponent,
    componentName: 'FormlyCustomWrapperComponent'
  },
  {
    name: 'readonly',
    component: FormlyReadonlyWrapperComponent,
    componentName: 'FormlyReadonlyWrapperComponent'
  }
];

export const FORMLY_CONFIG: ConfigOption = {
  types: [
    {
      name: SdsFormlyTypes.FORMLYGROUP,
      wrappers: sdsGroupWrapper
    },
    {
      name: SdsFormlyTypes.READONLY,
      wrappers: sdsGroupWrapper,
      component: FormlyReadonlyWrapperComponent
    },
    {
      name: SdsFormlyTypes.BUTTON,
      component: FormlyFieldButtonComponent
    },
    {
      name: SdsFormlyTypes.CUSTOMTEXT,
      component: FormlyFieldTextComponent,
      wrappers: sdsWrappers
    },
    {
      name: SdsFormlyTypes.INPUT,
      component: FormlyFieldInputComponent,
      wrappers: sdsWrappers
    },
    {
      name: SdsFormlyTypes.CHECKBOX,
      component: FormlyFieldCheckboxComponent,
      wrappers: sdsWrappers
    },
    {
      name: SdsFormlyTypes.FILEINFO,
      component: FormlyFieldFileInfoComponent,
      wrappers: sdsWrappers
    },
    {
      name: SdsFormlyTypes.RADIO,
      component: FormlyFieldRadioComponent,
      wrappers: sdsWrappers
    },
    {
      name: SdsFormlyTypes.SELECT,
      component: FormlyFieldSelectComponent,
      wrappers: sdsWrappers
    },
    {
      name: SdsFormlyTypes.TEXTAREA,
      component: FormlyFieldTextAreaComponent,
      wrappers: sdsWrappers
    },
    {
      name: SdsFormlyTypes.MULTICHECKBOX,
      component: FormlyFieldMultiCheckboxComponent,
      wrappers: sdsWrappers
    },
    {
      name: SdsFormlyTypes.AUTOCOMPLETE,
      component: FormlyFieldAutoCompleteComponent,
      wrappers: sdsWrappers
    },
    {
      name: SdsFormlyTypes.DATEPICKER,
      component: FormlyFieldDatePickerComponent,
      wrappers: sdsWrappers,
      defaultOptions: {
        validators: {
          validation: [maxDateValidator, minDateValidator]
        }
      }
    },
    {
      name: SdsFormlyTypes.DATERANGEPICKER,
      extends: SdsFormlyTypes.FORMLYGROUP,
      wrappers: sdsWrappers,
      defaultOptions: {
        fieldGroup: [
          {
            type: SdsFormlyTypes.DATEPICKER,
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
            type: SdsFormlyTypes.DATEPICKER,
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
      name: 'daterangepickerv2',
      component: FormlyFieldDateRangePickerComponent,
      wrappers: sdsWrappers,
      defaultOptions: {
        validators: {
          validation: [dateRangeValidator]
        },
        fieldGroup: [
          {
            key: 'fromDate',
            templateOptions: {
              placeholder: 'Start Date'
            }
          },
          {
            key: 'toDate',
            templateOptions: {
              placeholder: 'End Date'
            }
          }
        ]
      }
    },
    {
      name: SdsFormlyTypes.SEARCH,
      component: FormlyFieldSearchComponent,
      wrappers: sdsWrappers
    }
  ],
  wrappers: [
    { name: 'label', component: FormlyLabelWrapperComponent },
    { name: 'description', component: FormlyDescriptionWrapperComponent },
    { name: 'validation', component: FormlyValidationWrapperComponent },
    { name: 'group', component: FormlyGroupWrapperComponent },
    { name: 'form-field', component: FormlyWrapperFormFieldComponent },
    { name: 'accordionwrapper', component: FormlyAccordianFormFieldComponent },
    { name: 'filterwrapper', component: FormlyFormFieldFilterWrapperComponent },
    { name: 'customwrapper', component: FormlyCustomWrapperComponent },
    { name: 'readonly', component: FormlyReadonlyWrapperComponent }
  ]
};

export function minDateToDateRangePicker(
  model: any,
  formState: any,
  field: FormlyFieldConfig
) {
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

export function minDateFromDateRangePicker(
  model: any,
  formState: any,
  field: FormlyFieldConfig
) {
  let date = null;
  //Setting a minumn date for the date range picker
  if (field.parent.templateOptions.minDate) {
    date = new Date(field.parent.templateOptions.minDate.getTime());
  }
  return date;
}

export function maxDateToDateRangePicker(
  model: any,
  formState: any,
  field: FormlyFieldConfig
) {
  let date = null;
  //Setting a max date for the date range picker
  if (field.parent.templateOptions.maxDate) {
    date = new Date(field.parent.templateOptions.maxDate.getTime());
  }
  return date;
}

export function maxDateFromDateRangePicker(
  model: any,
  formState: any,
  field: FormlyFieldConfig
) {
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
