import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-checkbox-basic',
  templateUrl: './formly-checkbox-basic.component.html',
})
export class FormlyCheckboxBasicComponent {
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
        tooltipText: 'By checking the box you agree to the terms and conditions',
        tooltipPosition: 'bottom',
      },
    },
  ];
}
