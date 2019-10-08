import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { MatInput } from '@sam-design-system/sam-material-extensions';

@Component({
  selector: 'sds-formly-field-datepicker',
  template: `
  <input matInput  [formControl]="formControl" [formlyAttributes]="field"  placeholder="Choose a date">

  `,
})
export class FormlyFieldDatePickerComponent extends FieldType { }

// <input matInput [min]="to.minDate" [max]="to.maxDate" [formControl]="formControl" [formlyAttributes]="field" [matDatepicker]="picker" placeholder="Choose a date">
// <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
// <mat-datepicker  [startAt]="to.startDate"   #picker></mat-datepicker>


