import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-datepicker-validation',
  templateUrl: './formly-datepicker-validation.component.html',
})
export class FormlyDatepickerValidationComponent {
  results: any = {};
  form = new FormGroup({});
  minDateModel: any = {};
  maxDateModel: any = {};
  minmaxDateModel: any = {};
  options: FormlyFormOptions = {};

  minDateFields: FormlyFieldConfig[] = [
    {
      key: 'expirationDateMin',
      type: 'datepicker',
      props: {
        label: 'Expiration Date (Min only Validation)',
        minDate: new Date(2019, 6, 5),
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

  maxDateFields: FormlyFieldConfig[] = [
    {
      key: 'expirationDateMax',
      type: 'datepicker',
      props: {
        label: 'Expiration Date (Max only Validation)',
        required: true,
        maxDate: new Date(2020, 11, 25),
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

  minmaxDateFields: FormlyFieldConfig[] = [
    {
      key: 'expirationDateMinmax',
      type: 'datepicker',
      props: {
        label: 'Expiration Date (Min & Max only Validation)',
        minDate: new Date(2019, 9, 5),
        maxDate: new Date(2020, 10, 15),
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
