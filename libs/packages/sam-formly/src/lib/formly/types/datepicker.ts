import { Component, ViewEncapsulation } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-datepicker',
  template: `
    <div class="display-flex">
      <input
        [id]="id"
        class="usa-input display-inline-block margin-top-3"
        [class.usa-input--error]="showError"
        [formControl]="formControl"
        [formlyAttributes]="field"
        matInput
        [min]="props.minDate"
        [max]="props.maxDate"
        [matDatepicker]="picker"
        [placeholder]="props.placeholder ? props.placeholder : ''"
        [attr.aria-describedby]="props.description ? id + '-description' : undefined"
        (ngModelChange)="props.change ? props.change(field) : ''"
      />
      <mat-datepicker-toggle class="padding-left-1 padding-top-2" matSuffix [for]="picker">
        <usa-icon [icon]="'calendar'" matDatepickerToggleIcon [size]="'sm'"></usa-icon>
      </mat-datepicker-toggle>
      <mat-datepicker [startAt]="props.startDate" #picker></mat-datepicker>
    </div>
  `,
  styles: ['table.mat-calendar-table td, table.mat-calendar-table th {border-style: none; background-color: unset; }'],
  encapsulation: ViewEncapsulation.None,
})
export class FormlyFieldDatePickerComponent extends FieldType<FieldTypeConfig> {}
