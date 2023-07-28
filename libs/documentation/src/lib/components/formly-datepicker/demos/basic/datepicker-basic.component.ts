import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './datepicker-basic.component.html',
  styleUrls: ['./datepicker-basic.component.scss'],
  selector: `sds-formly-datepicker-basic-demo`,
})
export class FormlyDatepickerBasic {
  results: any = {};
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'expirationDateOpen',
      type: 'datepicker',
      templateOptions: {
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
