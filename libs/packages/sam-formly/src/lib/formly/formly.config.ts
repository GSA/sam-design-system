    
import { ConfigOption } from '@ngx-formly/core';
import { FormlyWrapperFormFieldComponent } from './wrappers/form-field.wrapper';
import { FormlyFieldInputComponent } from './types/input';
import { FormlyFieldSelectComponent } from './types/select';

export const FIELD_TYPE_COMPONENTS = [
  FormlyFieldInputComponent,
  // FormlyFieldCheckbox,
  // FormlyFieldRadio,
  FormlyFieldSelectComponent,
  // FormlyFieldTextArea,
  // FormlyFieldMultiCheckbox,
  FormlyWrapperFormFieldComponent,
];

export const FORMLY_CONFIG: ConfigOption = {
  types: [
    {
      name: 'input',
      component: FormlyFieldInputComponent,
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
    {
      name: 'select',
      component: FormlyFieldSelectComponent,
      wrappers: ['form-field'],
    },
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
    {name: 'form-field', component: FormlyWrapperFormFieldComponent },
  ],
};
