    
import { ConfigOption } from '@ngx-formly/core';
import {
  FormlyFieldInput,
  // FormlyFieldCheckbox,
  // FormlyFieldRadio,
  // FormlyFieldSelect,
  // FormlyFieldTextArea,
  // FormlyFieldMultiCheckbox,
} from './types/types';
import { FormlyWrapperFormField } from './wrappers/wrappers';

export const FIELD_TYPE_COMPONENTS = [
    FormlyFieldInput,
  // FormlyFieldCheckbox,
  // FormlyFieldRadio,
  // FormlyFieldSelect,
  // FormlyFieldTextArea,
  // FormlyFieldMultiCheckbox,
  FormlyWrapperFormField,
];

export const FORMLY_CONFIG: ConfigOption = {
  types: [
    {
      name: 'input',
      component: FormlyFieldInput,
      wrappers: ['form-field'],
    },
    // {
    //   name: 'checkbox',
    //   component: FormlyFieldCheckbox,
    //   wrappers: ['form-field'],
    // },
    // {
    //   name: 'radio',
    //   component: FormlyFieldRadio,
    //   wrappers: ['form-field'],
    // },
    // {
    //   name: 'select',
    //   component: FormlyFieldSelect,
    //   wrappers: ['form-field'],
    // },
    // {
    //   name: 'textarea',
    //   component: FormlyFieldTextArea,
    //   wrappers: ['form-field'],
    // },
    // {
    //   name: 'multicheckbox',
    //   component: FormlyFieldMultiCheckbox,
    //   wrappers: ['form-field'],
    // },
  ],
  wrappers: [
    {name: 'form-field', component: FormlyWrapperFormField },
  ],
};
