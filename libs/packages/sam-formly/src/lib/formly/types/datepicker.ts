import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-datepicker',
  template: `
  <input [id]="id" [class.usa-input--error]="showError" [formControl]="formControl" [formlyAttributes]="field" matInput [min]="to.minDate" [max]="to.maxDate"  [matDatepicker]="picker" placeholder="Choose a date"
  class="padding-1 margin-top-2 margin-right-05 border-1px">
<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
<mat-datepicker  [startAt]="to.startDate"   #picker></mat-datepicker>
  `,
  styleUrls: ['./datepicker.scss'],
})
export class FormlyFieldDatePickerComponent extends FieldType { }
