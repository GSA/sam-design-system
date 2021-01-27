import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './datepicker-validation.component.html',
  selector: `sds-formly-datepicker-validation-demo`,
})
export class FormlyDatepickerValidation {
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
      templateOptions: {
        label: 'Expiration Date (Min only Validation)',
        minDate: new Date(2019, 6, 5),
       
      }
    }
  ];

  maxDateFields: FormlyFieldConfig[] = [
    {
      key: 'expirationDateMax',
      type: 'datepicker',
      templateOptions: {
        label: 'Expiration Date (Max only Validation)',
        required: true,
        maxDate: new Date(2020, 11, 25)
      }
    }
  ];

  minmaxDateFields: FormlyFieldConfig[] = [
    {
      key: 'expirationDateMinmax',
      type: 'datepicker',
      templateOptions: {
        label: 'Expiration Date (Min & Max only Validation)',
        minDate: new Date(2019, 9, 5),
        maxDate: new Date(2020, 10, 15)
      }
    }
  ];
}
