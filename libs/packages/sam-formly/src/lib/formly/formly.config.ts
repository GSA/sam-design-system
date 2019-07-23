
import { ConfigOption } from '@ngx-formly/core';
import { FormlyWrapperFormFieldComponent } from './wrappers/form-field.wrapper';
import { FormlyFieldInputComponent } from './types/input';
import { FormlyFieldSelectComponent } from './types/select';
import { FormlyFieldRadioComponent } from './types/radio';
import { FormlyFieldCheckboxComponent } from './types/checkbox';
import { FormlyFieldMultiCheckboxComponent } from './types/multicheckbox';
import { FormlyFieldTextAreaComponent } from './types/textarea';
import { FormlyAccordianFormFieldComponent } from './wrappers/form-field.accordian';
import { FormlyFormFieldFilterWrapperComponent } from './wrappers/form-field.filterwrapper';

export const FIELD_TYPE_COMPONENTS = [
  FormlyFieldInputComponent,
  FormlyFieldCheckboxComponent,
  FormlyFieldRadioComponent,
  FormlyFieldSelectComponent,
  FormlyFieldTextAreaComponent,
  FormlyFieldMultiCheckboxComponent,
  FormlyWrapperFormFieldComponent,
  FormlyAccordianFormFieldComponent,
  FormlyFormFieldFilterWrapperComponent
];

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
  ],
  wrappers: [
    { name: 'form-field', component: FormlyWrapperFormFieldComponent },

    { name: 'accordianwrapper', component: FormlyAccordianFormFieldComponent },
    { name: 'filterwrapper', component: FormlyFormFieldFilterWrapperComponent },
  ],

};
