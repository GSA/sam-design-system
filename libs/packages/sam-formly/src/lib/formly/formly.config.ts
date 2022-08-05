import { ConfigOption, Field, FormlyFieldConfig } from '@ngx-formly/core';
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
  FormlyLabelWrapperComponent,
  FormlyDescriptionWrapperComponent,
  FormlyValidationWrapperComponent,
  FormlyFieldTextComponent,
  FormlyGroupWrapperComponent,
  FormlyFieldSearchComponent,
  FormlyReadonlyWrapperComponent,
  FormlyFieldFileInputComponent,
  FormlyTabsWrapperComponent,
  FormlyFieldTableComponent,
  FormlyFieldEditorComponent,
  FormlyFieldRichTextEditorComponent,
  FormlyFieldStepArrowComponent,
];
import { dateRangeValidator, maxDateValidator, minDateValidator } from './formly.validators';
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
import { FormlyFieldFileInputComponent } from './types/file-input';
import { FormlyTabsWrapperComponent } from './wrappers/tabs.wrapper';
import { FormlyFieldTableComponent } from './types/table';
import { FormlyFieldEditorComponent } from './types/editor';
import { FormlyFieldRichTextEditorComponent } from './types/rich-text';
import { FormlyFieldStepArrowComponent } from './types/step-arrow';

export const FORMLY_WRAPPERS: any = [
  {
    name: 'form-field',
    component: FormlyWrapperFormFieldComponent,
    componentName: 'FormlyWrapperFormFieldComponent',
  },
  {
    name: 'accordionwrapper',
    component: FormlyAccordianFormFieldComponent,
    componentName: 'FormlyAccordianFormFieldComponent',
  },
  {
    name: 'filterwrapper',
    component: FormlyFormFieldFilterWrapperComponent,
    componentName: 'FormlyFormFieldFilterWrapperComponent',
  },

  {
    name: 'label',
    component: FormlyLabelWrapperComponent,
    componentName: 'FormlyLabelWrapperComponent',
  },
  {
    name: 'description',
    component: FormlyDescriptionWrapperComponent,
    componentName: 'FormlyDescriptionWrapperComponent',
  },
  {
    name: 'validation',
    component: FormlyValidationWrapperComponent,
    componentName: 'FormlyValidationWrapperComponent',
  },
  {
    name: 'group',
    component: FormlyGroupWrapperComponent,
    componentName: 'FormlyGroupWrapperComponent',
  },
  {
    name: 'readonly',
    component: FormlyReadonlyWrapperComponent,
    componentName: 'FormlyReadonlyWrapperComponent',
  },
  {
    name: 'tabs',
    component: FormlyTabsWrapperComponent,
    componentName: 'FormlyTabsWrapperComponent',
  },
];

