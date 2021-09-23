import { Component, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

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
      [min]="to.minDate"
      [max]="to.maxDate"
      [matDatepicker]="picker"
      placeholder="to.placeholder ? to.placeholder : ''"
      (ngModelChange)="to.change ? to.change(field) : ''"
    />
    <mat-datepicker-toggle class="padding-top-1" matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker [startAt]="to.startDate" #picker></mat-datepicker>
    <span *ngIf="to.tooltipText" class="sds-stack padding-top-105 margin-left-1 padding-top-2"
        [sdsPopover]="to.tooltipText" [sdsPopoverTitle]="to.tooltipTitle"
        [position]="to.tooltipPosition ? to.tooltipPosition :'right'" tabindex="0"
        aria-label="info tooltip">
        <usa-icon [size]="'lg'" [icon]="'info-circle-fill'"></usa-icon>
      </span>
</div>
  `,
  styles: [
    'table.mat-calendar-table td, table.mat-calendar-table th {border-style: none; background-color: unset; }'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class FormlyFieldDatePickerComponent extends FieldType { }
