import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './checkbox-basic.component.html',
  styleUrls: ['./checkbox-basic.component.scss'],
  selector: `sds-formly-checkbox-demo`,
})
export class CheckboxBasic {
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
        tooltipText: 'By checking the box below you agree to the terms and conditions',
        tooltipPosition: 'bottom',
      },
    },
  ];
}
