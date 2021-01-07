import { Component, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-daterangepicker',
  template: `
    <mat-date-range-input [formGroup]="formControl" [rangePicker]="picker" [min]="to.minDate" [max]="to.maxDate" [id]="id"
      class="usa-input display-inline-block margin-top-3"
      [formlyAttributes]="field"
      [class.usa-input--error]="showError">
      <input matStartDate
        [attr.aria-label]="field.fieldGroup[0]?.templateOptions?.placeholder || 'Start Date'"
        [formlyAttributes]="field.fieldGroup[0]"
        [placeholder]="field.fieldGroup[0]?.templateOptions?.placeholder || 'Start Date'"
        [formControlName]="field.fieldGroup[0].key"
        />
        <input matEndDate
        [attr.aria-label]="field.fieldGroup[1]?.templateOptions?.placeholder || 'End Date'"
        [formlyAttributes]="field.fieldGroup[1]"
        [placeholder]="field.fieldGroup[1]?.templateOptions?.placeholder || 'End Date'"
        [formControlName]="field.fieldGroup[1].key"
      />  
    </mat-date-range-input>
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-date-range-picker [startAt]="to.startDate" #picker></mat-date-range-picker>
  `,
  styles: ['.mat-date-range-input-start-wrapper {overflow: unset !important; }', 
            '.mat-date-range-input-end-wrapper {flex-grow: unset !important; }',
            'table.mat-calendar-table td, table.mat-calendar-table th {border-style: none; background-color: unset; }',
          ],
  encapsulation: ViewEncapsulation.None,
})
export class FormlyFieldDateRangePickerComponent extends FieldType {}
