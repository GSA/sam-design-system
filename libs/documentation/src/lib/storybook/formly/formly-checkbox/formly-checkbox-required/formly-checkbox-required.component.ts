import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-checkbox-required',
  templateUrl: './formly-checkbox-required.component.html',
})
export class FormlyCheckboxRequiredComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.userAgreement',
      type: 'checkbox',
      validators: {
        validation: ['requiredTrue'],
      },
      templateOptions: {
        label: 'I agree',
        description: 'By checking the box below you agree to the terms and conditions of the site.',
        required: true,
      },
    },
  ];
}
