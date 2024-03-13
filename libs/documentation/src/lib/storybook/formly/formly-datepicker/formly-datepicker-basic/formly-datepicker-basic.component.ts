import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-datepicker-basic',
  templateUrl: './formly-datepicker-basic.component.html',
})
export class FormlyDatepickerBasicComponent {
  results: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'expirationDateOpen',
      type: 'datepicker',
      props: {
        customDateMessage: true,
        required: true,
        label: 'Expiration Date (no validation)',
        placeholder:
          'eg: ' +
          new Date().toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
      },
    },
  ];
}
