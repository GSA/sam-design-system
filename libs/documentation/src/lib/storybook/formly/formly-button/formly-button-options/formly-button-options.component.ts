import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-button-options',
  templateUrl: './formly-button-options.component.html',
})
export class FormlyButtonOptionsComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  inputField = {
    key: 'address',
    type: 'input',
    focus: true,
    props: {
      label: 'Address Line 2',
      placeholder: '',
    },
  };
  fields: FormlyFieldConfig[] = [
    {
      type: 'button',
      props: {
        enableInput: true,
        btnIcon: 'plus-circle',
        additionalField: this.inputField,
        text: 'Address Line 2',
        btnClass: 'usa-button--unstyled margin-top-neg-1',
      },
    },
  ];
}
