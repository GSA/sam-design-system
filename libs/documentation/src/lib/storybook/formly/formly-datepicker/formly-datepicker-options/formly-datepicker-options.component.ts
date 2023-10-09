import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-datepicker-options',
  templateUrl: './formly-datepicker-options.component.html',
})
export class FormlyDatepickerOptionsComponent {
  results: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'expirationDateRangeEx',
      type: 'daterangepicker',
      props: {
        label: 'Expiration Date Range',
        minDate: new Date(2019, 9, 5),
        maxDate: new Date(2020, 11, 15),
        placeholder:
          'eg: ' +
          new Date().toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
        hideOptional: true,
      },
    },
  ];

  results2: any = {};
  form2 = new FormGroup({});
  model2: any = {};
  options2: FormlyFormOptions = {};

  fields2: FormlyFieldConfig[] = [
    {
      key: 'expirationDateRangeEx',
      type: 'daterangepickerv2',
      props: {
        label: 'Expiration Date Range - Angular 10+',
        minDate: new Date(2019, 9, 5),
        maxDate: new Date(2020, 11, 15),
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
