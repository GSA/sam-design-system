import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-datepicker-range',
  templateUrl: './formly-datepicker-range.component.html',
})
export class FormlyDatepickerRangeComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'expirationDateRangeEx',
      type: 'daterangepickerv2',
      props: {
        label: 'Expiration Date Range',
        minDate: new Date(2019, 9, 5),
        maxDate: new Date(2020, 11, 15),
      },
    },
  ];
}
