import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'sds-formly-field-datepicker',
  template: `
  <input [id]="id" [class.usa-input--error]="showError" [formControl]="formControl" [formlyAttributes]="field" matInput [min]="to.minDate" [max]="to.maxDate"  [matDatepicker]="picker" placeholder="Choose a date">
<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
<mat-datepicker  [startAt]="to.startDate"   #picker></mat-datepicker>
  `,
})
export class FormlyFieldDatePickerComponent extends FieldType { }



