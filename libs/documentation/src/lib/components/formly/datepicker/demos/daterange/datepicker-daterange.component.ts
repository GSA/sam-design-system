import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './datepicker-daterange.component.html'
})
export class FormlyDatepickerDateRange {
  results: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'expirationDateRangeEx',
      type: 'daterangepicker',
      templateOptions: {
        label: 'Expiration Date Range',
        minDate: new Date(2019, 9, 5),
        maxDate: new Date(2020, 11, 15)
      }
    }
  ];
}
