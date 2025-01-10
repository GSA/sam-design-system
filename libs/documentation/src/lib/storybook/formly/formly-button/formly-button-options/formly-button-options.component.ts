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
    key: 'search',
    type: 'input',
    focus: true,
    props: {
      label: 'Search',
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
            text: 'Search',
            btnClass: 'usa-button--unstyled margin-top-neg-1',
          },
       
    },
     
  ];
}
