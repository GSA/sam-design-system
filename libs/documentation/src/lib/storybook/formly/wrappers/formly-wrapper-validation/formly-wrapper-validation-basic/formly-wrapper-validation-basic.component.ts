import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-wrapper-validation-basic',
  templateUrl: './formly-wrapper-validation-basic.component.html',
})
export class FormlyWrapperValidationBasicComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      wrappers: ['validation'],
      key: 'Description',
      type: 'input',
      templateOptions: {
        required: true,
        placeholder: 'eg: Acme Corporation',
      },
    },
  ];
}
