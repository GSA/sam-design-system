import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-checkbox-description',
  templateUrl: './formly-checkbox-description.component.html',
})
export class FormlyCheckboxDescriptionComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'entity.userAgreement',
      type: 'checkbox',
      props: {
        description: 'By checking the box below you agree to the terms and conditions of the site.',
      },
    },
  ];
}
