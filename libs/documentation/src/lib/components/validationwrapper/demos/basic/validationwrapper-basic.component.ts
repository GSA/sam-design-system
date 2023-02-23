import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './validationwrapper-basic.component.html',
  selector: `sds-validationwrapper-basic-demo`,
})
export class ValidationWrapperBasic {
  form = new UntypedFormGroup({});
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