export const FORMLY_CONFIG: ConfigOption = {
  types: [
    {
      name: SdsFormlyTypes.FORMLYGROUP,
      wrappers: sdsGroupWrapper,
    },
    {
      name: SdsFormlyTypes.READONLY,
      wrappers: sdsGroupWrapper,
      component: FormlyReadonlyWrapperComponent,
    },
    {
      name: SdsFormlyTypes.BUTTON,
      component: FormlyFieldButtonComponent,
    },
    {
      name: SdsFormlyTypes.CUSTOMTEXT,
      component: FormlyFieldTextComponent,
      wrappers: sdsWrappers,
    },
    {
      name: SdsFormlyTypes.EDITOR,
      component: FormlyFieldEditorComponent,
      wrappers: sdsWrappers,
    },
    {
      name: SdsFormlyTypes.INPUT,
      component: FormlyFieldInputComponent,
      wrappers: sdsWrappers,
    },
    {
      name: SdsFormlyTypes.CHECKBOX,
      component: FormlyFieldCheckboxComponent,
      wrappers: sdsWrappers,
    },
    {
      name: SdsFormlyTypes.FILEINFO,
      component: FormlyFieldFileInfoComponent,
      wrappers: sdsWrappers,
    },
    {
      name: SdsFormlyTypes.RADIO,
      component: FormlyFieldRadioComponent,
      wrappers: sdsWrappers,
    },
    {
      name: SdsFormlyTypes.SELECT,
      component: FormlyFieldSelectComponent,
      wrappers: sdsWrappers,
    },
    {
      name: SdsFormlyTypes.TEXTAREA,
      component: FormlyFieldTextAreaComponent,
      wrappers: sdsWrappers,
    },
    {
      name: SdsFormlyTypes.MULTICHECKBOX,
      component: FormlyFieldMultiCheckboxComponent,
      wrappers: sdsWrappers,
    },
    {
      name: SdsFormlyTypes.AUTOCOMPLETE,
      component: FormlyFieldAutoCompleteComponent,
      wrappers: sdsWrappers,
    },
    {
      name: SdsFormlyTypes.DATEPICKER,
      component: FormlyFieldDatePickerComponent,
      wrappers: sdsWrappers,
      defaultOptions: {
        validators: {
          validation: [maxDateValidator, minDateValidator],
        },
      },
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
              label: 'From',
              placeholder:
                'eg: ' +
                new Date().toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }),
            },
            expressionProperties: {
              'templateOptions.minDate': minDateFromDateRangePicker,
              'templateOptions.maxDate': maxDateFromDateRangePicker,
              'templateOptions.hideOptional': getParentHideOptional,
            },
          },
          {
            type: SdsFormlyTypes.DATEPICKER,
            key: 'toDate',
            templateOptions: {
              label: 'To',
              placeholder:
                'eg: ' +
                new Date().toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }),
            },
            expressionProperties: {
              'templateOptions.minDate': minDateToDateRangePicker,
              'templateOptions.maxDate': maxDateToDateRangePicker,
              'templateOptions.hideOptional': getParentHideOptional,
            },
          },
        ],
      },
    },
    {
      name: 'daterangepickerv2',
      component: FormlyFieldDateRangePickerComponent,
      wrappers: sdsWrappers,
      defaultOptions: {
        validators: {
          validation: [dateRangeValidator],
        },
        fieldGroup: [
          {
            key: 'fromDate',
            templateOptions: {
              placeholder:
                'eg: ' +
                new Date().toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }),
            },
          },
          {
            key: 'toDate',
            templateOptions: {
              placeholder: new Date().toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              }),
            },
          },
        ],
      },
    },
    {
      name: SdsFormlyTypes.SEARCH,
      component: FormlyFieldSearchComponent,
      wrappers: sdsWrappers,
    },
    {
      name: SdsFormlyTypes.FILEINPUT,
      component: FormlyFieldFileInputComponent,
      wrappers: sdsWrappers,
    },
    {
      name: SdsFormlyTypes.TABLE,
      component: FormlyFieldTableComponent,
    },
    {
      name: SdsFormlyTypes.RICHTEXTEDITOR,
      component: FormlyFieldRichTextEditorComponent,
      wrappers: sdsWrappers,
    },
    { name: SdsFormlyTypes.STEPARROW, component: FormlyFieldStepArrowComponent, wrappers: sdsWrappers },
  ],
  wrappers: [
    { name: 'label', component: FormlyLabelWrapperComponent },
    { name: 'description', component: FormlyDescriptionWrapperComponent },
    { name: 'validation', component: FormlyValidationWrapperComponent },
    { name: 'group', component: FormlyGroupWrapperComponent },
    { name: 'form-field', component: FormlyWrapperFormFieldComponent },
    { name: 'accordionwrapper', component: FormlyAccordianFormFieldComponent },
    { name: 'filterwrapper', component: FormlyFormFieldFilterWrapperComponent },
    { name: 'readonly', component: FormlyReadonlyWrapperComponent },
    { name: 'tabs', component: FormlyTabsWrapperComponent },
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

export function getParentHideOptional(model: any, formState: any, field: FormlyFieldConfig) {
  if (field.parent && field.parent.templateOptions) {
    return field.parent.templateOptions.hideOptional;
  }
  return false;
}
