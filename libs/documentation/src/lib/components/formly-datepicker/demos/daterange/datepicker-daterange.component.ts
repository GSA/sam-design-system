import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './datepicker-daterange.component.html',
  selector: `sds-formly-daterange-demo`,
})
export class FormlyDatepickerDateRange {
  results: any = {};
  form = new UntypedFormGroup({});
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
  form2 = new UntypedFormGroup({});
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
