import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'sds-formly-field-daterangepicker',
  template: `
  <formly-validation-message [field]="field"></formly-validation-message>
<label>From</label>
<input [class.usa-input--error]="showError" [formControl]="formControl.get('fromDate')" [formlyAttributes]="field" matInput [min]="to.fromMinDate" [max]="to.fromMaxDate"  [matDatepicker]="fromDatePicker" placeholder="Choose a date">
<mat-datepicker-toggle matSuffix [for]="fromDatePicker"></mat-datepicker-toggle>
<mat-datepicker  [startAt]="to.fromStartDate"   #fromDatePicker ></mat-datepicker>
<label>To</label>
<input [class.usa-input--error]="showError" [formControl]="formControl.get('toDate')" [formlyAttributes]="field" matInput [min]="to.toMinDate" [max]="to.toMaxDate"  [matDatepicker]="toDatePicker" placeholder="Choose a date">
<mat-datepicker-toggle matSuffix [for]="toDatePicker"></mat-datepicker-toggle>
<mat-datepicker  [startAt]="to.toStartDate"   #toDatePicker ></mat-datepicker>
{{ to|json }}
  `,
})
export class FormlyFieldDateRangePickerComponent extends FieldType { }



